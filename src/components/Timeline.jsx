import { cn } from '@/lib/utils'

const ICON_BG = {
  'bg-indigo': 'bg-indigo-100',
  'bg-purple': 'bg-violet-100',
  'bg-green':  'bg-emerald-100',
  'bg-amber':  'bg-amber-100',
  'bg-rose':   'bg-rose-100',
  'bg-sky':    'bg-sky-100',
  'bg-teal':   'bg-teal-100',
  'bg-blue':   'bg-blue-100',
}

export default function Timeline({ items }) {
  return (
    <div className="relative space-y-0" role="list">
      {/* Vertical line */}
      <div className="absolute left-[17px] top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />
      {items.map((item, i) => (
        <div key={i} className="relative flex gap-4 pb-5" role="listitem">
          <div className={cn('w-9 h-9 rounded-full flex items-center justify-center text-base shrink-0 relative z-10', ICON_BG[item.bg] ?? 'bg-muted')} aria-hidden="true">
            {item.icon}
          </div>
          <div className="flex-1 bg-card border border-border rounded-xl p-4 shadow-sm">
            <h4 className="font-bold text-sm mb-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
