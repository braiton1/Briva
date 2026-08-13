const benefits = [
  {
    number: '01',
    title: 'Diseño personalizado',
    description: 'Una identidad visual pensada para tu actividad, tu público y el objetivo de la página.',
  },
  {
    number: '02',
    title: 'Diseño adaptable',
    description: 'Tu página se verá correctamente en celulares, tablets y computadoras.',
  },
  {
    number: '03',
    title: 'Contacto integrado',
    description: 'WhatsApp o formulario preparado para transformar interés en una consulta concreta.',
  },
  {
    number: '04',
    title: 'Publicación y soporte',
    description: 'Te acompañamos para ponerla online y resolver los ajustes posteriores acordados.',
  },
]

function Benefits() {
  return (
    <section className="benefits" id="beneficios">
      <div className="benefits__heading">
        <span>Qué recibís</span>
        <h2>Una página lista para compartir con tus clientes.</h2>
        <p>
          Definimos el alcance antes de empezar para que sepas qué vamos a construir,
          qué necesitaremos de tu parte y cómo llegaremos a la publicación.
        </p>
      </div>

      <div className="benefits__grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <span className="benefit-card__number">{benefit.number}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>

      <p className="benefits__scope">
        La propuesta escrita define secciones, contenido y alcance. El dominio y el mantenimiento se contratan por separado.
      </p>
    </section>
  )
}

export default Benefits
