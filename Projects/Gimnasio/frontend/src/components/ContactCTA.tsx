const brivaWhatsapp = 'https://wa.me/5491141972952?text=Hola%2C%20vi%20el%20proyecto%20conceptual%20N%C3%9ACLEO%20Training%20y%20quiero%20una%20web%20como%20esta.'

function ContactCTA() {
  return (
    <section className="contact section-shell" id="contacto">
      <div className="contact__info">
        <span>Proyecto conceptual de Briva</span>
        <h2>¿Querés una web como esta para tu negocio?</h2>
        <p>NÚCLEO no es un gimnasio real. Es una demostración de cómo Briva transforma una necesidad comercial en una experiencia digital clara y profesional.</p>
      </div>
      <div className="contact__action">
        <p>Contanos sobre tu negocio y conversemos sobre una solución hecha a tu medida.</p>
        <a href={brivaWhatsapp} target="_blank" rel="noreferrer">Hablar con Briva por WhatsApp</a>
        <small>No se realizará ninguna reserva en NÚCLEO.</small>
      </div>
    </section>
  )
}

export default ContactCTA
