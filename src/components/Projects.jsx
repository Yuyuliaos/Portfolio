import { useState, useEffect } from "react";
import { projects } from "../data/portfolioData.js";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
      data-testid="projects-section"
    >
      <div className="mb-12 max-w-3xl">
        <p className="font-mono text-sm text-cyber-green" data-testid="projects-eyebrow">
          // evidencia práctica & sistemas desarrollados
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl" data-testid="projects-title">
          Proyectos destacados
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-cyber-muted" data-testid="projects-description">
          Soluciones de software que combinan arquitectura robusta, automatización inteligente y desarrollo seguro.
        </p>
      </div>

      {/* GRID DE PROYECTOS - LANDING */}
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3" data-testid="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between border border-cyber-border bg-cyber-surface transition-all duration-300 hover:border-cyber-pink/50 hover:shadow-[0_0_15px_rgba(255,0,127,0.1)]"
            data-testid={`project-card-${project.id}`}
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden border-b border-cyber-border">
                <img
                  src={project.image}
                  alt={`Imagen del proyecto ${project.title}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase text-cyber-green">
                    {project.icon} {project.category}
                  </span>
                  <span className="h-px flex-1 bg-cyber-border"></span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyber-pink">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-cyber-muted">
                  {project.summary}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase text-cyber-pink transition-all duration-200 hover:text-white border border-cyber-pink/30 hover:border-white bg-cyber-pink/5 px-4 py-2 w-full justify-center tracking-wider"
              >
                Ver desarrollo Técnico ↗
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative flex flex-col lg:flex-row w-full max-w-6xl h-[90vh] border border-cyber-border bg-[#050b07] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 font-mono text-xs bg-cyber-pink text-white px-3 py-1.5 border border-white/20 uppercase hover:bg-white hover:text-black transition-colors"
            >
              [ Cerrar X ]
            </button>

            {/* SECCIÓN IZQUIERDA: GALERÍA DE IMÁGENES */}
            <div 
              className="lg:w-3/5 h-1/2 lg:h-full overflow-y-auto border-b lg:border-b-0 lg:border-r border-cyber-border p-6 space-y-8 bg-black/40 
                         [&::-webkit-scrollbar]:w-2
                         [&::-webkit-scrollbar-track]:bg-black/20
                         [&::-webkit-scrollbar-thumb]:bg-cyber-green/30
                         [&::-webkit-scrollbar-thumb]:border
                         [&::-webkit-scrollbar-thumb]:border-cyber-border
                         hover:[&::-webkit-scrollbar-thumb]:bg-cyber-green/50"
            >
              <div className="border-b border-cyber-border pb-2">
                <span className="font-mono text-[10px] text-cyber-pink uppercase tracking-widest">// GALERÍA DE EVIDENCIAS</span>
              </div>
              {selectedProject.gallery.map((imgObj, idx) => (
                <div key={idx} className="border border-cyber-border bg-[#0d1610] p-2 space-y-3 shadow-md">
                  <div className="overflow-hidden border border-cyber-border/40 aspect-[16/10]">
                    <img
                      src={imgObj.src}
                      alt={`Captura ${idx + 1}`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <p className="text-xs font-mono text-cyber-text leading-5 px-1">
                    <span className="text-cyber-green">Fig 0{idx + 1}:</span> {imgObj.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* SECCION DERECHA: DOCUMENTACIÓN Y PROCESOS DE DESARROLLO */}
            <div 
              className="lg:w-2/5 h-1/2 lg:h-full overflow-y-auto p-6 md:p-8 space-y-6 flex flex-col justify-between
                         [&::-webkit-scrollbar]:w-2
                         [&::-webkit-scrollbar-track]:bg-black/20
                         [&::-webkit-scrollbar-thumb]:bg-cyber-pink/20
                         [&::-webkit-scrollbar-thumb]:border
                         [&::-webkit-scrollbar-thumb]:border-cyber-border
                         hover:[&::-webkit-scrollbar-thumb]:bg-cyber-pink/40"
            >
              <div className="space-y-5">
                <div>
                  <span className="font-mono text-xs text-cyber-green uppercase tracking-wider">
                    {selectedProject.icon} {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-cyber-pink uppercase tracking-widest">// RESUMEN </h4>
                  <p className="text-sm leading-6 text-cyber-text">
                    {selectedProject.overview}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-cyber-pink uppercase tracking-widest">// PROCESO E IMPLEMENTACIÓN</h4>
                  <ul className="space-y-2 text-sm text-cyber-muted list-none pl-0">
                    {selectedProject.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-6">
                        <span className="text-cyber-green mt-1 font-mono text-xs">0{i+1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* STACK DE TECNOLOGÍAS USADAS */}
              <div className="pt-6 border-t border-cyber-border/60 mt-auto">
                <h4 className="font-mono text-xs text-cyber-muted uppercase tracking-wider mb-3">TECNOLOGÍAS DE ENTRENAMIENTO:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-cyber-border/60 bg-[#0a140e] px-2.5 py-1 font-mono text-[11px] text-cyber-green"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}