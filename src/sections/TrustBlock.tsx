/**
 * BLOQUE DE CONFIANZA — CONFIGURADO PERO NO PUBLICADO.
 *
 * Este componente está preparado para incorporar, cuando existan y estén
 * autorizados: testimonios reales, logos de clientes, certificaciones,
 * casos de éxito e indicadores verificables.
 *
 * Por decisión editorial de OMNIACORP no se publican testimonios, clientes,
 * certificaciones ni cifras inventadas. Para activarlo:
 *   1. Diligencie el arreglo TESTIMONIALS con datos reales y autorizados.
 *   2. Importe y renderice <TrustBlock /> en src/pages/Home.tsx.
 */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

/** Datos reales y autorizados. Vacío = sección oculta. */
export const TESTIMONIALS: Testimonial[] = [];

export default function TrustBlock() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="bg-white" aria-label="Lo que dicen nuestros clientes">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="font-display text-3xl font-medium tracking-tight text-navy sm:text-4xl">
          Lo que dicen nuestros clientes
        </h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.author} className="rounded-2xl border border-line bg-paper p-8">
              <blockquote className="font-display text-lg italic leading-relaxed text-navy">
                “{t.quote}”
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-ink">{t.author}</p>
              <p className="text-xs text-mist">
                {t.role} · {t.organization}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
