import { useRef, useState } from "react";
import { images } from "../data/portfolioData.js";
import { Icon } from "./Icon.jsx";

export default function About() {
  const carouselImages = [
    images.profile,
    "/img/im3portfolio.jpeg",
    "/img/img4portfolio.jpeg",
    "/img/img5portfolio.jpeg",
  ];

  const carouselRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  const goTo = (index) => {
    const el = carouselRef.current;
    if (!el) return;
    const target = (index + carouselImages.length) % carouselImages.length;
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setActiveImage(Math.round(el.scrollLeft / el.clientWidth));
  };

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
          técnica de raíz en administración de redes. Mi objetivo es trabajar como analista
          SOC: detectar, investigar y documentar incidentes de seguridad, apoyándome en mi
          base de redes y en mi comprensión del ciclo de desarrollo de software.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4" data-testid="about-image-column">
          <div className="relative border border-cyber-border bg-cyber-surface p-2 hover:border-cyber-pink/80 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)]">
            <div className="relative">
              <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="scrollbar-none flex aspect-[4/5] w-full snap-x snap-mandatory overflow-x-auto"
                data-testid="about-profile-frame"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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

              <button
                type="button"
                onClick={() => goTo(activeImage - 1)}
                aria-label="Foto anterior"
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-cyber-pink/70 bg-cyber-background/80 font-mono text-lg text-cyber-pink transition hover:bg-cyber-pink hover:text-white"
                data-testid="about-carousel-prev"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => goTo(activeImage + 1)}
                aria-label="Foto siguiente"
                className={`absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-cyber-pink/70 bg-cyber-background/80 font-mono text-lg text-cyber-pink transition hover:bg-cyber-pink hover:text-white ${
                  activeImage === 0 ? "animate-pulse" : ""
                }`}
                data-testid="about-carousel-next"
              >
                →
              </button>
            </div>

            {/* Indicadores del carrusel */}
            <div className="mt-2 flex items-center justify-between px-1 font-mono text-[10px] text-cyber-muted">
              <div className="flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Ir a la foto ${index + 1}`}
                    className={`h-2 w-2 border border-cyber-pink transition ${
                      activeImage === index ? "bg-cyber-pink" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
              <span>
                [ {String(activeImage + 1).padStart(2, "0")} /{" "}
                {String(carouselImages.length).padStart(2, "0")} ]
              </span>
            </div>
          </div>

          <div
            className="mt-8 grid gap-3 lg:grid-cols-1"
            data-testid="about-focus-grid"
          >
            <div
              className="group cursor-pointer border border-cyber-border bg-cyber-background p-4 transition-all duration-300 hover:border-cyber-pink/80 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)]"
              data-testid="about-focus-networks"
            >
              <p className="font-mono text-xs uppercase text-cyber-muted transition-colors duration-300 group-hover:text-white">
                enfoque
              </p>
              <p className="mt-2 text-lg font-semibold text-white">Redes</p>
            </div>

            <div
              className="group cursor-pointer border border-cyber-border bg-cyber-background p-4 transition-all duration-300 hover:border-cyber-pink/80 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)]"
              data-testid="about-focus-web"
            >
              <p className="font-mono text-xs uppercase text-cyber-muted transition-colors duration-300 group-hover:text-white">
                enfoque
              </p>
              <p className="mt-2 text-lg font-semibold text-white">SOC & Respuesta a Incidentes</p>
            </div>

            <div
              className="group cursor-pointer border border-cyber-border bg-cyber-background p-4 transition-all duration-300 hover:border-cyber-pink/80 hover:shadow-[0_0_15px_rgba(255,0,127,0.35)]"
              data-testid="about-focus-code"
            >
              <p className="font-mono text-xs uppercase text-cyber-muted transition-colors duration-300 group-hover:text-white">
                complemento
              </p>
              <p className="mt-2 text-lg font-semibold text-white">Cloud & AppSec</p>
            </div>
          </div>
        </div>

        <div
          className="cursor-pointer border border-cyber-border bg-cyber-surface hover:border-cyber-green/80 hover:shadow-[0_0_15px_rgba(0,255,102,0.35)] lg:col-span-8"
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
              experiencia práctica real configurando routers y switches físicos de Cisco y
              conocimientos en arquitectura de redes. Durante mi carrera de Informática y
              Tecnología en Multimedia, adquirí conocimientos en desarrollo web, bases de datos,
              sistemas operativos y seguridad informática (tanto en redes como en aplicaciones
              web). Entender cómo funciona una red y cómo se construye una aplicación me llevó a
              interesarme en cómo se vigilan y se defienden: las operaciones de seguridad (SOC).
            </p>

            <p
              className="text-base leading-8 text-cyber-muted"
              data-testid="about-paragraph-two"
            >
              Mientras finalizaba mi técnico en Informática en Redes en 2022, co-desarrollé un
              sistema automatizado dispensador de medicamentos, combinando piezas de Lego
              Mindstorms con tecnologías como Raspberry Pi, para optimizar el sistema
              farmacéutico público. Con este proyecto obtuvimos el 1.er lugar nacional en la World
              Robot Olympiad (WRO) y representamos a Costa Rica en la final mundial en Alemania.
              Esta experiencia consolidó mi capacidad para aprender tecnologías complejas desde
              cero y para explicar resultados técnicos a públicos diversos: presenté el proyecto
              ante representantes de empresas como RedHat, IBM y Arduino. Esa claridad al
              comunicar es clave al documentar incidentes en un SOC.
            </p>

            <p
              className="text-base leading-8 text-cyber-text"
              data-testid="about-paragraph-three"
            >
              Actualmente me preparo como analista SOC de Nivel 1: construyo un laboratorio con
              máquinas virtuales Windows y Linux para analizar registros, clasificar alertas y
              documentar incidentes, y avanzo en la ruta SOC Level 1 de TryHackMe. Mi experiencia
              simulando ataques comunes en entornos Sandbox (DDoS, keyloggers, botnets) me ayuda a
              reconocer cómo se ven en el tráfico y en los registros. Además, me preparo para el
              examen de la certificación CompTIA Security+ (SY0-701), para el cual soy candidata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}