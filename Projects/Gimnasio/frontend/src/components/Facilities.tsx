import facilitiesImage from '../assets/facilities-v1.jpg'

function Facilities() {
  return (
    <section className="facilities">
      <div className="section-shell">
        <div className="section-heading section-heading--light section-heading--center">
          <span>Un espacio pensado para moverte</span>
          <h2>Vení a conocernos</h2>
        </div>
        <img src={facilitiesImage} alt="Instalaciones conceptuales de NÚCLEO Training" />
      </div>
    </section>
  )
}

export default Facilities
