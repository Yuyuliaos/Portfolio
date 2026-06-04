import { projects } from "../data/portfolioData.js";

export default function ProjectDetailPage({ projectId }) {
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main
        className="grid min-h-screen place-items-center bg-cyber-background px-6 text-cyber-text"
        data-testid="project-not-found-page"
      >
        <section
          className="w-full max-w-2xl border border-cyber-border bg-cyber-surface p-8 md:p-10"
          data-testid="project-not-found-card"
        >
          <p
            className="font-mono text-sm text-cyber-pink"
            data-testid="project-not-found-eyebrow"
          >
            // ruta no encontrada
          </p>

          <h1
            className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl"
            data-testid="project-not-found-title"
          >
            Proyecto no encontrado
          </h1>

          <p
            className="mt-5 text-base leading-8 text-cyber-muted"
            data-testid="project-not-found-description"
          >
            El proyecto solicitado no existe en este portafolio placeholder.
            Vuelve al inicio para revisar los proyectos disponibles.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center bg-cyber-green px-6 py-4 font-mono text-sm font-semibold uppercase text-black transition hover:-translate-y-1 hover:bg-cyber-greenLight"
            data-testid="project-not-found-back-link"
          >
            ← Volver al portafolio
          </a>
        </section>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-cyber-background text-cyber-text"
      data-testid="project-detail-page"
    >
      <header
        className="border-b border-cyber-border bg-cyber-background"
        data-testid="project-detail-header"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <a
            href="/"
            className="font-mono text-sm uppercase text-cyber-green transition hover:text-cyber-greenLight"
            data-testid="project-detail-back-link"
          >
            ← Volver al portafolio
          </a>

          <span
            className="hidden font-mono text-xs uppercase text-cyber-muted sm:block"
            data-testid="project-detail-header-label"
          >
            detalle de proyecto
          </span>
        </div>
      </header>

      <section
        className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-20"
        data-testid="project-detail-hero-section"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p
              className="mb-5 inline-flex items-center gap-2 border border-cyber-green/40 bg-cyber-green/10 px-4 py-2 font-mono text-sm text-cyber-green"
              data-testid="project-detail-category"
            >
              {project.icon} {project.category}
            </p>

            <h1
              className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
              data-testid="project-detail-title"
            >
              {project.title}
            </h1>

            <p
              className="mt-6 max-w-3xl text-base leading-8 text-cyber-muted md:text-lg"
              data-testid="project-detail-summary"
            >
              {project.overview}
            </p>
          </div>

          <div
            className="border border-cyber-border bg-cyber-surface p-5 lg:col-span-5"
            data-testid="project-detail-tools-card"
          >
            <p
              className="font-mono text-xs uppercase text-cyber-muted"
              data-testid="project-detail-tools-label"
            >
              Herramientas utilizadas
            </p>

            <div
              className="mt-5 flex flex-wrap gap-3"
              data-testid="project-detail-tools-list"
            >
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-cyber-border px-3 py-2 font-mono text-xs text-cyber-text"
                  data-testid={`project-detail-tool-${tool.toLowerCase()}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 aspect-[16/8] overflow-hidden border border-cyber-border bg-cyber-surface"
          data-testid="project-detail-image-frame"
        >
          <img
            src={project.image}
            alt={`Imagen del proyecto ${project.category}`}
            className="h-full w-full object-cover"
            data-testid="project-detail-image"
          />
        </div>
      </section>

      <section
        className="border-y border-cyber-border bg-[#08100B]"
        data-testid="project-detail-process-section"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p
              className="font-mono text-sm text-cyber-pink"
              data-testid="project-detail-process-eyebrow"
            >
              // desarrollo
            </p>

            <h2
              className="mt-3 font-display text-4xl font-extrabold text-white"
              data-testid="project-detail-process-title"
            >
              Cómo fue construido
            </h2>
          </div>

          <div
            className="space-y-5 lg:col-span-8"
            data-testid="project-detail-process-list"
          >
            {project.process.map((step, index) => (
              <article
                key={step}
                className="flex gap-4 border border-cyber-border bg-cyber-surface p-5"
                data-testid={`project-detail-process-step-${index + 1}`}
              >
                <span className="text-cyber-green">✓</span>

                <p
                  className="text-base leading-7 text-cyber-text"
                  data-testid={`project-detail-process-step-${index + 1}-text`}
                >
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-6 py-20 md:px-12"
        data-testid="project-detail-gallery-section"
      >
        <div className="mb-10">
          <p
            className="font-mono text-sm text-cyber-green"
            data-testid="project-detail-gallery-eyebrow"
          >
            // galería
          </p>

          <h2
            className="mt-3 font-display text-4xl font-extrabold text-white"
            data-testid="project-detail-gallery-title"
          >
            Imágenes y documentación
          </h2>
        </div>

        <div
          className="grid gap-6 md:grid-cols-3"
          data-testid="project-detail-gallery-grid"
        >
          {project.gallery.map((item, index) => (
            <article
              key={item}
              className="min-h-44 border border-cyber-border bg-cyber-surface p-5"
              data-testid={`project-detail-gallery-item-${index + 1}`}
            >
              <p
                className="font-mono text-xs uppercase text-cyber-muted"
                data-testid={`project-detail-gallery-label-${index + 1}`}
              >
                captura 0{index + 1}
              </p>

              <p
                className="mt-8 text-lg font-semibold leading-7 text-cyber-text"
                data-testid={`project-detail-gallery-text-${index + 1}`}
              >
                {item}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}