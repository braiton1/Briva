const classes = [
  { number: '01', title: 'Funcional', description: 'Fuerza, resistencia y movilidad en entrenamientos dinámicos.', accent: 'Fuerza + movimiento' },
  { number: '02', title: 'Fuerza', description: 'Aprendé técnica y progresá de manera segura y sostenida.', accent: 'Progreso real' },
  { number: '03', title: 'HIIT', description: 'Sesiones intensas y eficientes, adaptadas a tu nivel.', accent: 'Energía + cardio' },
  { number: '04', title: 'Movilidad', description: 'Mejorá flexibilidad, postura y bienestar cotidiano.', accent: 'Moverte mejor' },
]

function Classes() {
  return (
    <section className="content-section section-shell" id="clases">
      <div className="section-heading section-heading--center">
        <span>Clases para distintas metas</span>
        <h2>Encontrá tu forma de moverte</h2>
        <p>Empezá desde donde estás. Cada propuesta puede adaptarse a tu experiencia.</p>
      </div>

      <div className="classes-grid">
        {classes.map((item) => (
          <article className="class-card" key={item.number}>
            <div className="class-card__visual">
              <span>{item.number}</span>
              <strong>{item.accent}</strong>
            </div>
            <div className="class-card__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Classes
