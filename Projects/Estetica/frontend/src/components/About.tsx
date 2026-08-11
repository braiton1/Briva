type AboutContent = { image: string; imageAlt: string; title: string; paragraphs: string[]; facts: { value: string; label: string }[] }

function About({ content }: { content: AboutContent }) {
  return <section className="about" id="nosotras"><div className="about__image"><img src={content.image} alt={content.imageAlt} /></div><div className="about__content"><p className="eyebrow">Sobre Lúmina</p><h2>{content.title}</h2>{content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="about__facts">{content.facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</div></div></section>
}

export default About
