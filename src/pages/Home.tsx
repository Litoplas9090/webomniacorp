import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ValueProposition from "@/sections/ValueProposition";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Sectors from "@/sections/Sectors";
import WhyOmnia from "@/sections/WhyOmnia";
import Method from "@/sections/Method";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/**
 * Landing corporativa de OMNIACORP.
 * Nota: TrustBlock (testimonios) está configurado en el código pero no se
 * publica hasta contar con datos reales y autorizados.
 */
export default function Home() {
  return (
    <>
      {/* Enlace de salto para accesibilidad */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-action focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <ValueProposition />
        <About />
        <Services />
        <Sectors />
        <WhyOmnia />
        <Method />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
