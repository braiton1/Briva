import { useMemo, useState } from 'react'
import type { Category, Product } from '../data/siteContent'

const categories: Category[] = ['Todos', 'Panadería', 'Dulce', 'Cafetería']
const money = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })

function Catalog({ products, phone }: { products: Product[]; phone: string }) {
  const [category, setCategory] = useState<Category>('Todos')
  const [cart, setCart] = useState<Record<number, number>>({})
  const visible = category === 'Todos' ? products : products.filter((product) => product.category === category)
  const selections = products.filter((product) => cart[product.id]).map((product) => ({ ...product, quantity: cart[product.id] }))
  const total = useMemo(() => selections.reduce((sum, item) => sum + item.price * item.quantity, 0), [selections])
  const itemCount = selections.reduce((sum, item) => sum + item.quantity, 0)
  const update = (id: number, change: number) => setCart((current) => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + change) }))
  const message = `Hola Briva, vi la demo conceptual Miga y quiero una carta digital como esta.\n\nEl pedido que probé fue:\n${selections.map((item) => `• ${item.quantity} x ${item.name}`).join('\n')}\n\nTotal ilustrativo: ${money.format(total)}`
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return <section className="catalog shell" id="catalogo"><div className="section-title"><p className="eyebrow">Nuestra carta · 12 productos</p><h2>Elegí algo rico.</h2><p>Probá cómo un cliente puede recorrer categorías, armar su pedido y enviarlo ordenado por WhatsApp.</p></div><div className="filters" aria-label="Categorías">{categories.map((item) => <button className={category === item ? 'filter filter--active' : 'filter'} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="catalog__layout"><div className="products">{visible.map((product) => { const quantity = cart[product.id] ?? 0; return <article className="product" key={product.id}><div className="product__image"><img src={product.image} alt={product.name} style={{ objectPosition: product.imagePosition }} />{product.badge && <span>{product.badge}</span>}</div><div className="product__body"><div><small>{product.category}</small><h3>{product.name}</h3><p>{product.description}</p></div><div className="product__bottom"><strong>{money.format(product.price)}</strong>{quantity === 0 ? <button type="button" onClick={() => update(product.id, 1)}>Agregar +</button> : <div className="quantity"><button type="button" aria-label={`Quitar ${product.name}`} onClick={() => update(product.id, -1)}>−</button><span>{quantity}</span><button type="button" aria-label={`Agregar ${product.name}`} onClick={() => update(product.id, 1)}>+</button></div>}</div></div></article> })}</div><aside className="order"><div className="order__title"><span>Tu pedido</span><strong>{itemCount} {itemCount === 1 ? 'producto' : 'productos'}</strong></div>{selections.length === 0 ? <p className="order__empty">Todavía no agregaste nada. Elegí tus favoritos de la carta.</p> : <div className="order__items">{selections.map((item) => <div key={item.id}><span>{item.quantity} × {item.name}</span><strong>{money.format(item.price * item.quantity)}</strong></div>)}</div>}<div className="order__total"><span>Total ilustrativo</span><strong>{money.format(total)}</strong></div>{selections.length > 0 ? <a className="button button--red" href={whatsappUrl} target="_blank" rel="noreferrer">Probar pedido por WhatsApp</a> : <button className="button button--disabled" disabled>Elegí un producto</button>}<small>Miga es un proyecto conceptual. No se realizará ningún pedido ni pago.</small></aside></div><p className="price-note">Catálogo demostrativo de hasta 12 productos. Precios ficticios de referencia.</p></section>
}
export default Catalog
