interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

/** Encabezado de sección reutilizable: rótulo, título editorial y texto guía. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const titleColor = tone === "light" ? "text-navy" : "text-white";
  const leadColor = tone === "light" ? "text-mist" : "text-white/75";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <p className="reveal flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-action">
        <span className="inline-block h-px w-8 bg-action" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`reveal font-display text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
        style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`reveal max-w-xl text-base leading-relaxed sm:text-lg ${leadColor}`}
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
