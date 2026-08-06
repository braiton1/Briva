function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact__content">
        <span>Hablemos de tu proyecto</span>

        <h2>Construyamos una presencia digital que represente tu negocio.</h2>

        <p>
          Contanos qué necesitás. Vamos a escucharte, entender tu proyecto y
          proponerte una solución clara.
        </p>
      </div>

      <form className="contact__form">
        <label>
          Nombre
          <input type="text" name="name" placeholder="Tu nombre" />
        </label>

        <label>
          Correo electrónico
          <input type="email" name="email" placeholder="nombre@correo.com" />
        </label>

        <label>
          Contanos sobre tu proyecto
          <textarea
            name="message"
            rows={5}
            placeholder="¿Qué te gustaría construir?"
          />
        </label>

        <button type="button">Solicitar presupuesto</button>
      </form>
    </section>
  )
}

export default Contact