import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { MemberDirectory, MemberProfile } from './modules/members'
import type { Member, MemberDetail, MembershipState, MemberUpdate } from './modules/members'
import { money } from './shared/formatters'

type Session = {
  user: { name: string; email: string; role: 'owner' | 'reception' | 'sales' }
  tenant: { id: number; name: string; type: 'gym' | 'motor_store' }
}

type GymDashboard = {
  kind: 'gym'
  members: Member[]
  classes: Array<{ id: number; time: string; name: string; booked: number; capacity: number }>
  recentPayments: Array<{ id: number; amount: number; method: string; paidAt: string; nextPayment: string; receiptNumber: string; memberName: string; registeredBy: string }>
  alerts: { overduePayments: number; nearlyFullClasses: number }
  ownerMetrics?: { activeMembers: number; monthlyRevenue: number; retention: number; occupancy: number }
}

type MotorDashboard = {
  kind: 'motor_store'
  products: Array<{ sku: string; name: string; stock: number; price: number }>
  ownerMetrics: { products: number; lowStock: number; inventoryValue: number }
}

type Dashboard = GymDashboard | MotorDashboard

const demoAccounts = [
  { label: 'Dueño de NÚCLEO', email: 'owner@nucleo.demo', password: 'NucleoDemo2026!' },
  { label: 'Recepción de NÚCLEO', email: 'recepcion@nucleo.demo', password: 'RecepcionDemo2026!' },
  { label: 'Dueño de Moto Central', email: 'owner@motocentral.demo', password: 'MotosDemo2026!' },
]

const planPrices: Record<string, number> = { Inicial: 49000, Completo: 69000, Personalizado: 79000 }

function suggestedPaymentDate() {
  const date = new Date()
  date.setMonth(date.getMonth() + 1)
  return date.toISOString().slice(0, 10)
}

async function api<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, { credentials: 'same-origin', headers: { 'Content-Type': 'application/json', ...options?.headers }, ...options })
  const body = await response.json()
  if (!response.ok) throw new Error(body.error ?? 'No se pudo completar la operación.')
  return body
}

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [dashboard, setDashboard] = useState<Dashboard | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api<Session>('/api/session')
      .then(setSession)
      .catch(() => setSession(null))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (session) api<Dashboard>('/api/dashboard').then(setDashboard).catch(() => setSession(null))
  }, [session])

  if (loading) return <main className="loading-screen"><span>Briva</span><p>Preparando tu espacio…</p></main>
  if (!session) return <Login onLogin={setSession} />

  async function logout() {
    await api('/api/logout', { method: 'POST' })
    setDashboard(null)
    setSession(null)
  }

  async function refreshDashboard() {
    setDashboard(await api<Dashboard>('/api/dashboard'))
  }

  return <Workspace session={session} dashboard={dashboard} onLogout={logout} onRefresh={refreshDashboard} />
}

function Login({ onLogin }: { onLogin: (session: Session) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      onLogin(await api<Session>('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) }))
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'No se pudo iniciar sesión.')
    } finally {
      setSubmitting(false)
    }
  }

  function chooseAccount(account: typeof demoAccounts[number]) {
    setEmail(account.email)
    setPassword(account.password)
    setError('')
  }

  return (
    <main className="login">
      <section className="login__intro">
        <a href="/" className="brand">Briva <small>Gestión</small></a>
        <div><span>Una plataforma, distintos negocios</span><h1>Todo lo que necesitás, según quién sos.</h1><p>Cada persona accede únicamente al negocio, la información y las herramientas que le corresponden.</p></div>
        <small>Prototipo local con datos ficticios.</small>
      </section>

      <section className="login__access">
        <form onSubmit={submit}>
          <div><span>Acceso seguro</span><h2>Ingresá a tu espacio</h2><p>Elegí una cuenta de prueba o escribí sus datos.</p></div>
          <label>Correo electrónico<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="username" required /></label>
          <label>Contraseña<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" disabled={submitting}>{submitting ? 'Ingresando…' : 'Ingresar'}</button>
        </form>

        <div className="demo-accounts"><strong>Cuentas de demostración</strong>{demoAccounts.map((account) => <button type="button" key={account.email} onClick={() => chooseAccount(account)}><span>{account.label}</span><small>{account.email}</small></button>)}</div>
      </section>
    </main>
  )
}

function Workspace({ session, dashboard, onLogout, onRefresh }: { session: Session; dashboard: Dashboard | null; onLogout: () => void; onRefresh: () => Promise<void> }) {
  const roleLabel = session.user.role === 'owner' ? 'Dueño' : session.user.role === 'reception' ? 'Recepción' : 'Ventas'
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="workspace">
      <aside className={`sidebar ${mobileMenu ? 'sidebar--open' : ''}`}>
        <div className="brand">Briva <small>Gestión</small></div>
        <div className="tenant"><span>{session.tenant.type === 'gym' ? 'NT' : 'MC'}</span><div><strong>{session.tenant.name}</strong><small>{roleLabel}</small></div></div>
        <nav>
          <a className="is-active" href="#resumen">Resumen</a>
          {session.tenant.type === 'gym' ? <><a href="#actividad">Socios</a><a href="#actividad">Clases</a><a href="#actividad">Pagos</a>{session.user.role === 'owner' && <a href="#metricas">Estadísticas</a>}</> : <><a href="#actividad">Productos</a><a href="#actividad">Stock</a><a href="#metricas">Ventas</a></>}
        </nav>
        <button className="logout" type="button" onClick={onLogout}>Cerrar sesión</button>
      </aside>

      <main className="workspace__main">
        <header className="topbar"><button className="menu-button" type="button" onClick={() => setMobileMenu((open) => !open)} aria-label="Abrir menú">☰</button><div><small>{session.tenant.name}</small><h1>Hola, {session.user.name.split(' · ')[0]}</h1></div><div className="profile"><span>{session.user.name.charAt(0)}</span><div><strong>{session.user.name}</strong><small>{roleLabel}</small></div></div></header>
        {!dashboard ? <p className="loading-data">Cargando información…</p> : dashboard.kind === 'gym' ? <GymWorkspace dashboard={dashboard} role={session.user.role} onRefresh={onRefresh} /> : <MotorWorkspace dashboard={dashboard} />}
      </main>
    </div>
  )
}

function GymWorkspace({ dashboard, role, onRefresh }: { dashboard: GymDashboard; role: Session['user']['role']; onRefresh: () => Promise<void> }) {
  const [showMemberForm, setShowMemberForm] = useState(false)
  const [name, setName] = useState('')
  const [plan, setPlan] = useState('Inicial')
  const [nextPayment, setNextPayment] = useState(suggestedPaymentDate)
  const [actionError, setActionError] = useState('')
  const [saving, setSaving] = useState(false)
  const [paymentMember, setPaymentMember] = useState<Member | null>(null)
  const [paymentAmount, setPaymentAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Transferencia')
  const [lastReceipt, setLastReceipt] = useState('')
  const [memberDetail, setMemberDetail] = useState<MemberDetail | null>(null)
  const [profileLoading, setProfileLoading] = useState(false)
  async function createMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setActionError('')
    try {
      await api('/api/gym/members', { method: 'POST', body: JSON.stringify({ name, plan, nextPayment }) })
      await onRefresh()
      setName('')
      setNextPayment(suggestedPaymentDate())
      setShowMemberForm(false)
    } catch (reason) {
      setActionError(reason instanceof Error ? reason.message : 'No se pudo crear el socio.')
    } finally {
      setSaving(false)
    }
  }

  function openPayment(member: Member) {
    setPaymentMember(member)
    setPaymentAmount(String(planPrices[member.plan] ?? 0))
    setLastReceipt('')
    setActionError('')
  }

  async function registerPayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!paymentMember) return
    setSaving(true)
    setActionError('')
    try {
      const result = await api<{ receiptNumber: string }>(`/api/gym/members/${paymentMember.id}/payment`, { method: 'POST', body: JSON.stringify({ amount: Number(paymentAmount), method: paymentMethod }) })
      await onRefresh()
      setLastReceipt(result.receiptNumber)
      setPaymentMember(null)
    } catch (reason) {
      setActionError(reason instanceof Error ? reason.message : 'No se pudo registrar el pago.')
    } finally {
      setSaving(false)
    }
  }

  async function reserve(classId: number) {
    setActionError('')
    try {
      await api(`/api/gym/classes/${classId}/reserve`, { method: 'POST' })
      await onRefresh()
    } catch (reason) {
      setActionError(reason instanceof Error ? reason.message : 'No se pudo registrar la reserva.')
    }
  }

  async function openProfile(memberId: number) {
    setProfileLoading(true)
    setActionError('')
    try {
      setMemberDetail(await api<MemberDetail>(`/api/gym/members/${memberId}`))
    } catch (reason) {
      setActionError(reason instanceof Error ? reason.message : 'No se pudo abrir la ficha.')
    } finally {
      setProfileLoading(false)
    }
  }

  async function reloadProfile(memberId: number) {
    const [detail] = await Promise.all([api<MemberDetail>(`/api/gym/members/${memberId}`), onRefresh()])
    setMemberDetail(detail)
  }

  async function updateMember(memberId: number, values: MemberUpdate) {
    await api(`/api/gym/members/${memberId}`, { method: 'PATCH', body: JSON.stringify(values) })
    await reloadProfile(memberId)
  }

  async function changeMemberState(memberId: number, state: MembershipState) {
    await api(`/api/gym/members/${memberId}/state`, { method: 'POST', body: JSON.stringify({ state }) })
    await reloadProfile(memberId)
  }

  async function registerAttendance(memberId: number) {
    await api(`/api/gym/members/${memberId}/attendance`, { method: 'POST' })
    await reloadProfile(memberId)
  }

  return (
    <>
      <section className="alerts" id="resumen"><article><b>{dashboard.alerts.overduePayments}</b><span>pagos vencidos</span></article><article><b>{dashboard.alerts.nearlyFullClasses}</b><span>clases casi completas</span></article><article><b>9</b><span>recordatorios pendientes</span></article></section>
      {role === 'owner' && dashboard.ownerMetrics && <section className="metrics" id="metricas"><article><span>Socios activos</span><strong>{dashboard.ownerMetrics.activeMembers}</strong><small>+12 este mes</small></article><article><span>Ingresos mensuales</span><strong>{money.format(dashboard.ownerMetrics.monthlyRevenue)}</strong><small>+8% frente a julio</small></article><article><span>Renovación</span><strong>{dashboard.ownerMetrics.retention}%</strong><small>4 puntos más</small></article><article><span>Ocupación</span><strong>{dashboard.ownerMetrics.occupancy}%</strong><small>Promedio de clases</small></article></section>}
      {role === 'reception' && <div className="permission-note">Vista de recepción: los datos financieros y las estadísticas del negocio están ocultos.</div>}
      {actionError && <p className="action-error" role="alert">{actionError}</p>}
      {profileLoading && <p className="profile-loading">Abriendo ficha…</p>}
      {memberDetail && <MemberProfile key={memberDetail.member.id} detail={memberDetail} onClose={() => setMemberDetail(null)} onSave={updateMember} onChangeState={changeMemberState} onAttendance={registerAttendance} />}
      {lastReceipt && <p className="receipt-success" role="status">Pago registrado correctamente. Comprobante interno: <strong>{lastReceipt}</strong></p>}
      {showMemberForm && <form className="member-form" onSubmit={createMember}><div><span>Nuevo socio</span><h2>Crear una cuenta</h2></div><label>Nombre completo<input value={name} onChange={(event) => setName(event.target.value)} minLength={3} required /></label><label>Plan<select value={plan} onChange={(event) => setPlan(event.target.value)}><option>Inicial</option><option>Completo</option><option>Personalizado</option></select></label><label>Primer vencimiento<input type="date" value={nextPayment} onChange={(event) => setNextPayment(event.target.value)} required /></label><div className="member-form__actions"><button type="submit" disabled={saving}>{saving ? 'Guardando…' : 'Crear socio'}</button><button type="button" onClick={() => setShowMemberForm(false)}>Cancelar</button></div></form>}
      {paymentMember && <form className="payment-form" onSubmit={registerPayment}><div><span>Registrar pago</span><h2>{paymentMember.name}</h2><small>{paymentMember.plan}</small></div><label>Importe<input type="number" min="1" step="1" value={paymentAmount} onChange={(event) => setPaymentAmount(event.target.value)} required /></label><label>Medio de pago<select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}><option>Transferencia</option><option>Efectivo</option><option>Débito</option><option>Crédito</option></select></label><div className="payment-form__actions"><button type="submit" disabled={saving}>{saving ? 'Registrando…' : 'Confirmar pago'}</button><button type="button" onClick={() => setPaymentMember(null)}>Cancelar</button></div></form>}
      <section className="data-grid" id="actividad"><MemberDirectory members={dashboard.members} onCreate={() => setShowMemberForm(true)} onOpen={openProfile} onPayment={openPayment} /><div className="data-card"><div className="card-heading"><div><span>Hoy</span><h2>Clases y cupos</h2></div></div><div className="table">{dashboard.classes.map((gymClass) => { const full = gymClass.booked >= gymClass.capacity; return <div className="table__row table__row--class" key={gymClass.id}><span><b>{gymClass.time}</b><small>{gymClass.name}</small></span><strong>{gymClass.booked} / {gymClass.capacity}</strong><button className="row-action" type="button" onClick={() => reserve(gymClass.id)} disabled={full}>{full ? 'Sin cupo' : '+ Reserva'}</button></div> })}</div></div></section>
      <section className="data-card payment-history"><div className="card-heading"><div><span>Pagos</span><h2>Historial reciente</h2></div><small>Últimos {dashboard.recentPayments.length} movimientos</small></div>{dashboard.recentPayments.length === 0 ? <p className="empty-history">Todavía no hay pagos registrados.</p> : <div className="payment-table"><div className="payment-table__head"><span>Socio</span><span>Fecha</span><span>Medio</span><span>Registrado por</span><span>Comprobante</span><span>Importe</span></div>{dashboard.recentPayments.map((payment) => <div className="payment-table__row" key={payment.id}><span><b>{payment.memberName}</b><small>Próximo: {payment.nextPayment}</small></span><span>{new Date(payment.paidAt).toLocaleDateString('es-AR')}</span><span>{payment.method}</span><span>{payment.registeredBy}</span><code>{payment.receiptNumber}</code><strong>{money.format(payment.amount)}</strong></div>)}</div>}</section>
    </>
  )
}

function MotorWorkspace({ dashboard }: { dashboard: MotorDashboard }) {
  return (
    <>
      <section className="metrics" id="metricas"><article><span>Productos</span><strong>{dashboard.ownerMetrics.products}</strong><small>Catálogo activo</small></article><article><span>Stock bajo</span><strong>{dashboard.ownerMetrics.lowStock}</strong><small>Requieren atención</small></article><article><span>Valor del inventario</span><strong>{money.format(dashboard.ownerMetrics.inventoryValue)}</strong><small>Según precio de venta</small></article></section>
      <section className="data-card product-card" id="actividad"><div className="card-heading"><div><span>Inventario</span><h2>Productos de Moto Central</h2></div><button type="button">+ Nuevo producto</button></div><div className="product-table"><div className="product-table__head"><span>Producto</span><span>SKU</span><span>Stock</span><span>Precio</span></div>{dashboard.products.map((product) => <div className="product-table__row" key={product.sku}><span><b>{product.name}</b></span><span>{product.sku}</span><span><em className={product.stock <= 3 ? 'stock-low' : ''}>{product.stock}</em></span><strong>{money.format(product.price)}</strong></div>)}</div></section>
    </>
  )
}

export default App
