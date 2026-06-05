import { images } from "../data/portfolioData.js";

    export default function About() {
  const carouselImages = [
    images.profile, 
    "../public/img/im3portfolio.jpeg", 
    "../public/img/img4portfolio.jpeg",
    "../public/img/img5portfolio.jpeg" 
  ];
  return (
    <section
      id="sobre-mi"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
      data-testid="about-section"
    >
      <div className="mb-12 max-w-3xl">
        <p
          className="font-mono text-sm text-cyber-green"
          data-testid="about-eyebrow"
        >
          // perfil profesional
        </p>

        <h2
          className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl"
          data-testid="about-title"
        >
          Sobre mí
        </h2>

        <p
          className="mt-5 max-w-2xl text-base leading-8 text-cyber-muted"
          data-testid="about-description"
        >
          Estudiante avanzada de Informática y Tecnología en Multimedia con una formación 
          técnica de raíz en administración de redes. Mi objetivo es fusionar el entendimiento 
          del ciclo de software con la seguridad de la infraestructura crítica.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4" data-testid="about-image-column">
          <div className="relative border border-cyber-border bg-cyber-surface p-2 hover:border-cyber-pink/80 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)] cursor-pointer">
            <div
              className="scrollbar-none flex aspect-[4/5] w-full snap-x snap-mandatory overflow-x-auto"
              data-testid="about-profile-frame"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
            >
              {carouselImages.map((src, index) => (
                <div key={index} className="h-full w-full shrink-0 snap-start snap-always">
                  <img
                    src={src}
                    alt={`Fotografía de perfil ${index + 1}`}
                    className="h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            {/* Indicador Cyber de Scroll */}
            <div className="mt-2 flex justify-between font-mono text-[10px] text-cyber-muted px-1">
              <span className="animate-pulse text-cyber-pink">⚡ SCROLL CON EL MOUSE PARA VER →</span>
              <span>[ 04 FOTOS ]</span>
            </div>
          </div>

          
        <div
          className="grid gap-3 mt-8 lg:grid-cols-1" 
          data-testid="about-focus-grid"
        >
          <div
            className="group border border-cyber-border bg-cyber-background p-4 transition-all duration-300 hover:border-cyber-pink/80 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)] cursor-pointer"
            data-testid="about-focus-networks"
          >
            <p className="font-mono text-xs uppercase text-cyber-muted transition-colors duration-300 group-hover:text-white">
              enfoque
            </p>
            <p className="mt-2 text-lg font-semibold text-white">Redes</p>
          </div>

          <div
            className="group border border-cyber-border bg-cyber-background p-4 transition-all duration-300 hover:border-cyber-pink/80 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)] cursor-pointer"
            data-testid="about-focus-web"
          >
            <p className="font-mono text-xs uppercase text-cyber-muted transition-colors duration-300 group-hover:text-white">
              enfoque
            </p>
            <p className="mt-2 text-lg font-semibold text-white">AppSec & Testing</p>
          </div>

          <div
            className="group border border-cyber-border bg-cyber-background p-4 transition-all duration-300 hover:border-cyber-pink/80 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)] cursor-pointer"
            data-testid="about-focus-code"
          >
            <p className="font-mono text-xs uppercase text-cyber-muted transition-colors duration-300 group-hover:text-white">
              enfoque
            </p>
            <p className="mt-2 text-lg font-semibold text-white">Cloud & DB</p>
          </div>
        </div>

        </div>

        <div
          className="border border-cyber-border bg-cyber-surface lg:col-span-8 hover:border-cyber-green/80 hover:shadow-[0_0_15px_rgba(0,255,102,0.35)] cursor-pointer"
          data-testid="about-terminal"
        >
          <div
            className="flex items-center gap-2 border-b border-cyber-border px-5 py-4"
            data-testid="about-terminal-toolbar"
          >
            <span className="h-3 w-3 bg-cyber-pink"></span>
            <span className="h-3 w-3 bg-yellow-500"></span>
            <span className="h-3 w-3 bg-cyber-green"></span>

            <span
              className="ml-3 font-mono text-xs text-cyber-muted"
              data-testid="about-terminal-path"
            >
             ~/portfolio/biografia.md
            </span>
          </div>

          <div className="space-y-6 p-6 md:p-8">
            <p
              className="font-mono text-sm text-cyber-green"
              data-testid="about-terminal-command"
            >
              $ cat biografía_tecnica.txt
            </p>

            <p
              className="text-base leading-8 text-cyber-text"
              data-testid="about-paragraph-one"
            >
              Mi trayectoria inició con un Técnico Medio en Informática en Redes, donde adquirí 
              experiencia práctica real configurando routers/switches físicos de Cisco y conocimientos
              en arquitectura de redes. Durante mi carrera de Informatica y Tecnología en Multimedia, 
              adquirí conocimientos en desarrollo web, bases de datos, sistemas operativos y seguridad 
              informática (tanto en redes como en aplicaciones web). Esta base de infraestructura me 
              alineó especialmente a la ciberseguridad.
            </p>

            <p
              className="text-base leading-8 text-cyber-muted"
              data-testid="about-paragraph-two"
            >
              Mientras finalizaba mi técnico en Informática en Redes en 2022, co-desarrollé un sistema 
              automatizado dispensador de medicamentos combinando piezas de Lego Mindstorms con 
              tecnolgias como Raspberry Pi, esto para optimizar el sistema farmacéutico público. 
              Con este proyecto obtuvimos el 1.er lugar nacional en la World Robot Olympiad (WRO), 
              representando a Costa Rica en la final mundial en Alemania. Esta experiencia consolidó 
              mi capacidad para adoptar tecnologías complejas desde cero. Además de poder presentar 
              un proyecto de carácter nacional a representantes de empresas como RedHat, IBM y Arduino.
            </p>

            <p
              className="text-base leading-8 text-cyber-text"
              data-testid="about-paragraph-three"
            >
              Actualmente profundizo en la ciberseguridad ofensiva y defensiva. Utilizo entornos 
              de Sandbox para simular vectores de ataque comunes (DDoS, Keyloggers, Botnets) con 
              el fin de diseñar contramedidas robustas. Adicionalmente, preparo mis conocimientos 
              bajo los estandares de la industria de ciberseguridad con certificación CompTIA 
              Security+ (SY0-701) en la cual soy candidata para realizar el examen.
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
}