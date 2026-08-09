import { useState } from 'react'

const questions = [
  ['¿Necesito experiencia previa para empezar?', 'No. Las clases se adaptan a tu nivel y el objetivo es que avances de manera segura.'],
  ['¿Qué tengo que llevar a mi primera clase?', 'Ropa cómoda, agua y ganas de moverte. El resto del material está incluido.'],
  ['¿Puedo probar antes de elegir un plan?', 'Sí. Podés solicitar una clase de prueba desde el formulario de demostración.'],
  ['¿Hay permanencia?', 'No. La propuesta conceptual plantea planes mensuales sin permanencia.'],
  ['¿Puedo pausar o cambiar mi plan?', 'Sí. La flexibilidad es parte de la experiencia pensada para este negocio.'],
  ['¿Cómo reservo mi clase?', 'En un gimnasio real se confirmaría por WhatsApp o mediante una agenda online.'],
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="content-section section-shell faq">
      <div className="section-heading section-heading--center">
        <span>Antes de empezar</span>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="faq__grid">
        {questions.map(([question, answer], index) => {
          const open = openIndex === index
          return (
            <article className="faq-item" key={question}>
              <button type="button" aria-expanded={open} onClick={() => setOpenIndex(open ? null : index)}>
                {question}<span aria-hidden="true">{open ? '−' : '+'}</span>
              </button>
              {open && <p>{answer}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
