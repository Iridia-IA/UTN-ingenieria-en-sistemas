# Estructura de datos de una clase

Cada clase es un objeto JS exportado desde `src/data/<materia>/claseN.js`.
Todos los campos son opcionales excepto `id` y `meta`.

```js
export const claseN = {
  id: 'clase1',               // único dentro de la materia

  meta: {
    num: 'Clase 1',
    unit: 'Unidad 1',
    title: 'Título de la clase',
    description: 'Descripción breve para las cards y el hero.',
    tags: ['Tag1', 'Tag2'],   // máximo 3, se muestran en la card
    customSections: [],       // IDs de secciones especiales (ver adding-content.md)
  },

  // ── Conceptos clave (Accordion) ───────────────────────────────
  concepts: [
    {
      id: 'concepto-unico',   // string único dentro del array
      icon: '🔷',
      bg: 'bg-indigo',        // clase CSS de color (ver tokens abajo)
      title: 'Nombre del concepto',
      body: 'Explicación principal. Puede tener <strong>HTML</strong>.',
      extra: 'Ejemplo o detalle adicional. Opcional.',
    },
  ],

  // ── Quiz ──────────────────────────────────────────────────────
  quiz: {
    multiple: [
      {
        question: 'Texto de la pregunta',
        options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
        correct: 0,            // índice (0-based) de la opción correcta
        explanation: 'Por qué esa es la correcta.',
      },
    ],
    open: [
      {
        question: 'Pregunta de desarrollo.',
        modelAnswer: 'Respuesta modelo. Puede tener <strong>HTML</strong>.',
      },
    ],
  },

  // ── Flashcards ────────────────────────────────────────────────
  flashcards: [
    {
      q: 'Pregunta',
      a: 'Respuesta. Puede tener <strong>HTML</strong>.',
    },
  ],

  // ── Timeline ─────────────────────────────────────────────────
  timeline: [
    {
      icon: '🏫',
      bg: 'bg-indigo',        // clase CSS de color
      title: 'Tema tratado',
      desc: 'Descripción breve de lo que se vio.',
    },
  ],

  // ── Glosario ─────────────────────────────────────────────────
  glossary: [
    {
      term: 'Término',
      def: 'Definición en texto plano.',
    },
  ],
}
```

## Tokens de color disponibles para `bg`

| Clase CSS   | Color de fondo |
|-------------|----------------|
| `bg-indigo` | Indigo claro (primario) |
| `bg-purple` | Violeta claro |
| `bg-green`  | Verde claro |
| `bg-amber`  | Amarillo/naranja claro |
| `bg-rose`   | Rosa claro |
| `bg-sky`    | Celeste claro |
| `bg-teal`   | Teal claro |
| `bg-blue`   | Azul claro |
