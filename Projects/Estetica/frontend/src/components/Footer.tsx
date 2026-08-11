import type { NavigationItem } from '../data/siteContent'

function Footer({ brand, navigation }: { brand: string; navigation: NavigationItem[] }) {
  return <footer className="footer"><div className="footer__top"><a className="brand brand--light" href="#inicio">{brand}<span>.</span></a><p>Estética facial, cejas y pestañas<br />en Godoy Cruz, Mendoza.</p><nav>{navigation.filter((item) => item.label !== 'Experiencias').map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div><div className="footer__bottom"><span>© 2026 {brand} Estudio</span><span>Demo de portfolio creada por Briva.</span></div></footer>
}

export default Footer
