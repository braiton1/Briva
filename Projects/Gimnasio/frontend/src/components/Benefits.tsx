const benefits = [
  ['01', 'Para todos los niveles', 'Principiantes y avanzados. Acá todos tienen su lugar.'],
  ['02', 'Entrenamiento funcional', 'Movimientos reales para sentirte mejor cada día.'],
  ['03', 'Acompañamiento real', 'Una rutina clara y orientación cuando la necesitás.'],
  ['04', 'Horarios que se adaptan', 'Opciones de mañana y tarde para sostener tu rutina.'],
]

function Benefits() {
  return (
    <section className="benefits section-shell" aria-label="Beneficios principales">
      {benefits.map(([number, title, description]) => (
        <article className="benefit" key={number}>
          <span>{number}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
      ))}
    </section>
  )
}

export default Benefits
