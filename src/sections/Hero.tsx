import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/**
 * Hero principal con secuencia de entrada coreografiada:
 * línea de máscara → rótulo → titular → texto → CTAs → imagen (escala 1.2 → 1).
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const imageRef = useRef<HTMLDivElement>(null);

  // Profundidad ligera en la fotografía al hacer scroll
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section id="inicio" className="relative overflow-hidden pt-20" aria-label="Presentación">
      {/* Línea corporativa decorativa */}
      <svg
        className="pointer-events-none absolute -right-24 top-24 hidden h-[540px] w-[540px] text-action/15 lg:block"
        viewBox="0 0 540 540"
        fill="none"
        aria-hidden="true"
      >
        <motion.circle
          cx="270"
          cy="270"
          r="268"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.4, ease: EASE }}
        />
        <motion.circle
          cx="270"
          cy="270"
          r="200"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.7, ease: EASE }}
        />
      </svg>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
        {/* Columna de texto */}
        <div className="relative z-10 flex max-w-xl flex-col items-start">
          <motion.div
            className="mb-6 h-px w-16 origin-left bg-action"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            aria-hidden="true"
          />
          <motion.p
            {...fadeUp(0.25)}
            className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-action"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Barranquilla · Colombia
          </motion.p>
          <motion.h1
            {...fadeUp(0.4)}
            className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]"
          >
            Cuidamos sus instalaciones para que usted{" "}
            <em className="font-light italic text-action">impulse su organización</em>.
          </motion.h1>
          <motion.p {...fadeUp(0.55)} className="mt-6 text-lg leading-relaxed text-mist">
            Servicios integrales de atención, aseo y mantenimiento para empresas, conjuntos
            residenciales e instituciones.
          </motion.p>
          <motion.div {...fadeUp(0.7)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="btn-lift group flex items-center gap-2.5 rounded-full bg-action px-7 py-3.5 text-base font-semibold text-white"
            >
              Solicitar una visita
              <ArrowRight
                className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#servicios"
              className="btn-lift rounded-full border border-navy/25 px-7 py-3.5 text-base font-semibold text-navy"
            >
              Conocer nuestros servicios
            </a>
          </motion.div>
          <motion.p
            {...fadeUp(0.85)}
            className="mt-10 border-l-2 border-care/60 pl-4 text-sm italic leading-relaxed text-mist"
          >
            “Un solo aliado para la atención, el mantenimiento y la buena imagen de sus
            instalaciones.”
          </motion.p>
        </div>

        {/* Fotografía del equipo */}
        <motion.div
          ref={imageRef}
          className="relative"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-navy/20 lg:aspect-[5/4]">
            <motion.img
              src="/images/hero.webp"
              alt="Equipo de OMNIACORP con uniformes azul marino trabajando en el lobby de un edificio moderno en Barranquilla"
              className="h-full w-full object-cover"
              style={{ y, scale: reduce ? 1 : 1.08 }}
              fetchPriority="high"
              width={1920}
              height={1025}
            />
          </div>
          {/* Tarjeta flotante de compromiso */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            className="absolute -bottom-6 left-5 max-w-[240px] rounded-xl bg-white p-4 shadow-xl shadow-navy/15 sm:left-8"
          >
            <p className="font-display text-sm font-semibold text-navy">Confianza · Cercanía · Cumplimiento</p>
            <p className="mt-1 text-xs leading-relaxed text-mist">
              Atención personalizada y supervisión constante en cada servicio.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
