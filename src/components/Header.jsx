import { subjects } from '../data/subjects.js'
import { Button } from './ui/button.jsx'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header({ nav, onNavigate }) {
  const subject = nav.subjectId ? subjects.find((s) => s.id === nav.subjectId) : null
  const clase   = subject?.classes.find((c) => c.id === nav.classId)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">

        {/* Logo */}
        <button
          onClick={() => onNavigate({ view: 'home' })}
          className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-none"
          aria-label="Inicio"
        >
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-xs font-bold shadow-sm group-hover:bg-primary/90 transition-colors">
            SI
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold leading-tight text-foreground">Guía de Estudio</div>
            <div className="text-xs text-muted-foreground">Ing. en Sistemas</div>
          </div>
        </button>

        {/* Breadcrumb */}
        {nav.view !== 'home' && subject && (
          <nav className="flex items-center gap-1 text-sm" aria-label="Ubicación">
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
            {nav.view === 'class' ? (
              <button
                onClick={() => onNavigate({ view: 'subject', subjectId: subject.id })}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium truncate max-w-[120px] sm:max-w-none"
              >
                {subject.shortName}
              </button>
            ) : (
              <span className="font-semibold text-foreground truncate max-w-[160px] sm:max-w-none">
                {subject.shortName}
              </span>
            )}
            {clase && (
              <>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="font-semibold text-foreground">{clase.meta.num}</span>
              </>
            )}
          </nav>
        )}

        {/* Class tabs */}
        {(nav.view === 'subject' || nav.view === 'class') && subject?.classes.length > 1 && (
          <nav className="flex gap-1 ml-auto overflow-x-auto scrollbar-none" aria-label="Clases">
            {subject.classes.map((c) => (
              <button
                key={c.id}
                onClick={() => onNavigate({ view: 'class', subjectId: subject.id, classId: c.id })}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors',
                  c.id === nav.classId
                    ? 'bg-secondary text-secondary-foreground font-semibold'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
                aria-current={c.id === nav.classId ? 'page' : undefined}
              >
                {c.meta.num}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
