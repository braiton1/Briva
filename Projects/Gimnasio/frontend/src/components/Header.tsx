import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="#inicio" onClick={closeMenu} aria-label="NÚCLEO, inicio">
          NÚCLEO
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-label="Abrir o cerrar menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Navegación principal">
          <a href="#clases" onClick={closeMenu}>Clases</a>
          <a href="#planes" onClick={closeMenu}>Planes</a>
          <a href="#horarios" onClick={closeMenu}>Horarios</a>
          <a href="#ubicacion" onClick={closeMenu}>Ubicación</a>
          <a className="header__mobile-cta" href="#contacto" onClick={closeMenu}>Solicitar clase de prueba</a>
        </nav>

        <a className="header__button" href="#contacto">Solicitar clase de prueba</a>
      </div>
    </header>
  )
}

export default Header
