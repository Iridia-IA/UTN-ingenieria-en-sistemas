# Accordion

Secciones expandibles para mostrar conceptos clave.

## Uso

```jsx
import Accordion from '../components/Accordion.jsx'

<Accordion items={concepts} />
```

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `items` | `ConceptItem[]` | Array de conceptos a mostrar |

## Tipo `ConceptItem`

```ts
{
  id:    string   // identificador único
  icon:  string   // emoji
  bg:    string   // clase CSS de color de fondo ('bg-indigo', 'bg-green', etc.)
  title: string   // título del concepto
  body:  string   // explicación principal (puede contener HTML)
  extra?: string  // detalle adicional, mostrado debajo del body (HTML)
}
```

## Comportamiento

- Cada item maneja su propio estado `open/closed` de forma independiente
- El icono de flecha rota 180° cuando está abierto
- `aria-expanded` se actualiza para accesibilidad
