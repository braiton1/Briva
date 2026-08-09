const benefits = [
  {
    title: 'Experiencia para tus clientes',
    description:
      'Una presencia clara, profesional y preparada para cualquier pantalla.',
  },
  {
    title: 'Gestión simple',
    description:
      'Herramientas que tu equipo puede usar sin depender del código.',
  },
  {
    title: 'Procesos conectados',
    description:
      'Conectamos información para evitar tareas duplicadas y desorden.',
  },
  {
    title: 'Preparado para crecer',
    description:
      'Creamos una base que puede evolucionar junto con las necesidades de tu negocio.',
  },
]

function Benefits() {
  return (
    <section className="benefits" id="beneficios">
      <div className="benefits__heading">
        <span>Una presencia digital completa</span>
        <h2>Más que una página bonita.</h2>
        <p>
          Diseñamos tanto la presencia pública como las herramientas internas
          que ayudan a organizar el trabajo cotidiano.
        </p>
      </div>

      <div className="benefits__grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Benefits
