import { useState } from "react";
import { navItems } from "../data/portfolioData.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-cyber-border bg-cyber-background/90 backdrop-blur-xl"
      data-testid="site-header"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12"
        data-testid="site-navigation"
      >
        <a
          href="#inicio"
          className="flex items-center gap-3"
          data-testid="header-logo-link"
        >
          <span
            className="grid h-10 w-10 place-items-center border border-cyber-green/50 bg-cyber-green/10 text-cyber-green"
            data-testid="header-logo-icon"
          >
            ◈
          </span>

          <span
            className="font-mono text-sm uppercase text-white"
            data-testid="header-logo-text"
          >
            [Nombre_Estudiante]
          </span>
        </a>

        <div
          className="hidden items-center gap-7 md:flex"
          data-testid="desktop-navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase text-cyber-muted transition hover:text-cyber-green"
              data-testid={`desktop-nav-${item.label.toLowerCase().replaceAll(" ", "-")}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 place-items-center border border-cyber-border text-white md:hidden"
          data-testid="mobile-menu-button"
          aria-label="Abrir menú"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="border-t border-cyber-border bg-cyber-background px-6 py-5 md:hidden"
          data-testid="mobile-navigation"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm uppercase text-cyber-text"
                data-testid={`mobile-nav-${item.label.toLowerCase().replaceAll(" ", "-")}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}