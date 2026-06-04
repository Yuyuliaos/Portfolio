import { projects } from "../data/portfolioData.js";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
      data-testid="projects-section"
    >
      <div className="mb-12 max-w-3xl">
        <p
          className="font-mono text-sm text-cyber-green"
          data-testid="projects-eyebrow"
        >
          // evidencia práctica
        </p>

        <h2
          className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl"
          data-testid="projects-title"
        >
          Proyectos destacados
        </h2>

        <p
          className="mt-5 max-w-2xl text-base leading-8 text-cyber-muted"
          data-testid="projects-description"
        >
          Tres espacios listos para reemplazar con tus proyectos reales de
          programación, ciberseguridad y desarrollo web.
        </p>
      </div>

      <div className="grid gap-7 lg:grid-cols-3" data-testid="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden border border-cyber-border bg-cyber-surface transition hover:border-cyber-green/60 hover:bg-cyber-surfaceHover"
            data-testid={`project-card-${project.id}`}
          >
            <div
              className="aspect-[16/10] overflow-hidden border-b border-cyber-border"
              data-testid={`project-image-frame-${project.id}`}
            >
              <img
                src={project.image}
                alt={`Imagen del proyecto ${project.category}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                data-testid={`project-image-${project.id}`}
              />
            </div>

            <div className="p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase text-cyber-green"
                  data-testid={`project-category-${project.id}`}
                >
                  {project.icon} {project.category}
                </span>

                <span className="h-px flex-1 bg-cyber-border"></span>
              </div>

              <h3
                className="text-2xl font-bold leading-tight text-white"
                data-testid={`project-title-${project.id}`}
              >
                {project.title}
              </h3>

              <p
                className="mt-4 text-sm leading-7 text-cyber-muted"
                data-testid={`project-summary-${project.id}`}
              >
                {project.summary}
              </p>

              <a
                href={`/project/${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-mono text-sm uppercase text-cyber-pink transition hover:text-cyber-pinkLight"
                data-testid={`project-link-${project.id}`}
              >
                Ver desarrollo ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}