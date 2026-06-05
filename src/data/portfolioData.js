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
    icon: "🛡️",
    title: "Seguridad de Redes & Hardware",
    description:
      "Configuración, diagnóstico y mantenimiento de infraestructura física y lógica bajo estándares Cisco (CCNA). Experiencia en segmentación de redes, implementación de firewalls, ACLs y mantenimiento de hardware crítico, incluyendo la instalación de almacenamiento y configuración de arreglos RAID 5 para garantizar la tolerancia a fallos.",
    tags: ["Cisco CCNA 1, 2 & 3", "Protocolos de enrutamiento", "Firewalls & ACLs", "Cisco IT Essentials", "Cisco Packet Tracer"]
  },
  {
    icon: "🌐",
    title: "AppSec & Pentesting",
    description:
      "Auditoría y análisis de seguridad en aplicaciones web enfocado en la detección temprana de vulnerabilidades del OWASP Top 10. Experiencia implementando pruebas automatizadas y unitarias para asegurar mecanismos de autenticación, manejo de sesiones y sanitización de datos.",
    tags: ["OWASP Top 10", "Playwright", "Jest", "JWT (Tokens)", "Web Security"]
  },
  {
    icon: "⌨️",
    title: "Ciberseguridad Defensiva",
    description:
      "Formación teórica y práctica alineada a los dominios de la certificación CompTIA Security+ (SY0-701). Especialización en la simulación controlada de amenazas comunes (DDoS, malware, botnets) dentro de entornos aislados para el análisis de vectores de ataque y el diseño de contramedidas.",
    tags: ["CompTIA Security+ Ready", "Cisco Cybersecurity", "VirtualBox (Sandbox)", "WireGuard VPN", "Bash & Regex"]
  },
  {
    icon: "💻",
    title: "Desarrollo Full-Stack Seguro",
    description:
      "Construcción de aplicaciones web interactivas y robustas aplicando principios de seguridad desde el código. Experiencia en el desarrollo y consumo controlado de Web APIs (REST), control de versiones y aplicación de fundamentos de Machine Learning para modelos predictivos.",
    tags: ["React", "TypeScript / JavaScript", "Tailwind CSS", ".NET / C# (APIs)", "Machine Learning", "Git/GitHub"]
  },
  {
    icon: "🤖",
    title: "Bases de Datos & Sistemas",
    description:
      "Administración, diseño y optimización de bases de datos relacionales y no relacionales. Enfoque en la gestión de accesos, control de roles e integridad de datos en entornos empresariales mediante el uso de scripts, automatizaciones y despliegue rápido de aplicaciones.",
    tags: ["Oracle Database", "Oracle APEX", "MySQL", "NoSQL (MongoDB)", "Linux (Ubuntu)"]
  },
  {
    icon: "☁️",
    title: "Infraestructura & Nube (Cloud)",
    description:
      "Despliegue y arquitectura de entornos seguros en la nube utilizando AWS. Enfoque en la gestión de identidades y accesos (IAM), configuración de redes virtuales aisladas (VPC) y administración de políticas de seguridad perimetral para proteger la infraestructura crítica.",
    tags: ["AWS (VPC & EC2)", "Cloud Security", "Grupos de Seguridad", "Gestión IAM (Roles)"]
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
