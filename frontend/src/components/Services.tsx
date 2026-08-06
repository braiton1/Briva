const services = [
  {
    title: 'Landing pages',
    description:
      'Páginas enfocadas en presentar una propuesta clara y generar consultas.',
  },
  {
    title: 'Sitios web',
    description:
      'Sitios profesionales para comunicar tu negocio, servicios e identidad.',
  },
  {
    title: 'Tiendas online',
    description:
      'Experiencias de compra simples, rápidas y adaptadas a cualquier pantalla.',
  },
  {
    title: 'Automatizaciones',
    description:
      'Herramientas que reducen tareas repetitivas y mejoran la atención al cliente.',
  },
]

function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services__heading">
        <span>Soluciones digitales</span>
        <h2>Construimos lo que tu negocio necesita.</h2>
        <p>
          Elegimos la solución adecuada para cada proyecto, sin agregar
          complejidad innecesaria.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span>0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services