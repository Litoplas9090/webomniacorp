import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, whatsappLink } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/**
 * Explorador interactivo de servicios.
 * Al seleccionar un servicio, la fotografía y el contenido cambian con una transición suave.
 */
export default function Services() {
  const ref = useReveal<HTMLElement>();
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <section id="servicios" ref={ref} className="scroll-mt-24 bg-white" aria-label="Servicios">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Servicios"
          title="Cinco frentes, un mismo estándar de cuidado."
          lead="Explore cada servicio y descubra cómo se integra a la operación de sus instalaciones."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          {/* Selector de servicios */}
          <div
            role="tablist"
            aria-label="Lista de servicios"
            className="reveal flex snap-x gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
          >
            {SERVICES.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  id={`tab-${service.id}`}
                  onClick={() => setActiveId(service.id)}
                  className={`group flex min-w-[220px] shrink-0 snap-start items-baseline gap-4 rounded-xl px-5 py-4 text-left transition-all duration-300 lg:min-w-0 ${
                    isActive
                      ? "bg-navy text-white shadow-lg shadow-navy/20"
                      : "bg-transparent text-navy hover:bg-skywash"
                  }`}
                >
                  <span
                    className={`font-display text-sm font-semibold ${
                      isActive ? "text-action" : "text-action/70"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-lg font-semibold leading-tight">
                      {service.name}
                    </span>
                    <span
                      className={`mt-0.5 hidden text-xs leading-snug lg:block ${
                        isActive ? "text-white/70" : "text-mist"
                      }`}
                    >
                      {service.tagline}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel del servicio activo */}
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  src={active.image}
                  alt={active.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                  initial={reduce ? undefined : { scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, ease: EASE }}
                  loading="lazy"
                  width={1280}
                  height={810}
                />
              </div>

              <div className="flex flex-col items-start">
                <p className="font-display text-xl font-medium italic leading-snug text-action">
                  {active.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-mist">{active.description}</p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {active.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-care" strokeWidth={2.5} aria-hidden="true" />
                      {activity}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-lg bg-care-soft px-4 py-3 text-sm font-medium leading-relaxed text-care">
                  {active.benefit}
                </p>

                <a
                  href={whatsappLink(
                    `Hola, OMNIACORP. Me interesa el servicio de ${active.name.toLowerCase()} para mis instalaciones. ¿Podrían brindarme más información?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift group mt-7 flex items-center gap-2.5 rounded-full bg-action px-6 py-3 text-sm font-semibold text-white"
                  aria-label={`Consultar el servicio de ${active.name} por WhatsApp`}
                >
                  Consultar este servicio
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
