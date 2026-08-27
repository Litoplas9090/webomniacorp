import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, whatsappLink } from "@/lib/content";

/**
 * Encabezado fijo.
 * Cambia suavemente al desplazarse: gana fondo translúcido con desenfoque y borde inferior.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="OMNIACORP — Ir al inicio">
          <img
            src="/images/logo-omniacorp.png"
            alt="Logo oficial de OMNIACORP"
            className="h-11 w-auto"
            width={52}
            height={49}
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold tracking-tight text-navy">OMNIACORP</span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-mist">
              Servicios integrales
            </span>
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-ink/80 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift flex items-center gap-2 rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy"
            aria-label="Contactar por WhatsApp (se abre en una ventana nueva)"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="btn-lift rounded-full bg-action px-5 py-2.5 text-sm font-semibold text-white"
          >
            Solicitar diagnóstico
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-11 w-11 items-center justify-center rounded-full text-navy lg:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Menú móvil a pantalla completa */}
      <div
        id="menu-movil"
        className={`fixed inset-0 top-20 z-30 flex flex-col bg-paper px-6 pb-8 pt-4 transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col" aria-label="Navegación móvil">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-2xl font-medium text-navy transition-transform duration-300"
              style={{
                transitionDelay: `${i * 40}ms`,
                transform: open ? "translateY(0)" : "translateY(12px)",
                opacity: open ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 pt-8">
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn-lift rounded-full bg-action px-6 py-3.5 text-center text-base font-semibold text-white"
          >
            Solicitar diagnóstico
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift flex items-center justify-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-base font-semibold text-navy"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
