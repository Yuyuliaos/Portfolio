import { images } from "../data/portfolioData.js";

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
            🛡️ AppSec · Redes (CCNA) · Ciberseguridad Ofensiva y Defensiva
          </p>

         <h1 className="fade-up-delay-1 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Mitigando riesgos desde la{" "}
          <span className="text-cyber-pink drop-shadow-[0_0_12px_rgba(255,0,127,0.4)]">
            infraestructura de red
          </span>{" "}
          hasta el análisis de{" "}
          <span className="text-cyber-pink drop-shadow-[0_0_12px_rgba(255,0,127,0.4)]">
            AppSec
          </span>.
        </h1>

          <p
            className="fade-up-delay-2 mt-7 max-w-2xl text-base leading-8 text-cyber-text md:text-lg"
            data-testid="hero-description"
          >
            Estudiante de informática con enfoque en mitigar riesgos y robustecer entornos digitales. Combino una sólida base en redes de Cisco con la auditoría de aplicaciones web mediante pruebas automatizadas (Jest/Playwright). Enfocada en el despliegue seguro en AWS, gestión de identidades y simulación de amenazas en Sandbox bajo estándares CompTIA Security+.
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
              href="/files/CV-Yuliana-Orellana.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-cyber-pink px-6 py-4 font-mono text-sm font-semibold uppercase text-white transition hover:-translate-y-1 hover:bg-cyber-pinkLight"
              data-testid="hero-cv-link"
            >
              Abrir CV 📄
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}