import type { Service } from '../data/siteContent'

function Services({ services }: { services: Service[] }) {
  return <section className="services section" id="servicios"><div className="section__intro"><div><p className="eyebrow">Nuestros tratamientos</p><h2>Un cuidado pensado para vos.</h2></div><p>Trabajamos con turnos espaciados para dedicarle tiempo real a cada persona y recomendar solo lo que su piel necesita.</p></div>
    <div className="services__list">{services.map((service) => <article className="service" key={service.number}><span className="service__number">{service.number}</span><div className="service__content"><h3>{service.name}</h3><p>{service.description}</p></div><span className="service__duration">{service.duration}</span><strong className="service__price">Desde {service.price}</strong></article>)}</div>
    <p className="price-note">Valores ilustrativos de la demo. Se confirman al momento de reservar.</p>
  </section>
}

export default Services
