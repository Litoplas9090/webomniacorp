import { useEffect, useRef } from "react";

/**
 * Revelado progresivo al hacer scroll.
 * Agrega la clase `is-visible` cuando el elemento entra al viewport (una sola vez).
 * Respeta prefers-reduced-motion: en ese caso el CSS muestra todo sin animación.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    // Observa el contenedor y todos sus descendientes revelables
    const targets: Element[] = el.classList.contains("reveal") || el.classList.contains("draw-line")
      ? [el]
      : [];
    el.querySelectorAll(".reveal, .draw-line").forEach((t) => targets.push(t));
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}
