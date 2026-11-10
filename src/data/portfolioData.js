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

  gestior:
    "/img/gestior_landing.png",

  ia:
    "/img/ia_prediccion_resultado.png",
  webdev:
    "/img/beach_sa_landing.png"
  };

export const skills = [
  {
    icon: "ShieldAlert",
    title: "Operaciones de Seguridad (SOC): en práctica",
    description:
      "Formación en curso como analista SOC de Nivel 1: análisis de registros de Windows y Linux, triage de alertas, enriquecimiento con fuentes de inteligencia (VirusTotal, AbuseIPDB) y documentación de incidentes en un laboratorio propio. Conocimientos alineados a los dominios de CompTIA Security+ (SY0-701), examen para el cual me preparo actualmente.",
    tags: ["Análisis de registros", "Triage de alertas", "MITRE ATT&CK", "Wazuh / Elastic (en práctica)", "Wireshark (en práctica)", "TryHackMe SOC L1 (en curso)"]
  },
  {
    icon: "Network",
    title: "Redes & Monitoreo de Tráfico",
    description:
      "Base sólida en redes bajo estándares Cisco (CCNA 1 a 3): TCP/IP, DNS, segmentación, ACLs y firewalls. Esta base me permite interpretar tráfico y alertas de red y distinguir lo normal de lo sospechoso. Experiencia práctica configurando routers y switches físicos y en mantenimiento de hardware crítico, incluyendo arreglos RAID 5 para tolerancia a fallos.",
    tags: ["Cisco CCNA 1, 2 & 3", "TCP/IP & DNS", "Firewalls & ACLs", "Cisco IT Essentials", "Cisco Packet Tracer"]
  },
  {
    icon: "Database",
    title: "Sistemas & Registros (Windows y Linux)",
    description:
      "Administración básica de Linux (Ubuntu, Kali) y Windows desde la línea de comandos, y lectura de registros del sistema como fuente de evidencia. Uso de Bash y expresiones regulares para filtrar eventos, y de bases de datos relacionales (Oracle, MySQL) para consultar y correlacionar información.",
    tags: ["Linux (Ubuntu / Kali)", "Windows", "Bash & Regex", "SQL (Oracle / MySQL)", "VirtualBox"]
  },
  {
    icon: "CloudCog",
    title: "Nube & Identidad (AWS)",
    description:
      "Despliegue de entornos seguros en AWS: redes virtuales aisladas (VPC), instancias EC2, grupos de seguridad, gestión de identidades y accesos (IAM) y túnel VPN WireGuard. Experiencia revisando registros de acceso y del sistema para identificar anomalías y resolver problemas de conectividad.",
    tags: ["AWS (VPC & EC2)", "Grupos de Seguridad", "Gestión IAM (Roles)", "WireGuard VPN", "Cloud Security"]
  },
  {
    icon: "BrickWallShield",
    title: "AppSec (complemento)",
    description:
      "Pruebas automatizadas de seguridad en aplicaciones web con foco en el OWASP Top 10: autenticación, manejo de sesiones y sanitización de datos. Esta experiencia me ayuda a reconocer, en los registros, cómo se ven los ataques web más comunes. También he simulado ataques comunes (DDoS, keyloggers, botnets) en un entorno aislado para estudiar su comportamiento y diseñar contramedidas.",
    tags: ["OWASP Top 10", "Playwright", "Jest", "JWT (Tokens)", "VirtualBox (Sandbox)"]
  },
  {
    icon: "SquareCode",
    title: "Desarrollo & Automatización",
    description:
      "Desarrollo de aplicaciones web y APIs con buenas prácticas de seguridad, control de versiones y fundamentos de Python y Bash para automatizar tareas repetitivas, útiles para enriquecer alertas y procesar registros.",
    tags: ["React", "TypeScript / JavaScript", "ASP.NET / C# (APIs)", "Python (básico)", "Machine Learning (fundamentos)", "Git/GitHub"]
  }
];

export const projects = [
  {
    id: "programacion",
    category: "Desarrollo Web",
    icon: "{}",
    title: "Gestior",
    summary: "Sistema integral de Gestión de Inventario y Administración de Negocios, Sucursales y Bodegas.",
    image: "/img/gestior_landing.png", 
    tools: ["React", "TypeScript", "Tailwind CSS", "Python", "PHP", "MySQL", "Laragon", "FastAPI", "Librerías de ML", "Vercel", "Zeabur", "Render", "Gestor de tareas tipo tablero (Jira)"],
    overview: "Una sistema empresarial diseñada para centralizar el flujo de inventarios y facturación. Con un modelo de negocio de venta de licencias, Gestior permite brindar una plataforma estándar o personalizada en función de la empresa según la licencia que se adquiera. Sobre el desarrollo del sistema, se destacan los siguientes aspectos: ",
    process: [
      "Desarrollo web principalmente mediante con clases React y TypeScript.",
      "Implementación de IA entrenada con Scikit-Learn para realizar predicciones de ventas diarias y/o anuales.",
      "Aplicación de modelos reales de Hacienda, conectando directamente a su API para obtener un token por cada venta realizada en el sistema.",
      "Diseño de la base de datos relacional en MySQL.",
      "Backend desarrollado con PHP, administrando principalmente los numerosos CRUD que posee el sistema."
    ],
    gallery: [
      { 
        src: "./files/videoFinal1.mp4", 
        type: "video", 
        desc: "Video demostrativo del sistema Gestior." 
      },
      { src: "/img/gestior_landing.png", desc: "Módulo central de analíticas e inventario en tiempo real con alertas de stock mínimo." },
      { src: "/img/añade_negocio.png", desc: "Diseñado para crear el negocio de nuestros clientes y administrar su logística." },
      { src: "/img/inicio_sesion.png", desc: "Cuenta con un inicio de sesión únicamente para colaboradores de la empresa. Administrado por roles para control de privilegios." },
      { src: "/img/dashboard.png", desc: "Además, en su interfaz principal cuenta con un centro de control donde se podrán ver datos generales de la sucursal, un grafico de ventas y alertas de notificaciones de bajo stock, productos próximos a vencer y productos en promoción. " },
      { src: "/img/crea_tu_negocio.png", desc: "En este sistema puedes añadir un negocio con sus diferentes sucursales y bodegas." },
      { src: "/img/añade_productos.png", desc: "Tambien, puedes añadir proveedores y los productos que distribuyen. Luego, añadir al inventario los productos que se vende en cada sucursal con su número de lote, categoría y stock." },
      { src: "/img/ia_prediccion_resultado.png", desc: "En la sección de Inventarios existe la funcionalidad de predicción de ventas. Con esta herramienta puedes predecir el volumen de ventas de un producto en un periodo de tiempo determinado." },
      { src: "/img/proceso_factura.png", desc: "Por otro lado, el sistema permite generar compras en caja y generar facturas de compras. " },
      { src: "/img/añade_colabolador_gestion_usuarios.png", desc: "Se pueden añadir colaboladores y asignarles roles. Según el rol de cada colaborador, se le otorga acceso a diferentes funcionalidades del sistema. Además de añadir colaboradores, se puede añadir clientes del negocio." },
      { src: "/img/consulta_reportes.png", desc: "Para admistrar el negocio se puede ver y descargar reportes de ventas, ingresos y egresos y reportes de hacienda." }
    ]
  },
  {
    id: "ciberseguridad",
    category: "Machine Learning",
    icon: "◎",
    title: "Gestior IA",
    summary: "Sistema de predicción de ventas corporativas basado en Inteligencia Artificial y analítica predictiva.",
    image: "/img/ia_prediccion_resultado.png",
    tools: ["Python", "FastAPI", "Pandas", "Scikit-Learn", "JobLib", "Render"],
    overview: "Módulo inteligente que consume historiales de ventas del negocio para generarar predicciones de futuras ventas de productos específicos. Esta herramienta permite a los comercios adelantarse a la demanda estacional y mitigar pérdidas por desabastecimiento.",
    process: [
      "Limpieza, normalización y transformación de datasets de consumo masivo utilizando la librería Pandas.",
      "Entrenamiento y selección de modelos predictivos usando algoritmos supervisados de Scikit-Learn. Este modelo fue entrenado con un dataset de 3 años de ventas de productos, incluyendo variables estacionales y tendencias.",
      "Despliegue del modelo final empaquetado en JobLib y expuesto mediante endpoints eficientes en FastAPI.",
      "En un entorno real, el sistema es entrenado con la base de datos de compra del negocio o sucursal, de tal manera las predicciones son más certeras y diferentes entre negocios."
    ],
    gallery: [
      { src: "/img/ia_prediccion_resultado.png", desc: "El sistema es capaz de predecir el volumen de ventas de un producto tomando en cuenta las variables estacionales y tendencias de mercado, el precio al que se vendería el producto y si se realizaba o no una promoción." },
      { src: "/img/ia_grafico_anual.png", desc: "Adicionalmente, se implementó la función de predecir la demanda de un producto mes a mes durante un año determinado. El usuario seleccionará de 1 a 3 años a predecir, el sistema mostrará una gráica con los resultados y así el usuario solo seleccionará el mes de interés y obtendrá el volumen total de ventas estimado." },
      { src: "/img/ia_historial_diario.png", desc: "Por último, se agregó la funcionalidad de consultar el historial de predicciones realizadas. Esto se implementó para que el usuario pueda ver las predicciones realizadas con el fin de compararlas con la demanda real y realizar comparaciones entre predicciones." },
      { src: "/img/ia_historial_anual.png", desc: "En el apartado de historial de predicciones anuales se puede visualizar de mejor forma las predicciones mensuales, de tal manera se puede hacer una comparación más facilmente." }
    ]
  },
  {
    id: "desarrollo-web",
    category: "Manejo de APIs",
    icon: "▣",
    title: "Beach.SA",
    summary: "Aplicación web empresarial para la administración automatizada de reservas hoteleras y colaboradores y clientes.",
    image: "/img/beach_sa_landing.png",
    tools: ["Visual Studio", "ASP.NET Core MVC", "Web APIs", "JWT Auth", "SQL Server Management Studio", "Somee"],
    overview: "Plataforma de gestión hotelera construida bajo una arquitectura en .NET Core con un enfoque en la gestión de reservas y clientes.",
    process: [
      "Implementació de la estructura de un sistema de hoteles, incluyendo módulos de gestión de reservas, clientes y personal.",
      "Modelado del backend bajo el patrón MVC y controladores ASP.NET Core Web API.",
      "Validación de roles de acceso mediante el uso de JWT para protección del sistema con el uso de tokens.",
      "Despliegue del sistema utilizando la plataforma de hosting Somee."
    ],
    gallery: [
      { src: "/img/beach_sa_landing.png", desc: "Inicialmente, el sistema se muestra para el control de reservas utilizado por el personal de la empresa. Cuenta con un inicio de sesión con roles de acceso para empleados y administradores. El administrador puede crear y gestionar reservas, clientes y empleados." },
      { src: "/img/API_SECURITY_USERS.png", desc: "Para el manejo de usuarios o colaboradores del negocio se utilizan endpoints para la creación, edición y eliminación de usuarios. Adicionalmente, se implenta seguridad estos usuarios con contraseña y la posibilidad de cambiarla." },
      { src: "/img/API_SECURITY_ROLES.png", desc: "El manejo de roles permite administrar el sistema según el nivel de privilegios. Solo aquellos roles con privilegios suficientes pueden acceder a ciertas funciones del sistema o realizar cambios importantes." },
      { src: "/img/APPWEB_CLIENTES_PACKAGES.png", desc: "Los administradores y colaboradores pueden gestionar los clientes y sus paquetes de reservas." },
      { src: "/img/APPWEB_RESERVATIONS.png", desc: "Por último, los colaboradores pueden gestionar y consultar las reservas de los clientes." }
    ]
  }
];

export const socialLinks = [
  {
    label: "CV",
    href: "/files/CV-Ciberseguridad-Yuliana Orellana Serrano.pdf"
  },
  {
    label: "GitHub",
    href: "https://github.com/Yuyuliaos"
  },
  {
    label: "Linkedin",
    href: "https://linkedin.com/in/yuliana-orellana-serrano"
  }
];
