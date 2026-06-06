import { useState, useEffect } from "react";
import { socialLinks } from "../data/portfolioData.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  useEffect(() => {
    let timer;
    if (status.success || status.error) {
      timer = setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000); 
    }
    return () => clearTimeout(timer); 
  }, [status.success, status.error]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, success: false, error: "Por favor, completa todos los campos de autenticación." });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    const formData = {
      ...form,
      access_key: import.meta.env.VITE_ACCESS_KEY || "07475acb-f7d8-4977-ae77-5ba4ef9643fb",
      from_name: "Portafolio Técnico",
      subject: `Mensaje de Conexión: ${form.name}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, error: null });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: false, error: "Fallo en el protocolo de envío. Intenta de nuevo." });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: "Error en la solicitud. Canal de red inestable." });
    }
  };

  return (
    <section
      id="contacto"
      className="border-t border-cyber-border bg-[#08100B]"
      data-testid="contact-section"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-12">
        
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-cyber-green" data-testid="contact-eyebrow">
              // canales de comunicación
            </p>

            <h2 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl" data-testid="contact-title">
              Conectemos
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-cyber-muted" data-testid="contact-description">
              ¿Tienes algún proyecto en mente o una vacante técnica? 
              Envíame un mensaje directo a la terminal o encuéntrame en mis redes profesionales.
            </p>
          </div>

          <div className="flex flex-wrap gap-3" data-testid="contact-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "CV" || link.label === "LinkedIn" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-cyber-border bg-cyber-surface/30 px-4 py-3 font-mono text-xs uppercase text-cyber-text transition-all duration-300 hover:border-cyber-pink hover:text-cyber-pink hover:shadow-[0_0_10px_rgba(255,0,127,0.15)]"
                data-testid={`contact-link-${link.label.toLowerCase()}`}
              >
                <span className="text-cyber-muted opacity-50">&gt;_</span> {link.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-cyber-border bg-cyber-surface p-6 md:p-8 lg:col-span-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          data-testid="contact-form"
        >
          <div>
            <div className="mb-7 flex items-center justify-between border-b border-cyber-border pb-4" data-testid="contact-form-header">
              <p className="font-mono text-sm text-cyber-green" data-testid="contact-form-command">
                $ ./enviar_mensaje.sh 
              </p>
              <div className="flex items-center gap-2 font-mono text-[11px] text-cyber-pink">
                <span className="h-2 w-2 rounded-full bg-cyber-pink animate-pulse"></span>
                <span>SECURE_SSL</span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2" data-testid="contact-name-label">
                <span className="font-mono text-xs uppercase text-cyber-muted tracking-wider">
                  [01] Nombre Solicitante
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ej. Javier Dev"
                  className="w-full border border-cyber-border bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-cyber-green focus:shadow-[0_0_10px_rgba(0,255,102,0.1)]"
                  data-testid="contact-name-input"
                  required
                />
              </label>

              <label className="space-y-2" data-testid="contact-email-label">
                <span className="font-mono text-xs uppercase text-cyber-muted tracking-wider">
                  [02] Email 
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu_correo@dominio.com"
                  className="w-full border border-cyber-border bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-cyber-green focus:shadow-[0_0_10px_rgba(0,255,102,0.1)]"
                  data-testid="contact-email-input"
                  required
                />
              </label>
            </div>

            <label className="mt-5 block space-y-2" data-testid="contact-message-label">
              <span className="font-mono text-xs uppercase text-cyber-muted tracking-wider">
                [03] Body de tu Mensaje 
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Escribe los detalles de la solicitud..."
                className="min-h-36 w-full resize-none border border-cyber-border bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-cyber-green focus:shadow-[0_0_10px_rgba(0,255,102,0.1)]"
                data-testid="contact-message-textarea"
                required
              />
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={status.loading}
              className={`inline-flex items-center gap-3 bg-cyber-pink px-6 py-4 font-mono text-xs font-bold uppercase text-white transition-all duration-300 tracking-wider w-full sm:w-auto justify-center ${
                status.loading ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5 hover:bg-cyber-pinkLight hover:shadow-[0_0_15px_rgba(255,0,127,0.3)]"
              }`}
              data-testid="contact-submit-button"
            >
              {status.loading ? "Transmitiendo paquetes..." : "Ejecutar Envío →"}
            </button>


            {status.success && (
              <div className="mt-4 border border-cyber-green/40 bg-cyber-green/5 p-4 font-mono text-xs text-cyber-green animate-fadeIn">
                <p className="font-bold">// TRANSMISIÓN COMPLETADA EXITOSAMENTE</p>
                <p className="mt-1 text-white/80">¡Mensaje enviado con éxito!</p>
              </div>
            )}

            {status.error && (
              <div className="mt-4 border border-red-500/40 bg-red-500/5 p-4 font-mono text-xs text-red-400 animate-fadeIn">
                <p className="font-bold">// ERROR CRÍTICO DE OPERACIÓN</p>
                <p className="mt-1 text-white/80">{status.error}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}