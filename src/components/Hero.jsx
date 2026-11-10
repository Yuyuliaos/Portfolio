import { images } from "../data/portfolioData.js";
import { Icon } from "./Icon.jsx";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
      data-testid="hero-section"
    >
      <img
        src={images.hero}
        alt="Fondo abstracto de ciberseguridad"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        data-testid="hero-background-image"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-cyber-background via-cyber-background/90 to-cyber-background/60" />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cyber-background to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-12">
        <div className="max-w-4xl">
          <p
            className="fade-up mb-5 inline-flex items-center gap-2 border border-cyber-green/40 bg-cyber-green/10 px-4 py-2 font-mono text-sm text-cyber-green"
            data-testid="hero-eyebrow"
          >
            <span className="hidden md:block shrink-0">
              <Icon name="ShieldCheck" size={18} />
            </span>
            <span>
              Analista SOC en formación · Monitoreo y Respuesta a Incidentes · Redes (CCNA)
            </span>
          </p>

         <h1 className="fade-up-delay-1 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Detectando y analizando amenazas desde la{" "}
          <span className="text-cyber-pink drop-shadow-[0_0_12px_rgba(255,0,127,0.4)]">
            infraestructura de red
          </span>{" "}
          hasta los{" "}
          <span className="text-cyber-pink drop-shadow-[0_0_12px_rgba(255,0,127,0.4)]">
            registros de seguridad
          </span>.
        </h1>

          <p
            className="fade-up-delay-2 mt-7 max-w-2xl text-base leading-8 text-cyber-text md:text-lg"
            data-testid="hero-description"
          >
            Estudiante de informática en formación como analista SOC de Nivel 1. Parto de una sólida base en redes de Cisco (CCNA 1 a 3) y practico el análisis de registros, el triage de alertas y la documentación de incidentes en un laboratorio propio con máquinas Windows y Linux. Mi experiencia en pruebas de seguridad de aplicaciones (OWASP Top 10, Jest y Playwright) y en despliegues seguros en AWS me ayuda a reconocer cómo se ven los ataques reales en los registros. Actualmente me preparo para la certificación CompTIA Security+.
          </p>

          <div
            className="fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            data-testid="hero-actions"
          >
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-3 bg-cyber-green px-6 py-4 font-mono text-sm font-semibold uppercase text-black transition hover:-translate-y-1 hover:bg-cyber-greenLight"
              data-testid="hero-projects-link"
            >
              Ver proyectos →
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center border border-cyber-pink/70 px-6 py-4 font-mono text-sm font-semibold uppercase text-cyber-pink transition hover:bg-cyber-pink hover:text-white"
              data-testid="hero-contact-link"
            >
              Contacto
            </a>

            <a
              href="/files/CV Seguridad Informática - Yuliana Orellana Serrano.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-cyber-pink px-6 py-4 font-mono text-sm font-semibold uppercase text-white transition hover:-translate-y-1 hover:bg-cyber-pinkLight"
              data-testid="hero-cv-link"
            ><Icon name="FileText" size={16} />
              Abrir CV 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}