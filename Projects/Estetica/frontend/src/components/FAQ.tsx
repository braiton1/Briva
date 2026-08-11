import type { FAQItem } from '../data/siteContent'

function FAQ({ items }: { items: FAQItem[] }) {
  return <section className="faq section"><div className="section__intro"><div><p className="eyebrow">Antes de venir</p><h2>Preguntas frecuentes.</h2></div><p>Si tu consulta no está acá, escribinos. Preferimos que llegues al turno con toda la información que necesitás.</p></div><div className="faq__list">{items.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></section>
}

export default FAQ
