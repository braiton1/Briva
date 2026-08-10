import { useState } from 'react'
import type { FormEvent } from 'react'
import { money } from '../../shared/formatters'
import type { MemberDetail, MembershipState, MemberUpdate } from './types'

type MemberProfileProps = {
  detail: MemberDetail
  onClose: () => void
  onSave: (memberId: number, values: MemberUpdate) => Promise<void>
  onChangeState: (memberId: number, state: MembershipState) => Promise<void>
  onAttendance: (memberId: number) => Promise<void>
}

export function MemberProfile({ detail, onClose, onSave, onChangeState, onAttendance }: MemberProfileProps) {
  const [name, setName] = useState(detail.member.name)
  const [email, setEmail] = useState(detail.member.email)
  const [phone, setPhone] = useState(detail.member.phone)
  const [plan, setPlan] = useState(detail.member.plan)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function fieldChanged(update: () => void) {
    update()
    setMessage('')
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setError('')
    try {
      await onSave(detail.member.id, { name, email, phone, plan })
      setMessage('Datos actualizados correctamente.')
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'No se pudieron guardar los cambios.')
    } finally {
      setSaving(false)
    }
  }

  async function toggleState() {
    const newState: MembershipState = detail.member.membershipState === 'Activa' ? 'Suspendida' : 'Activa'
    setSaving(true)
    setError('')
    try {
      await onChangeState(detail.member.id, newState)
      setMessage(newState === 'Suspendida' ? 'Membresía suspendida.' : 'Membresía reactivada.')
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'No se pudo cambiar el estado.')
    } finally {
      setSaving(false)
    }
  }

  async function attend() {
    setSaving(true)
    setError('')
    try {
      await onAttendance(detail.member.id)
      setMessage('Asistencia registrada.')
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'No se pudo registrar la asistencia.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="profile-overlay" role="dialog" aria-modal="true" aria-labelledby="member-profile-title">
      <section className="member-profile">
        <header className="member-profile__header"><div><span>Ficha del socio</span><h2 id="member-profile-title">{detail.member.name}</h2></div><button type="button" onClick={onClose} aria-label="Cerrar ficha">×</button></header>
        {message && <p className="profile-message" role="status">{message}</p>}
        {error && <p className="profile-error" role="alert">{error}</p>}
        <section className="member-profile__overview"><h3>Información de la membresía</h3><div><label><span>Plan contratado</span><strong>{detail.member.plan}</strong></label><label><span>Estado de la membresía</span><strong>{detail.member.membershipState}</strong></label><label><span>Estado del pago</span><strong>{detail.member.paymentStatus}</strong></label><label><span>Próximo pago</span><strong>{detail.member.nextPayment}</strong></label><label><span>Fecha de alta</span><strong>{detail.member.joinedAt}</strong></label><label><span>Asistencias registradas</span><strong>{detail.attendance.length}</strong></label></div></section>
        <form className="member-profile__form" onSubmit={save}><label>Nombre completo<input value={name} onChange={(event) => fieldChanged(() => setName(event.target.value))} minLength={3} required /></label><label>Correo electrónico<input type="email" value={email} onChange={(event) => fieldChanged(() => setEmail(event.target.value))} placeholder="Sin correo registrado" /></label><label>Teléfono<input value={phone} onChange={(event) => fieldChanged(() => setPhone(event.target.value))} placeholder="Sin teléfono registrado" /></label><label>Plan<select value={plan} onChange={(event) => fieldChanged(() => setPlan(event.target.value))}><option>Inicial</option><option>Completo</option><option>Personalizado</option></select></label><div className="member-profile__form-actions"><button type="submit" disabled={saving}>{saving ? 'Guardando…' : 'Guardar cambios'}</button></div></form>
        <div className="member-profile__actions"><button type="button" onClick={attend} disabled={saving || detail.member.membershipState === 'Suspendida'}>Registrar asistencia</button><button className="state-action" type="button" onClick={toggleState} disabled={saving}>{detail.member.membershipState === 'Activa' ? 'Suspender membresía' : 'Reactivar membresía'}</button></div>
        <div className="profile-history"><section><div className="profile-history__heading"><span>Pagos</span><strong>{detail.payments.length}</strong></div>{detail.payments.length === 0 ? <p>Sin pagos registrados.</p> : detail.payments.map((payment) => <article key={payment.receiptNumber}><div><b>{money.format(payment.amount)}</b><small>{payment.method} · {new Date(payment.paidAt).toLocaleDateString('es-AR')}</small></div><code>{payment.receiptNumber}</code></article>)}</section><section><div className="profile-history__heading"><span>Asistencias</span><strong>{detail.attendance.length}</strong></div>{detail.attendance.length === 0 ? <p>Sin asistencias registradas.</p> : detail.attendance.map((attendance) => <article key={attendance.id}><div><b>{new Date(attendance.attendedAt).toLocaleDateString('es-AR')}</b><small>{new Date(attendance.attendedAt).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}</small></div><small>{attendance.registeredBy}</small></article>)}</section></div>
      </section>
    </div>
  )
}
