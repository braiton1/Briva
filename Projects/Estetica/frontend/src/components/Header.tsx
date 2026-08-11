import { useState } from 'react'
import type { NavigationItem } from '../data/siteContent'

type Props = { brand: string; navigation: NavigationItem[]; whatsappUrl: string }

function Header({ brand, navigation, whatsappUrl }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="header"><div className="header__inner">
    <a className="brand" href="#inicio" aria-label={`${brand}, inicio`}>{brand}<span>.</span></a>
    <button className="menu-button" type="button" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? '×' : '☰'}</button>
    <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Navegación principal">
      {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
      <a className="nav__mobile-cta" href={whatsappUrl}>Reservar turno</a>
    </nav>
    <a className="header__cta" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar turno</a>
  </div></header>
}

export default Header
