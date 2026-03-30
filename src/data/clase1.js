export const clase1 = {
  meta: {
    num: 'Clase 1',
    unit: 'Unidad 1',
    title: 'Introducción a la carrera & Teoría General de Sistemas',
    description:
      'Primeros conceptos de la materia: incumbencias profesionales, qué es un sistema, sus elementos y propiedades clave como homeostasis y entropía.',
    tags: ['Sistema', 'Entropía', 'Homeostasis'],
  },

  concepts: [
    {
      id: 'sistema',
      icon: '🔷',
      bg: 'bg-indigo',
      title: 'Sistema',
      body: 'Conjunto de elementos interrelacionados que forman un todo organizado, rodeado por un <strong>ambiente</strong>. Todo sistema pertenece a un sistema mayor (supersistema) y contiene sistemas menores (subsistemas).',
      extra: '<strong>Ejemplos:</strong> el sistema nervioso, un sistema administrativo, una empresa, una app de gestión.',
    },
    {
      id: 'homeostasis',
      icon: '⚖️',
      bg: 'bg-green',
      title: 'Homeostasis',
      body: 'Capacidad de un sistema de <strong>mantener su equilibrio interno</strong> frente a cambios del entorno. Es lo que permite la supervivencia: si algo se desequilibra, el sistema actúa para compensarlo.',
      extra: '<strong>Ejemplo real:</strong> durante la pandemia, las organizaciones que sobrevivieron fueron las que lograron adaptar su equilibrio interno al nuevo entorno.',
    },
    {
      id: 'entropia',
      icon: '🌀',
      bg: 'bg-rose',
      title: 'Entropía',
      body: 'Tendencia natural de todo sistema al <strong>desorden y la pérdida de energía</strong>. Sin acción correctiva, los sistemas se degradan. Los sistemas de información existen, en parte, para contrarrestar la entropía.',
      extra: '<strong>Ejemplo cotidiano:</strong> una habitación tiende al desorden por sí sola (entropía). Ordenarla requiere energía para contrarrestarla.',
    },
    {
      id: 'control',
      icon: '🎛️',
      bg: 'bg-amber',
      title: 'Control y Retroalimentación',
      body: 'El <strong>control</strong> compara la salida real contra un estándar esperado y actúa si hay desvío. El <strong>feedback</strong> es la información que vuelve al sistema para ajustar su entrada.',
      extra: '<ul><li><strong>Control:</strong> "¿Salió lo que esperaba? ¿Hay desvío?"</li><li><strong>Feedback:</strong> "Así está el resultado — ajustá la entrada."</li></ul><p style="margin-top:.5rem">Sin control, no podés saber si el sistema cumple sus objetivos.</p>',
    },
    {
      id: 'ambiente',
      icon: '🌐',
      bg: 'bg-teal',
      title: 'Ambiente / Entorno',
      body: 'Todo sistema existe dentro de un <strong>ambiente externo</strong> que lo afecta y al que también puede influir. El sistema debe adaptarse al entorno para sobrevivir. Depender demasiado del entorno genera vulnerabilidad.',
    },
    {
      id: 'sinergia',
      icon: '🤝',
      bg: 'bg-sky',
      title: 'Sinergia',
      body: 'El resultado del sistema como todo es <strong>mayor que la suma de sus partes</strong>. Cuando cada componente cumple su rol específico, el conjunto logra más que si cada uno actuara solo.',
      extra: '<strong>Ejemplo:</strong> un equipo de desarrollo donde cada integrante tiene un rol claro produce más que si todos hacen lo mismo.',
    },
    {
      id: 'subsistemas',
      icon: '🏗️',
      bg: 'bg-purple',
      title: 'Subsistemas y Supersistema',
      body: 'Todo sistema tiene sistemas menores dentro (<strong>subsistemas</strong>) y pertenece a un sistema mayor (<strong>supersistema</strong>). La definición del límite del sistema es una <em>decisión del analista</em>, no algo fijo.',
      extra: '<strong>Ejemplo:</strong> el área de RRHH es subsistema de la empresa, que a su vez es subsistema de la economía nacional.',
    },
  ],

  flashcards: [
    {
      q: '¿Cuál es la diferencia entre datos e información?',
      a: 'Los <strong>datos</strong> son hechos crudos sin contexto. La <strong>información</strong> es el resultado de procesar datos de forma significativa para quien la recibe. La salida de un sistema puede ser dato para otro.',
    },
    {
      q: '¿Qué es la homeostasis en un sistema?',
      a: 'Es la capacidad del sistema de <strong>mantener su equilibrio interno</strong> frente a cambios del entorno. Sin homeostasis, el sistema no puede sobrevivir a las perturbaciones externas.',
    },
    {
      q: '¿Qué es la entropía y cómo se combate?',
      a: 'La entropía es la tendencia de todo sistema al <strong>desorden y pérdida de energía</strong>. Se combate con neguentropía: procesos claros, control y sistemas de información que hacen los resultados predecibles.',
    },
    {
      q: '¿Cuál es la diferencia entre control y feedback?',
      a: '<strong>Control:</strong> compara la salida con un estándar y detecta desvíos.<br/><strong>Feedback:</strong> envía información de regreso al sistema para ajustar su comportamiento. El control actúa; el feedback informa.',
    },
    {
      q: '¿Qué significa sinergia en sistemas?',
      a: 'Que el resultado del <strong>sistema como todo supera la suma de sus partes</strong>. Cada elemento cumple un rol específico para potenciar el resultado global.',
    },
    {
      q: '¿Qué es una incumbencia profesional?',
      a: 'Son las <strong>actividades habilitadas legalmente</strong> para un título profesional. Las "actividades reservadas" son exclusivas de la profesión y no pueden ser realizadas por otras titulaciones.',
    },
  ],

  timeline: [
    {
      icon: '🏫',
      bg: 'bg-indigo',
      title: 'Presentación de la materia',
      desc: 'Sistemas de comunicación, herramientas (WhatsApp, plataforma web), subida de materiales y sistema de asistencia.',
    },
    {
      icon: '🎯',
      bg: 'bg-green',
      title: 'Perfil e incumbencias del profesional',
      desc: 'Qué puede hacer un Ingeniero en Sistemas de la Información: actividades reservadas, diferencia con otras profesiones, rol en la toma de decisiones estratégicas.',
    },
    {
      icon: '🔷',
      bg: 'bg-purple',
      title: 'Concepto de Sistema',
      desc: 'Definición, elementos (entrada, proceso, salida), ambiente, subsistemas y supersistema. La delimitación del sistema es una decisión del analista.',
    },
    {
      icon: '⚙️',
      bg: 'bg-amber',
      title: 'Control y Feedback',
      desc: 'Importancia de comparar resultados con estándares. Control previo y posterior. El feedback como mecanismo de ajuste continuo.',
    },
    {
      icon: '🌀',
      bg: 'bg-rose',
      title: 'Homeostasis y Entropía',
      desc: 'Los sistemas tienden al desorden (entropía) y buscan mantener el equilibrio (homeostasis). Los SI ayudan a que los procesos sean predecibles y ordenados.',
    },
    {
      icon: '🤝',
      bg: 'bg-teal',
      title: 'Sinergia y roles en equipos',
      desc: 'El resultado del conjunto supera al de las partes individuales. Importancia de que cada integrante tenga un rol claro y adecuado.',
    },
  ],

  glossary: [
    { term: 'Sistema',                  def: 'Conjunto de elementos interrelacionados con un objetivo en común, rodeado por un ambiente.' },
    { term: 'Homeostasis',              def: 'Estado de equilibrio interno que el sistema busca mantener ante perturbaciones externas.' },
    { term: 'Entropía',                 def: 'Tendencia natural al desorden y pérdida de energía en todo sistema. Requiere energía para ser contrarrestada.' },
    { term: 'Retroalimentación',        def: 'Información que vuelve desde la salida al proceso de entrada para ajustar el comportamiento del sistema.' },
    { term: 'Sinergia',                 def: 'El todo produce más que la suma de sus partes cuando cada elemento cumple su función específica.' },
    { term: 'Incumbencia profesional',  def: 'Actividades que legalmente puede realizar un profesional según su título. Las "reservadas" son exclusivas del título.' },
    { term: 'CONEAU',                   def: 'Comisión Nacional de Evaluación y Acreditación Universitaria. Certifica que las carreras cumplen estándares de calidad académica.' },
  ],
}
