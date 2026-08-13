function FinalCTA({ whatsappUrl }: { whatsappUrl: string }) {
  return <section className="final-cta section"><p className="eyebrow">Proyecto conceptual de Briva</p><h2>¿Querés una web como esta?</h2><p>Lúmina no es un negocio real. Es una demostración de cómo podemos presentar tus servicios y facilitar consultas.</p><a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">Hablar con Briva</a></section>
}

export default FinalCTA
