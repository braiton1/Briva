import './Pricing.css'

const plans = [
  {
    eyebrow: 'Para presentar servicios',
    name: 'Página Web Esencial',
    price: '$80.000',
    items: ['Hasta 5 secciones', 'Diseño adaptado a celulares', 'WhatsApp o formulario', '2 rondas de correcciones', 'Publicación inicial'],
  },
  {
    eyebrow: 'Para mostrar productos',
    name: 'Catálogo Visual',
    price: '$120.000',
    featured: true,
    items: ['Hasta 12 productos', 'Categorías y grilla adaptable', 'Pedido o consulta por WhatsApp', '2 rondas de correcciones', 'Publicación inicial'],
  },
  {
    eyebrow: 'Necesidades especiales',
    name: 'Solución personalizada',
    price: 'A cotizar',
    items: ['Alcance definido por proyecto', 'Formularios especiales', 'Secciones adicionales', 'Integraciones posibles', 'Propuesta antes de comenzar'],
  },
]

function Pricing() {
  return (
    <section className="pricing" id="planes">
      <div className="pricing__heading">
        <span>Planes claros</span>
        <h2>Elegí un punto de partida.</h2>
        <p>Los valores son de lanzamiento. El precio final se confirma según el contenido y el alcance acordado.</p>
      </div>
      <div className="pricing__grid">
        {plans.map((plan) => <article className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`} key={plan.name}>
          {plan.featured && <strong className="pricing-card__badge">Más completo</strong>}
          <span>{plan.eyebrow}</span>
          <h3>{plan.name}</h3>
          <p><small>{plan.price === 'A cotizar' ? '' : 'Desde'}</small>{plan.price}</p>
          <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <a href="#contacto">Consultar este plan</a>
        </article>)}
      </div>
      <div className="pricing__maintenance">
        <div><span>Mantenimiento opcional</span><strong>Desde $20.000 por mes</strong></div>
        <p>Incluye una actualización simple mensual. Nuevos productos, secciones o cambios frecuentes se cotizan aparte según complejidad.</p>
      </div>
    </section>
  )
}

export default Pricing
