function FAQ({items}:{items:string[][]}){return <section className="faq shell" id="preguntas"><div className="heading"><p className="eyebrow">Antes de reservar</p><h2>Preguntas frecuentes.</h2></div><div>{items.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>}
export default FAQ
