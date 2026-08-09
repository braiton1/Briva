import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio" id="proyectos">
      <div className="portfolio__heading">
        <div><span>Proyecto destacado</span><h2>NÚCLEO Training</h2></div>
        <p>Una demostración de cómo una marca, una web comercial y una herramienta de gestión pueden formar una sola solución.</p>
      </div>

      <div className="portfolio__project">
        <div className="portfolio__site-preview">
          <div className="portfolio__browser-bar"><i /><i /><i /></div>
          <div className="portfolio__hero-preview">
            <span>Entrenamiento para personas reales</span>
            <strong>Entrená a tu ritmo.<br />Nosotros te acompañamos.</strong>
            <b>Solicitar clase de prueba</b>
          </div>
        </div>

        <div className="portfolio__content">
          <span>Gimnasio · Proyecto conceptual</span>
          <h3>Mucho más que una página atractiva.</h3>
          <p>Diseñamos la experiencia pública para presentar clases, planes, horarios y ubicación. También creamos una muestra del panel interno para administrar socios, reservas, cupos y pagos.</p>
          <div className="portfolio__tags"><small>Sitio responsive</small><small>Panel de gestión</small><small>WhatsApp</small><small>SEO</small></div>
          <a href="#contacto">Quiero una solución para mi negocio</a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
