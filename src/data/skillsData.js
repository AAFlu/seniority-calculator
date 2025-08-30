export const skillsData = {
  frontend: {
    name: "Frontend",
    rankingRanges: [
      { min: 0, max: 4.4, level: "Trainee", description: "Learning the basics" },
      { min: 4.5, max: 20.3, level: "Junior", description: "Can work independently on simple tasks" },
      { min: 20.4, max: 31.8, level: "Semi-Senior", description: "Handles complex features independently" },
      { min: 31.9, max: 42.0, level: "Senior", description: "Leads projects and mentors others" },
      { min: 42.1, max: 52.0, level: "Expert", description: "Architecture decisions and technical leadership" }
    ],
    skillGroups: [
      {
        name: "Frontend",
        groupWeight: 100,
        isMainStack: true,
        skills: [
          {
            name: "Conocimientos generales y SO",
            description: "Capacidad para comprender y gestionar los aspectos esenciales de los sistemas operativos, como instalación de aplicaciones, configuración, uso eficiente de comandos, manejo de archivos, procesos, permisos, y resolución de problemas comunes en entornos de desarrollo y producción.\n\nEscala de valores:\n\n1 (Trainee): Tiene conocimientos mínimos del sistema operativo con el que trabaja. Puede realizar tareas básicas, como navegar por archivos, abrir aplicaciones y realizar configuraciones elementales. Necesita soporte constante para tareas más complejas.\n\n2 (Junior): Puede realizar configuraciones sencillas, gestionar archivos y permisos básicos, y solucionar problemas simples siguiendo instrucciones. Comienza a sentirse cómodo con herramientas de terminal.\n\n3 (Semi Senior): Gestiona recursos del sistema con soltura, utiliza comandos de terminal avanzados y puede ejecutar scripts básicos. Resuelve problemas comunes de manera independiente y entiende cómo funcionan los servicios del sistema operativo.\n\n4 (Senior): Configura y optimiza el entorno de trabajo. Puede solucionar problemas complejos, manipular permisos avanzados, monitorear recursos, y automatizar tareas mediante scripts complejos. Tiene conocimientos sólidos de sistemas de archivos y procesos.\n\n5 (Experto): Domina el sistema operativo a nivel administrativo. Puede diagnosticar y resolver problemas críticos, configurar entornos de red, servicios y seguridad del sistema. Entiende a fondo el kernel, servicios del sistema y realiza optimización avanzada. Además, puede capacitar a otros y liderar implementaciones complejas.",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Rest services",
            description: "Conocimientos teóricos sobre servicios RESTful. Capacidad para diseñar, implementar, consumir y gestionar servicios, manejo de respuestas y códigos de estado.\n\nEscala de valores:\n\n1 (Trainee): Puede consumir servicios REST usando herramientas básicas como Postman o bibliotecas cliente HTTP. Conoce los verbos básicos (GET, POST).\n\n2 (Junior): Puede construir solicitudes REST sencillas en aplicaciones propias y manejar respuestas JSON.\n\n3 (Semi Senior): Desarrolla y documenta servicios REST, incluye manejo de parámetros, cabeceras, autenticación básica y paginación.\n\n4 (Senior): Implementa servicios REST completos con autenticación segura (OAuth, JWT), gestión de errores estandarizada y optimización de rendimiento.\n\n5 (Experto): Diseña arquitecturas RESTful escalables y realiza revisiones de APIs para garantizar estándares de buenas prácticas y seguridad avanzada.",
            averageWeight: 0.7,
            weight: 0.7
          },
          {
            name: "Versionado de código (Git)",
            description: "Capacidad para gestionar versiones de código fuente usando Git, incluyendo creación de ramas, manejo de conflictos, colaboración y control de cambios.\n\nEscala de valores:\n\n1 (Trainee): Conoce los comandos básicos (clone, commit, push, pull) y realiza operaciones sencillas en un solo branch.\n\n2 (Junior): Puede crear y fusionar ramas, manejar conflictos simples y realizar revisiones básicas de cambios.\n\n3 (Semi Senior): Gestiona múltiples ramas y resuelve conflictos complejos. Utiliza etiquetas, y realiza pull requests siguiendo el flujo de trabajo Git estándar.\n\n4 (Senior): Define y aplica estrategias de branching (GitFlow, trunk-based). Optimiza el historial con squash y rebase. Automatiza integraciones usando hooks de Git.\n\n5 (Experto): Domina flujos avanzados, realiza auditorías de historial, recupera cambios complejos y asesora al equipo sobre mejores prácticas en control de versiones.",
            averageWeight: 0.6,
            weight: 0.6
          },
          {
            name: "Programación funcional",
            description: "Capacidad para aplicar principios de la programación funcional como funciones puras, inmutabilidad y uso de operaciones como map, filter y reduce.\n\nEscala de valores:\n\n1 (Trainee): Tiene una idea básica sobre programación funcional.\n\n2 (Junior): Conoce los conceptos básicos de funciones puras y puede realizar operaciones sencillas como map o filter.\n\n3 (Semi Senior): Utiliza funciones de orden superior y estructuras inmutables en su código, evitando efectos secundarios simples.\n\n4 (Senior): Aplica patrones funcionales complejos (currying, composición) y utiliza librerías de programación funcional con comodidad.\n\n5 (Experto): Puede implementar soluciones completas con programación funcional, aprovechando estructuras avanzadas como mónadas y aplicativos. Puede enseñar principios funcionales al equipo.",
            averageWeight: 0.7,
            weight: 0.7
          },
          {
            name: "Flujos de versionado",
            description: "Versioning workflows",
            averageWeight: 0.2,
            weight: 0.2
          },
          {
            name: "Gestión de dependencias",
            description: "Capacidad para manejar y mantener las dependencias de un proyecto, asegurando la correcta instalación, actualización y control de versiones de librerías y paquetes.\n\nEscala de valores:\n\n1 (Trainee): Puede instalar paquetes mediante herramientas de gestión de dependencias (npm, Maven, etc.).\n\n2 (Junior): Actualiza dependencias y gestiona cambios menores de versiones.\n\n3 (Semi Senior): Utiliza correctamente archivos de configuración de dependencias (package.json, pom.xml) y entiende la compatibilidad semántica. Identifica dependencias obsoletas o innecesarias.\n\n4 (Senior): Configura y gestiona versiones precisas con lock files y define configuraciones específicas por entorno. Automatiza procesos de instalación y actualización.\n\n5 (Experto): Diseña estrategias para evitar conflictos de versiones, crea y administra repositorios privados de dependencias y asegura la seguridad y estabilidad de los paquetes.",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Exception management",
            description: "Exception handling and management",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Debugging",
            description: "Capacidad para identificar, analizar y resolver problemas en el código mediante herramientas de depuración y diagnóstico.\n\nEscala de valores:\n\n1 (Trainee): Utiliza logs para depurar cuando le es necesario.\n\n2 (Junior): Utiliza logs de forma consistente y depura con mensajes de impresión simples (console.log, print).\n\n3 (Semi Senior): Usa herramientas de depuración integradas en el entorno (breakpoints, watch variables) para identificar problemas comunes.\n\n4 (Senior): Analiza trazas de error y perfiles de rendimiento para identificar cuellos de botella y errores complejos, depura aplicaciones distribuidas y detecta condiciones de carrera.\n\n5 (Experto): Diseña sistemas de logging y métricas personalizados, implementa diagnósticos automáticos y puede resolver fallos críticos en tiempo real en sistemas de producción.",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Testing(test unitarios, test de integracion)",
            description: "Testing: unit tests, integration tests",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Programación Orientada a Objetos",
            description: "Capacidad para diseñar e implementar aplicaciones usando los principios de la programación orientada a objetos, como encapsulación, herencia, polimorfismo y abstracción.\n\nEscala de valores:\n\n1 (Trainee): Conoce y aplica clases simples con atributos y métodos básicos.\n\n2 (Junior): Implementa conceptos como herencia y polimorfismo en escenarios simples. Utiliza constructores y sobrecarga de métodos.\n\n3 (Semi Senior): Aplica principios SOLID y patrones básicos de POO. Implementa interfaces y abstracciones para desacoplar componentes.\n\n4 (Senior): Diseña sistemas complejos aplicando principios avanzados de POO y utilizando patrones de diseño estructurados.\n\n5 (Experto): Optimiza arquitecturas utilizando POO y enseña a otros los principios y mejores prácticas. Realiza auditorías de diseño y crea frameworks reutilizables basados en POO.",
            averageWeight: 0.7,
            weight: 0.7
          },
          {
            name: "Buenas prácticas (SOLID, Kiss, dry)",
            description: "Good practices: SOLID, KISS, DRY principles",
            averageWeight: 0.6,
            weight: 0.6
          },
          {
            name: "Patrones de diseño",
            description: "Capacidad para identificar, implementar y adaptar patrones de diseño de software, como Singleton, Factory, Observer, y otros patrones de creación, estructurales y de comportamiento.\n\nEscala de valores:\n\n1 (Trainee): Conoce algunos patrones de diseño comunes y los aplica de manera básica en situaciones sencillas.\n\n2 (Junior): Implementa patrones de diseño como Factory, Singleton u Observer en aplicaciones pequeñas y reconoce cuándo deben ser aplicados.\n\n3 (Semi Senior): Utiliza patrones más complejos (como Strategy, Decorator o Command) y adapta patrones según el contexto de la aplicación.\n\n4 (Senior): Implementa múltiples patrones de manera combinada para resolver problemas de diseño complejos. Evalúa y refactoriza código utilizando patrones adecuados.\n\n5 (Experto): Diseña arquitecturas completas aplicando patrones de diseño de manera efectiva. Enseña a otros sobre su implementación y adapta patrones estándar para necesidades específicas de la compañía.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Herramientas de calidad de código (Sonar, Lint, etc)",
            description: "Code quality tools: Sonar, Lint, etc.",
            averageWeight: 0.2,
            weight: 0.2
          },
          {
            name: "Javascript",
            description: "Capacidad para utilizar JavaScript de manera eficiente en el desarrollo de aplicaciones frontend, aplicando principios de programación moderna y buenas prácticas.\n\nEscala de valores:\n\n1 (Trainee): Conoce los fundamentos de JavaScript (variables, estructuras de control, funciones) y puede realizar operaciones básicas en el navegador.\n\n2 (Junior): Utiliza conceptos intermedios como manipulaciones del DOM, promesas y funciones asíncronas. Es capaz de integrar eventos y realizar peticiones HTTP básicas.\n\n3 (Semi Senior): Aplica ES6+ de manera efectiva (destructuring, arrow functions, módulos) y utiliza técnicas avanzadas como closures, prototipos y funciones de orden superior. Maneja errores y optimiza código.\n\n4 (Senior): Implementa aplicaciones complejas utilizando JavaScript de manera modular. Domina contextos, patrones de programación y flujos asincrónicos avanzados. Identifica y resuelve problemas de rendimiento.\n\n5 (Experto): Define estándares y lineamientos de uso de JavaScript para los proyectos. Evalúa nuevas bibliotecas y frameworks, liderando la adopción de mejoras de rendimiento y seguridad.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "TypeScript",
            description: "Capacidad para utilizar TypeScript para tipar código JavaScript, mejorar la mantenibilidad, escalabilidad y detección temprana de errores.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de TypeScript (tipos primitivos, interfaces y clases) y puede realizar la conversión de pequeños scripts de JavaScript a TypeScript.\n\n2 (Junior): Utiliza tipos avanzados como objetos anidados, funciones tipadas y union types. Implementa interfaces y entiende la diferencia entre 'any', 'unknown' y 'never'.\n\n3 (Semi Senior): Utiliza genéricos, tipos condicionales y decoradores. Implementa archivos de declaración de tipos para bibliotecas externas y configura correctamente el compilador de TypeScript (tsconfig).\n\n4 (Senior): Diseña sistemas altamente tipados y escalables. Optimiza la tipificación para mejorar el rendimiento del código y garantizar la seguridad de los datos. Corrige problemas complejos de inferencia de tipos.\n\n5 (Experto): Define convenciones de uso de TypeScript para grandes equipos. Lidera migraciones de proyectos de JavaScript a TypeScript y promueve la creación de tipados reutilizables y mantenibles.",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "HTML + CSS",
            description: "Capacidad para crear y estructurar interfaces web utilizando HTML semántico y estilos CSS con buenas prácticas de diseño.\n\nEscala de valores:\n\n1 (Trainee): Conoce etiquetas HTML básicas y puede aplicar estilos simples mediante propiedades CSS comunes.\n\n2 (Junior): Utiliza HTML semántico y CSS más avanzado (flexbox, grid, pseudo-elementos). Conoce el concepto de responsive design y aplica media queries.\n\n3 (Semi Senior): Implementa estructuras complejas con combinaciones de flexbox y grid. Conoce las mejores prácticas de accesibilidad (ARIA, roles) y optimiza la carga de recursos estáticos.\n\n4 (Senior): Diseña interfaces web complejas utilizando layouts escalables. Garantiza accesibilidad, rendimiento y compatibilidad cross-browser. Implementa animaciones avanzadas usando CSS y transiciones fluidas.\n\n5 (Experto): Define los lineamientos de estilo para mantener consistencia en los proyectos. Diseña guías de estructura HTML/CSS y lidera revisiones de UI con foco en performance y accesibilidad.",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Manejo de estilos en Framework",
            description: "Capacidad para implementar y gestionar estilos utilizando las herramientas y convenciones propias del framework que el desarrollador utiliza (por ejemplo, Styled Components en React, Selectores en Angular, o CSS Modules en Vue).\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de manejo de estilos en el framework y puede aplicar estilos simples a componentes mediante herramientas predefinidas o inline styles.\n\n2 (Junior): Utiliza las herramientas del framework para implementar estilos reutilizables y configuraciones básicas de temas. Gestiona selectores y propiedades básicas en componentes.\n\n3 (Semi Senior): Diseña estilos avanzados como layouts dinámicos, animaciones y adaptaciones responsivas dentro del framework. Optimiza el manejo de estilos mediante encapsulación (CSS-in-JS, Shadow DOM) y personalización de temas globales.\n\n4 (Senior): Implementa sistemas de estilos escalables utilizando patrones avanzados como Design Systems o utilidades globales. Garantiza consistencia y rendimiento en el manejo de estilos en aplicaciones complejas.\n\n5 (Experto): Define lineamientos y estrategias de estilos para todo el equipo de desarrollo. Lidera la creación de librerías reutilizables de componentes estilizados y asegura la integración eficiente de los estilos con el framework elegido.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "CSS Frameworks (Bootstrap, Chakra, Material)",
            description: "Capacidad para utilizar frameworks de CSS para agilizar el desarrollo de interfaces consistentes y adaptativas.\n\nEscala de valores:\n\n1 (Trainee): Conoce los componentes básicos de frameworks como Bootstrap y puede utilizarlos para crear layouts simples.\n\n2 (Junior): Utiliza componentes avanzados del framework y modifica estilos mediante utilidades personalizadas.\n\n3 (Semi Senior): Personaliza el framework mediante variables y configuración avanzada (temas, breakpoints personalizados). Implementa componentes reutilizables utilizando las convenciones del framework.\n\n4 (Senior): Optimiza el uso del framework para mejorar la carga y el rendimiento. Evalúa frameworks de CSS según las necesidades del proyecto y realiza integraciones personalizadas.\n\n5 (Experto): Diseña lineamientos de uso del framework, asegurando consistencia en todos los proyectos. Lidera la configuración y desarrollo de temas globales y administra la creación de componentes a medida.",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Web Components (HTML Templates, Shadow DOM)",
            description: "Web Components: HTML Templates, Shadow DOM",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Frameworks (React, Angular, Vue)",
            description: "Capacidad para trabajar con frameworks de desarrollo frontend modernos para crear aplicaciones web complejas y modulares.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos del framework (componentes, props, rutas simples) y puede crear aplicaciones pequeñas siguiendo ejemplos y tutoriales.\n\n2 (Junior): Implementa aplicaciones con componentes dinámicos y utiliza correctamente el ciclo de vida o hooks básicos. Integra servicios REST y realiza navegación entre páginas.\n\n3 (Semi Senior): Configura rutas avanzadas, lazy loading y módulos compartidos. Implementa componentes reutilizables y maneja formularios complejos y validaciones.\n\n4 (Senior): Diseña aplicaciones grandes utilizando una arquitectura modular y optimiza el rendimiento del framework mediante técnicas como memoización, SSR o rendering condicional eficiente.\n\n5 (Experto): Define lineamientos para el uso eficiente del framework y lidera la adopción de actualizaciones o migraciones. Diseña arquitecturas SPA/Microfrontends optimizadas y realiza revisiones de implementación de componentes y servicios.",
            averageWeight: 0.7,
            weight: 0.7
          },
          {
            name: "Package Manager (npm, yarn,nuget)",
            description: "Package Manager: npm, yarn, nuget",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Responsive Design",
            description: "Capacidad para diseñar interfaces web que se adapten correctamente a diferentes dispositivos y tamaños de pantalla.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Responsive Design.\n\n2 (Junior): Conoce los conceptos básicos de responsive design y utiliza media queries para ajustar estilos según el tamaño de pantalla. Maneja correctamente las propiedades flex y grid para construir layouts responsivos.\n\n3 (Semi Senior): Implementa diseños fluidos y escalables utilizando breakpoints avanzados y herramientas de previsualización. Aplica técnicas de imágenes adaptativas y fuentes responsivas.\n\n4 (Senior): Diseña interfaces completamente adaptativas para distintos dispositivos y condiciones de red. Optimiza el rendimiento de la carga en dispositivos móviles.\n\n5 (Experto): Define lineamientos de diseño responsivo para todo el proyecto. Lidera revisiones de diseño con foco en accesibilidad, consistencia y rendimiento.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Programación reactiva",
            description: "Reactive programming",
            averageWeight: 0.3,
            weight: 0.3
          }
        ]
      },
      {
        name: "Backend",
        groupWeight: 10,
        skills: [
          {
            name: "Conceptos básicos de BD",
            description: "Basic database concepts",
            averageWeight: 0.9,
            weight: 0.9
          },
          {
            name: "Diseño de BD",
            description: "Database design",
            averageWeight: 0.7,
            weight: 0.7
          },
          {
            name: "Versionado de Bases de Datos",
            description: "Database versioning",
            averageWeight: 0.8,
            weight: 0.8
          },
          {
            name: "Transactions",
            description: "Database transactions",
            averageWeight: 0.8,
            weight: 0.8
          },
          {
            name: "Frameworks",
            description: "Backend frameworks",
            averageWeight: 0.8,
            weight: 0.8
          },
          {
            name: "Programación Orientada a Aspectos",
            description: "Aspect-oriented programming",
            averageWeight: 0.8,
            weight: 0.8
          },
          {
            name: "Inyección de dependencias",
            description: "Dependency injection",
            averageWeight: 0.9,
            weight: 0.9
          },
          {
            name: "Logging",
            description: "Logging and monitoring",
            averageWeight: 0.8,
            weight: 0.8
          },
          {
            name: "Security",
            description: "Security practices and implementation",
            averageWeight: 1.0,
            weight: 1.0
          },
          {
            name: "Multitasking",
            description: "Multitasking and concurrency",
            averageWeight: 0.8,
            weight: 0.8
          },
          {
            name: "Mocking",
            description: "Mocking and testing",
            averageWeight: 0.9,
            weight: 0.9
          },
          {
            name: "Patrones de arquitectura (por capas, microservicios, mvc)",
            description: "Architecture patterns: layered, microservices, MVC",
            averageWeight: 0.8,
            weight: 0.8
          }
        ]
      },
      {
        name: "DevOps",
        groupWeight: 10,
        skills: [
          {
            name: "CI/CD Workflows",
            description: "Capacidad para configurar y utilizar herramientas de Integración y Despliegue Continuo para automatizar la ejecución de tests, builds y despliegues.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de CI/CD y puede ejecutar pipelines predefinidos siguiendo instrucciones.\n\n2 (Junior): Modifica y configura pipelines básicos, agrega pasos de validación como tests automatizados y realiza despliegues en entornos de prueba.\n\n3 (Semi Senior): Implementa pipelines personalizados con configuraciones avanzadas como triggers automáticos y despliegue condicional. Integra diferentes servicios (Docker, test coverage, etc.).\n\n4 (Senior): Optimiza pipelines para reducir tiempos de ejecución y realiza configuraciones seguras de variables de entorno y credenciales. Supervisa y soluciona fallos en CI/CD.\n\n5 (Experto): Establece estándares de configuración de pipelines CI/CD para proyectos del equipo. Lidera la adopción de nuevas herramientas y asegura la integración completa de CI/CD con repositorios, pruebas y monitoreo.",
            averageWeight: 1.3,
            weight: 1.3
          },
          {
            name: "Uso de Message Brokers (RabbitMQ, Kafka)",
            description: "Capacidad para trabajar con sistemas de mensajería para manejar comunicaciones asincrónicas y desacopladas entre servicios.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de colas de mensajes y publica o consume mensajes simples utilizando herramientas predeterminadas.\n\n2 (Junior): Implementa conexiones con brokers para enviar y recibir mensajes en aplicaciones simples. Gestiona colas y exchanges básicos.\n\n3 (Semi Senior): Configura canales de comunicación avanzados con diferentes patrones de publicación (publish/subscribe, routing, topics). Implementa reintentos y manejo de errores.\n\n4 (Senior): Optimiza la configuración de message brokers para alta concurrencia y resiliencia. Gestiona y monitorea la salud de los brokers y ajusta configuraciones de rendimiento.\n\n5 (Experto): Define estrategias de comunicación asincrónica y lidera la adopción de message brokers en sistemas distribuidos. Asegura la correcta implementación de patrones avanzados y monitorea su estabilidad.",
            averageWeight: 1.1,
            weight: 1.1
          },
          {
            name: "Uso de Contenedores (Docker, Kubernetes)",
            description: "Capacidad para trabajar con contenedores para empaquetar, distribuir y gestionar aplicaciones de manera eficiente y reproducible.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de contenedores y puede construir y ejecutar imágenes Docker simples.\n\n2 (Junior): Utiliza Docker Compose para orquestar múltiples servicios locales y gestiona volúmenes y redes básicas.\n\n3 (Semi Senior): Optimiza Dockerfiles y configura variables de entorno y secrets. Realiza despliegues simples en clústeres de Kubernetes utilizando archivos YAML básicos.\n\n4 (Senior): Configura y gestiona clústeres de Kubernetes con múltiples nodos. Implementa servicios con escalado automático y define políticas de recursos.\n\n5 (Experto): Define lineamientos para la creación de contenedores y administra la infraestructura de orquestación de contenedores a nivel de proyecto. Lidera la implementación de soluciones con alta disponibilidad y recuperación ante fallos.",
            averageWeight: 1.3,
            weight: 1.3
          },
          {
            name: "Web Servers (Nginx, Apache)",
            description: "Capacidad para configurar, administrar y optimizar servidores web como Nginx y Apache HTTP Server, asegurando el despliegue eficiente, seguro y escalable de aplicaciones.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de web servers.\n\n2 (Junior): Conoce los fundamentos de los servidores web y puede configurar rutas simples para servir contenido estático. Realiza tareas básicas como configurar un directorio raíz o manejar errores comunes en el servidor.\n\n3 (Semi Senior): Configura proxys inversos básicos para conectar aplicaciones frontend con backend. Realiza redirecciones y configura reglas simples para manejar errores HTTP (404, 500). Trabaja con configuraciones estándar y archivos predeterminados del servidor.\n\n4 (Senior): Implementa configuraciones de balanceo de carga y políticas de cacheo para mejorar el rendimiento. Integra el servidor web con aplicaciones dinámicas (Node.js, Python, PHP). Maneja logs del servidor para diagnosticar problemas básicos de rendimiento o tráfico.\n\n5 (Experto): Configura y gestiona certificados SSL/TLS para asegurar las conexiones (HTTPS). Diseña estrategias de optimización del servidor web, como compresión (gzip) y ajustes de encabezados HTTP para seguridad y rendimiento. Identifica y corrige problemas relacionados con el tráfico y la concurrencia.",
            averageWeight: 1.2,
            weight: 1.2
          },
          {
            name: "Application Servers",
            description: "Application servers",
            averageWeight: 1.1,
            weight: 1.1
          },
          {
            name: "Monitoring",
            description: "Capacidad para implementar y utilizar herramientas de monitoreo para supervisar el estado de servicios y sistemas en tiempo real.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Monitoreo.\n\n2 (Junior): Conoce los conceptos básicos de monitoreo y puede interpretar dashboards predefinidos de estado del sistema.\n\n3 (Semi Senior): Configura alertas básicas y monitorea el estado de recursos como CPU, memoria y estado de servicios mediante herramientas como Grafana o CloudWatch.\n\n4 (Senior): Implementa dashboards personalizados para métricas específicas de la aplicación. Integra el monitoreo con notificaciones automáticas para incidentes.\n\n5 (Experto): Optimiza los sistemas de monitoreo para evitar falsos positivos y realiza análisis de logs históricos para identificar patrones de fallas recurrentes. Implementa herramientas de observabilidad distribuida.",
            averageWeight: 1.1,
            weight: 1.1
          },
          {
            name: "Métricas (Grafana, Prometheus)",
            description: "Capacidad para configurar y gestionar sistemas de recolección y visualización de métricas de aplicaciones y sistemas.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Métricas.\n\n2 (Junior): Conoce los conceptos básicos de métricas y es capaz de visualizar dashboards preexistentes.\n\n3 (Semi Senior): Configura métricas básicas de monitoreo (CPU, uso de memoria, uso de disco) y genera gráficos simples.\n\n4 (Senior): Personaliza dashboards con métricas específicas de la aplicación (tiempo de respuesta, tasas de error, throughput) y utiliza alertas con umbrales dinámicos.\n\n5 (Experto): Implementa y optimiza sistemas de recopilación de métricas complejas con Prometheus y Grafana, incluyendo consultas avanzadas (PromQL) y paneles combinados.",
            averageWeight: 0.9,
            weight: 0.9
          },
          {
            name: "Infrastructure as Code (Terraform, otros)",
            description: "Infrastructure as Code: Terraform, others",
            averageWeight: 0.9,
            weight: 0.9
          },
          {
            name: "Networking (Internet, Protocolos, DNS, Dominios)",
            description: "Capacidad para comprender y gestionar configuraciones básicas de redes, dominios y protocolos para asegurar la conectividad y accesibilidad de los sistemas.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de redes, como direcciones IP y puertos. Puede hacer pruebas básicas de conexión usando herramientas como ping y traceroute.\n\n2 (Junior): Entiende y configura DNS básicos y realiza redirecciones simples de dominios. Conoce protocolos como HTTP, HTTPS, TCP y UDP.\n\n3 (Semi Senior): Gestiona configuraciones avanzadas de dominios y subdominios, certificados SSL y configuraciones de seguridad de red. Optimiza el manejo de rutas y direcciones IP.\n\n4 (Senior): Diseña soluciones de red para aplicaciones distribuidas, asegurando seguridad y rendimiento. Identifica y soluciona problemas complejos de red en entornos de producción.\n\n5 (Experto): Define la estrategia de redes del proyecto, lidera la implementación de balanceadores de carga y revisa configuraciones de firewalls y DNS para evitar vulnerabilidades. Capacita al equipo en buenas prácticas de conectividad y seguridad en red.",
            averageWeight: 1.1,
            weight: 1.1
          }
        ]
      }
    ]
  },
  mobile: {
    name: "Mobile",
    rankingRanges: [
      { min: 0, max: 10.8, level: "Trainee", description: "Learning mobile fundamentals" },
      { min: 10.9, max: 21.6, level: "Junior", description: "Can build basic mobile apps" },
      { min: 21.7, max: 32.4, level: "Semi-Senior", description: "Handles complex mobile features" },
      { min: 32.5, max: 43.2, level: "Senior", description: "Leads mobile projects and teams" },
      { min: 43.3, max: 54.0, level: "Expert", description: "Mobile architecture and platform expertise" }
    ],
    skillGroups: [
      {
        name: "Mobile Development",
        groupWeight: 100,
        isMainStack: true,
        skills: [
          {
            name: "Conocimientos generales y SO",
            description: "Capacidad para comprender y gestionar los aspectos esenciales de los sistemas operativos, como instalación de aplicaciones, configuración, uso eficiente de comandos, manejo de archivos, procesos, permisos, y resolución de problemas comunes en entornos de desarrollo y producción.\n\nEscala de valores:\n\n1 (Trainee): Tiene conocimientos mínimos del sistema operativo con el que trabaja. Puede realizar tareas básicas, como navegar por archivos, abrir aplicaciones y realizar configuraciones elementales. Necesita soporte constante para tareas más complejas.\n\n2 (Junior): Puede realizar configuraciones sencillas, gestionar archivos y permisos básicos, y solucionar problemas simples siguiendo instrucciones. Comienza a sentirse cómodo con herramientas de terminal.\n\n3 (Semi Senior): Gestiona recursos del sistema con soltura, utiliza comandos de terminal avanzados y puede ejecutar scripts básicos. Resuelve problemas comunes de manera independiente y entiende cómo funcionan los servicios del sistema operativo.\n\n4 (Senior): Configura y optimiza el entorno de trabajo. Puede solucionar problemas complejos, manipular permisos avanzados, monitorear recursos, y automatizar tareas mediante scripts complejos. Tiene conocimientos sólidos de sistemas de archivos y procesos.\n\n5 (Experto): Domina el sistema operativo a nivel administrativo. Puede diagnosticar y resolver problemas críticos, configurar entornos de red, servicios y seguridad del sistema. Entiende a fondo el kernel, servicios del sistema y realiza optimización avanzada. Además, puede capacitar a otros y liderar implementaciones complejas.",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "REST Services",
            description: "Conocimientos teóricos sobre servicios RESTful. Capacidad para diseñar, implementar, consumir y gestionar servicios, manejo de respuestas y códigos de estado.\n\nEscala de valores:\n\n1 (Trainee): Puede consumir servicios REST usando herramientas básicas como Postman o bibliotecas cliente HTTP. Conoce los verbos básicos (GET, POST).\n\n2 (Junior): Puede construir solicitudes REST sencillas en aplicaciones propias y manejar respuestas JSON.\n\n3 (Semi Senior): Desarrolla y documenta servicios REST, incluye manejo de parámetros, cabeceras, autenticación básica y paginación.\n\n4 (Senior): Implementa servicios REST completos con autenticación segura (OAuth, JWT), gestión de errores estandarizada y optimización de rendimiento.\n\n5 (Experto): Diseña arquitecturas RESTful escalables y realiza revisiones de APIs para garantizar estándares de buenas prácticas y seguridad avanzada.",
            averageWeight: 0.60,
            weight: 0.60
          },
          {
            name: "Versionado de código (Git)",
            description: "Capacidad para gestionar versiones de código fuente usando Git, incluyendo creación de ramas, manejo de conflictos, colaboración y control de cambios.\n\nEscala de valores:\n\n1 (Trainee): Conoce los comandos básicos (clone, commit, push, pull) y realiza operaciones sencillas en un solo branch.\n\n2 (Junior): Puede crear y fusionar ramas, manejar conflictos simples y realizar revisiones básicas de cambios.\n\n3 (Semi Senior): Gestiona múltiples ramas y resuelve conflictos complejos. Utiliza etiquetas, y realiza pull requests siguiendo el flujo de trabajo Git estándar.\n\n4 (Senior): Define y aplica estrategias de branching (GitFlow, trunk-based). Optimiza el historial con squash y rebase. Automatiza integraciones usando hooks de Git.\n\n5 (Experto): Domina flujos avanzados, realiza auditorías de historial, recupera cambios complejos y asesora al equipo sobre mejores prácticas en control de versiones.",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "Programación funcional",
            description: "Capacidad para aplicar principios de la programación funcional como funciones puras, inmutabilidad y uso de operaciones como map, filter y reduce.\n\nEscala de valores:\n\n1 (Trainee): Tiene una idea básica sobre programación funcional.\n\n2 (Junior): Conoce los conceptos básicos de funciones puras y puede realizar operaciones sencillas como map o filter.\n\n3 (Semi Senior): Utiliza funciones de orden superior y estructuras inmutables en su código, evitando efectos secundarios simples.\n\n4 (Senior): Aplica patrones funcionales complejos (currying, composición) y utiliza librerías de programación funcional con comodidad.\n\n5 (Experto): Puede implementar soluciones completas con programación funcional, aprovechando estructuras avanzadas como mónadas y aplicativos. Puede enseñar principios funcionales al equipo.",
            averageWeight: 0.40,
            weight: 0.40
          },
          {
            name: "Gestión de dependencias",
            description: "Capacidad para manejar y mantener las dependencias de un proyecto, asegurando la correcta instalación, actualización y control de versiones de librerías y paquetes.\n\nEscala de valores:\n\n1 (Trainee): Puede instalar paquetes mediante herramientas de gestión de dependencias (npm, Maven, etc.).\n\n2 (Junior): Actualiza dependencias y gestiona cambios menores de versiones.\n\n3 (Semi Senior): Utiliza correctamente archivos de configuración de dependencias (package.json, pom.xml) y entiende la compatibilidad semántica. Identifica dependencias obsoletas o innecesarias.\n\n4 (Senior): Configura y gestiona versiones precisas con lock files y define configuraciones específicas por entorno. Automatiza procesos de instalación y actualización.\n\n5 (Experto): Diseña estrategias para evitar conflictos de versiones, crea y administra repositorios privados de dependencias y asegura la seguridad y estabilidad de los paquetes.",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "Exception management",
            description: "Capacidad para manejar errores y excepciones en el código de forma estructurada, asegurando estabilidad, trazabilidad y una correcta gestión de fallos.\n\nEscala de valores:\n\n1 (Trainee): Sabe que existe el concepto.\n\n2 (Junior): Puede manejar excepciones simples con bloques try/catch básicos.\n\n3 (Semi Senior): Implementa diferentes tipos de excepciones personalizadas y gestiona logs de errores básicos.\n\n4 (Senior): Aplica patrones de manejo de errores centralizados, registra los errores detalladamente y puede propagar o traducir excepciones adecuadamente.\n\n5 (Experto): Implementa estrategias avanzadas de recuperación y manejo de errores, como circuit breakers y fallback. Utiliza sistemas de monitoreo y alertas.",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "Debugging",
            description: "Debugging techniques and tools",
            averageWeight: 0.30,
            weight: 0.30
          },
          {
            name: "Testing",
            description: "Testing methodologies and tools",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "Buenas prácticas (SOLID, Kiss, dry)",
            description: "Good practices: SOLID, KISS, DRY principles",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "Patrones de Diseño",
            description: "Design patterns",
            averageWeight: 0.45,
            weight: 0.45
          },
          {
            name: "Herramientas de calidad de código (Sonar, Lint, etc)",
            description: "Code quality tools: Sonar, Lint, etc.",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "Frameworks",
            description: "Mobile development frameworks",
            averageWeight: 0.60,
            weight: 0.60
          },
          {
            name: "Desarollo de interfaces",
            description: "Interface development",
            averageWeight: 0.40,
            weight: 0.40
          },
          {
            name: "Responsive design",
            description: "Capacidad para diseñar interfaces web que se adapten correctamente a diferentes dispositivos y tamaños de pantalla.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Responsive Design.\n\n2 (Junior): Conoce los conceptos básicos de responsive design y utiliza media queries para ajustar estilos según el tamaño de pantalla. Maneja correctamente las propiedades flex y grid para construir layouts responsivos.\n\n3 (Semi Senior): Implementa diseños fluidos y escalables utilizando breakpoints avanzados y herramientas de previsualización. Aplica técnicas de imágenes adaptativas y fuentes responsivas.\n\n4 (Senior): Diseña interfaces completamente adaptativas para distintos dispositivos y condiciones de red. Optimiza el rendimiento de la carga en dispositivos móviles.\n\n5 (Experto): Define lineamientos de diseño responsivo para todo el proyecto. Lidera revisiones de diseño con foco en accesibilidad, consistencia y rendimiento.",
            averageWeight: 0.40,
            weight: 0.40
          },
          {
            name: "Navegacion",
            description: "Navigation patterns and implementation",
            averageWeight: 0.40,
            weight: 0.40
          },
          {
            name: "Publicacion",
            description: "App store publishing and distribution",
            averageWeight: 0.30,
            weight: 0.30
          },
          {
            name: "Base de datos",
            description: "Database management and design",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "Conocimientos de Plataforma Mobile",
            description: "Mobile platform knowledge",
            averageWeight: 0.20,
            weight: 0.20
          },
          {
            name: "Patrones de Arquitectura",
            description: "Architecture patterns",
            averageWeight: 0.45,
            weight: 0.45
          },
          {
            name: "Logging",
            description: "Logging and monitoring",
            averageWeight: 0.20,
            weight: 0.20
          },
          {
            name: "Seguridad",
            description: "Security practices and implementation",
            averageWeight: 0.45,
            weight: 0.45
          },
          {
            name: "Multitasking (Concurrencia y Paralelismo)",
            description: "Multitasking, concurrency and parallelism",
            averageWeight: 0.40,
            weight: 0.40
          },
          {
            name: "Lenguajes nativos (kotlin, swift)",
            description: "Native languages: Kotlin, Swift",
            averageWeight: 0.50,
            weight: 0.50
          },
          {
            name: "Lenguaje no nativo (react native, dart, ionic)",
            description: "Non-native languages: React Native, Dart, Ionic",
            averageWeight: 0.50,
            weight: 0.50
          },
          {
            name: "JavaScript/Typescript",
            description: "Capacidad para utilizar JavaScript y TypeScript de manera eficiente en el desarrollo de aplicaciones, aplicando principios de programación moderna y buenas prácticas.\n\nEscala de valores:\n\n1 (Trainee): Conoce los fundamentos de JavaScript (variables, estructuras de control, funciones) y puede realizar operaciones básicas. Conoce los conceptos básicos de TypeScript (tipos primitivos, interfaces y clases).\n\n2 (Junior): Utiliza conceptos intermedios como manipulaciones del DOM, promesas y funciones asíncronas. Utiliza tipos avanzados como objetos anidados, funciones tipadas y union types.\n\n3 (Semi Senior): Aplica ES6+ de manera efectiva y utiliza técnicas avanzadas. Utiliza genéricos, tipos condicionales y decoradores en TypeScript.\n\n4 (Senior): Implementa aplicaciones complejas utilizando JavaScript/TypeScript de manera modular. Diseña sistemas altamente tipados y escalables.\n\n5 (Experto): Define estándares y lineamientos de uso de JavaScript/TypeScript para los proyectos. Lidera migraciones y promueve la creación de tipados reutilizables.",
            averageWeight: 0.35,
            weight: 0.35
          },
          {
            name: "CSS",
            description: "CSS styling and design",
            averageWeight: 0.30,
            weight: 0.30
          }
        ]
      }
    ]
  },
  backend: {
    name: "Backend",
    rankingRanges: [
      { min: 0, max: 4.4, level: "Trainee", description: "Learning backend fundamentals" },
      { min: 4.5, max: 20.3, level: "Junior", description: "Can build basic APIs and services" },
      { min: 20.4, max: 31.8, level: "Semi-Senior", description: "Handles complex backend systems" },
      { min: 31.9, max: 42.0, level: "Senior", description: "Leads backend architecture and teams" },
      { min: 42.1, max: 52.0, level: "Expert", description: "Enterprise architecture and system design" }
    ],
    skillGroups: [
      {
        name: "Backend",
        groupWeight: 100,
        isMainStack: true,
        skills: [
          {
            name: "Conocimientos generales y SO",
            description: "Capacidad para comprender y gestionar los aspectos esenciales de los sistemas operativos, como instalación de aplicaciones, configuración, uso eficiente de comandos, manejo de archivos, procesos, permisos, y resolución de problemas comunes en entornos de desarrollo y producción.\n\nEscala de valores:\n\n1 (Trainee): Tiene conocimientos mínimos del sistema operativo con el que trabaja. Puede realizar tareas básicas, como navegar por archivos, abrir aplicaciones y realizar configuraciones elementales. Necesita soporte constante para tareas más complejas.\n\n2 (Junior): Puede realizar configuraciones sencillas, gestionar archivos y permisos básicos, y solucionar problemas simples siguiendo instrucciones. Comienza a sentirse cómodo con herramientas de terminal.\n\n3 (Semi Senior): Gestiona recursos del sistema con soltura, utiliza comandos de terminal avanzados y puede ejecutar scripts básicos. Resuelve problemas comunes de manera independiente y entiende cómo funcionan los servicios del sistema operativo.\n\n4 (Senior): Configura y optimiza el entorno de trabajo. Puede solucionar problemas complejos, manipular permisos avanzados, monitorear recursos, y automatizar tareas mediante scripts complejos. Tiene conocimientos sólidos de sistemas de archivos y procesos.\n\n5 (Experto): Domina el sistema operativo a nivel administrativo. Puede diagnosticar y resolver problemas críticos, configurar entornos de red, servicios y seguridad del sistema. Entiende a fondo el kernel, servicios del sistema y realiza optimización avanzada. Además, puede capacitar a otros y liderar implementaciones complejas.",
            averageWeight: 0.2,
            weight: 0.2
          },
          {
            name: "Rest services",
            description: "Conocimientos teóricos sobre servicios RESTful. Capacidad para diseñar, implementar, consumir y gestionar servicios, manejo de respuestas y códigos de estado.\n\nEscala de valores:\n\n1 (Trainee): Puede consumir servicios REST usando herramientas básicas como Postman o bibliotecas cliente HTTP. Conoce los verbos básicos (GET, POST).\n\n2 (Junior): Puede construir solicitudes REST sencillas en aplicaciones propias y manejar respuestas JSON.\n\n3 (Semi Senior): Desarrolla y documenta servicios REST, incluye manejo de parámetros, cabeceras, autenticación básica y paginación.\n\n4 (Senior): Implementa servicios REST completos con autenticación segura (OAuth, JWT), gestión de errores estandarizada y optimización de rendimiento.\n\n5 (Experto): Diseña arquitecturas RESTful escalables y realiza revisiones de APIs para garantizar estándares de buenas prácticas y seguridad avanzada.",
            averageWeight: 0.6,
            weight: 0.6
          },
          {
            name: "Versionado de código (Git)",
            description: "Capacidad para gestionar versiones de código fuente usando Git, incluyendo creación de ramas, manejo de conflictos, colaboración y control de cambios.\n\nEscala de valores:\n\n1 (Trainee): Conoce los comandos básicos (clone, commit, push, pull) y realiza operaciones sencillas en un solo branch.\n\n2 (Junior): Puede crear y fusionar ramas, manejar conflictos simples y realizar revisiones básicas de cambios.\n\n3 (Semi Senior): Gestiona múltiples ramas y resuelve conflictos complejos. Utiliza etiquetas, y realiza pull requests siguiendo el flujo de trabajo Git estándar.\n\n4 (Senior): Define y aplica estrategias de branching (GitFlow, trunk-based). Optimiza el historial con squash y rebase. Automatiza integraciones usando hooks de Git.\n\n5 (Experto): Domina flujos avanzados, realiza auditorías de historial, recupera cambios complejos y asesora al equipo sobre mejores prácticas en control de versiones.",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Programación funcional",
            description: "Capacidad para aplicar principios de la programación funcional como funciones puras, inmutabilidad y uso de operaciones como map, filter y reduce.\n\nEscala de valores:\n\n1 (Trainee): Tiene una idea básica sobre programación funcional.\n\n2 (Junior): Conoce los conceptos básicos de funciones puras y puede realizar operaciones sencillas como map o filter.\n\n3 (Semi Senior): Utiliza funciones de orden superior y estructuras inmutables en su código, evitando efectos secundarios simples.\n\n4 (Senior): Aplica patrones funcionales complejos (currying, composición) y utiliza librerías de programación funcional con comodidad.\n\n5 (Experto): Puede implementar soluciones completas con programación funcional, aprovechando estructuras avanzadas como mónadas y aplicativos. Puede enseñar principios funcionales al equipo.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Flujos de versionado",
            description: "Versioning workflows",
            averageWeight: 0.2,
            weight: 0.2
          },
          {
            name: "Gestión de dependencias",
            description: "Capacidad para manejar y mantener las dependencias de un proyecto, asegurando la correcta instalación, actualización y control de versiones de librerías y paquetes.\n\nEscala de valores:\n\n1 (Trainee): Puede instalar paquetes mediante herramientas de gestión de dependencias (npm, Maven, etc.).\n\n2 (Junior): Actualiza dependencias y gestiona cambios menores de versiones.\n\n3 (Semi Senior): Utiliza correctamente archivos de configuración de dependencias (package.json, pom.xml) y entiende la compatibilidad semántica. Identifica dependencias obsoletas o innecesarias.\n\n4 (Senior): Configura y gestiona versiones precisas con lock files y define configuraciones específicas por entorno. Automatiza procesos de instalación y actualización.\n\n5 (Experto): Diseña estrategias para evitar conflictos de versiones, crea y administra repositorios privados de dependencias y asegura la seguridad y estabilidad de los paquetes.",
            averageWeight: 0.2,
            weight: 0.2
          },
          {
            name: "Exception management",
            description: "Capacidad para manejar errores y excepciones en el código de forma estructurada, asegurando estabilidad, trazabilidad y una correcta gestión de fallos.\n\nEscala de valores:\n\n1 (Trainee): Sabe que existe el concepto.\n\n2 (Junior): Puede manejar excepciones simples con bloques try/catch básicos.\n\n3 (Semi Senior): Implementa diferentes tipos de excepciones personalizadas y gestiona logs de errores básicos.\n\n4 (Senior): Aplica patrones de manejo de errores centralizados, registra los errores detalladamente y puede propagar o traducir excepciones adecuadamente.\n\n5 (Experto): Implementa estrategias avanzadas de recuperación y manejo de errores, como circuit breakers y fallback. Utiliza sistemas de monitoreo y alertas.",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Debugging",
            description: "Debugging techniques and tools",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Testing(test unitarios, test de integracion)",
            description: "Testing: unit tests, integration tests",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Programación Orientada a Objetos",
            description: "Object-oriented programming",
            averageWeight: 0.7,
            weight: 0.7
          },
          {
            name: "Buenas prácticas (SOLID, Kiss, dry)",
            description: "Good practices: SOLID, KISS, DRY principles",
            averageWeight: 0.6,
            weight: 0.6
          },
          {
            name: "Patrones de diseño",
            description: "Design patterns",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Herramientas de calidad de código (Sonar, Lint, etc)",
            description: "Code quality tools: Sonar, Lint, etc.",
            averageWeight: 0.2,
            weight: 0.2
          },
          {
            name: "Manejo de Bases de Datos",
            description: "Capacidad para interactuar con bases de datos relacionales y no relacionales, utilizando comandos SQL y operaciones CRUD de manera eficiente, gestionando la conexión, consulta y actualización de datos.\n\nEscala de valores:\n\n1 (Trainee): Puede ejecutar consultas existentes.\n\n2 (Junior): Realiza consultas simples (SELECT, INSERT, UPDATE, DELETE) y entiende estructuras básicas de tablas.\n\n3 (Semi Senior): Crea tablas, relaciones y utiliza filtros avanzados (JOINs, WHERE, GROUP BY). Gestiona índices básicos y realiza backups manuales.\n\n4 (Senior): Optimiza consultas SQL, utiliza índices avanzados, y entiende conceptos como normalización y relaciones complejas (1:N, N:N). Maneja bases de datos relacionales y no relacionales. Crea vistas.\n\n5 (Experto): Gestiona conexiones eficientes, migraciones y réplicas de bases de datos. Diseña estrategias de particionado, clustering y optimización de consultas complejas. Domina la recuperación ante fallos y la gestión avanzada de bases de datos distribuidas y seguras.",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Diseño de Bases de Datos",
            description: "Capacidad para diseñar modelos de datos eficientes y mantener la evolución del esquema de bases de datos mediante control de versiones, asegurando consistencia y escalabilidad.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de diagramas entidad-relación y puede definir estructuras de datos simples.\n\n2 (Junior): Diseña bases de datos con relaciones sencillas y aplica reglas de integridad básica (claves foráneas, restricciones).\n\n3 (Semi Senior): Define esquemas de datos normalizados/desnormalizados según el contexto y utiliza herramientas de migración y versionado de esquemas (Flyway, Liquibase).\n\n4 (Senior): Diseña modelos de datos complejos optimizados para grandes volúmenes y aplica técnicas de versionado avanzado, gestionando múltiples entornos de base de datos.\n\n5 (Experto): Establece lineamientos para la creación de modelos de datos escalables, diseñando bases de datos distribuidas y planes de evolución de esquema sin impacto negativo en producción.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Versionado de Bases de Datos",
            description: "Database versioning",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Frameworks (Backend)",
            description: "Capacidad para trabajar eficientemente con frameworks de desarrollo backend, aprovechando sus características para agilizar la implementación de soluciones robustas y mantenibles.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos del framework (configuración inicial, rutas y controladores simples). Puede seguir tutoriales o ejemplos para construir aplicaciones básicas.\n\n2 (Junior): Implementa rutas, controladores y middlewares, configurando el framework según las necesidades del proyecto. Utiliza dependencias y extensiones comunes con soporte ocasional del equipo.\n\n3 (Semi Senior): Personaliza componentes del framework y configura módulos avanzados (interceptores, inyección de dependencias, middlewares personalizados). Comprende el ciclo de vida del framework y aplica configuraciones avanzadas.\n\n4 (Senior): Extiende la funcionalidad del framework mediante plugins o servicios personalizados. Resuelve problemas complejos de configuración y rendimiento. Evalúa qué framework es más adecuado según los requerimientos del sistema.\n\n5 (Experto): Diseña y establece estándares para el uso eficiente de frameworks en la arquitectura del proyecto. Asegura el uso correcto de las mejores prácticas y lidera la configuración de múltiples servicios basados en frameworks complejos. Propone mejoras y crea herramientas propias basadas en el framework cuando es necesario.",
            averageWeight: 0.6,
            weight: 0.6
          },
          {
            name: "Transactions",
            description: "Capacidad para manejar transacciones en bases de datos de manera eficiente y segura, garantizando consistencia y cumplimiento de los principios ACID.\n\nEscala de valores:\n\n1 (Trainee): Sabe que existe el concepto.\n\n2 (Junior): Conoce las operaciones básicas de 'commit' y 'rollback' y puede implementar transacciones simples en consultas básicas.\n\n3 (Semi Senior): Implementa transacciones en operaciones multi-etapa y utiliza transacciones automáticas del framework o motor de base de datos. Comienza a manejar excepciones para revertir cambios en caso de errores.\n\n4 (Senior): Configura transacciones complejas con niveles de aislamiento adecuados. Implementa transacciones anidadas y asegura la consistencia de los datos en entornos multiusuario y concurrentes.\n\n5 (Experto): Diseña y optimiza procesos transaccionales en aplicaciones de gran escala. Implementa transacciones distribuidas utilizando técnicas como 'two-phase commit' o patrones de 'saga' para manejar fallos en sistemas distribuidos.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Programación Orientada a Aspectos",
            description: "Aspect-oriented programming",
            averageWeight: 0.2,
            weight: 0.2
          },
          {
            name: "Inyección de dependencias (uso práctico)",
            description: "Dependency injection (practical use)",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Multitasking (Concurrencia y Paralelismo)",
            description: "Capacidad para desarrollar aplicaciones que ejecuten múltiples tareas concurrentes o paralelas de manera eficiente, garantizando integridad y rendimiento.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de tareas asíncronas y puede implementar tareas simples usando async/await, promesas o hilos básicos según el lenguaje.\n\n2 (Junior): Implementa tareas concurrentes utilizando librerías estándar del lenguaje (como thread pools y futures). Puede gestionar casos simples de paralelismo sin interferencia entre tareas.\n\n3 (Semi Senior): Utiliza patrones avanzados de concurrencia y paralelismo (como semáforos, mutex y colas de mensajes). Maneja condiciones de carrera y deadlocks en entornos concurrentes.\n\n4 (Senior): Diseña aplicaciones concurrentes optimizadas para alta concurrencia y paralelismo, evitando bloqueos y sobrecarga de recursos. Utiliza sistemas de colas distribuidas para coordinar múltiples procesos.\n\n5 (Experto): Diseña arquitecturas distribuidas y sistemas altamente concurrentes y tolerantes a fallos. Lidera la implementación de patrones avanzados de paralelismo, como el 'actor model' y event-driven, y define estándares para sistemas que procesan grandes volúmenes de datos concurrentemente.",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Patrones de Arquitectura (Microservicios, MVC)",
            description: "Capacidad para diseñar y aplicar patrones de arquitectura de software, asegurando un diseño robusto, escalable y mantenible de las aplicaciones backend.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de patrones de arquitectura y puede estructurar aplicaciones pequeñas siguiendo ejemplos.\n\n2 (Junior): Implementa aplicaciones usando patrones como MVC y MVVM, con separación clara de responsabilidades.\n\n3 (Semi Senior): Diseña aplicaciones con arquitecturas modulares y aplica patrones avanzados como VIPER o Clean Architecture.\n\n4 (Senior): Optimiza la arquitectura para mejorar el rendimiento y la mantenibilidad. Identifica y corrige problemas de arquitectura en aplicaciones grandes.\n\n5 (Experto): Define la arquitectura base para todo el proyecto. Lidera revisiones de arquitectura y asegura que el equipo siga los lineamientos definidos.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Logging",
            description: "Capacidad para implementar y mantener sistemas de registro de eventos y logs de manera eficiente, asegurando trazabilidad y diagnósticos rápidos de errores en el sistema.\n\nEscala de valores:\n\n1 (Trainee): Implementa logs básicos para registrar eventos simples, como errores y mensajes de información. Utiliza funciones predeterminadas del framework o sistema.\n\n2 (Junior): Utiliza niveles de log (INFO, WARN, ERROR) y configura formatos de salida básicos. Implementa registros de eventos en puntos clave de la aplicación.\n\n3 (Semi Senior): Implementa soluciones de logging estructuradas (JSON, XML) para facilitar el análisis. Utiliza herramientas de monitoreo y configura logs centralizados en entornos distribuidos.\n\n4 (Senior): Diseña y configura sistemas avanzados de logging y monitoreo centralizado (como ELK o Grafana Loki). Optimiza la cantidad y formato de logs para evitar sobrecarga en sistemas de producción.\n\n5 (Experto): Define estrategias de logging para toda la arquitectura, asegurando trazabilidad completa y anonimización de datos sensibles. Establece políticas de retención, monitoreo y respuesta ante incidentes en tiempo real.",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Security",
            description: "Capacidad para aplicar medidas de seguridad en aplicaciones backend, asegurando autenticación, autorización y protección ante vulnerabilidades comunes.\n\nEscala de valores:\n\n1 (Trainee): Conoce los principios básicos de seguridad (uso de HTTPS, validación de entradas)\n\n2 (Junior): Puede implementar autenticación básica con credenciales protegidas.\n\n3 (Semi Senior): Implementa autenticación segura (como JWT o OAuth) y medidas básicas de protección contra vulnerabilidades comunes (SQL Injection, XSS). Utiliza correctamente la configuración de permisos básicos.\n\n4 (Senior): Implementa técnicas avanzadas de autorización y autenticación (RBAC, ABAC) y aplica cifrado seguro de datos. Realiza validaciones profundas y aplica reglas de validación específicas en puntos críticos de entrada y salida de datos.\n\n5 (Experto): Define la estrategia global de seguridad de la aplicación y lidera auditorías de seguridad periódicas. Asegura la integración de estándares de seguridad (ISO, OWASP) y dirige la respuesta ante incidentes de seguridad.",
            averageWeight: 0.5,
            weight: 0.5
          },
          {
            name: "Multitasking",
            description: "Capacidad para desarrollar aplicaciones que ejecuten múltiples tareas concurrentes o paralelas de manera eficiente, garantizando integridad y rendimiento.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de tareas asíncronas y puede implementar tareas simples usando async/await, promesas o hilos básicos según el lenguaje.\n\n2 (Junior): Implementa tareas concurrentes utilizando librerías estándar del lenguaje (como thread pools y futures). Puede gestionar casos simples de paralelismo sin interferencia entre tareas.\n\n3 (Semi Senior): Utiliza patrones avanzados de concurrencia y paralelismo (como semáforos, mutex y colas de mensajes). Maneja condiciones de carrera y deadlocks en entornos concurrentes.\n\n4 (Senior): Diseña aplicaciones concurrentes optimizadas para alta concurrencia y paralelismo, evitando bloqueos y sobrecarga de recursos. Utiliza sistemas de colas distribuidas para coordinar múltiples procesos.\n\n5 (Experto): Diseña arquitecturas distribuidas y sistemas altamente concurrentes y tolerantes a fallos. Lidera la implementación de patrones avanzados de paralelismo, como el 'actor model' y event-driven, y define estándares para sistemas que procesan grandes volúmenes de datos concurrentemente.",
            averageWeight: 0.4,
            weight: 0.4
          },
          {
            name: "Mocking",
            description: "Mocking and testing",
            averageWeight: 0.3,
            weight: 0.3
          },
          {
            name: "Patrones de arquitectura (por capas, microservicios, mvc)",
            description: "Capacidad para diseñar y aplicar patrones de arquitectura de software, asegurando un diseño robusto, escalable y mantenible de las aplicaciones backend.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de patrones de arquitectura y puede estructurar aplicaciones pequeñas siguiendo ejemplos.\n\n2 (Junior): Implementa aplicaciones usando patrones como MVC y MVVM, con separación clara de responsabilidades.\n\n3 (Semi Senior): Diseña aplicaciones con arquitecturas modulares y aplica patrones avanzados como VIPER o Clean Architecture.\n\n4 (Senior): Optimiza la arquitectura para mejorar el rendimiento y la mantenibilidad. Identifica y corrige problemas de arquitectura en aplicaciones grandes.\n\n5 (Experto): Define la arquitectura base para todo el proyecto. Lidera revisiones de arquitectura y asegura que el equipo siga los lineamientos definidos.",
            averageWeight: 0.5,
            weight: 0.5
          }
        ]
      },
      {
        name: "Frontend",
        groupWeight: 10,
        skills: [
          {
            name: "JavaScript/Typescript",
            description: "JavaScript and TypeScript",
            averageWeight: 1.50,
            weight: 1.50
          },
          {
            name: "Modern CSS(Styled Components, CSS Modules, Styled JSX)",
            description: "Modern CSS: Styled Components, CSS Modules, Styled JSX",
            averageWeight: 1.25,
            weight: 1.25
          },
          {
            name: "CSS Frameworks (Bootstrap, Chakra, Material)",
            description: "Capacidad para utilizar frameworks de CSS para agilizar el desarrollo de interfaces consistentes y adaptativas.\n\nEscala de valores:\n\n1 (Trainee): Conoce los componentes básicos de frameworks como Bootstrap y puede utilizarlos para crear layouts simples.\n\n2 (Junior): Utiliza componentes avanzados del framework y modifica estilos mediante utilidades personalizadas.\n\n3 (Semi Senior): Personaliza el framework mediante variables y configuración avanzada (temas, breakpoints personalizados). Implementa componentes reutilizables utilizando las convenciones del framework.\n\n4 (Senior): Optimiza el uso del framework para mejorar la carga y el rendimiento. Evalúa frameworks de CSS según las necesidades del proyecto y realiza integraciones personalizadas.\n\n5 (Experto): Diseña lineamientos de uso del framework, asegurando consistencia en todos los proyectos. Lidera la configuración y desarrollo de temas globales y administra la creación de componentes a medida.",
            averageWeight: 1.25,
            weight: 1.25
          },
          {
            name: "Web Components (HTML Templates, Shadow DOM)",
            description: "Web Components: HTML Templates, Shadow DOM",
            averageWeight: 1.25,
            weight: 1.25
          },
          {
            name: "Frameworks (React, Angular, Vue)",
            description: "Capacidad para trabajar con frameworks de desarrollo frontend modernos para crear aplicaciones web complejas y modulares.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos del framework (componentes, props, rutas simples) y puede crear aplicaciones pequeñas siguiendo ejemplos y tutoriales.\n\n2 (Junior): Implementa aplicaciones con componentes dinámicos y utiliza correctamente el ciclo de vida o hooks básicos. Integra servicios REST y realiza navegación entre páginas.\n\n3 (Semi Senior): Configura rutas avanzadas, lazy loading y módulos compartidos. Implementa componentes reutilizables y maneja formularios complejos y validaciones.\n\n4 (Senior): Diseña aplicaciones grandes utilizando una arquitectura modular y optimiza el rendimiento del framework mediante técnicas como memoización, SSR o rendering condicional eficiente.\n\n5 (Experto): Define lineamientos para el uso eficiente del framework y lidera la adopción de actualizaciones o migraciones. Diseña arquitecturas SPA/Microfrontends optimizadas y realiza revisiones de implementación de componentes y servicios.",
            averageWeight: 1.50,
            weight: 1.50
          },
          {
            name: "Package Manager (npm, yarn,nuget)",
            description: "Package Manager: npm, yarn, nuget",
            averageWeight: 1.00,
            weight: 1.00
          },
          {
            name: "Responsive design",
            description: "Capacidad para diseñar interfaces web que se adapten correctamente a diferentes dispositivos y tamaños de pantalla.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Responsive Design.\n\n2 (Junior): Conoce los conceptos básicos de responsive design y utiliza media queries para ajustar estilos según el tamaño de pantalla. Maneja correctamente las propiedades flex y grid para construir layouts responsivos.\n\n3 (Semi Senior): Implementa diseños fluidos y escalables utilizando breakpoints avanzados y herramientas de previsualización. Aplica técnicas de imágenes adaptativas y fuentes responsivas.\n\n4 (Senior): Diseña interfaces completamente adaptativas para distintos dispositivos y condiciones de red. Optimiza el rendimiento de la carga en dispositivos móviles.\n\n5 (Experto): Define lineamientos de diseño responsivo para todo el proyecto. Lidera revisiones de diseño con foco en accesibilidad, consistencia y rendimiento.",
            averageWeight: 1.10,
            weight: 1.10
          },
          {
            name: "Programación reactiva",
            description: "Reactive programming",
            averageWeight: 1.00,
            weight: 1.00
          }
        ]
      },
      {
        name: "DevOps",
        groupWeight: 10,
        skills: [
          {
            name: "CI/CD Workflows",
            description: "Capacidad para configurar y utilizar herramientas de Integración y Despliegue Continuo para automatizar la ejecución de tests, builds y despliegues.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de CI/CD y puede ejecutar pipelines predefinidos siguiendo instrucciones.\n\n2 (Junior): Modifica y configura pipelines básicos, agrega pasos de validación como tests automatizados y realiza despliegues en entornos de prueba.\n\n3 (Semi Senior): Implementa pipelines personalizados con configuraciones avanzadas como triggers automáticos y despliegue condicional. Integra diferentes servicios (Docker, test coverage, etc.).\n\n4 (Senior): Optimiza pipelines para reducir tiempos de ejecución y realiza configuraciones seguras de variables de entorno y credenciales. Supervisa y soluciona fallos en CI/CD.\n\n5 (Experto): Establece estándares de configuración de pipelines CI/CD para proyectos del equipo. Lidera la adopción de nuevas herramientas y asegura la integración completa de CI/CD con repositorios, pruebas y monitoreo.",
            averageWeight: 1.30,
            weight: 1.30
          },
          {
            name: "Uso de Message Brokers (RabbitMQ, Kafka)",
            description: "Capacidad para trabajar con sistemas de mensajería para manejar comunicaciones asincrónicas y desacopladas entre servicios.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de colas de mensajes y publica o consume mensajes simples utilizando herramientas predeterminadas.\n\n2 (Junior): Implementa conexiones con brokers para enviar y recibir mensajes en aplicaciones simples. Gestiona colas y exchanges básicos.\n\n3 (Semi Senior): Configura canales de comunicación avanzados con diferentes patrones de publicación (publish/subscribe, routing, topics). Implementa reintentos y manejo de errores.\n\n4 (Senior): Optimiza la configuración de message brokers para alta concurrencia y resiliencia. Gestiona y monitorea la salud de los brokers y ajusta configuraciones de rendimiento.\n\n5 (Experto): Define estrategias de comunicación asincrónica y lidera la adopción de message brokers en sistemas distribuidos. Asegura la correcta implementación de patrones avanzados y monitorea su estabilidad.",
            averageWeight: 1.10,
            weight: 1.10
          },
          {
            name: "Uso de Contenedores (Docker, Kubernetes)",
            description: "Capacidad para trabajar con contenedores para empaquetar, distribuir y gestionar aplicaciones de manera eficiente y reproducible.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de contenedores y puede construir y ejecutar imágenes Docker simples.\n\n2 (Junior): Utiliza Docker Compose para orquestar múltiples servicios locales y gestiona volúmenes y redes básicas.\n\n3 (Semi Senior): Optimiza Dockerfiles y configura variables de entorno y secrets. Realiza despliegues simples en clústeres de Kubernetes utilizando archivos YAML básicos.\n\n4 (Senior): Configura y gestiona clústeres de Kubernetes con múltiples nodos. Implementa servicios con escalado automático y define políticas de recursos.\n\n5 (Experto): Define lineamientos para la creación de contenedores y administra la infraestructura de orquestación de contenedores a nivel de proyecto. Lidera la implementación de soluciones con alta disponibilidad y recuperación ante fallos.",
            averageWeight: 1.30,
            weight: 1.30
          },
          {
            name: "Web Servers (Nginx, Apache)",
            description: "Capacidad para configurar, administrar y optimizar servidores web como Nginx y Apache HTTP Server, asegurando el despliegue eficiente, seguro y escalable de aplicaciones.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de web servers.\n\n2 (Junior): Conoce los fundamentos de los servidores web y puede configurar rutas simples para servir contenido estático. Realiza tareas básicas como configurar un directorio raíz o manejar errores comunes en el servidor.\n\n3 (Semi Senior): Configura proxys inversos básicos para conectar aplicaciones frontend con backend. Realiza redirecciones y configura reglas simples para manejar errores HTTP (404, 500). Trabaja con configuraciones estándar y archivos predeterminados del servidor.\n\n4 (Senior): Implementa configuraciones de balanceo de carga y políticas de cacheo para mejorar el rendimiento. Integra el servidor web con aplicaciones dinámicas (Node.js, Python, PHP). Maneja logs del servidor para diagnosticar problemas básicos de rendimiento o tráfico.\n\n5 (Experto): Configura y gestiona certificados SSL/TLS para asegurar las conexiones (HTTPS). Diseña estrategias de optimización del servidor web, como compresión (gzip) y ajustes de encabezados HTTP para seguridad y rendimiento. Identifica y corrige problemas relacionados con el tráfico y la concurrencia.",
            averageWeight: 1.20,
            weight: 1.20
          },
          {
            name: "Application Servers",
            description: "Application servers",
            averageWeight: 1.10,
            weight: 1.10
          },
          {
            name: "Monitoring",
            description: "Capacidad para implementar y utilizar herramientas de monitoreo para supervisar el estado de servicios y sistemas en tiempo real.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Monitoreo.\n\n2 (Junior): Conoce los conceptos básicos de monitoreo y puede interpretar dashboards predefinidos de estado del sistema.\n\n3 (Semi Senior): Configura alertas básicas y monitorea el estado de recursos como CPU, memoria y estado de servicios mediante herramientas como Grafana o CloudWatch.\n\n4 (Senior): Implementa dashboards personalizados para métricas específicas de la aplicación. Integra el monitoreo con notificaciones automáticas para incidentes.\n\n5 (Experto): Optimiza los sistemas de monitoreo para evitar falsos positivos y realiza análisis de logs históricos para identificar patrones de fallas recurrentes. Implementa herramientas de observabilidad distribuida.",
            averageWeight: 1.10,
            weight: 1.10
          },
          {
            name: "Métricas (Grafana, Prometheus)",
            description: "Capacidad para configurar y gestionar sistemas de recolección y visualización de métricas de aplicaciones y sistemas.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Métricas.\n\n2 (Junior): Conoce los conceptos básicos de métricas y es capaz de visualizar dashboards preexistentes.\n\n3 (Semi Senior): Configura métricas básicas de monitoreo (CPU, uso de memoria, uso de disco) y genera gráficos simples.\n\n4 (Senior): Personaliza dashboards con métricas específicas de la aplicación (tiempo de respuesta, tasas de error, throughput) y utiliza alertas con umbrales dinámicos.\n\n5 (Experto): Implementa y optimiza sistemas de recopilación de métricas complejas con Prometheus y Grafana, incluyendo consultas avanzadas (PromQL) y paneles combinados.",
            averageWeight: 0.90,
            weight: 0.90
          },
          {
            name: "Infrastructure as Code (Terraform, otros)",
            description: "Infrastructure as Code: Terraform, others",
            averageWeight: 0.90,
            weight: 0.90
          },
          {
            name: "Networking (Internet, Protocolos, DNS, Dominios)",
            description: "Capacidad para comprender y gestionar configuraciones básicas de redes, dominios y protocolos para asegurar la conectividad y accesibilidad de los sistemas.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de redes, como direcciones IP y puertos. Puede hacer pruebas básicas de conexión usando herramientas como ping y traceroute.\n\n2 (Junior): Entiende y configura DNS básicos y realiza redirecciones simples de dominios. Conoce protocolos como HTTP, HTTPS, TCP y UDP.\n\n3 (Semi Senior): Gestiona configuraciones avanzadas de dominios y subdominios, certificados SSL y configuraciones de seguridad de red. Optimiza el manejo de rutas y direcciones IP.\n\n4 (Senior): Diseña soluciones de red para aplicaciones distribuidas, asegurando seguridad y rendimiento. Identifica y soluciona problemas complejos de red en entornos de producción.\n\n5 (Experto): Define la estrategia de redes del proyecto, lidera la implementación de balanceadores de carga y revisa configuraciones de firewalls y DNS para evitar vulnerabilidades. Capacita al equipo en buenas prácticas de conectividad y seguridad en red.",
            averageWeight: 1.10,
            weight: 1.10
          }
        ]
      }
    ]
  },
  devops: {
    name: "DevOps",
    rankingRanges: [
      { min: 0, max: 19, level: "Trainee", description: "Learning DevOps fundamentals" },
      { min: 20, max: 29, level: "Junior", description: "Can manage basic infrastructure" },
      { min: 30, max: 39, level: "Semi-Senior", description: "Handles complex infrastructure and automation" },
      { min: 40, max: 49, level: "Senior", description: "Leads DevOps practices and teams" },
      { min: 50, max: 100, level: "Expert", description: "Infrastructure architecture and platform leadership" }
    ],
    skillGroups: [
      {
        name: "Devops",
        groupWeight: 100,
        isMainStack: true,
        skills: [
          {
            name: "Lenguajes de programación (Python, Go, Ruby, etc)",
            description: "Programming languages: Python, Go, Ruby, etc.",
            averageWeight: 0.48,
            weight: 0.48
          },
          {
            name: "Sistemas Operativos",
            description: "Operating systems",
            averageWeight: 0.52,
            weight: 0.52
          },
          {
            name: "Manejo de terminal (comandos, scripting)",
            description: "Terminal management: commands, scripting",
            averageWeight: 0.55,
            weight: 0.55
          },
          {
            name: "Control de versiones (git)",
            description: "Version control: Git",
            averageWeight: 0.52,
            weight: 0.52
          },
          {
            name: "Alojamiento de control de versiones",
            description: "Version control hosting",
            averageWeight: 0.38,
            weight: 0.38
          },
          {
            name: "Web Servers (Nginx, Apache)",
            description: "Capacidad para configurar, administrar y optimizar servidores web como Nginx y Apache HTTP Server, asegurando el despliegue eficiente, seguro y escalable de aplicaciones.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de web servers.\n\n2 (Junior): Conoce los fundamentos de los servidores web y puede configurar rutas simples para servir contenido estático. Realiza tareas básicas como configurar un directorio raíz o manejar errores comunes en el servidor.\n\n3 (Semi Senior): Configura proxys inversos básicos para conectar aplicaciones frontend con backend. Realiza redirecciones y configura reglas simples para manejar errores HTTP (404, 500). Trabaja con configuraciones estándar y archivos predeterminados del servidor.\n\n4 (Senior): Implementa configuraciones de balanceo de carga y políticas de cacheo para mejorar el rendimiento. Integra el servidor web con aplicaciones dinámicas (Node.js, Python, PHP). Maneja logs del servidor para diagnosticar problemas básicos de rendimiento o tráfico.\n\n5 (Experto): Configura y gestiona certificados SSL/TLS para asegurar las conexiones (HTTPS). Diseña estrategias de optimización del servidor web, como compresión (gzip) y ajustes de encabezados HTTP para seguridad y rendimiento. Identifica y corrige problemas relacionados con el tráfico y la concurrencia.",
            averageWeight: 0.52,
            weight: 0.52
          },
          {
            name: "Uso de Contenedores (Docker, Kubernetes)",
            description: "Capacidad para trabajar con contenedores para empaquetar, distribuir y gestionar aplicaciones de manera eficiente y reproducible.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de contenedores y puede construir y ejecutar imágenes Docker simples.\n\n2 (Junior): Utiliza Docker Compose para orquestar múltiples servicios locales y gestiona volúmenes y redes básicas.\n\n3 (Semi Senior): Optimiza Dockerfiles y configura variables de entorno y secrets. Realiza despliegues simples en clústeres de Kubernetes utilizando archivos YAML básicos.\n\n4 (Senior): Configura y gestiona clústeres de Kubernetes con múltiples nodos. Implementa servicios con escalado automático y define políticas de recursos.\n\n5 (Experto): Define lineamientos para la creación de contenedores y administra la infraestructura de orquestación de contenedores a nivel de proyecto. Lidera la implementación de soluciones con alta disponibilidad y recuperación ante fallos.",
            averageWeight: 0.55,
            weight: 0.55
          },
          {
            name: "Cloud providers (AWS, GCP, Azure)",
            description: "Cloud providers: AWS, GCP, Azure",
            averageWeight: 0.52,
            weight: 0.52
          },
          {
            name: "Networking (Internet, Protocolos, DNS, Dominios)",
            description: "Capacidad para comprender y gestionar configuraciones básicas de redes, dominios y protocolos para asegurar la conectividad y accesibilidad de los sistemas.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de redes, como direcciones IP y puertos. Puede hacer pruebas básicas de conexión usando herramientas como ping y traceroute.\n\n2 (Junior): Entiende y configura DNS básicos y realiza redirecciones simples de dominios. Conoce protocolos como HTTP, HTTPS, TCP y UDP.\n\n3 (Semi Senior): Gestiona configuraciones avanzadas de dominios y subdominios, certificados SSL y configuraciones de seguridad de red. Optimiza el manejo de rutas y direcciones IP.\n\n4 (Senior): Diseña soluciones de red para aplicaciones distribuidas, asegurando seguridad y rendimiento. Identifica y soluciona problemas complejos de red en entornos de producción.\n\n5 (Experto): Define la estrategia de redes del proyecto, lidera la implementación de balanceadores de carga y revisa configuraciones de firewalls y DNS para evitar vulnerabilidades. Capacita al equipo en buenas prácticas de conectividad y seguridad en red.",
            averageWeight: 0.55,
            weight: 0.55
          },
          {
            name: "Serverless (AWS lambda, GCP functions)",
            description: "Serverless: AWS Lambda, GCP Functions",
            averageWeight: 0.45,
            weight: 0.45
          },
          {
            name: "Aprovisionamiento de infraestructura (Terraform, Cloudformation, AWS CDK, Pulumi)",
            description: "Infrastructure provisioning: Terraform, CloudFormation, AWS CDK, Pulumi",
            averageWeight: 0.55,
            weight: 0.55
          },
          {
            name: "Configuration Management (Ansible, Chef, Puppet)",
            description: "Configuration Management: Ansible, Chef, Puppet",
            averageWeight: 0.24,
            weight: 0.24
          },
          {
            name: "CI/CD Workflows",
            description: "Capacidad para configurar y utilizar herramientas de Integración y Despliegue Continuo para automatizar la ejecución de tests, builds y despliegues.\n\nEscala de valores:\n\n1 (Trainee): Conoce los conceptos básicos de CI/CD y puede ejecutar pipelines predefinidos siguiendo instrucciones.\n\n2 (Junior): Modifica y configura pipelines básicos, agrega pasos de validación como tests automatizados y realiza despliegues en entornos de prueba.\n\n3 (Semi Senior): Implementa pipelines personalizados con configuraciones avanzadas como triggers automáticos y despliegue condicional. Integra diferentes servicios (Docker, test coverage, etc.).\n\n4 (Senior): Optimiza pipelines para reducir tiempos de ejecución y realiza configuraciones seguras de variables de entorno y credenciales. Supervisa y soluciona fallos en CI/CD.\n\n5 (Experto): Establece estándares de configuración de pipelines CI/CD para proyectos del equipo. Lidera la adopción de nuevas herramientas y asegura la integración completa de CI/CD con repositorios, pruebas y monitoreo.",
            averageWeight: 0.55,
            weight: 0.55
          },
          {
            name: "Gestión de secrets (Vault, AWS Secrets, SOPS, Sealed Secrets)",
            description: "Secrets management: Vault, AWS Secrets, SOPS, Sealed Secrets",
            averageWeight: 0.48,
            weight: 0.48
          },
          {
            name: "Monitoring",
            description: "Capacidad para implementar y utilizar herramientas de monitoreo para supervisar el estado de servicios y sistemas en tiempo real.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Monitoreo.\n\n2 (Junior): Conoce los conceptos básicos de monitoreo y puede interpretar dashboards predefinidos de estado del sistema.\n\n3 (Semi Senior): Configura alertas básicas y monitorea el estado de recursos como CPU, memoria y estado de servicios mediante herramientas como Grafana o CloudWatch.\n\n4 (Senior): Implementa dashboards personalizados para métricas específicas de la aplicación. Integra el monitoreo con notificaciones automáticas para incidentes.\n\n5 (Experto): Optimiza los sistemas de monitoreo para evitar falsos positivos y realiza análisis de logs históricos para identificar patrones de fallas recurrentes. Implementa herramientas de observabilidad distribuida.",
            averageWeight: 0.45,
            weight: 0.45
          },
          {
            name: "Métricas (Grafana, Prometheus)",
            description: "Capacidad para configurar y gestionar sistemas de recolección y visualización de métricas de aplicaciones y sistemas.\n\nEscala de valores:\n\n1 (Trainee): Tiene noción del concepto de Métricas.\n\n2 (Junior): Conoce los conceptos básicos de métricas y es capaz de visualizar dashboards preexistentes.\n\n3 (Semi Senior): Configura métricas básicas de monitoreo (CPU, uso de memoria, uso de disco) y genera gráficos simples.\n\n4 (Senior): Personaliza dashboards con métricas específicas de la aplicación (tiempo de respuesta, tasas de error, throughput) y utiliza alertas con umbrales dinámicos.\n\n5 (Experto): Implementa y optimiza sistemas de recopilación de métricas complejas con Prometheus y Grafana, incluyendo consultas avanzadas (PromQL) y paneles combinados.",
            averageWeight: 0.38,
            weight: 0.38
          },
          {
            name: "Gestión de logging (ELK, Loki)",
            description: "Logging management: ELK, Loki",
            averageWeight: 0.34,
            weight: 0.34
          },
          {
            name: "Orquestación de containers (Kubernetes, Rancher, GKE, AWS ECS)",
            description: "Container orchestration: Kubernetes, Rancher, GKE, AWS ECS",
            averageWeight: 0.55,
            weight: 0.55
          },
          {
            name: "Gestión de artefactos (Artifactory, Nexus, Github Packages)",
            description: "Artifact management: Artifactory, Nexus, GitHub Packages",
            averageWeight: 0.45,
            weight: 0.45
          },
          {
            name: "Gitops (FluxCD, ArgoCD)",
            description: "GitOps: FluxCD, ArgoCD",
            averageWeight: 0.34,
            weight: 0.34
          },
          {
            name: "Service Mesh (Istio, Envoy, Consul)",
            description: "Service Mesh: Istio, Envoy, Consul",
            averageWeight: 0.24,
            weight: 0.24
          },
          {
            name: "Patrones de diseño Cloud (Availability, Data Management, Scalability)",
            description: "Cloud design patterns: Availability, Data Management, Scalability",
            averageWeight: 0.38,
            weight: 0.38
          }
        ]
      }
    ]
  }
};

export const seniorityLevels = [
  { level: 1, name: "Trainee", description: "Learning fundamentals" },
  { level: 2, name: "Junior", description: "Basic implementation" },
  { level: 3, name: "SSR", description: "Semi-Senior, independent work" },
  { level: 4, name: "Senior", description: "Advanced, mentoring others" },
  { level: 5, name: "Expert", description: "Architecture and leadership" }
];


