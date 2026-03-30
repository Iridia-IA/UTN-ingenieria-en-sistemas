# Accordion

Secciones expandibles para mostrar conceptos clave. Wrappea el componente `Accordion` de shadcn/ui (Radix UI), que provee accesibilidad completa (`aria-expanded`, foco por teclado, animación CSS).

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
  id:     string   // identificador único (usado como value de Radix)
  icon:   string   // emoji mostrado en el círculo izquierdo
  bg:     string   // token de color (ver tabla en data-structure.md)
  title:  string   // título del concepto
  body:   string   // explicación principal (puede contener HTML)
  extra?: string   // detalle adicional debajo del body (HTML, opcional)
}
```

## Comportamiento

- Múltiples ítems pueden estar abiertos al mismo tiempo (`type="multiple"`)
- El ícono de flecha rota 180° cuando está abierto (animación CSS de Tailwind)
- Animación de apertura/cierre via `animate-accordion-down` / `animate-accordion-up` (keyframes definidos en `tailwind.config.js`)
- Accesibilidad manejada por Radix UI: `aria-expanded`, navegación por teclado, roles ARIA correctos

## Tokens de color (`bg`)

Los tokens se mapean internamente a clases de Tailwind. Ver tabla completa en [data-structure.md](../data-structure.md#tokens-de-color-disponibles-para-bg).
