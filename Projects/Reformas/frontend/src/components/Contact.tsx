import { useState } from 'react'
import type { FormEvent } from 'react'

function Contact({ phone, faqs }: { phone: string; faqs: string[][] }) {
  const [type, setType] = useState('Remodelación')
  const [space, setSpace] = useState('Cocina')
  const [stage, setStage] = useState('Tengo una idea')
  const [budget, setBudget] = useState('Necesito orientación')
  const [details, setDetails] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = `Hola Briva, vi la demo conceptual Andina Reformas y quiero una web para mi negocio como esta.\n\nLa consulta que probé fue:\nTipo: ${type}\nAmbiente: ${space}\nEtapa: ${stage}\nInversión estimada: ${budget}\nDetalle: ${details}`
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return <>
    <section className="contact" id="contacto">
      <div className="contact__intro"><p className="eyebrow">Probá la consulta</p><h2>Empecemos por<br />entender qué necesitás.</h2><p>Completá datos ficticios para ver cómo una consulta puede llegar ordenada a WhatsApp.</p></div>
      <form onSubmit={submit}>
        <label>Tipo de trabajo<select name="type" value={type} onChange={(event) => setType(event.target.value)}><option>Remodelación</option><option>Ampliación</option><option>Reforma integral</option><option>Reparación</option></select></label>
        <label>Ambiente principal<select name="space" value={space} onChange={(event) => setSpace(event.target.value)}><option>Cocina</option><option>Baño</option><option>Living o comedor</option><option>Dormitorio</option><option>Varios ambientes</option></select></label>
        <label>¿En qué etapa estás?<select name="stage" value={stage} onChange={(event) => setStage(event.target.value)}><option>Tengo una idea</option><option>Ya tengo planos</option><option>Necesito comenzar pronto</option><option>Estoy comparando opciones</option></select></label>
        <label>Rango de inversión<select name="budget" value={budget} onChange={(event) => setBudget(event.target.value)}><option>Necesito orientación</option><option>Hasta $10 millones</option><option>Entre $10 y $25 millones</option><option>Entre $25 y $50 millones</option><option>Más de $50 millones</option></select></label>
        <label className="contact__details">Contanos un poco más<textarea name="details" rows={4} minLength={15} value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Qué querés cambiar, dónde está la propiedad y cuándo te gustaría comenzar" required /></label>
        <button type="submit">Probar consulta por WhatsApp</button>
        <small>Andina Reformas es un proyecto conceptual. La consulta será recibida por Briva.</small>
      </form>
    </section>
    <section className="faq shell"><div className="heading"><p className="eyebrow">Preguntas frecuentes</p><h2>Antes de empezar.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
  </>
}

export default Contact
