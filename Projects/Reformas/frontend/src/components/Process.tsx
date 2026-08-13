function Process({items}:{items:string[][]}){return <section className="process shell" id="proceso"><div className="heading"><p className="eyebrow">Cómo trabajamos</p><h2>Antes de romper,<br/>hay que entender.</h2></div><ol>{items.map(([number,title,text])=><li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>}
export default Process
