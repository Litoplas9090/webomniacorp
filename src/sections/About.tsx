import { HandHeart, UserRoundCheck, Handshake, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

const TRAITS = [
  { icon: HandHeart, title: "Calidad humana", text: "Trato cordial y respetuoso en cada interacción." },
  { icon: UserRoundCheck, title: "Atención personalizada", text: "Conocemos sus instalaciones y a las personas detrás de ellas." },
  { icon: Handshake, title: "Compromiso", text: "Nos involucramos con su operación como si fuera la nuestra." },
  { icon: BadgeCheck, title: "Cumplimiento", text: "Responsabilidad y palabra en cada labor acordada." },
] as const;

/** Quiénes somos: propósito comunicado mediante beneficios concretos. */
export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="nosotros" ref={ref} className="scroll-mt-24" aria-label="Quiénes somos">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        {/* Imagen con profundidad ligera */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/nosotros.webp"
              alt="Supervisora y colaborador de OMNIACORP revisando juntos la lista de tareas en un pasillo residencial"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:scale-[1.04]"
              loading="lazy"
              width={1280}
              height={810}
            />
          </div>
          <div
            className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl border border-action/20"
            aria-hidden="true"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Cercanía que mejora su operación."
            lead="Somos una empresa barranquillera especializada en servicios operativos, aseo y mantenimiento integral. Acompañamos de forma cercana a cada cliente para conservar instalaciones funcionales, ordenadas y bien presentadas."
          />

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {TRAITS.map((trait, i) => (
              <li
                key={trait.title}
                className="reveal flex flex-col gap-2.5"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-care-soft text-care">
                  <trait.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy">{trait.title}</h3>
                <p className="text-sm leading-relaxed text-mist">{trait.text}</p>
              </li>
            ))}
          </ul>

          <blockquote
            className="reveal mt-10 border-l-2 border-action pl-5 font-display text-lg font-medium italic leading-relaxed text-navy"
            style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          >
            “No buscamos ser la empresa más grande del mercado; trabajamos cada día para
            convertirnos en la más confiable para nuestros clientes.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
