import { useState } from "react";
import { socialLinks } from "../data/portfolioData.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contacto"
      className="border-t border-cyber-border bg-[#08100B]"
      data-testid="contact-section"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="mb-12 max-w-3xl">
            <p
              className="font-mono text-sm text-cyber-green"
              data-testid="contact-eyebrow"
            >
              // contacto
            </p>

            <h2
              className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl"
              data-testid="contact-title"
            >
              Conectemos
            </h2>

            <p
              className="mt-5 max-w-2xl text-base leading-8 text-cyber-muted"
              data-testid="contact-description"
            >
              Formulario visual con placeholders para adaptar a tu correo,
              enlaces profesionales y mensaje principal.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-3"
            data-testid="contact-social-links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "CV" ? "_blank" : undefined}
                rel={link.label === "CV" ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 border border-cyber-border px-4 py-3 font-mono text-xs uppercase text-cyber-text transition hover:border-cyber-green/60 hover:text-cyber-green"
                data-testid={`contact-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-cyber-border bg-cyber-surface p-6 md:p-8 lg:col-span-7"
          data-testid="contact-form"
        >
          <div
            className="mb-7 flex items-center justify-between border-b border-cyber-border pb-4"
            data-testid="contact-form-header"
          >
            <p
              className="font-mono text-sm text-cyber-green"
              data-testid="contact-form-command"
            >
              $ ./enviar_mensaje.sh
            </p>

            <p
              className="font-mono text-xs text-cyber-muted"
              data-testid="contact-form-status"
            >
              secure_channel
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2" data-testid="contact-name-label">
              <span className="font-mono text-xs uppercase text-cyber-muted">
                Nombre
              </span>

              <input
                type="text"
                placeholder="Tu nombre placeholder"
                className="w-full border border-cyber-border bg-cyber-background px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyber-green"
                data-testid="contact-name-input"
              />
            </label>

            <label className="space-y-2" data-testid="contact-email-label">
              <span className="font-mono text-xs uppercase text-cyber-muted">
                Email
              </span>

              <input
                type="email"
                placeholder="placeholder@email.com"
                className="w-full border border-cyber-border bg-cyber-background px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyber-green"
                data-testid="contact-email-input"
              />
            </label>
          </div>

          <label
            className="mt-5 block space-y-2"
            data-testid="contact-message-label"
          >
            <span className="font-mono text-xs uppercase text-cyber-muted">
              Mensaje
            </span>

            <textarea
              placeholder="Escribe aquí un mensaje placeholder..."
              className="min-h-36 w-full resize-y border border-cyber-border bg-cyber-background px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyber-green"
              data-testid="contact-message-textarea"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-3 bg-cyber-pink px-6 py-4 font-mono text-sm font-semibold uppercase text-white transition hover:-translate-y-1 hover:bg-cyber-pinkLight"
            data-testid="contact-submit-button"
          >
            Enviar placeholder →
          </button>

          {sent && (
            <p
              className="mt-5 border border-cyber-green/40 bg-cyber-green/10 px-4 py-3 font-mono text-sm text-cyber-green"
              data-testid="contact-success-message"
            >
              Mensaje placeholder preparado. Sustituye esta acción por tu canal
              de contacto real.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}