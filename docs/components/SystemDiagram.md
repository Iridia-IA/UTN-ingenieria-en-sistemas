# SystemDiagram

Diagrama visual del flujo de un sistema (Entrada → Proceso → Salida → Control), con flecha de retroalimentación. Específico de la Clase 1 de Sistemas de la Información.

## Uso

```jsx
import SystemDiagram from '../components/SystemDiagram.jsx'

<SystemDiagram />
```

No recibe props — el contenido es fijo.

## Cómo activarlo en una clase

En los datos de la clase, declarar:

```js
meta: {
  customSections: ['systemDiagram'],
}
```

`ClassView.jsx` lo renderiza automáticamente con el título "¿Cómo funciona un sistema? (diagrama)".

## Cómo agregar un diagrama nuevo

1. Crear `src/components/MiDiagrama.jsx`
2. Registrarlo en `src/views/ClassView.jsx`:
   ```js
   const CUSTOM_SECTIONS = {
     systemDiagram: ...,
     miDiagrama: { title: 'Mi diagrama', component: <MiDiagrama /> },
   }
   ```
3. Usar `customSections: ['miDiagrama']` en los datos de la clase
