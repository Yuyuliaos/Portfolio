import { skills } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="border-y border-cyber-border bg-[#08100B]"
      data-testid="skills-section"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="mb-12 max-w-3xl">
          <p
            className="font-mono text-sm text-cyber-green"
            data-testid="skills-eyebrow"
          >
            // stack técnico
          </p>

          <h2
            className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl"
            data-testid="skills-title"
          >
            Habilidades
          </h2>

          <p
            className="mt-5 max-w-2xl text-base leading-8 text-cyber-muted"
            data-testid="skills-description"
          >
            Áreas clave para demostrar capacidad técnica en seguridad de redes,
            auditoría web y programación aplicada.
          </p>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          data-testid="skills-grid"
        >
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="group border border-cyber-border bg-cyber-surface p-6 transition hover:border-cyber-green/60 hover:bg-cyber-surfaceHover"
              data-testid={`skill-card-${index + 1}`}
            >
              <div
                className="mb-7 grid h-12 w-12 place-items-center border border-cyber-green/40 bg-cyber-green/10 text-2xl text-cyber-green transition group-hover:-translate-y-1"
                data-testid={`skill-icon-${index + 1}`}
              >
                {skill.icon}
              </div>

              <h3
                className="text-xl font-bold text-white"
                data-testid={`skill-title-${index + 1}`}
              >
                {skill.title}
              </h3>

              <p
                className="mt-4 text-sm leading-7 text-cyber-muted"
                data-testid={`skill-description-${index + 1}`}
              >
                {skill.description}
              </p>

              <div
                className="mt-6 flex flex-wrap gap-2"
                data-testid={`skill-tags-${index + 1}`}
              >
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-cyber-border px-3 py-1 font-mono text-xs text-cyber-text"
                    data-testid={`skill-tag-${tag.toLowerCase()}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}