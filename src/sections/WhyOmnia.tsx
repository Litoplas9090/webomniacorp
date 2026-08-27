import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { DIFFERENTIALS } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/**
 * Por qué OMNIACORP: diferenciales en acordeón editorial sobre fondo azul marino.
 * Fácil de recorrer, un elemento abierto a la vez.
 */
export default function WhyOmnia() {
  const ref = useReveal<HTMLElement>();
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="por-que" ref={ref} className="scroll-mt-24 bg-navy" aria-label="Por qué OMNIACORP">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:py-28">
        <div className="flex flex-col items-start">
          <SectionHeading
            eyebrow="Por qué OMNIACORP"
            title="Una relación de servicio pensada para el largo plazo."
            lead="No prometemos cifras: prometemos presencia, seguimiento y cumplimiento. Eso es lo que nuestros clientes sienten cada día."
            tone="dark"
          />
          <a
            href="#contacto"
            className="btn-lift reveal mt-9 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-navy"
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            Conversemos sobre sus instalaciones
          </a>
        </div>

        <div className="reveal" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
          {DIFFERENTIALS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.title} className="border-b border-white/15 first:border-t">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`diferencial-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-display text-sm font-semibold text-action">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl font-medium text-white sm:text-2xl">
                      {item.title}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white"
                    aria-hidden="true"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <motion.div
                  id={`diferencial-${i}`}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: reduce ? 0.01 : 0.45, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-lg pb-7 pl-12 leading-relaxed text-white/70">{item.text}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
