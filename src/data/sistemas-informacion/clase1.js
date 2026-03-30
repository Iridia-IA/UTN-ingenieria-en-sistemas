export const clase1 = {
  id: 'clase1',
  meta: {
    num: 'Clase 1',
    unit: 'Unidad 1',
    title: 'Introducción a la carrera & Teoría General de Sistemas',
    description:
      'Primeros conceptos: incumbencias profesionales, definición de sistema, sus elementos y propiedades clave como homeostasis y entropía.',
    tags: ['Sistema', 'Entropía', 'Homeostasis'],
    customSections: ['systemDiagram'],
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
      body: 'Tendencia natural de todo sistema al <strong>desorden y la pérdida de energía</strong>. Sin acción correctiva, los sistemas se degradan. Los SI existen, en parte, para contrarrestar la entropía.',
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

  quiz: {
    multiple: [
      {
        question: '¿Cuál de los siguientes NO es un componente básico de un sistema?',
        options: ['Entrada', 'Proceso', 'Precio', 'Salida'],
        correct: 2,
        explanation: 'Los componentes son: entrada, proceso, salida y control. El precio no es un elemento sistémico.',
      },
      {
        question: 'La homeostasis en un sistema se refiere a...',
        options: [
          'La tendencia al desorden y pérdida de energía',
          'El equilibrio interno que el sistema mantiene ante cambios del entorno',
          'La capacidad de procesar grandes volúmenes de datos',
          'La división del sistema en subsistemas independientes',
        ],
        correct: 1,
        explanation: 'Homeostasis = equilibrio. Es lo que permite al sistema sobrevivir a perturbaciones externas.',
      },
      {
        question: '¿Qué propiedad describe la tendencia natural de los sistemas al desorden?',
        options: ['Homeostasis', 'Sinergia', 'Entropía', 'Feedback'],
        correct: 2,
        explanation: 'Entropía es la tendencia al desorden. Los sistemas de información existen para contrarrestarla generando orden y predictibilidad.',
      },
      {
        question: 'La sinergia implica que...',
        options: [
          'El sistema depende completamente del entorno para funcionar',
          'Cada parte del sistema debe ser capaz de hacer el trabajo de las demás',
          'El todo produce más que la simple suma de sus partes individuales',
          'El control es innecesario cuando existe retroalimentación',
        ],
        correct: 2,
        explanation: 'Sinergia: el conjunto logra más que cada parte por separado, cuando cada rol está bien definido.',
      },
      {
        question: '¿Cuál es la diferencia principal entre control y retroalimentación (feedback)?',
        options: [
          'Son conceptos sinónimos e intercambiables',
          'El control detecta desvíos comparando con estándares; el feedback informa para ajustar la entrada',
          'El feedback es más importante que el control en sistemas informatizados',
          'El control solo aplica a sistemas físicos, no a sistemas de información',
        ],
        correct: 1,
        explanation: 'Control = comparar salida con estándar y actuar. Feedback = información que regresa al sistema para ajustarlo.',
      },
      {
        question: 'La delimitación de un sistema (definir qué pertenece y qué no) es...',
        options: [
          'Un dato fijo determinado por las leyes de la física',
          'Siempre igual para cualquier analista que estudie el mismo sistema',
          'Una decisión del analista según el objetivo del análisis',
          'Determinada exclusivamente por el tamaño de la organización',
        ],
        correct: 2,
        explanation: 'El analista decide los límites del sistema según el objetivo del estudio. No hay una única "respuesta correcta" sobre dónde termina un sistema.',
      },
    ],
    open: [
      {
        question: 'Explicá con un ejemplo cotidiano qué es la entropía y cómo la contrarrestan los sistemas de información.',
        modelAnswer: 'La entropía es la tendencia de todo sistema al desorden y la pérdida de energía. Ejemplo: una empresa sin sistema de gestión tiende al caos administrativo (pedidos perdidos, información desactualizada). Un sistema de información contraresta esa entropía al estandarizar procesos, centralizar datos y hacer los resultados predecibles.',
      },
      {
        question: '¿Por qué es importante el control en un sistema? Describí la diferencia entre control y feedback con un ejemplo aplicado a la gestión de una empresa.',
        modelAnswer: 'El control permite detectar desvíos comparando la salida real con el resultado esperado. El feedback lleva esa información de vuelta al sistema para que ajuste su comportamiento. Ejemplo: en una fábrica, el control detecta que una línea produce 80 piezas/hora en lugar de 100 (desvío). El feedback comunica eso a los operarios para que ajusten el ritmo o detecten la falla. Sin control no sabés que hay un problema; sin feedback no podés corregirlo.',
      },
      {
        question: 'Describí los elementos de un sistema aplicados a una empresa de desarrollo de software. ¿Cuáles serían sus entradas, proceso, salida y mecanismo de control?',
        modelAnswer: 'Entradas: requerimientos del cliente, desarrolladores, herramientas, tiempo y presupuesto. Proceso: análisis, diseño, codificación, pruebas. Salida: software funcionando, documentación, soporte. Control: revisión de código, testing, comparación contra los requerimientos originales, reuniones de seguimiento. Feedback: bugs reportados por usuarios, que vuelven como entrada al proceso de corrección.',
      },
    ],
  },

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
      a: '<strong>Control:</strong> compara la salida con un estándar y detecta desvíos.<br/><strong>Feedback:</strong> envía información de regreso al sistema para ajustar su comportamiento.',
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
      icon: '🏫', bg: 'bg-indigo',
      title: 'Presentación de la materia',
      desc: 'Sistemas de comunicación, herramientas (WhatsApp, plataforma web), subida de materiales y sistema de asistencia.',
    },
    {
      icon: '🎯', bg: 'bg-green',
      title: 'Perfil e incumbencias del profesional',
      desc: 'Qué puede hacer un Ingeniero en Sistemas de la Información: actividades reservadas, diferencia con otras profesiones, rol en la toma de decisiones estratégicas.',
    },
    {
      icon: '🔷', bg: 'bg-purple',
      title: 'Concepto de Sistema',
      desc: 'Definición, elementos (entrada, proceso, salida), ambiente, subsistemas y supersistema. La delimitación del sistema es una decisión del analista.',
    },
    {
      icon: '⚙️', bg: 'bg-amber',
      title: 'Control y Feedback',
      desc: 'Importancia de comparar resultados con estándares. Control previo y posterior. El feedback como mecanismo de ajuste continuo.',
    },
    {
      icon: '🌀', bg: 'bg-rose',
      title: 'Homeostasis y Entropía',
      desc: 'Los sistemas tienden al desorden (entropía) y buscan mantener el equilibrio (homeostasis). Los SI ayudan a que los procesos sean predecibles y ordenados.',
    },
    {
      icon: '🤝', bg: 'bg-teal',
      title: 'Sinergia y roles en equipos',
      desc: 'El resultado del conjunto supera al de las partes individuales. Importancia de que cada integrante tenga un rol claro y adecuado.',
    },
  ],

  glossary: [
    { term: 'Sistema',                 def: 'Conjunto de elementos interrelacionados con un objetivo en común, rodeado por un ambiente.' },
    { term: 'Homeostasis',             def: 'Estado de equilibrio interno que el sistema busca mantener ante perturbaciones externas.' },
    { term: 'Entropía',                def: 'Tendencia natural al desorden y pérdida de energía en todo sistema. Requiere energía para ser contrarrestada.' },
    { term: 'Retroalimentación',       def: 'Información que vuelve desde la salida al proceso de entrada para ajustar el comportamiento del sistema.' },
    { term: 'Sinergia',                def: 'El todo produce más que la suma de sus partes cuando cada elemento cumple su función específica.' },
    { term: 'Incumbencia profesional', def: 'Actividades habilitadas legalmente para un título. Las "reservadas" son exclusivas de esa profesión.' },
    { term: 'CONEAU',                  def: 'Comisión Nacional de Evaluación y Acreditación Universitaria. Certifica que las carreras cumplen estándares académicos.' },
  ],
}
