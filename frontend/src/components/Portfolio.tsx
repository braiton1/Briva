import './Portfolio.css'
import nucleoSite from '../assets/portfolio/nucleo-site.jpg'
import luminaSite from '../assets/portfolio/lumina-site.png'
import migaSite from '../assets/portfolio/miga-site.png'
import jarillaSite from '../assets/portfolio/jarilla-site.png'
import andinaSite from '../assets/portfolio/andina-site.png'

function Portfolio() {
  return (
    <section className="portfolio" id="proyectos">
      <div className="portfolio__intro">
        <div>
          <span>Portfolio Briva · Proyectos conceptuales</span>
          <h2>Una identidad propia para cada negocio.</h2>
        </div>
        <p>
          Adaptamos cada diseño a la identidad, el público y los objetivos de cada
          negocio para crear una experiencia realmente propia.
        </p>
      </div>

      <div className="portfolio__cases">
        <article className="case case--nucleo">
          <div className="case__copy">
            <span>01 · Entrenamiento y bienestar</span>
            <h3>NÚCLEO</h3>
            <p>Una página web enérgica y cercana para explicar clases, comparar planes, consultar horarios y convertir el interés en una conversación.</p>
            <div className="case__features"><small>Clases</small><small>Planes</small><small>Horarios</small><small>Ubicación</small></div>
            <a href="/demos/nucleo/">Explorar demo completa <b>→</b></a>
          </div>
          <a className="case__screen" href="/demos/nucleo/" aria-label="Abrir la demo completa de NÚCLEO">
            <img src={nucleoSite} alt="Entrenamiento funcional presentado en la página web de NÚCLEO" />
            <span className="case__screen-cta">Ver sitio completo ↗</span>
          </a>
        </article>

        <article className="case case--lumina">
          <div className="case__copy">
            <span>02 · Estética y bienestar</span>
            <h3>Lúmina</h3>
            <p>Una experiencia serena que transmite cuidado, presenta tratamientos y convierte el interés en una reserva por WhatsApp.</p>
            <ul><li>Tratamientos claros</li><li>Confianza profesional</li><li>Reserva directa</li></ul>
            <a href="/demos/lumina/">Explorar demo completa <b>→</b></a>
          </div>
          <a className="case__screen" href="/demos/lumina/" aria-label="Abrir la demo completa de Lúmina">
            <img src={luminaSite} alt="Portada real de la página web de Lúmina Estética" />
            <span className="case__screen-cta">Ver sitio completo ↗</span>
          </a>
        </article>

        <article className="case case--miga">
          <a className="case__screen" href="/demos/miga/" aria-label="Abrir la demo completa de Miga">
            <img src={migaSite} alt="Portada real de la página web de Miga Panadería" />
            <span className="case__screen-cta">Ver sitio completo ↗</span>
          </a>
          <div className="case__copy">
            <span>03 · Gastronomía</span>
            <h3>Miga.</h3>
            <p>Una vidriera cálida y directa donde los productos son protagonistas y pedir resulta tan simple como elegir.</p>
            <div className="case__features"><small>Carta visual</small><small>Historia</small><small>Pedidos</small></div>
            <a href="/demos/miga/">Explorar demo completa <b>→</b></a>
          </div>
        </article>

        <article className="case case--jarilla">
          <a className="case__screen" href="/demos/casa-jarilla/" aria-label="Abrir la demo completa de Casa Jarilla">
            <img src={jarillaSite} alt="Portada real de la página web turística de Casa Jarilla" />
            <span className="case__screen-cta">Ver sitio completo ↗</span>
          </a>
          <div className="case__copy">
            <span>04 · Turismo y alojamiento</span>
            <h3>Casa Jarilla</h3>
            <p>La experiencia empieza antes de viajar: paisaje, calma, servicios y una consulta de disponibilidad sin fricción.</p>
            <a href="/demos/casa-jarilla/">Explorar demo completa <b>→</b></a>
          </div>
        </article>

        <article className="case case--andina">
          <div className="case__copy">
            <span>05 · Reformas · San Rafael</span>
            <h3>Andina Reformas</h3>
            <p>Un sitio firme y ordenado para demostrar experiencia, explicar el proceso y recibir consultas con información útil desde el comienzo.</p>
            <ol><li>Servicios</li><li>Trabajos</li><li>Consulta guiada</li></ol>
            <a href="/demos/andina-reformas/">Explorar demo completa <b>→</b></a>
          </div>
          <a className="case__screen" href="/demos/andina-reformas/" aria-label="Abrir la demo completa de Andina Reformas">
            <img src={andinaSite} alt="Portada real de la página web de Andina Reformas" />
            <span className="case__screen-cta">Ver sitio completo ↗</span>
          </a>
        </article>
      </div>

      <div className="portfolio__closing">
        <span>¿Tu negocio es diferente?</span>
        <strong>Tu página también debería serlo.</strong>
        <a href="#contacto">Contanos tu idea</a>
      </div>
    </section>
  )
}

export default Portfolio
