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
            // stack técnico & especialidades
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
            Especialidades técnicas enfocadas en la seguridad de la infraestructura,
            análisis de vulnerabilidades, automatización de sistemas y desarrollo seguro.
          </p>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          data-testid="skills-grid"
        >
          {skills.map((skill, index) => {
            const isPink = index % 2 === 0;

            return (
              <article
                key={skill.title}
                className={`group flex flex-col justify-between border bg-cyber-surface p-6 transition-all duration-300 hover:bg-cyber-surfaceHover cursor-pointer ${
                  isPink
                    ? "border-cyber-border hover:border-cyber-pink/60 hover:shadow-[0_0_15px_rgba(255,0,127,0.15)]"
                    : "border-cyber-border hover:border-cyber-green/60 hover:shadow-[0_0_15px_rgba(0,255,102,0.15)]"
                }`}
                data-testid={`skill-card-${index + 1}`}
              >
                <div>
                  <div
                    className={`mb-7 grid h-12 w-12 place-items-center border text-2xl transition-all duration-300 group-hover:-translate-y-1 ${
                      isPink
                        ? "border-cyber-pink/40 bg-cyber-pink/10 text-cyber-pink group-hover:border-cyber-pink group-hover:bg-cyber-pink/20"
                        : "border-cyber-green/40 bg-cyber-green/10 text-cyber-green group-hover:border-cyber-green group-hover:bg-cyber-green/20"
                    }`}
                    data-testid={`skill-icon-${index + 1}`}
                  >
                    {skill.icon}
                  </div>

                  <h3
                    className={`text-xl font-bold text-white transition-colors duration-300 ${
                      isPink ? "group-hover:text-cyber-pink" : "group-hover:text-cyber-green"
                    }`}
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
                </div>

                <div
                  className="mt-6 flex flex-wrap gap-2"
                  data-testid={`skill-tags-${index + 1}`}
                >
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`border bg-[#0a140e] px-3 py-1 font-mono text-xs text-cyber-text transition-colors duration-300 group-hover:text-white ${
                        isPink ? "border-cyber-border group-hover:border-cyber-pink/40" : "border-cyber-border group-hover:border-cyber-green/40"
                      }`}
                      data-testid={`skill-tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}