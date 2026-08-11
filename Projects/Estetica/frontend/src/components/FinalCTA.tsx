function FinalCTA({ whatsappUrl }: { whatsappUrl: string }) {
  return <section className="final-cta section"><p className="eyebrow">Hablemos</p><h2>Regalate un momento para vos.</h2><p>Escribinos y coordinamos tu próxima visita a Lúmina.</p><a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar por WhatsApp</a></section>
}

export default FinalCTA
