import { cn } from '@/lib/utils'
import {
  Accordion as AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion.jsx'

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

export default function Accordion({ items }) {
  return (
    <AccordionRoot type="multiple" className="space-y-2">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>
            <div className="flex items-center gap-3 text-left">
              <span
                className={cn(
                  'w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0',
                  ICON_BG[item.bg] ?? 'bg-muted'
                )}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="font-semibold text-sm text-foreground">{item.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
              <p dangerouslySetInnerHTML={{ __html: item.body }} />
              {item.extra && (
                <div
                  className="pt-1 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: item.extra }}
                />
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
