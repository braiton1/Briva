import type { Testimonial } from '../data/siteContent'

function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return <section className="experience section" id="resultados"><div className="section__intro section__intro--center"><div><p className="eyebrow">Experiencias reales</p><h2>Que te sientas cómoda también es parte del resultado.</h2></div></div><div className="testimonials">{testimonials.map((item) => <blockquote key={item.author}><div className="stars">★★★★★</div><p>“{item.quote}”</p><footer>— {item.author}</footer></blockquote>)}</div><p className="demo-note">Testimonios ficticios creados para esta demostración.</p></section>
}

export default Testimonials
