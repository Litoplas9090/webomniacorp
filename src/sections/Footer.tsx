import { MessageCircle, Instagram, MapPin } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICES, whatsappLink } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";

/** Pie de página con marca tipográfica de gran formato y datos de contacto. */
export default function Footer() {
  const ref = useReveal<HTMLElement>();

  return (
    <footer ref={ref} className="bg-navy-deep text-white" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div className="flex flex-col items-start gap-5">
            <img
              src="/images/logo-omniacorp-blanco.png"
              alt="Logo oficial de OMNIACORP en blanco"
              className="h-16 w-auto"
              loading="lazy"
              width={68}
              height={64}
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Un solo aliado para la atención, el mantenimiento y la buena imagen de sus
              instalaciones.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del pie de página">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Explorar
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Servicios
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className="link-underline text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Conversemos
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/80 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-care" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/80 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-action" aria-hidden="true" />
                  {CONTACT.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                {CONTACT.city}
              </li>
            </ul>
          </div>
        </div>

        {/* Marca tipográfica de gran formato */}
        <div className="reveal mt-16 select-none overflow-hidden" aria-hidden="true">
          <p className="whitespace-nowrap text-center font-display text-[13.5vw] font-semibold leading-none tracking-tight text-white/[0.07] lg:text-[10.5rem]">
            OMNIACORP
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} OMNIACORP · Barranquilla, Colombia</p>
          <p>Confianza · Cercanía · Cumplimiento</p>
        </div>
      </div>
    </footer>
  );
}
