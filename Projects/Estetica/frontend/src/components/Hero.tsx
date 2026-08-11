type HeroContent = { eyebrow: string; title: string; description: string; image: string; imageAlt: string; location: string; details: string[] }
type Props = { content: HeroContent; whatsappUrl: string }

function Hero({ content, whatsappUrl }: Props) {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero__content"><p className="eyebrow">{content.eyebrow}</p><h1 id="hero-title">{content.title}</h1><p className="hero__description">{content.description}</p>
      <div className="hero__actions"><a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar por WhatsApp</a><a className="button button--secondary" href="#servicios">Ver tratamientos</a></div>
      <div className="hero__details" aria-label="Información del estudio">{content.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
    </div>
    <div className="hero__visual"><img src={content.image} alt={content.imageAlt} /><div className="hero__location"><small>Encontranos en</small><strong>{content.location}</strong></div></div>
  </section>
}

export default Hero
