import SectionHeading from "@/components/SectionHeading";
import { METHOD_STEPS } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";

/**
 * Metodología: cuatro pasos conectados por una línea que se dibuja
 * progresivamente al hacer scroll, con indicadores de progreso numerados.
 */
export default function Method() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-skywash/50" aria-label="Metodología de trabajo">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Así trabajamos"
          title="Un proceso claro, de principio a fin."
          lead="Cuatro pasos sencillos para que el servicio empiece bien y se mantenga bien."
        />

        <div className="relative mt-16">
          {/* Línea de progreso animada (escritorio) */}
          <svg
            className="draw-line pointer-events-none absolute left-0 top-7 hidden h-1 w-full text-action/35 lg:block"
            viewBox="0 0 1200 4"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 2 H1200"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{ "--path-length": 1200 } as React.CSSProperties}
            />
          </svg>

          <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {METHOD_STEPS.map((step, i) => (
              <li
                key={step.number}
                className="reveal relative flex flex-col"
                style={{ "--reveal-delay": `${i * 140}ms` } as React.CSSProperties}
              >
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-action bg-white font-display text-lg font-semibold text-navy">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-mist">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
