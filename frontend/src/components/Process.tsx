const steps = [
  {
    number: '01',
    title: 'Primera conversación',
    description: 'Conocemos tu negocio, qué ofrecés y qué acción querés que realicen tus clientes.',
  },
  {
    number: '02',
    title: 'Propuesta y alcance',
    description: 'Acordamos secciones, contenido, tiempos, revisiones y presupuesto antes de comenzar.',
  },
  {
    number: '03',
    title: 'Diseño y desarrollo',
    description: 'Creamos la identidad y construimos una experiencia adaptada a todas las pantallas.',
  },
  {
    number: '04',
    title: 'Revisión y publicación',
    description: 'Revisás el resultado, aplicamos los ajustes acordados y dejamos la página online.',
  },
  {
    number: '05',
    title: 'Acompañamiento',
    description: 'Seguimos disponibles para mantenimiento o nuevas mejoras según el servicio contratado.',
  },
]

function Process() {
  return (
    <section className="process" id="proceso">
      <div className="process__heading">
        <span>Un proceso claro</span>
        <h2>¿Cómo trabajamos?</h2>
        <p>
          Sin lenguaje técnico innecesario: sabés qué sucede en cada etapa y qué
          necesitamos para avanzar.
        </p>
      </div>

      <div className="process__grid">
        {steps.map((step) => (
          <article className="process-card" key={step.number}>
            <span className="process-card__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process
