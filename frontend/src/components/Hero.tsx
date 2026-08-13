function Hero() {
  return (
    <section className="hero hero--text">
      <div className="hero__content hero__content--wide">
        <span className="hero__eyebrow">Diseño web para pequeños negocios</span>
        <h1>Diseño web pensado para convertir visitas en consultas.</h1>
        <div className="hero__bottom">
          <p>
            Creamos landing pages y catálogos claros, profesionales y adaptados a
            celulares para pequeños negocios de Mendoza.
          </p>
          <div className="hero__actions">
            <a className="hero__button" href="#proyectos">Ver proyectos</a>
            <a className="hero__portfolio-link" href="#contacto">Contanos tu idea</a>
          </div>
        </div>
        <ul className="hero__proof">
          <li>5 demos para recorrer</li>
          <li>Adaptado a celulares</li>
          <li>WhatsApp integrado</li>
          <li>Desde $80.000</li>
        </ul>
        <div className="hero__origin">
          <span>Nuestro propósito</span>
          <p>
            Briva nace en Mendoza para ayudar a pequeños negocios a construir
            una presencia digital profesional, sin procesos complicados ni
            lenguaje técnico. Trabajamos con trato directo, decisiones claras y
            acompañamiento durante todo el proyecto.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
