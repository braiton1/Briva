const services = [
  {
    title: 'Páginas web',
    description:
      'Experiencias públicas para presentar tu propuesta y generar oportunidades.',
  },
  {
    title: 'Paneles de gestión',
    description:
      'Herramientas privadas para administrar clientes, turnos, productos o stock.',
  },
  {
    title: 'Ventas online',
    description:
      'Catálogos y experiencias de compra conectadas con la operación del negocio.',
  },
  {
    title: 'Automatizaciones',
    description:
      'Integraciones que reducen tareas repetitivas y mantienen la información ordenada.',
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
