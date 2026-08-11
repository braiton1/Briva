import type { ProcessStep } from '../data/siteContent'

function Process({ steps }: { steps: ProcessStep[] }) {
  return <section className="process"><div className="section process__inner"><div className="process__heading"><p className="eyebrow">Tu primera visita</p><h2>Simple desde el primer mensaje.</h2></div><ol className="process__steps">{steps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol></div></section>
}

export default Process
