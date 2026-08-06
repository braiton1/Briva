function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <a className="footer__logo" href="/">
            Briva
          </a>

          <p>Presencia digital profesional para negocios que quieren avanzar.</p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>© {currentYear} Briva</span>
        <span>Diseñado y desarrollado con claridad.</span>
      </div>
    </footer>
  )
}

export default Footer