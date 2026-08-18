const approvalSteps = [
  {
    number: '01',
    title: 'Nos contás sobre tu negocio',
    description: 'Acordamos el alcance, el precio y reunimos el logo, las fotografías y la información necesaria.',
  },
  {
    number: '02',
    title: 'Diseñamos una versión privada',
    description: 'La recorrés desde cualquier dispositivo y aplicamos hasta dos rondas de correcciones acordadas.',
  },
  {
    number: '03',
    title: 'Pagás al aprobar',
    description: 'Cuando la versión acordada está lista, realizás el pago y activamos tus canales de contacto reales.',
  },
  {
    number: '04',
    title: 'Publicamos tu página',
    description: 'Conectamos el dominio, hacemos las pruebas finales y la dejamos lista para compartir con tus clientes.',
  },
]

function ApprovalFirst() {
  return (
    <section className="approval-first" id="sin-anticipo">
      <div className="approval-first__intro">
        <div>
          <span className="approval-first__eyebrow">
            Sin anticipo · Cupos de lanzamiento
          </span>
          <h2>Primero ves tu página. Después la publicamos.</h2>
        </div>

        <div className="approval-first__summary">
          <p>
            Preparamos una versión privada con la información de tu negocio para
            que puedas revisarla antes de pagar.
          </p>
          <strong>
            El precio y el alcance se acuerdan por escrito. Briva confirma qué proyectos puede aceptar.
          </strong>
        </div>
      </div>

      <div className="approval-first__journey" aria-label="Proceso de aprobación y publicación">
        {approvalSteps.map((step) => (
          <article className="approval-step" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <div className="approval-first__footer">
        <p>
          <strong>No pagás un anticipo.</strong> La publicación definitiva se
          abona cuando la versión acordada está aprobada.
        </p>
        <a href="#contacto">Quiero reservar un cupo</a>
      </div>

      <small className="approval-first__note">
        Beneficio disponible para los primeros cinco proyectos seleccionados de Página Web Esencial. La
        demo privada no incluye dominio definitivo ni canales de contacto activos.
      </small>
    </section>
  )
}

export default ApprovalFirst
