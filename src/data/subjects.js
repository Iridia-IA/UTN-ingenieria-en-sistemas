import { clase1 as si_clase1 } from './sistemas-informacion/clase1.js'

// ── Para agregar una materia nueva:
// 1. Crear src/data/<slug-materia>/clase1.js (etc.)
// 2. Importar las clases arriba
// 3. Agregar una entrada al array subjects abajo

export const subjects = [
  {
    id: 'sistemas-informacion',
    name: 'Sistemas de la Información y Procesos de Negocio',
    shortName: 'Sistemas de la Info',
    icon: '🖥️',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    iconBg: '#EEF2FF',
    year: 1,
    description: 'Fundamentos de sistemas de información, teoría general de sistemas y gestión de procesos de negocio.',
    classes: [si_clase1],

    // Contenido de la sección general de la materia
    overview: {
      infoCards: [
        {
          icon: '🎓',
          bg: 'bg-indigo',
          title: '¿Qué hace un Ing. en Sistemas?',
          text: 'Combina <strong>tecnología, lógica y gestión</strong>. Abarca el diseño, desarrollo e implementación de sistemas de información, y la participación en la toma de decisiones estratégicas dentro de las organizaciones.',
          tags: [
            { label: 'Tecnología' },
            { label: 'Gestión',    color: 'purple' },
            { label: 'Decisiones', color: 'green'  },
          ],
        },
        {
          icon: '📋',
          bg: 'bg-green',
          title: 'Principales incumbencias',
          bullets: [
            'Participar en la toma de decisiones estratégicas',
            'Evaluar factibilidad de proyectos de SI',
            'Identificar, modelar y mejorar procesos de negocio',
            'Diseñar y desarrollar software con normas de calidad',
            'Asesorar en accesibilidad web y normativas vigentes',
            'Actuar como peritos en informática',
          ],
        },
        {
          icon: '🔒',
          bg: 'bg-amber',
          title: 'Actividades reservadas',
          text: 'Las actividades reservadas son exclusivas del título de Ing. en Sistemas de la Información y no pueden ser ejercidas por otras profesiones. Incluyen el <strong>proyectar, dirigir e implementar</strong> sistemas que puedan afectar la seguridad, salud, bienes o derechos de las personas.',
          tags: [
            { label: 'Ley vigente', color: 'amber' },
            { label: 'CONEAU' },
          ],
        },
        {
          icon: '♿',
          bg: 'bg-teal',
          title: 'Accesibilidad e inclusión',
          text: 'El ingeniero tiene responsabilidad en el cumplimiento de <strong>normativas de accesibilidad web</strong>. Los organismos del Estado y sus contratistas deben garantizar sitios accesibles para todas las personas.',
          tags: [
            { label: 'WCAG', color: 'green' },
            { label: 'Diseño inclusivo', color: 'purple' },
          ],
        },
      ],
    },
  },

  // ── Próximas materias — descomentar y completar cuando agregues el contenido

  // {
  //   id: 'algebra',
  //   name: 'Álgebra y Geometría Analítica',
  //   shortName: 'Álgebra',
  //   icon: '📐',
  //   gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
  //   iconBg: '#E0F2FE',
  //   year: 1,
  //   description: 'Vectores, matrices, sistemas de ecuaciones y geometría analítica.',
  //   classes: [],
  //   overview: { infoCards: [] },
  // },
]
