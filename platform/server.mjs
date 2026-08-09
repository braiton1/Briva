import { createServer } from 'node:http'
import { createReadStream, existsSync, mkdirSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'

const PORT = Number(process.env.PORT ?? 5190)
const dataDirectory = join(import.meta.dirname, '.data')
mkdirSync(dataDirectory, { recursive: true })

const database = new DatabaseSync(join(dataDirectory, 'briva-gestion.sqlite'))
database.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;
  CREATE TABLE IF NOT EXISTS tenants (
    id INTEGER PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    business_type TEXT NOT NULL CHECK (business_type IN ('gym', 'motor_store'))
  ) STRICT;
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    tenant_id INTEGER NOT NULL REFERENCES tenants(id),
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('owner', 'reception', 'sales')),
    password_salt TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1))
  ) STRICT;
  CREATE TABLE IF NOT EXISTS gym_members (
    id INTEGER PRIMARY KEY,
    tenant_id INTEGER NOT NULL REFERENCES tenants(id),
    name TEXT NOT NULL,
    plan TEXT NOT NULL,
    payment_status TEXT NOT NULL,
    next_payment TEXT NOT NULL
  ) STRICT;
  CREATE TABLE IF NOT EXISTS motor_products (
    id INTEGER PRIMARY KEY,
    tenant_id INTEGER NOT NULL REFERENCES tenants(id),
    sku TEXT NOT NULL,
    name TEXT NOT NULL,
    stock INTEGER NOT NULL,
    price INTEGER NOT NULL
  ) STRICT;
  CREATE TABLE IF NOT EXISTS gym_classes (
    id INTEGER PRIMARY KEY,
    tenant_id INTEGER NOT NULL REFERENCES tenants(id),
    time TEXT NOT NULL,
    name TEXT NOT NULL,
    booked INTEGER NOT NULL DEFAULT 0,
    capacity INTEGER NOT NULL
  ) STRICT;
  CREATE TABLE IF NOT EXISTS gym_payments (
    id INTEGER PRIMARY KEY,
    tenant_id INTEGER NOT NULL REFERENCES tenants(id),
    member_id INTEGER NOT NULL REFERENCES gym_members(id),
    amount INTEGER NOT NULL CHECK (amount > 0),
    method TEXT NOT NULL CHECK (method IN ('Efectivo', 'Transferencia', 'Débito', 'Crédito')),
    paid_at TEXT NOT NULL,
    next_payment TEXT NOT NULL,
    registered_by INTEGER NOT NULL REFERENCES users(id),
    receipt_number TEXT NOT NULL UNIQUE
  ) STRICT;
`)

function passwordRecord(password) {
  const salt = randomBytes(16)
  const hash = scryptSync(password, salt, 64, { N: 131072, r: 8, p: 1, maxmem: 256 * 1024 * 1024 })
  return { salt: salt.toString('hex'), hash: hash.toString('hex') }
}

function verifyPassword(password, saltHex, hashHex) {
  const expected = Buffer.from(hashHex, 'hex')
  const actual = scryptSync(password, Buffer.from(saltHex, 'hex'), expected.length, { N: 131072, r: 8, p: 1, maxmem: 256 * 1024 * 1024 })
  return timingSafeEqual(actual, expected)
}

function seed() {
  if (database.prepare('SELECT COUNT(*) AS total FROM tenants').get().total > 0) {
    seedGymClasses()
    return
  }

  database.exec(`
    INSERT INTO tenants (id, slug, name, business_type) VALUES
      (1, 'nucleo', 'NÚCLEO Training', 'gym'),
      (2, 'moto-central', 'Moto Central', 'motor_store');
    INSERT INTO gym_members (tenant_id, name, plan, payment_status, next_payment) VALUES
      (1, 'Lucía Fernández', 'Completo', 'Al día', '02 sep'),
      (1, 'Mateo Silva', 'Inicial', 'Al día', '07 sep'),
      (1, 'Carla Ruiz', 'Personalizado', 'Por vencer', '10 ago'),
      (1, 'Tomás Acosta', 'Completo', 'Vencido', '05 ago');
    INSERT INTO motor_products (tenant_id, sku, name, stock, price) VALUES
      (2, 'CAS-001', 'Casco integral Urban', 8, 145000),
      (2, 'GUA-014', 'Guantes Touring', 3, 48000),
      (2, 'BAU-008', 'Baúl 45 litros', 0, 189000),
      (2, 'CAM-021', 'Campera impermeable', 5, 220000);
  `)

  const users = [
    [1, 'owner@nucleo.demo', 'Braian · Dueño', 'owner', 'NucleoDemo2026!'],
    [1, 'recepcion@nucleo.demo', 'Valentina · Recepción', 'reception', 'RecepcionDemo2026!'],
    [2, 'owner@motocentral.demo', 'Martín · Dueño', 'owner', 'MotosDemo2026!'],
  ]
  const insertUser = database.prepare('INSERT INTO users (tenant_id, email, name, role, password_salt, password_hash) VALUES (?, ?, ?, ?, ?, ?)')
  for (const [tenantId, email, name, role, password] of users) {
    const { salt, hash } = passwordRecord(password)
    insertUser.run(tenantId, email, name, role, salt, hash)
  }
  seedGymClasses()
}

function seedGymClasses() {
  const total = database.prepare('SELECT COUNT(*) AS total FROM gym_classes WHERE tenant_id = 1').get().total
  if (total > 0) return
  database.exec(`
    INSERT INTO gym_classes (tenant_id, time, name, booked, capacity) VALUES
      (1, '18:30', 'HIIT', 10, 14),
      (1, '19:30', 'Funcional', 14, 16),
      (1, '20:30', 'Movilidad', 7, 12);
  `)
}

seed()

const sessions = new Map()
const loginAttempts = new Map()

function json(response, status, body, headers = {}) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers })
  response.end(JSON.stringify(body))
}

function parseCookies(request) {
  return Object.fromEntries((request.headers.cookie ?? '').split(';').filter(Boolean).map((part) => {
    const [key, ...value] = part.trim().split('=')
    return [key, decodeURIComponent(value.join('='))]
  }))
}

function currentSession(request) {
  const token = parseCookies(request).briva_session
  const session = token ? sessions.get(token) : null
  if (!session || session.expiresAt < Date.now()) {
    if (token) sessions.delete(token)
    return null
  }
  return session
}

async function readBody(request) {
  let body = ''
  for await (const chunk of request) {
    body += chunk
    if (body.length > 20_000) throw new Error('Cuerpo demasiado grande')
  }
  return JSON.parse(body || '{}')
}

function sessionPayload(session) {
  return { user: { name: session.name, email: session.email, role: session.role }, tenant: { id: session.tenantId, name: session.tenantName, type: session.businessType } }
}

function dashboardFor(session) {
  if (session.businessType === 'gym') {
    const members = database.prepare('SELECT id, name, plan, payment_status AS paymentStatus, next_payment AS nextPayment FROM gym_members WHERE tenant_id = ? ORDER BY id DESC').all(session.tenantId)
    const classes = database.prepare('SELECT id, time, name, booked, capacity FROM gym_classes WHERE tenant_id = ? ORDER BY time').all(session.tenantId)
    const recentPayments = database.prepare(`
      SELECT gym_payments.id, gym_payments.amount, gym_payments.method, gym_payments.paid_at AS paidAt,
        gym_payments.next_payment AS nextPayment, gym_payments.receipt_number AS receiptNumber,
        gym_members.name AS memberName, users.name AS registeredBy
      FROM gym_payments
      JOIN gym_members ON gym_members.id = gym_payments.member_id
      JOIN users ON users.id = gym_payments.registered_by
      WHERE gym_payments.tenant_id = ?
      ORDER BY gym_payments.id DESC LIMIT 8
    `).all(session.tenantId)
    const base = {
      kind: 'gym',
      members,
      classes,
      recentPayments,
      alerts: { overduePayments: members.filter((member) => member.paymentStatus === 'Vencido').length, nearlyFullClasses: classes.filter((gymClass) => gymClass.capacity - gymClass.booked <= 2).length },
    }
    if (session.role === 'owner') return { ...base, ownerMetrics: { activeMembers: 184, monthlyRevenue: 11800000, retention: 88, occupancy: 76 } }
    return base
  }

  const products = database.prepare('SELECT sku, name, stock, price FROM motor_products WHERE tenant_id = ? ORDER BY id').all(session.tenantId)
  return {
    kind: 'motor_store',
    products,
    ownerMetrics: { products: products.length, lowStock: products.filter((product) => product.stock <= 3).length, inventoryValue: products.reduce((total, product) => total + product.stock * product.price, 0) },
  }
}

async function handleApi(request, response) {
  if (request.url === '/api/login' && request.method === 'POST') {
    const address = request.socket.remoteAddress ?? 'local'
    const attempt = loginAttempts.get(address) ?? { count: 0, resetAt: Date.now() + 60_000 }
    if (Date.now() > attempt.resetAt) { attempt.count = 0; attempt.resetAt = Date.now() + 60_000 }
    if (attempt.count >= 10) return json(response, 429, { error: 'Demasiados intentos. Esperá un minuto.' })

    const { email = '', password = '' } = await readBody(request)
    const user = database.prepare(`
      SELECT users.*, tenants.name AS tenant_name, tenants.business_type
      FROM users JOIN tenants ON tenants.id = users.tenant_id
      WHERE users.email = ? AND users.active = 1
    `).get(String(email).trim().toLowerCase())

    if (!user || !verifyPassword(String(password), user.password_salt, user.password_hash)) {
      attempt.count += 1
      loginAttempts.set(address, attempt)
      return json(response, 401, { error: 'Usuario o contraseña incorrectos.' })
    }

    loginAttempts.delete(address)
    const token = randomBytes(32).toString('hex')
    const session = { userId: user.id, tenantId: user.tenant_id, tenantName: user.tenant_name, businessType: user.business_type, name: user.name, email: user.email, role: user.role, expiresAt: Date.now() + 8 * 60 * 60 * 1000 }
    sessions.set(token, session)
    return json(response, 200, sessionPayload(session), { 'Set-Cookie': `briva_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800` })
  }

  if (request.url === '/api/logout' && request.method === 'POST') {
    const token = parseCookies(request).briva_session
    if (token) sessions.delete(token)
    return json(response, 200, { ok: true }, { 'Set-Cookie': 'briva_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0' })
  }

  const session = currentSession(request)
  if (!session) return json(response, 401, { error: 'Sesión no válida.' })
  if (request.url === '/api/session' && request.method === 'GET') return json(response, 200, sessionPayload(session))
  if (request.url === '/api/dashboard' && request.method === 'GET') return json(response, 200, dashboardFor(session))

  if (session.businessType === 'gym' && ['owner', 'reception'].includes(session.role)) {
    if (request.url === '/api/gym/members' && request.method === 'POST') {
      const { name = '', plan = 'Inicial', nextPayment = '' } = await readBody(request)
      const cleanName = String(name).trim()
      const cleanPlan = String(plan).trim()
      const cleanDate = String(nextPayment).trim()
      if (cleanName.length < 3 || !['Inicial', 'Completo', 'Personalizado'].includes(cleanPlan) || !cleanDate) return json(response, 400, { error: 'Completá correctamente los datos del socio.' })
      const result = database.prepare('INSERT INTO gym_members (tenant_id, name, plan, payment_status, next_payment) VALUES (?, ?, ?, ?, ?)').run(session.tenantId, cleanName, cleanPlan, 'Por vencer', cleanDate)
      return json(response, 201, { id: Number(result.lastInsertRowid), ok: true })
    }

    const memberPaymentMatch = request.url?.match(/^\/api\/gym\/members\/(\d+)\/payment$/)
    if (memberPaymentMatch && request.method === 'POST') {
      const memberId = Number(memberPaymentMatch[1])
      const { amount = 0, method = '' } = await readBody(request)
      const cleanAmount = Number(amount)
      const cleanMethod = String(method)
      if (!Number.isInteger(cleanAmount) || cleanAmount <= 0 || !['Efectivo', 'Transferencia', 'Débito', 'Crédito'].includes(cleanMethod)) return json(response, 400, { error: 'Indicá un importe y un medio de pago válidos.' })
      const member = database.prepare('SELECT id FROM gym_members WHERE id = ? AND tenant_id = ?').get(memberId, session.tenantId)
      if (!member) return json(response, 404, { error: 'Socio no encontrado.' })
      const nextDate = new Date()
      nextDate.setMonth(nextDate.getMonth() + 1)
      const formattedDate = new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: 'short' }).format(nextDate).replace('.', '')
      const paidAt = new Date().toISOString()
      const receiptNumber = `NCL-${Date.now().toString().slice(-8)}`
      try {
        database.exec('BEGIN IMMEDIATE')
        database.prepare('INSERT INTO gym_payments (tenant_id, member_id, amount, method, paid_at, next_payment, registered_by, receipt_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').run(session.tenantId, memberId, cleanAmount, cleanMethod, paidAt, formattedDate, session.userId, receiptNumber)
        database.prepare('UPDATE gym_members SET payment_status = ?, next_payment = ? WHERE id = ? AND tenant_id = ?').run('Al día', formattedDate, memberId, session.tenantId)
        database.exec('COMMIT')
      } catch (error) {
        database.exec('ROLLBACK')
        throw error
      }
      return json(response, 200, { ok: true, nextPayment: formattedDate, receiptNumber })
    }

    const classReserveMatch = request.url?.match(/^\/api\/gym\/classes\/(\d+)\/reserve$/)
    if (classReserveMatch && request.method === 'POST') {
      const classId = Number(classReserveMatch[1])
      const gymClass = database.prepare('SELECT booked, capacity FROM gym_classes WHERE id = ? AND tenant_id = ?').get(classId, session.tenantId)
      if (!gymClass) return json(response, 404, { error: 'Clase no encontrada.' })
      if (gymClass.booked >= gymClass.capacity) return json(response, 409, { error: 'La clase ya no tiene cupos.' })
      database.prepare('UPDATE gym_classes SET booked = booked + 1 WHERE id = ? AND tenant_id = ?').run(classId, session.tenantId)
      return json(response, 200, { ok: true, booked: gymClass.booked + 1 })
    }
  }
  return json(response, 404, { error: 'Recurso no encontrado.' })
}

const contentTypes = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' }

function serveApp(request, response) {
  const dist = join(import.meta.dirname, 'dist')
  if (!existsSync(dist)) return json(response, 404, { error: 'Ejecutá npm run build antes de iniciar la aplicación.' })
  const requested = normalize(decodeURIComponent((request.url ?? '/').split('?')[0])).replace(/^(\.\.(\/|\\|$))+/, '')
  let filePath = join(dist, requested === '/' ? 'index.html' : requested)
  if (!filePath.startsWith(dist) || !existsSync(filePath) || statSync(filePath).isDirectory()) filePath = join(dist, 'index.html')
  response.writeHead(200, { 'Content-Type': contentTypes[extname(filePath)] ?? 'application/octet-stream' })
  createReadStream(filePath).pipe(response)
}

const server = createServer(async (request, response) => {
  try {
    if (request.url?.startsWith('/api/')) await handleApi(request, response)
    else serveApp(request, response)
  } catch (error) {
    console.error(error)
    json(response, 500, { error: 'Ocurrió un error interno.' })
  }
})

server.listen(PORT, '127.0.0.1', () => console.log(`Briva Gestión disponible en http://127.0.0.1:${PORT}`))
