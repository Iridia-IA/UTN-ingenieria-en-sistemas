# Quiz

Componente de preguntas de examen con dos modos: opción múltiple y desarrollo.

## Uso

```jsx
import Quiz from '../components/Quiz.jsx'

<Quiz multiple={quiz.multiple} open={quiz.open} />
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `multiple` | `MultipleQuestion[]` | `[]` | Preguntas de opción múltiple |
| `open` | `OpenQuestion[]` | `[]` | Preguntas de desarrollo |

## Tipo `MultipleQuestion`

```ts
{
  question:    string    // texto de la pregunta
  options:     string[]  // array de 4 opciones
  correct:     number    // índice (0-based) de la opción correcta
  explanation: string    // explicación que se muestra tras responder
}
```

## Tipo `OpenQuestion`

```ts
{
  question:    string   // texto de la pregunta
  modelAnswer: string   // respuesta modelo (puede contener HTML)
}
```

## Comportamiento

### Opción múltiple
- Preguntas de a una, con barra de progreso
- Feedback inmediato: verde = correcto, rojo = incorrecto
- Muestra la explicación al responder
- Pantalla final con puntaje (`X / N`) y mensaje motivador
- Botón para reintentar

### Desarrollo
- Muestra la pregunta
- Botón "Ver respuesta modelo" revela la respuesta
- Auto-evaluación: "¿Lo tenías? ✓ Sí / ✗ No del todo"
- Navegación entre preguntas con Anterior/Siguiente
