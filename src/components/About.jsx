import { images } from "../data/portfolioData.js";

export default function About() {
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
          // perfil
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
          Un bloque preparado para que sustituyas los textos por tu biografía
          real, experiencia académica y objetivos profesionales.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4" data-testid="about-image-column">
          <div
            className="aspect-[4/5] overflow-hidden border border-cyber-border bg-cyber-surface"
            data-testid="about-profile-frame"
          >
            <img
              src={images.profile}
              alt="Placeholder para fotografía de perfil"
              className="h-full w-full object-cover grayscale"
              data-testid="about-profile-image"
            />
          </div>
        </div>

        <div
          className="border border-cyber-border bg-cyber-surface lg:col-span-8"
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
              ~/portfolio/profile.md
            </span>
          </div>

          <div className="space-y-6 p-6 md:p-8">
            <p
              className="font-mono text-sm text-cyber-green"
              data-testid="about-terminal-command"
            >
              $ cat presentacion.txt
            </p>

            <p
              className="text-base leading-8 text-cyber-text"
              data-testid="about-paragraph-one"
            >
              Placeholder: soy estudiante de informática con interés en
              ciberseguridad ofensiva y defensiva, especialmente en seguridad de
              redes, aplicaciones web y desarrollo de herramientas técnicas.
            </p>

            <p
              className="text-base leading-8 text-cyber-muted"
              data-testid="about-paragraph-two"
            >
              Placeholder: aquí puedes agregar tu universidad, certificaciones,
              experiencia en laboratorios, participación en CTFs, prácticas
              profesionales o metas como analista de seguridad, pentester junior
              o desarrollador seguro.
            </p>

            <div
              className="grid gap-4 sm:grid-cols-3"
              data-testid="about-focus-grid"
            >
              <div
                className="border border-cyber-border bg-cyber-background p-4"
                data-testid="about-focus-networks"
              >
                <p className="font-mono text-xs uppercase text-cyber-muted">
                  enfoque
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Redes</p>
              </div>

              <div
                className="border border-cyber-border bg-cyber-background p-4"
                data-testid="about-focus-web"
              >
                <p className="font-mono text-xs uppercase text-cyber-muted">
                  enfoque
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Web</p>
              </div>

              <div
                className="border border-cyber-border bg-cyber-background p-4"
                data-testid="about-focus-code"
              >
                <p className="font-mono text-xs uppercase text-cyber-muted">
                  enfoque
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Código</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}