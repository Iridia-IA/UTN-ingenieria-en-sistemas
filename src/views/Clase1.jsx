import { clase1 } from '../data/clase1.js'
import Accordion from '../components/Accordion.jsx'
import Flashcards from '../components/Flashcards.jsx'
import SystemDiagram from '../components/SystemDiagram.jsx'
import Timeline from '../components/Timeline.jsx'

export default function Clase1() {
  const { meta, concepts, flashcards, timeline, glossary } = clase1

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero-label">{meta.num} · {meta.unit}</div>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </div>

      {/* Diagram */}
      <h2 className="section-title">¿Cómo funciona un sistema? (diagrama)</h2>
      <SystemDiagram />

      {/* Concepts */}
      <h2 className="section-title mt-4">Conceptos clave</h2>
      <div className="mb-3">
        <Accordion items={concepts} />
      </div>

      {/* Flashcards */}
      <h2 className="section-title mt-4">Flashcards — Repaso rápido</h2>
      <p className="mb-2" style={{ fontSize: '.875rem', color: 'var(--text-2)' }}>
        Hacé clic en la tarjeta para ver la respuesta.
      </p>
      <Flashcards cards={flashcards} />

      {/* Timeline */}
      <h2 className="section-title mt-4">Lo que se vio en la clase</h2>
      <Timeline items={timeline} />

      {/* Glossary */}
      <h2 className="section-title mt-4">Glosario rápido</h2>
      <div className="def-list">
        {glossary.map((item) => (
          <div key={item.term} className="def-item">
            <div>
              <span className="def-badge">Término</span>
            </div>
            <div>
              <dt>{item.term}</dt>
              <dd>{item.def}</dd>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
