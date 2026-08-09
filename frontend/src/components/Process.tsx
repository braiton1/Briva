const steps = [
  {
    number: '01',
    title: 'Entender',
    description: 'Conocemos tu negocio, tus clientes y cómo trabaja tu equipo.',
  },
  {
    number: '02',
    title: 'Priorizar',
    description: 'Elegimos qué problema conviene resolver primero.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Construimos una solución clara, fácil de usar y adaptable.',
  },
  {
    number: '04',
    title: 'Implementación',
    description: 'La ponemos en funcionamiento con tu información y procesos.',
  },
  {
    number: '05',
    title: 'Soporte',
    description: 'Te acompañamos, medimos resultados y mejoramos la solución.',
  },
]

function Process() {
  return (
    <section className="process" id="proceso">
      <div className="process__heading">
        <span>Un proceso claro</span>
        <h2>¿Cómo trabajamos?</h2>
        <p>
          Avanzamos paso a paso, con comunicación clara y decisiones que podés
          entender.
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
