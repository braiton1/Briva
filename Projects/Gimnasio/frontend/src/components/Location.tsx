import './Location.css'

function Location() {
  return (
    <section className="location content-section" id="ubicacion">
      <div className="location__layout section-shell">
        <div className="location__info">
          <div className="section-heading">
            <span>Estamos cerca</span>
            <h2>¿Dónde estamos?</h2>
            <p>
              En una zona cómoda y conectada, para que llegar a entrenar sea la
              parte más fácil de tu día.
            </p>
          </div>

          <div className="location__details">
            <div>
              <span>Ubicación conceptual</span>
              <strong>Palermo, Ciudad de Buenos Aires</strong>
            </div>
            <div>
              <span>Horarios de atención</span>
              <strong>Lunes a viernes de 6:30 a 21:30</strong>
              <small>Sábados de 9:00 a 13:00</small>
            </div>
          </div>

          <p className="location__note">
            La dirección es ilustrativa porque NÚCLEO es un proyecto conceptual.
          </p>
        </div>

        <div className="location__map" aria-label="Mapa conceptual de la ubicación de NÚCLEO">
          <span className="location__road location__road--one" />
          <span className="location__road location__road--two" />
          <span className="location__road location__road--three" />
          <span className="location__road location__road--four" />
          <div className="location__pin" aria-hidden="true"><span /></div>
          <div className="location__label"><strong>NÚCLEO</strong><small>Training</small></div>
        </div>
      </div>
    </section>
  )
}

export default Location
