const benefits = [
  {
    title: 'Diseño adaptable',
    description:
      'Tu sitio se verá correctamente en computadoras, tablets y celulares.',
  },
  {
    title: 'Contacto directo',
    description:
      'Facilitamos que tus clientes puedan comunicarse con vos por WhatsApp.',
  },
  {
    title: 'Rápido y confiable',
    description:
      'Construimos experiencias ágiles que transmiten profesionalismo.',
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
          Cada decisión está pensada para facilitar el contacto con tus clientes
          y fortalecer la presencia de tu negocio.
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