import { useState } from 'react'
import type { FormEvent } from 'react'
import './DashboardDemo.css'

type ViewName = 'resumen' | 'socios' | 'pagos' | 'clases' | 'estadisticas' | 'contenido'

type Member = {
  name: string
  plan: string
  lastPayment: string
  nextPayment: string
  status: 'Al día' | 'Por vencer' | 'Vencido'
}

const initialMembers: Member[] = [
  { name: 'Lucía Fernández', plan: 'Completo', lastPayment: '02 ago', nextPayment: '02 sep', status: 'Al día' },
  { name: 'Mateo Silva', plan: 'Inicial', lastPayment: '07 ago', nextPayment: '07 sep', status: 'Al día' },
  { name: 'Carla Ruiz', plan: 'Personalizado', lastPayment: '10 jul', nextPayment: '10 ago', status: 'Por vencer' },
  { name: 'Tomás Acosta', plan: 'Completo', lastPayment: '05 jul', nextPayment: '05 ago', status: 'Vencido' },
  { name: 'Sofía Méndez', plan: 'Inicial', lastPayment: '08 jul', nextPayment: '08 ago', status: 'Vencido' },
]

const viewLabels: Record<ViewName, string> = {
  resumen: 'Resumen',
  socios: 'Socios',
  pagos: 'Pagos',
  clases: 'Clases',
  estadisticas: 'Estadísticas',
  contenido: 'Sitio web',
}

function DashboardDemo() {
  const [activeView, setActiveView] = useState<ViewName>('resumen')
  const [members, setMembers] = useState(initialMembers)
  const [showMemberForm, setShowMemberForm] = useState(false)
  const [newMemberName, setNewMemberName] = useState('')
  const [remindersSent, setRemindersSent] = useState(false)
  const [bookings, setBookings] = useState({ hiit: 10, funcional: 14, movilidad: 7 })
  const [headline, setHeadline] = useState('Entrená a tu ritmo. Nosotros te acompañamos.')
  const [completePrice, setCompletePrice] = useState('69.000')
  const [photoName, setPhotoName] = useState('facilities-v1.jpg')
  const [contentSaved, setContentSaved] = useState(false)

  const expiredMembers = members.filter((member) => member.status === 'Vencido')

  function addMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = newMemberName.trim()
    if (!name) return

    setMembers((current) => [
      { name, plan: 'Inicial', lastPayment: 'Sin pagos', nextPayment: 'Pendiente', status: 'Por vencer' },
      ...current,
    ])
    setNewMemberName('')
    setShowMemberForm(false)
  }

  function registerPayment(name: string) {
    setMembers((current) => current.map((member) => (
      member.name === name
        ? { ...member, lastPayment: 'Hoy', nextPayment: '10 sep', status: 'Al día' }
        : member
    )))
  }

  function renderView() {
    if (activeView === 'socios') {
      return (
        <>
          {showMemberForm && (
            <form className="dashboard-demo__inline-form" onSubmit={addMember}>
              <label>Nombre del nuevo socio<input value={newMemberName} onChange={(event) => setNewMemberName(event.target.value)} placeholder="Nombre y apellido" autoFocus /></label>
              <button type="submit">Crear socio</button>
              <button type="button" onClick={() => setShowMemberForm(false)}>Cancelar</button>
            </form>
          )}
          <div className="dashboard-demo__panel">
            <div className="dashboard-demo__panel-heading"><strong>Socios recientes</strong><span>Próximo pago</span><span>Estado</span></div>
            {members.map((member) => (
              <div className="dashboard-demo__row dashboard-demo__row--three" key={member.name}>
                <span><b>{member.name}</b><small>{member.plan}</small></span>
                <span>{member.nextPayment}</span>
                <em className={`status status--${member.status.toLowerCase().replace(' ', '-')}`}>{member.status}</em>
              </div>
            ))}
          </div>
        </>
      )
    }

    if (activeView === 'pagos') {
      return (
        <div className="dashboard-demo__panel">
          <div className="dashboard-demo__panel-heading"><strong>Seguimiento de pagos</strong><span>Último pago</span><span>Acción</span></div>
          {members.filter((member) => member.status !== 'Al día').map((member) => (
            <div className="dashboard-demo__row dashboard-demo__row--three" key={member.name}>
              <span><b>{member.name}</b><small>{member.status}</small></span>
              <span>{member.lastPayment}</span>
              <button className="dashboard-demo__small-action" type="button" onClick={() => registerPayment(member.name)}>Registrar pago</button>
            </div>
          ))}
          {members.every((member) => member.status === 'Al día') && <p className="dashboard-demo__empty">No hay pagos pendientes.</p>}
        </div>
      )
    }

    if (activeView === 'clases') {
      const classes = [
        { key: 'hiit' as const, time: '18:30', name: 'HIIT', capacity: 14 },
        { key: 'funcional' as const, time: '19:30', name: 'Funcional', capacity: 16 },
        { key: 'movilidad' as const, time: '20:30', name: 'Movilidad', capacity: 12 },
      ]
      return (
        <div className="dashboard-demo__panel">
          <div className="dashboard-demo__panel-heading"><strong>Clases de hoy</strong><span>Cupos</span><span>Acción</span></div>
          {classes.map((gymClass) => {
            const isFull = bookings[gymClass.key] >= gymClass.capacity
            return (
              <div className="dashboard-demo__row dashboard-demo__row--three" key={gymClass.key}>
                <span><b>{gymClass.time}</b><small>{gymClass.name}</small></span>
                <span><strong>{bookings[gymClass.key]} / {gymClass.capacity}</strong>{isFull && <small>Clase completa</small>}</span>
                <button className="dashboard-demo__small-action" type="button" disabled={isFull} onClick={() => setBookings((current) => ({ ...current, [gymClass.key]: current[gymClass.key] + 1 }))}>{isFull ? 'Sin cupo' : '+ Reserva'}</button>
              </div>
            )
          })}
        </div>
      )
    }

    if (activeView === 'estadisticas') {
      return (
        <div className="dashboard-demo__insights">
          <article><span>Ocupación promedio</span><strong>76%</strong><div className="dashboard-demo__bar"><i style={{ width: '76%' }} /></div><small>Las clases de las 19:30 son las más elegidas.</small></article>
          <article><span>Renovación mensual</span><strong>88%</strong><div className="dashboard-demo__bar"><i style={{ width: '88%' }} /></div><small>Subió 4% respecto del mes anterior.</small></article>
          <article className="dashboard-demo__suggestion"><span>Sugerencia de promoción</span><h4>Activá “Traé a un amigo” los martes</h4><p>Los martes tienen 38% menos ocupación. Una promoción limitada podría mejorar ese horario sin reducir el precio de todas las clases.</p><button type="button">Guardar idea</button></article>
        </div>
      )
    }

    if (activeView === 'contenido') {
      return (
        <form className="dashboard-demo__content-form" onSubmit={(event) => { event.preventDefault(); setContentSaved(true) }}>
          <label>Título principal<textarea rows={3} value={headline} onChange={(event) => { setHeadline(event.target.value); setContentSaved(false) }} /></label>
          <label>Precio del plan completo<div className="dashboard-demo__price-input"><span>$</span><input value={completePrice} onChange={(event) => { setCompletePrice(event.target.value); setContentSaved(false) }} /><small>/mes</small></div></label>
          <label>Fotografía de instalaciones<div className="dashboard-demo__file"><span>{photoName}</span><b>Cambiar foto</b><input type="file" accept="image/*" onChange={(event) => { setPhotoName(event.target.files?.[0]?.name ?? photoName); setContentSaved(false) }} /></div></label>
          <button className="dashboard-demo__save" type="submit">Guardar cambios</button>
          {contentSaved && <p className="dashboard-demo__saved" role="status">Cambios guardados en la demostración.</p>}
        </form>
      )
    }

    return (
      <>
        <div className="dashboard-demo__alerts">
          <article><b>{expiredMembers.length}</b><span>pagos vencidos</span><button type="button" onClick={() => setActiveView('pagos')}>Revisar</button></article>
          <article><b>2</b><span>clases casi completas</span><button type="button" onClick={() => setActiveView('clases')}>Ver cupos</button></article>
          <article className={remindersSent ? 'is-complete' : ''}><b>{remindersSent ? '✓' : '9'}</b><span>{remindersSent ? 'recordatorios enviados' : 'recordatorios para enviar'}</span><button type="button" onClick={() => setRemindersSent(true)} disabled={remindersSent}>{remindersSent ? 'Enviados' : 'Enviar'}</button></article>
        </div>
        <div className="dashboard-demo__stats">
          <article><span>Socios activos</span><strong>{184 + members.length - initialMembers.length}</strong><small>+12 este mes</small></article>
          <article><span>Clases de hoy</span><strong>8</strong><small>62 reservas</small></article>
          <article><span>Ingresos del mes</span><strong>$11,8 M</strong><small>+8% vs. julio</small></article>
        </div>
      </>
    )
  }

  return (
    <section className="dashboard-section content-section" id="panel-demo">
      <div className="section-shell">
        <div className="section-heading">
          <span>La parte interna del negocio</span>
          <h2>Todo el gimnasio, en un solo lugar</h2>
          <p>Probá una demostración del panel para organizar socios, pagos, clases, estadísticas y el contenido de la web sin tocar código.</p>
        </div>

        <div className="dashboard-demo">
          <aside className="dashboard-demo__sidebar">
            <div className="dashboard-demo__brand">NÚCLEO <small>Gestión</small></div>
            <nav aria-label="Secciones del panel de demostración">
              {(Object.keys(viewLabels) as ViewName[]).map((viewName) => (
                <button className={activeView === viewName ? 'is-active' : ''} type="button" key={viewName} onClick={() => setActiveView(viewName)}>{viewLabels[viewName]}{viewName === 'pagos' && expiredMembers.length > 0 && <b>{expiredMembers.length}</b>}</button>
              ))}
            </nav>
            <span className="dashboard-demo__demo-label">Demo conceptual</span>
          </aside>

          <div className="dashboard-demo__main">
            <div className="dashboard-demo__topbar">
              <div><small>Lunes, 10 de agosto</small><h3>{viewLabels[activeView]}</h3></div>
              {activeView === 'socios' && <button type="button" onClick={() => setShowMemberForm(true)}>+ Nuevo socio</button>}
            </div>
            {renderView()}
          </div>
        </div>

        <p className="dashboard-section__note">Los datos son ficticios y se reinician al actualizar la página. Una versión real usaría usuarios seguros y una base de datos.</p>
      </div>
    </section>
  )
}

export default DashboardDemo
