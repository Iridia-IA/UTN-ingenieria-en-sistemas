import { subjects } from '../data/subjects.js'
import Accordion from '../components/Accordion.jsx'
import Flashcards from '../components/Flashcards.jsx'
import Quiz from '../components/Quiz.jsx'
import SystemDiagram from '../components/SystemDiagram.jsx'
import Timeline from '../components/Timeline.jsx'
import { Badge } from '../components/ui/badge.jsx'

const CUSTOM_SECTIONS = {
  systemDiagram: {
    title: '¿Cómo funciona un sistema?',
    component: <SystemDiagram />,
  },
}

const TAG_VARIANTS = ['indigo', 'purple', 'green', 'amber']

function SectionTitle({ children }) {
  return (
    <h2 className="text-sm font-bold text-foreground mb-4 mt-8 flex items-center gap-3 after:flex-1 after:h-px after:bg-border">
      {children}
    </h2>
  )
}

export default function ClassView({ subjectId, classId }) {
  const subject = subjects.find((s) => s.id === subjectId)
  const clase   = subject?.classes.find((c) => c.id === classId)
  if (!clase) return null

  const { meta, concepts, flashcards, quiz, timeline, glossary } = clase

  return (
    <>
      {/* Hero */}
      <div className="rounded-2xl p-8 md:p-10 mb-8 text-white" style={{ background: subject.gradient }}>
        <p className="text-xs font-bold uppercase tracking-widest opacity-75 mb-2">
          {meta.num} · {meta.unit}
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">{meta.title}</h1>
        <p className="opacity-90 text-sm max-w-prose mb-4">{meta.description}</p>
        {meta.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag, i) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Custom sections */}
      {meta.customSections?.map((sectionId) => {
        const s = CUSTOM_SECTIONS[sectionId]
        if (!s) return null
        return (
          <div key={sectionId}>
            <SectionTitle>{s.title}</SectionTitle>
            {s.component}
          </div>
        )
      })}

      {/* Concepts */}
      {concepts?.length > 0 && (
        <>
          <SectionTitle>Conceptos clave</SectionTitle>
          <Accordion items={concepts} />
        </>
      )}

      {/* Quiz */}
      {(quiz?.multiple?.length > 0 || quiz?.open?.length > 0) && (
        <>
          <SectionTitle>Preguntas de examen</SectionTitle>
          <p className="text-sm text-muted-foreground -mt-2 mb-4">
            Practicá con preguntas de opción múltiple y de desarrollo antes del parcial.
          </p>
          <Quiz multiple={quiz.multiple ?? []} open={quiz.open ?? []} />
        </>
      )}

      {/* Flashcards */}
      {flashcards?.length > 0 && (
        <>
          <SectionTitle>Flashcards — Repaso rápido</SectionTitle>
          <p className="text-sm text-muted-foreground -mt-2 mb-4">
            Hacé clic en la tarjeta para ver la respuesta.
          </p>
          <Flashcards cards={flashcards} />
        </>
      )}

      {/* Timeline */}
      {timeline?.length > 0 && (
        <>
          <SectionTitle>Lo que se vio en la clase</SectionTitle>
          <Timeline items={timeline} />
        </>
      )}

      {/* Glossary */}
      {glossary?.length > 0 && (
        <>
          <SectionTitle>Glosario rápido</SectionTitle>
          <div className="space-y-2">
            {glossary.map((item) => (
              <div key={item.term} className="flex gap-4 items-start bg-card border border-border rounded-xl p-4 shadow-sm">
                <Badge variant="indigo" className="shrink-0 mt-0.5 text-xs">Término</Badge>
                <div>
                  <dt className="font-bold text-sm mb-0.5">{item.term}</dt>
                  <dd className="text-sm text-muted-foreground">{item.def}</dd>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
