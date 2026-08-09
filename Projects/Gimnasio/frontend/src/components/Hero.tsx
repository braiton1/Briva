import heroImage from '../assets/hero-gym-v1.jpg'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <span className="hero__eyebrow">
          Entrenamiento para personas reales
        </span>

        <h1>
          Entrená a tu ritmo.
          <br />
          Nosotros te acompañamos.
        </h1>

        <p>
          Un espacio cercano para ganar fuerza, mejorar tu energía y construir
          una rutina que puedas sostener.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#contacto">
            Solicitar clase de prueba
          </a>

          <a className="button button--secondary" href="#horarios">
            Ver horarios
          </a>
        </div>
      </div>

      <div className="hero__media">
        <img
          src={heroImage}
          alt="Personas realizando entrenamiento funcional en NÚCLEO"
        />
      </div>
    </section>
  )
}

export default Hero
