const Arrow = () => (
  <div className="flex items-center text-primary shrink-0">
    <svg width="28" height="14" viewBox="0 0 32 16" fill="none" aria-hidden="true">
      <path d="M0 8 H26 M22 3 L28 8 L22 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

const DiagBox = ({ icon, label, name, className = '' }) => (
  <div className={`border-2 border-primary/30 bg-secondary/60 rounded-xl px-4 py-3 text-center min-w-[110px] ${className}`}>
    <div className="text-2xl mb-1">{icon}</div>
    <div className="text-[10px] font-bold text-primary uppercase tracking-wide">{label}</div>
    <div className="text-xs font-semibold text-foreground mt-0.5">{name}</div>
  </div>
)

export default function SystemDiagram() {
  return (
    <div
      className="rounded-2xl border border-border bg-card p-5 overflow-x-auto shadow-sm"
      role="img"
      aria-label="Diagrama de los componentes de un sistema: entrada, proceso, salida, control y retroalimentación"
    >
      <div className="relative pb-10" style={{ minWidth: 560 }}>
        <div className="flex items-center justify-center gap-2">
          <DiagBox icon="📥" label="Entrada" name="Datos / Recursos" />
          <Arrow />
          <div className="border-2 border-transparent rounded-xl px-5 py-4 text-center min-w-[130px] text-white" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}>
            <div className="text-2xl mb-1">⚙️</div>
            <div className="text-[10px] font-bold uppercase tracking-wide opacity-80">Proceso</div>
            <div className="text-xs font-bold mt-0.5">Transformación</div>
          </div>
          <Arrow />
          <DiagBox icon="📤" label="Salida" name="Información" />
          <Arrow />
          <DiagBox icon="🎛️" label="Control" name="Comparación" className="border-amber-400 bg-amber-50 [&_.text-primary]:text-amber-700 [&_.text-foreground]:text-amber-900" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-dashed border-amber-400 rounded-full text-xs font-semibold text-amber-700">
            <span>↩</span> Retroalimentación (Feedback)
          </div>
        </div>
      </div>
    </div>
  )
}
