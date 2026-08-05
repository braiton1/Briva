function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">
          Tecnología para pequeños negocios
        </span>

        <h1>La presencia digital que tu negocio necesita para crecer.</h1>

        <p>
          Diseñamos experiencias digitales modernas para que tu negocio inspire
          confianza, consiga más clientes y siga creciendo.
        </p>

        <a className="hero__button" href="#contacto">
          Solicitar presupuesto
        </a>
      </div>

      <div className="hero__visual">
  <div className="device">
    <div className="laptop">
      <div className="laptop__screen">
        <div className="mini-site">
          <span className="mini-site__logo">Briva</span>
          <strong>Tu negocio, más cerca de sus clientes.</strong>
          <span className="mini-site__button">Comenzar</span>
        </div>
      </div>

      <div className="laptop__base" />
    </div>

    <div className="phone">
      <div className="phone__speaker" />

      <div className="mini-site mini-site--phone">
        <span className="mini-site__logo">Briva</span>
        <strong>Tu negocio, más cerca de sus clientes.</strong>
        <span className="mini-site__button">Comenzar</span>
      </div>
    </div>
  </div>
</div>
    </section>
  )
}

export default Hero