export const navItems = [
  {
    label: "Inicio",
    href: "#inicio"
  },
  {
    label: "Sobre mí",
    href: "#sobre-mi"
  },
  {
    label: "Habilidades",
    href: "#habilidades"
  },
  {
    label: "Proyectos",
    href: "#proyectos"
  },
  {
    label: "Contacto",
    href: "#contacto"
  }
];

export const images = {
  hero:
    "https://static.prod-images.emergentagent.com/jobs/5bdfa4db-8f3b-4f37-8d83-9861562189b5/images/66a43136aeb260c4fde4f610728b3be6a84ad804abf2d5f58aff3fc894d1b85e.png",

  profile:
    "/img/img1portfolio.jpeg",

  programming:
    "https://static.prod-images.emergentagent.com/jobs/5bdfa4db-8f3b-4f37-8d83-9861562189b5/images/30176cfaef4264c6a6c40caefe085f166550e731323fb6ec6116cace463bf4d1.png",

  cybersecurity:
    "https://static.prod-images.emergentagent.com/jobs/5bdfa4db-8f3b-4f37-8d83-9861562189b5/images/7ced1c6a89f3be5b203787d2528298553ea28ad06a523441764b9476dc15a2bb.png",

  webdev:
    "https://static.prod-images.emergentagent.com/jobs/5bdfa4db-8f3b-4f37-8d83-9861562189b5/images/cb39f13e61fb4c6f2d70550031941ec3adfa1696557b583bbaebd2ed212ad9c8.png"
};

export const skills = [
  {
    icon: "🛡",
    title: "Seguridad de redes",
    description:
      "Placeholder: análisis de tráfico, hardening básico, monitoreo de red, segmentación y revisión de configuraciones.",
    tags: ["TCP/IP", "Firewall", "Wireshark"]
  },
  {
    icon: "🌐",
    title: "Aplicaciones web",
    description:
      "Placeholder: pruebas de seguridad web, revisión de autenticación, formularios, sesiones y controles de acceso.",
    tags: ["OWASP", "Burp Suite", "JWT"]
  },
  {
    icon: "⌨",
    title: "Automatización técnica",
    description:
      "Placeholder: scripts para auditorías, procesamiento de logs, reportes técnicos y tareas repetitivas.",
    tags: ["Python", "Bash", "Linux"]
  },
  {
    icon: "💻",
    title: "Desarrollo seguro",
    description:
      "Placeholder: creación de interfaces, validación de entradas, consumo de APIs y buenas prácticas de código.",
    tags: ["React", "APIs", "Git"]
  }
];

export const projects = [
  {
    id: "programacion",
    category: "Programación",
    icon: "{}",
    title: "Suite de scripts para análisis de logs",
    summary:
      "Herramienta placeholder para procesar eventos, detectar patrones y generar reportes rápidos.",
    image: images.programming,
    tools: ["Python", "Regex", "CSV", "CLI"],
    overview:
      "Placeholder: este proyecto documenta la creación de una suite de scripts pensada para revisar archivos de registro, detectar eventos importantes y generar reportes claros para análisis técnico.",
    process: [
      "Placeholder: definición del formato de entrada, tipos de logs y criterios de filtrado.",
      "Placeholder: desarrollo de módulos para limpiar, clasificar y exportar eventos relevantes.",
      "Placeholder: pruebas con datasets de ejemplo y generación de reportes reproducibles."
    ],
    gallery: [
      "Panel placeholder de resultados por severidad.",
      "Vista placeholder de filtros por fecha y origen.",
      "Reporte placeholder exportado para documentación."
    ]
  },
  {
    id: "ciberseguridad",
    category: "Ciberseguridad",
    icon: "◎",
    title: "Laboratorio de auditoría web y redes",
    summary:
      "Entorno placeholder para practicar reconocimiento, análisis de tráfico y validación OWASP.",
    image: images.cybersecurity,
    tools: ["Nmap", "Burp Suite", "Wireshark", "OWASP"],
    overview:
      "Placeholder: este laboratorio reúne prácticas controladas de ciberseguridad enfocadas en redes y aplicaciones web, con reportes escritos de hallazgos, riesgos y mitigaciones.",
    process: [
      "Placeholder: diseño de un entorno seguro para realizar pruebas sin afectar sistemas reales.",
      "Placeholder: reconocimiento, enumeración y captura de tráfico con evidencias.",
      "Placeholder: reporte ejecutivo con impacto, riesgo y recomendaciones defensivas."
    ],
    gallery: [
      "Mapa placeholder de superficie de ataque.",
      "Captura placeholder de análisis HTTP.",
      "Checklist placeholder de mitigaciones OWASP."
    ]
  },
  {
    id: "desarrollo-web",
    category: "Desarrollo web",
    icon: "▣",
    title: "Dashboard seguro para monitoreo académico",
    summary:
      "Aplicación placeholder con interfaz React, métricas, formularios validados y buenas prácticas.",
    image: images.webdev,
    tools: ["React", "Tailwind", "APIs", "Validación"],
    overview:
      "Placeholder: este proyecto muestra cómo se construyó una interfaz web moderna con componentes reutilizables, rutas claras y una experiencia visual alineada con seguridad informática.",
    process: [
      "Placeholder: diseño de la arquitectura visual, estados y navegación principal.",
      "Placeholder: implementación de componentes responsivos y formularios validados.",
      "Placeholder: documentación del flujo de datos y revisión de seguridad básica."
    ],
    gallery: [
      "Wireframe placeholder del panel principal.",
      "Pantalla placeholder de métricas académicas.",
      "Formulario placeholder con validaciones visibles."
    ]
  }
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "#"
  },
  {
    label: "Correo",
    href: "mailto:placeholder@email.com"
  },
  {
    label: "CV",
    href: "/cv-placeholder.pdf"
  }
];
