import { views } from '../App.jsx'

const TAG_COLORS = ['', 'purple', 'green', 'amber']

export default function General({ onNavigate }) {
  // Stats are derived from the views list (minus 'general')
  const clases = views.filter((v) => v.id !== 'general')

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero-label">Ingeniería en Sistemas de la Información</div>
        <h1>Tu guía de estudio interactiva</h1>
        <p>
          Repasá conceptos, explorá las clases y reforzá tu aprendizaje con
          tarjetas y resúmenes organizados.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-row" role="list">
        <div className="stat-card" role="listitem">
          <div className="stat-num">{clases.length}</div>
          <div className="stat-label">Clase{clases.length !== 1 ? 's' : ''} registrada{clases.length !== 1 ? 's' : ''}</div>
        </div>
        <div className="stat-card" role="listitem">
          <div className="stat-num">8</div>
          <div className="stat-label">Conceptos clave</div>
        </div>
        <div className="stat-card" role="listitem">
          <div className="stat-num">6</div>
          <div className="stat-label">Flashcards</div>
        </div>
        <div className="stat-card" role="listitem">
          <div className="stat-num">1°</div>
          <div className="stat-label">Año de cursado</div>
        </div>
      </div>

      {/* Class list */}
      <h2 className="section-title">Clases disponibles</h2>
      <div className="grid-2 mb-3">
        {clases.map((view, i) => (
          <button
            key={view.id}
            className="class-card"
            onClick={() => onNavigate(view.id)}
            aria-label={`Ir a ${view.label}`}
          >
            <div className="class-card-banner" />
            <div className="class-card-body">
              <div className="class-num">{view.label.replace(/[^\w\s]/gi, '').trim()}</div>
              <h3>{view.cardTitle ?? view.label}</h3>
              <p>{view.cardDesc ?? 'Contenido de la clase.'}</p>
              {view.tags && (
                <div className="tags mt-1">
                  {view.tags.map((tag, ti) => (
                    <span key={tag} className={`tag ${TAG_COLORS[ti] ?? ''}`}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Career summary */}
      <h2 className="section-title mt-4">La carrera en síntesis</h2>
      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="card-icon bg-indigo" aria-hidden="true">🎓</div>
            <div>
              <h3>¿Qué hace un Ing. en Sistemas?</h3>
            </div>
          </div>
          <div className="card-body">
            <p>
              Combina <strong>tecnología, lógica y gestión</strong>. Abarca el
              diseño, desarrollo e implementación de sistemas de información, y
              la toma de decisiones estratégicas en organizaciones.
            </p>
            <div className="tags">
              <span className="tag">Tecnología</span>
              <span className="tag purple">Gestión</span>
              <span className="tag green">Decisiones</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon bg-green" aria-hidden="true">📋</div>
            <div>
              <h3>Principales incumbencias</h3>
            </div>
          </div>
          <div className="card-body">
            <ul style={{ paddingLeft: '1.2rem', fontSize: '.875rem', color: 'var(--text-2)', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
              <li>Participar en la toma de decisiones estratégicas</li>
              <li>Evaluar factibilidad de proyectos de SI</li>
              <li>Identificar, modelar y mejorar procesos de negocio</li>
              <li>Diseñar y desarrollar software con normas de calidad</li>
              <li>Asesorar en accesibilidad web y normativas vigentes</li>
              <li>Actuar como peritos en informática</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
