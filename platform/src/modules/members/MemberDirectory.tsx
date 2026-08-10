import { useState } from 'react'
import type { Member } from './types'

type MemberDirectoryProps = {
  members: Member[]
  onCreate: () => void
  onOpen: (memberId: number) => void
  onPayment: (member: Member) => void
}

export function MemberDirectory({ members, onCreate, onOpen, onPayment }: MemberDirectoryProps) {
  const [search, setSearch] = useState('')
  const [membershipFilter, setMembershipFilter] = useState('Todas')
  const [paymentFilter, setPaymentFilter] = useState('Todos')

  const normalizedSearch = search.trim().toLocaleLowerCase('es')
  const filteredMembers = members.filter((member) => {
    const searchableData = `${member.name} ${member.email} ${member.phone}`.toLocaleLowerCase('es')
    const matchesSearch = !normalizedSearch || searchableData.includes(normalizedSearch)
    const matchesMembership = membershipFilter === 'Todas' || member.membershipState === membershipFilter
    const matchesPayment = paymentFilter === 'Todos' || member.paymentStatus === paymentFilter
    return matchesSearch && matchesMembership && matchesPayment
  })

  const filtersAreActive = Boolean(search) || membershipFilter !== 'Todas' || paymentFilter !== 'Todos'

  function clearFilters() {
    setSearch('')
    setMembershipFilter('Todas')
    setPaymentFilter('Todos')
  }

  return (
    <div className="data-card">
      <div className="card-heading">
        <div><span>Socios</span><h2>Directorio de socios</h2></div>
        <button type="button" onClick={onCreate}>+ Nuevo socio</button>
      </div>

      <div className="member-filters">
        <label className="member-search"><span>Buscar socio</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Nombre, teléfono o correo" /></label>
        <label><span>Membresía</span><select value={membershipFilter} onChange={(event) => setMembershipFilter(event.target.value)}><option>Todas</option><option>Activa</option><option>Suspendida</option></select></label>
        <label><span>Estado del pago</span><select value={paymentFilter} onChange={(event) => setPaymentFilter(event.target.value)}><option>Todos</option><option>Al día</option><option>Por vencer</option><option>Vencido</option></select></label>
        <div className="filter-result"><strong>{filteredMembers.length}</strong><span>{filteredMembers.length === 1 ? 'socio encontrado' : 'socios encontrados'}</span>{filtersAreActive && <button type="button" onClick={clearFilters}>Limpiar</button>}</div>
      </div>

      <div className="table">
        {filteredMembers.length === 0 ? (
          <div className="empty-members"><strong>No encontramos socios</strong><span>Probá con otra búsqueda o limpiá los filtros.</span><button type="button" onClick={clearFilters}>Mostrar todos</button></div>
        ) : filteredMembers.map((member) => (
          <div className="table__row table__row--member" key={member.id}>
            <span><b>{member.name}</b><small>{member.plan} · {member.membershipState}</small></span>
            <span>{member.nextPayment}</span>
            <em className={`badge badge--${member.paymentStatus.toLowerCase().replace(' ', '-')}`}>{member.paymentStatus}</em>
            <div className="member-actions"><button className="profile-action" type="button" onClick={() => onOpen(member.id)}>Ver ficha</button>{member.paymentStatus !== 'Al día' && <button className="row-action" type="button" onClick={() => onPayment(member)}>Registrar pago</button>}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
