# Guía de estudio — Documentación

App de estudio interactiva para la carrera de Ingeniería en Sistemas de la Información.

## Estructura del proyecto

```
src/
├── App.jsx                          ← Navegación global (home / materia / clase)
├── index.css                        ← Design system completo
├── data/
│   ├── subjects.js                  ← Registro de todas las materias
│   └── <slug-materia>/
│       ├── clase1.js                ← Contenido de cada clase
│       └── clase2.js
├── components/                      ← Componentes reutilizables
│   ├── Header.jsx
│   ├── Accordion.jsx
│   ├── Flashcards.jsx
│   ├── Quiz.jsx
│   ├── SystemDiagram.jsx
│   └── Timeline.jsx
└── views/
    ├── Home.jsx                     ← Pantalla principal (grilla de materias)
    ├── SubjectHome.jsx              ← Vista de una materia (lista de clases)
    └── ClassView.jsx                ← Vista genérica de clase
```

## Flujo de navegación

```
Home  →  SubjectHome  →  ClassView
 (/)       /materia        /materia/clase
```

El estado de navegación vive en `App.jsx` como un objeto:

```js
{ view: 'home' }
{ view: 'subject', subjectId: 'sistemas-informacion' }
{ view: 'class',   subjectId: 'sistemas-informacion', classId: 'clase1' }
```

## Agregar contenido nuevo

- **Nueva clase:** ver [adding-content.md](./adding-content.md)
- **Nueva materia:** ver [adding-content.md](./adding-content.md)
- **Estructura de datos:** ver [data-structure.md](./data-structure.md)

## Componentes disponibles

| Componente | Descripción |
|---|---|
| [Accordion](./components/Accordion.md) | Secciones expandibles para conceptos clave |
| [Flashcards](./components/Flashcards.md) | Tarjetas con flip para repaso rápido |
| [Quiz](./components/Quiz.md) | Preguntas de opción múltiple + desarrollo |
| [Timeline](./components/Timeline.md) | Línea de tiempo de lo visto en clase |
| [SystemDiagram](./components/SystemDiagram.md) | Diagrama visual de sistema (especial) |

## Deploy en Railway

1. `npm run build` — genera `dist/`
2. Push a GitHub
3. Railway: New Project → Deploy from GitHub
4. Build command: `npm run build` | Start command: `npm run preview`
