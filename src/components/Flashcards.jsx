import { useState } from 'react'
import { Button } from './ui/button.jsx'
import { cn } from '@/lib/utils'

export default function Flashcards({ cards }) {
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped]   = useState(false)

  function next()  { setCurrent((c) => (c + 1) % cards.length); setFlipped(false) }
  function prev()  { setCurrent((c) => (c - 1 + cards.length) % cards.length); setFlipped(false) }
  function flip()  { setFlipped((f) => !f) }

  const card = cards[current]

  return (
    <div className="space-y-3">
      {/* Card */}
      <div
        className="perspective-1200 h-52 cursor-pointer select-none"
        role="button"
        tabIndex={0}
        aria-label="Tarjeta de repaso. Presioná Enter para voltear."
        onClick={flip}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && flip()}
      >
        <div className={cn('relative w-full h-full preserve-3d transition-flip', flipped && 'rotate-y-180')}>
          {/* Front */}
          <div className="absolute inset-0 backface-hidden rounded-xl border border-border bg-gradient-to-br from-secondary to-violet-50 shadow-sm flex flex-col items-center justify-center p-6 text-center">
            <span className="text-xs text-muted-foreground font-medium mb-3 uppercase tracking-wide">
              Pregunta — clic para voltear
            </span>
            <p className="font-bold text-foreground text-base leading-snug">{card.q}</p>
          </div>
          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-border bg-card shadow-sm flex flex-col items-center justify-center p-6 text-center">
            <span className="text-xs text-muted-foreground font-medium mb-3 uppercase tracking-wide">
              Respuesta
            </span>
            <p
              className="text-sm text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: card.a }}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-3">
        <Button variant="outline" size="sm" onClick={prev} aria-label="Anterior">← Anterior</Button>
        <span
          className="text-xs text-muted-foreground min-w-[40px] text-center"
          aria-live="polite"
          aria-atomic="true"
        >
          {current + 1} / {cards.length}
        </span>
        <Button variant="outline" size="sm" onClick={next} aria-label="Siguiente">Siguiente →</Button>
      </div>
    </div>
  )
}
