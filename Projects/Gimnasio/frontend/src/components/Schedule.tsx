const rows = [
  ['06:30', 'Funcional', 'HIIT', 'Fuerza', 'Funcional', 'HIIT', 'Funcional 09:00'],
  ['08:30', 'Fuerza', 'Funcional', 'Movilidad', 'Fuerza', 'Funcional', '—'],
  ['18:30', 'HIIT', 'Fuerza', 'Funcional', 'HIIT', 'Fuerza', '—'],
  ['19:30', 'Funcional', 'Movilidad', 'HIIT', 'Funcional', 'Movilidad', '—'],
]

function Schedule() {
  return (
    <section className="content-section section-shell schedule" id="horarios">
      <div className="section-heading">
        <span>Organizá tu semana</span>
        <h2>Horarios</h2>
        <p>Una grilla simple para encontrar el momento que mejor se adapta a tu rutina.</p>
      </div>

      <div className="schedule__table-wrap">
        <table>
          <thead><tr>{['Hora', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day) => <th key={day}>{day}</th>)}</tr></thead>
          <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </section>
  )
}

export default Schedule
