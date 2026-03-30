import { subjects } from '../data/subjects.js'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { cn } from '@/lib/utils'

const TAG_VARIANT_MAP = { '': 'indigo', purple: 'purple', green: 'green', amber: 'amber' }
const ICON_BG = {
  'bg-indigo': 'bg-indigo-100',
  'bg-purple': 'bg-violet-100',
  'bg-green':  'bg-emerald-100',
  'bg-amber':  'bg-amber-100',
  'bg-rose':   'bg-rose-100',
  'bg-sky':    'bg-sky-100',
  'bg-teal':   'bg-teal-100',
}

export default function SubjectHome({ subjectId, onNavigate }) {
  const subject = subjects.find((s) => s.id === subjectId)
  if (!subject) return null

  const totalConcepts = subject.classes.reduce((a, c) => a + (c.concepts?.length ?? 0), 0)
  const totalCards    = subject.classes.reduce((a, c) => a + (c.flashcards?.length ?? 0), 0)
  const totalQuiz     = subject.classes.reduce((a, c) => a + (c.quiz?.multiple?.length ?? 0) + (c.quiz?.open?.length ?? 0), 0)

  return (
    <>
      {/* Hero */}
      <div className="rounded-2xl p-7 md:p-10 mb-8 text-white flex items-start gap-5" style={{ background: subject.gradient }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 bg-white/15" aria-hidden="true">
          {subject.icon}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest opacity-75 mb-1">
            Materia · {subject.year}° Año
          </p>
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">{subject.name}</h1>
          <p className="opacity-90 text-sm max-w-prose">{subject.description}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list">
        {[
          { num: subject.classes.length, label: 'Clases' },
          { num: totalConcepts,          label: 'Conceptos' },
          { num: totalCards,             label: 'Flashcards' },
          { num: totalQuiz,              label: 'Preguntas de examen' },
        ].map(({ num, label }) => (
          <div key={label} className="bg-card border border-border rounded-xl p-4 shadow-sm" role="listitem">
            <div className="text-3xl font-extrabold text-primary">{num}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Class cards */}
      <h2 className="text-sm font-bold text-foreground mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-border">
        Clases
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {subject.classes.map((clase) => {
          const nConcepts = clase.concepts?.length ?? 0
          const nCards    = clase.flashcards?.length ?? 0
          const nQuiz     = (clase.quiz?.multiple?.length ?? 0) + (clase.quiz?.open?.length ?? 0)

          return (
            <button
              key={clase.id}
              onClick={() => onNavigate({ view: 'class', subjectId: subject.id, classId: clase.id })}
              className="text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
              aria-label={`Abrir ${clase.meta.num}`}
            >
              <Card className="overflow-hidden transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 h-full">
                <div className="h-1.5" style={{ background: subject.gradient }} />
                <CardContent className="pt-4 pb-5 px-5">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                    {clase.meta.num} · {clase.meta.unit}
                  </p>
                  <h3 className="font-bold text-sm leading-snug mb-2">{clase.meta.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{clase.meta.description}</p>

                  {/* Mini stats */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                    {nConcepts > 0 && <Badge variant="secondary" className="text-xs">🔷 {nConcepts} conceptos</Badge>}
                    {nCards    > 0 && <Badge variant="secondary" className="text-xs">🃏 {nCards} flashcards</Badge>}
                    {nQuiz     > 0 && <Badge variant="secondary" className="text-xs">📝 {nQuiz} preguntas</Badge>}
                  </div>

                  {/* Tags */}
                  {clase.meta.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {clase.meta.tags.map((tag, i) => {
                        const variants = ['indigo', 'purple', 'green', 'amber']
                        return <Badge key={tag} variant={variants[i] ?? 'secondary'} className="text-xs">{tag}</Badge>
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </button>
          )
        })}
      </div>

      {/* Overview info cards */}
      {subject.overview?.infoCards?.length > 0 && (
        <>
          <h2 className="text-sm font-bold text-foreground mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-border">
            Sobre la materia
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subject.overview.infoCards.map((card) => (
              <Card key={card.title} className="shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0', ICON_BG[card.bg] ?? 'bg-muted')} aria-hidden="true">
                      {card.icon}
                    </div>
                    <CardTitle className="text-sm font-bold leading-snug">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {card.text && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: card.text }} />
                  )}
                  {card.bullets && (
                    <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-4 mb-3">
                      {card.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                  {card.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {card.tags.map((t) => (
                        <Badge key={t.label} variant={TAG_VARIANT_MAP[t.color ?? ''] ?? 'secondary'} className="text-xs">
                          {t.label}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  )
}
