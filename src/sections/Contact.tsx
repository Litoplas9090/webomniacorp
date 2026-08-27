import { MessageCircle, Instagram, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT, SERVICES, whatsappLink } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";

/**
 * Contacto: conversación directa por WhatsApp.
 * CTA principal + acceso rápido por servicio, todos con mensajes predefinidos.
 */
export default function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contacto" ref={ref} className="scroll-mt-24 bg-white" aria-label="Contacto">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Datos de contacto */}
          <div className="flex flex-col items-start">
            <SectionHeading
              eyebrow="Contacto"
              title="Construyamos una solución ajustada a sus instalaciones."
              lead="Escríbanos por WhatsApp y agendemos una visita de diagnóstico sin costo. Le respondemos a la brevedad."
            />

            <ul className="mt-10 flex flex-col gap-5">
              <li className="reveal" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-care-soft text-care transition-colors group-hover:bg-care group-hover:text-white">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-mist">
                      WhatsApp / Celular
                    </span>
                    <span className="font-semibold text-navy">{CONTACT.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li className="reveal" style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-skywash text-action transition-colors group-hover:bg-action group-hover:text-white">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-mist">
                      Instagram
                    </span>
                    <span className="font-semibold text-navy">{CONTACT.instagram}</span>
                  </span>
                </a>
              </li>
              <li
                className="reveal flex items-center gap-4"
                style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-navy">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-mist">
                    Ubicación
                  </span>
                  <span className="font-semibold text-navy">{CONTACT.city}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Acciones directas por WhatsApp */}
          <div
            className="reveal flex flex-col rounded-2xl border border-line bg-paper p-6 sm:p-9"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <a
              href={whatsappLink(
                "Hola, OMNIACORP. Quiero solicitar un diagnóstico para mis instalaciones. ¿Podríamos agendar una visita?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift group flex items-center justify-center gap-2.5 rounded-full bg-action px-7 py-4 text-base font-semibold text-white"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Solicitar diagnóstico
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <div className="my-7 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-line" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                o cuéntenos qué servicio necesita
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <ul className="flex flex-col gap-3">
              {SERVICES.map((service, i) => (
                <li key={service.id}>
                  <a
                    href={whatsappLink(
                      `Hola, OMNIACORP. Me interesa el servicio de ${service.name.toLowerCase()} para mis instalaciones. ¿Podrían brindarme más información?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-5 py-4 transition-all duration-300 hover:border-action/40 hover:bg-skywash"
                    style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                    aria-label={`Consultar por WhatsApp el servicio de ${service.name}`}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-semibold text-action">
                        {service.number}
                      </span>
                      <span className="font-semibold text-navy">{service.name}</span>
                    </span>
                    <MessageCircle
                      className="h-5 w-5 shrink-0 text-mist/50 transition-colors duration-300 group-hover:text-care"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center text-xs leading-relaxed text-mist">
              Cada botón abre WhatsApp con un mensaje ya preparado: solo presione enviar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
