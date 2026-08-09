const plans = [
  { name: 'Inicial', detail: '8 clases por mes', price: '$49.000', features: ['Clases grupales', 'Planificación inicial', 'Comunidad NÚCLEO'] },
  { name: 'Completo', detail: 'Pase libre', price: '$69.000', featured: true, features: ['Acceso ilimitado', 'Planificación mensual', 'Seguimiento de objetivos'] },
  { name: 'Personalizado', detail: '4 clases + 1 sesión personal', price: '$79.000', features: ['Clases grupales', 'Sesión individual', 'Planificación personalizada'] },
]

function Plans() {
  return (
    <section className="content-section content-section--soft" id="planes">
      <div className="section-shell">
        <div className="section-heading section-heading--center">
          <span>Opciones claras</span>
          <h2>Planes simples, sin vueltas</h2>
          <p>Valores conceptuales para mostrar cómo se organizaría una propuesta comercial real.</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="plan-card__badge">Más elegido</span>}
              <h3>{plan.name}</h3>
              <p className="plan-card__detail">{plan.detail}</p>
              <p className="plan-card__price">{plan.price}<small>/mes</small></p>
              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a href="#contacto">Elegir plan</a>
            </article>
          ))}
        </div>

        <p className="plans-note">Proyecto conceptual: precios ilustrativos, sin permanencia ni contratación real.</p>
      </div>
    </section>
  )
}

export default Plans
