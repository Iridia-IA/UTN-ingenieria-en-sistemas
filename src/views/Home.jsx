import { subjects } from '../data/subjects.js'
import { Card, CardContent } from '../components/ui/card.jsx'
import { Badge } from '../components/ui/badge.jsx'

const YEAR_LABELS = { 1: '1° Año', 2: '2° Año', 3: '3° Año', 4: '4° Año', 5: '5° Año' }

export default function Home({ onNavigate }) {
  const totalClasses  = subjects.reduce((a, s) => a + s.classes.length, 0)
  const totalConcepts = subjects.reduce((a, s) => a + s.classes.reduce((b, c) => b + (c.concepts?.length ?? 0), 0), 0)
  const totalCards    = subjects.reduce((a, s) => a + s.classes.reduce((b, c) => b + (c.flashcards?.length ?? 0), 0), 0)

  return (
    <>
      {/* Hero */}
      <div className="rounded-2xl p-8 md:p-10 mb-8 text-white bg-gradient-to-br from-indigo-600 to-violet-600">
        <p className="text-xs font-bold uppercase tracking-widest opacity-75 mb-2">
          Ingeniería en Sistemas de la Información
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">
          Guía de estudio de la carrera
        </h1>
        <p className="opacity-90 text-sm max-w-prose">
          Todas tus materias en un solo lugar. Explorá clases, repasá conceptos y preparate para los exámenes.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list">
        {[
          { num: subjects.length, label: 'Materias' },
          { num: totalClasses,    label: 'Clases registradas' },
          { num: totalConcepts,   label: 'Conceptos clave' },
          { num: totalCards,      label: 'Flashcards' },
        ].map(({ num, label }) => (
          <div key={label} className="bg-card border border-border rounded-xl p-4 shadow-sm" role="listitem">
            <div className="text-3xl font-extrabold text-primary">{num}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Subjects */}
      <h2 className="text-sm font-bold text-foreground mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-border">
        Materias
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onNavigate({ view: 'subject', subjectId: subject.id })}
            className="text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
            aria-label={`Abrir ${subject.name}`}
          >
            <Card className="overflow-hidden transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5">
              <div className="h-1.5" style={{ background: subject.gradient }} />
              <CardContent className="pt-5 pb-5 px-5">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: subject.iconBg }}
                    aria-hidden="true"
                  >
                    {subject.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">{YEAR_LABELS[subject.year]}</Badge>
                </div>
                <h3 className="font-bold text-sm leading-snug mb-1.5">{subject.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{subject.description}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="indigo" className="text-xs">
                    {subject.classes.length} clase{subject.classes.length !== 1 ? 's' : ''}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </>
  )
}
