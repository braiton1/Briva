import './BusinessSystem.css'

function BusinessSystem() {
  return (
    <section className="business-system">
      <div className="business-system__heading">
        <span>Una solución completa</span>
        <h2>Lo que ven tus clientes y lo que usa tu equipo.</h2>
        <p>Conectamos la presencia pública del negocio con herramientas internas simples, para que la tecnología acompañe el trabajo diario.</p>
      </div>

      <div className="business-system__flow">
        <article>
          <span>01 · Parte pública</span>
          <h3>Tu negocio hacia afuera</h3>
          <p>Sitio web, catálogo, reservas, contacto, ventas y una experiencia profesional para tus clientes.</p>
          <ul><li>Presentación clara</li><li>Adaptado a celulares</li><li>Más oportunidades de contacto</li></ul>
        </article>

        <div className="business-system__connection" aria-hidden="true"><span>+</span></div>

        <article className="business-system__card--dark">
          <span>02 · Parte privada</span>
          <h3>Tu negocio hacia adentro</h3>
          <p>Un panel fácil de usar para organizar productos, clientes, turnos, stock o las tareas propias de tu actividad.</p>
          <ul><li>Sin tocar código</li><li>Desde computadora o celular</li><li>Preparado para integraciones</li></ul>
        </article>
      </div>
    </section>
  )
}

export default BusinessSystem
