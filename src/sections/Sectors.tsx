import { Factory, Building2, Home, GraduationCap, HeartPulse, Landmark } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

const SECTORS = [
  { icon: Factory, name: "Empresas e industrias" },
  { icon: Building2, name: "Oficinas corporativas" },
  { icon: Home, name: "Conjuntos residenciales" },
  { icon: GraduationCap, name: "Instituciones educativas" },
  { icon: HeartPulse, name: "Centros médicos" },
  { icon: Landmark, name: "Entidades públicas y privadas" },
] as const;

/** Sectores atendidos: composición numerada con ritmo editorial. */
export default function Sectors() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="sectores" ref={ref} className="scroll-mt-24" aria-label="Sectores atendidos">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Sectores"
          title="Nos adaptamos a cada instalación."
          lead="Un mismo estándar de cuidado, con un servicio diseñado alrededor de su operación."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector, i) => (
            <li
              key={sector.name}
              className="reveal group relative flex flex-col gap-8 bg-white p-8 transition-colors duration-500 hover:bg-navy sm:p-10"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <sector.icon
                  className="h-7 w-7 text-action transition-colors duration-500 group-hover:text-white"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-semibold text-mist/50 transition-colors duration-500 group-hover:text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug text-navy transition-colors duration-500 group-hover:text-white">
                {sector.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
