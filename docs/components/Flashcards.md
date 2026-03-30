# Flashcards

Tarjetas con animación de flip para repaso rápido de definiciones.

## Uso

```jsx
import Flashcards from '../components/Flashcards.jsx'

<Flashcards cards={flashcards} />
```

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `cards` | `Card[]` | Array de tarjetas |

## Tipo `Card`

```ts
{
  q: string   // pregunta (texto plano)
  a: string   // respuesta (puede contener HTML)
}
```

## Comportamiento

- Clic o Enter/Espacio voltea la tarjeta (animación 3D)
- Botones Anterior/Siguiente navegan entre tarjetas
- Al cambiar de tarjeta, se resetea automáticamente al lado de la pregunta
- Contador `X / N` con `aria-live` para accesibilidad
