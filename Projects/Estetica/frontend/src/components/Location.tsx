type LocationContent = { title: string; description: string; schedule: string; attention: string }

function Location({ content, whatsappUrl }: { content: LocationContent; whatsappUrl: string }) {
  return <section className="location section" id="contacto"><div className="location__card"><p className="eyebrow">Dónde estamos</p><h2>{content.title}</h2><p>{content.description}</p><dl><div><dt>Horarios</dt><dd>{content.schedule.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</dd></div><div><dt>Atención</dt><dd>{content.attention}</dd></div></dl><a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar disponibilidad</a></div><div className="location__map" aria-label="Ubicación aproximada en Godoy Cruz"><span className="map__road map__road--one" /><span className="map__road map__road--two" /><span className="map__road map__road--three" /><div className="map__pin"><span>L</span><strong>Godoy Cruz</strong></div></div></section>
}

export default Location
