# Timeline

Línea de tiempo vertical que muestra el recorrido de una clase.

## Uso

```jsx
import Timeline from '../components/Timeline.jsx'

<Timeline items={timeline} />
```

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `items` | `TimelineItem[]` | Array de ítems en orden cronológico |

## Tipo `TimelineItem`

```ts
{
  icon:  string   // emoji que aparece en el círculo
  bg:    string   // clase CSS de color ('bg-indigo', 'bg-green', etc.)
  title: string   // título del momento
  desc:  string   // descripción breve (texto plano)
}
```

## Comportamiento

- Línea vertical conecta todos los ítems
- Cada ítem tiene un círculo con ícono y un card de contenido
- Puramente visual, sin interacción
