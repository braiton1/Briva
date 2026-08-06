const steps = [
  {
    number: '01',
    title: 'Reunión',
    description: 'Conocemos tu negocio, tus objetivos y lo que necesitás.',
  },
  {
    number: '02',
    title: 'Diseño',
    description: 'Definimos la estructura y la identidad visual del proyecto.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Convertimos el diseño en una experiencia digital funcional.',
  },
  {
    number: '04',
    title: 'Publicación',
    description: 'Preparamos y publicamos el proyecto para tus clientes.',
  },
  {
    number: '05',
    title: 'Soporte',
    description: 'Te acompañamos después de la publicación.',
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