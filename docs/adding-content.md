# Cómo agregar contenido nuevo

## Agregar una clase a una materia existente

1. Crear el archivo de datos en `src/data/<slug-materia>/claseN.js`
   Copiar la estructura de `clase1.js` como plantilla y completar el contenido.

2. Importar en `src/data/subjects.js`:

```js
import { claseN as si_claseN } from './sistemas-informacion/claseN.js'
```

3. Agregar al array `classes` de la materia correspondiente:

```js
classes: [si_clase1, si_claseN],
```

Listo. El componente `ClassView.jsx` renderiza automáticamente cualquier clase que siga la estructura de datos.

---

## Agregar una materia nueva

1. Crear la carpeta `src/data/<slug-materia>/`

2. Crear el primer archivo de clase: `src/data/<slug-materia>/clase1.js`

3. En `src/data/subjects.js`, importar y agregar la materia:

```js
import { clase1 as nueva_clase1 } from './<slug-materia>/clase1.js'

export const subjects = [
  // ... materias existentes ...
  {
    id: '<slug-materia>',
    name: 'Nombre completo de la materia',
    shortName: 'Nombre corto',
    icon: '📐',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    iconBg: '#E0F2FE',
    year: 1,                    // año de cursado
    description: 'Descripción breve.',
    classes: [nueva_clase1],
  },
]
```

No hace falta crear ningún view nuevo — `SubjectHome.jsx` y `ClassView.jsx` son genéricos.

---

## Secciones especiales (diagramas custom)

Si una clase necesita un diagrama o componente visual especial que no es genérico:

1. Crear el componente en `src/components/MiDiagrama.jsx`

2. Registrarlo en `src/views/ClassView.jsx`:

```js
const CUSTOM_SECTIONS = {
  systemDiagram: { title: '...', component: <SystemDiagram /> },
  miDiagrama:    { title: 'Mi diagrama', component: <MiDiagrama /> },  // ← nuevo
}
```

3. Declararlo en los datos de la clase:

```js
meta: {
  customSections: ['miDiagrama'],
}
```
