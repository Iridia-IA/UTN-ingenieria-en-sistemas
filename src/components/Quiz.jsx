import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs.jsx'
import { Progress } from './ui/progress.jsx'
import { Button } from './ui/button.jsx'
import { Badge } from './ui/badge.jsx'
import { cn } from '@/lib/utils'

function MultipleQuestion({ data, onAnswer }) {
  const [selected, setSelected] = useState(null)

  function handleSelect(idx) {
    if (selected !== null) return
    setSelected(idx)
    onAnswer(idx === data.correct)
  }

  function optionStyle(idx) {
    if (selected === null)      return 'border-border hover:border-primary hover:bg-secondary/50'
    if (idx === data.correct)   return 'border-emerald-400 bg-emerald-50 text-emerald-900'
    if (idx === selected)       return 'border-rose-400 bg-rose-50 text-rose-900'
    return 'border-border opacity-40 cursor-default'
  }

  function letterStyle(idx) {
    if (selected === null)      return 'bg-muted text-muted-foreground'
    if (idx === data.correct)   return 'bg-emerald-500 text-white'
    if (idx === selected)       return 'bg-rose-500 text-white'
    return 'bg-muted text-muted-foreground'
  }

  return (
    <div>
      <p className="font-bold text-base leading-snug mb-4">{data.question}</p>
      <div className="space-y-2 mb-4">
        {data.options.map((opt, i) => (
          <button
            key={i}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm text-left transition-all',
              optionStyle(i)
            )}
            onClick={() => handleSelect(i)}
            disabled={selected !== null}
          >
            <span className={cn('w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors', letterStyle(i))}>
              {String.fromCharCode(65 + i)}
            </span>
            {opt}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div
          className={cn(
            'rounded-xl px-4 py-3 text-sm font-medium mb-2',
            selected === data.correct
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          )}
          role="alert"
        >
          <span className="font-bold">{selected === data.correct ? '✓ Correcto' : '✗ Incorrecto'}</span>
          {data.explanation && <p className="font-normal mt-1 opacity-90">{data.explanation}</p>}
        </div>
      )}
    </div>
  )
}

function OpenQuestion({ data }) {
  const [revealed, setRevealed]   = useState(false)
  const [assessed, setAssessed]   = useState(null)

  return (
    <div>
      <p className="font-bold text-base leading-snug mb-4">{data.question}</p>
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="w-full py-3.5 border-2 border-dashed border-border rounded-xl text-sm font-semibold text-primary hover:border-primary hover:bg-secondary/50 transition-all"
        >
          Ver respuesta modelo
        </button>
      ) : (
        <div className="space-y-3">
          <div className="rounded-xl border border-border bg-muted/40 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Respuesta modelo</p>
            <p
              className="text-sm text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.modelAnswer }}
            />
          </div>
          {assessed === null ? (
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-semibold text-muted-foreground">¿Lo tenías?</span>
              <Button size="sm" variant="outline" onClick={() => setAssessed(true)}  className="border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700">✓ Sí</Button>
              <Button size="sm" variant="outline" onClick={() => setAssessed(false)} className="border-rose-300 hover:bg-rose-50 hover:text-rose-700">✗ No del todo</Button>
            </div>
          ) : (
            <div className={cn('rounded-xl px-4 py-3 text-sm font-medium', assessed ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200')}>
              {assessed ? '¡Bien! Seguí repasando los demás conceptos.' : 'Repasá este concepto — volvé a los conceptos clave.'}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function ScoreScreen({ score, total, onRestart }) {
  const pct   = Math.round((score / total) * 100)
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'
  const msg   = pct >= 80 ? '¡Excelente dominio del tema!' : pct >= 60 ? 'Buen progreso, repasá las incorrectas.' : 'Reforzá estos conceptos antes del parcial.'
  const color = pct >= 80 ? 'text-emerald-600' : pct >= 60 ? 'text-amber-600' : 'text-rose-600'

  return (
    <div className="text-center py-10 px-4">
      <div className="text-5xl mb-4" aria-hidden="true">{emoji}</div>
      <div className={cn('text-5xl font-extrabold mb-1', color)} aria-label={`${score} de ${total}`}>
        {score}<span className="text-2xl font-normal text-muted-foreground"> / {total}</span>
      </div>
      <p className="text-muted-foreground text-sm mb-1">{pct}% de respuestas correctas</p>
      <p className="font-semibold text-sm mb-6">{msg}</p>
      <Button variant="outline" onClick={onRestart}>Reintentar quiz</Button>
    </div>
  )
}

export default function Quiz({ multiple = [], open = [] }) {
  const [mcIndex,    setMcIndex]    = useState(0)
  const [mcScore,    setMcScore]    = useState(0)
  const [mcAnswered, setMcAnswered] = useState(false)
  const [mcDone,     setMcDone]     = useState(false)
  const [openIndex,  setOpenIndex]  = useState(0)

  function handleMcAnswer(correct) {
    if (correct) setMcScore((s) => s + 1)
    setMcAnswered(true)
  }

  function handleMcNext() {
    if (mcIndex + 1 >= multiple.length) { setMcDone(true); return }
    setMcIndex((i) => i + 1)
    setMcAnswered(false)
  }

  function restartMc() {
    setMcIndex(0); setMcScore(0); setMcAnswered(false); setMcDone(false)
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
      <Tabs defaultValue="multiple">
        <div className="px-5 pt-4 pb-0 border-b border-border">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="multiple" className="flex-1 sm:flex-none gap-2">
              Opción múltiple
              <Badge variant="secondary" className="text-xs">{multiple.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="open" className="flex-1 sm:flex-none gap-2">
              Desarrollo
              <Badge variant="secondary" className="text-xs">{open.length}</Badge>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Multiple choice */}
        <TabsContent value="multiple" className="mt-0 p-5">
          {mcDone ? (
            <ScoreScreen score={mcScore} total={multiple.length} onRestart={restartMc} />
          ) : (
            <div>
              <div className="mb-5 space-y-1.5">
                <div className="flex justify-between text-xs text-muted-foreground font-medium">
                  <span>Pregunta {mcIndex + 1} de {multiple.length}</span>
                  <span>{mcScore} correcta{mcScore !== 1 ? 's' : ''}</span>
                </div>
                <Progress value={((mcIndex + 1) / multiple.length) * 100} />
              </div>
              <MultipleQuestion key={mcIndex} data={multiple[mcIndex]} onAnswer={handleMcAnswer} />
              {mcAnswered && (
                <Button className="mt-4 w-full sm:w-auto" onClick={handleMcNext}>
                  {mcIndex + 1 >= multiple.length ? 'Ver resultados →' : 'Siguiente →'}
                </Button>
              )}
            </div>
          )}
        </TabsContent>

        {/* Open questions */}
        <TabsContent value="open" className="mt-0 p-5">
          <div className="mb-5 space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground font-medium">
              <span>Pregunta {openIndex + 1} de {open.length}</span>
            </div>
            <Progress value={((openIndex + 1) / open.length) * 100} />
          </div>
          <OpenQuestion key={openIndex} data={open[openIndex]} />
          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm" onClick={() => setOpenIndex((i) => i - 1)} disabled={openIndex === 0}>← Anterior</Button>
            <Button variant="outline" size="sm" onClick={() => setOpenIndex((i) => i + 1)} disabled={openIndex + 1 >= open.length}>Siguiente →</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
