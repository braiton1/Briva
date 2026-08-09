import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header>
      <div className="header__container">
        <a className="header__logo" href="/" onClick={closeMenu}>
          Briva
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-label="Abrir o cerrar menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#proyectos" onClick={closeMenu}>
            Proyectos
          </a>

          <a href="#proceso" onClick={closeMenu}>
            Cómo trabajamos
          </a>

          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>

          <a
            className="header__button"
            href="#contacto"
            onClick={closeMenu}
          >
            Solicitar presupuesto
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
