import { ConciergeBell, Sparkles, Wrench, Leaf } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const PILLARS = [
  { icon: ConciergeBell, label: "Atención" },
  { icon: Sparkles, label: "Aseo" },
  { icon: Wrench, label: "Mantenimiento" },
  { icon: Leaf, label: "Exteriores" },
] as const;

/**
 * Propuesta de valor: integración visual de los cuatro frentes de servicio,
 * conectados por una línea corporativa que se dibuja al hacer scroll.
 */
export default function ValueProposition() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="border-y border-line bg-white" aria-label="Propuesta de valor">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="reveal text-center font-display text-2xl font-medium leading-snug tracking-tight text-navy sm:text-3xl">
          Un solo aliado para la <span className="text-action">atención</span>, el{" "}
          <span className="text-action">mantenimiento</span> y la{" "}
          <span className="text-action">buena imagen</span> de sus instalaciones.
        </p>

        <div className="relative mt-12">
          {/* Línea conectora animada (escritorio) */}
          <svg
            className="draw-line pointer-events-none absolute left-0 top-6 hidden h-1 w-full text-action/30 md:block"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 2 H1000" stroke="currentColor" strokeWidth="2" style={{ "--path-length": 1000 } as React.CSSProperties} />
          </svg>

          <ol className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4" aria-label="Frentes de servicio integrados">
            {PILLARS.map((pillar, i) => (
              <li
                key={pillar.label}
                className="reveal relative flex flex-col items-center gap-3 text-center"
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-action/25 bg-white text-navy">
                  <pillar.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                  {pillar.label}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <p
          className="reveal mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-mist"
          style={{ "--reveal-delay": "500ms" } as React.CSSProperties}
        >
          Menos coordinación para usted y una visión integral del cuidado de sus instalaciones:
          un mismo equipo, un mismo estándar.
        </p>
      </div>
    </section>
  );
}
