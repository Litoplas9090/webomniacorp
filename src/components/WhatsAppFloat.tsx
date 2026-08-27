import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";

/** Botón flotante permanente de WhatsApp con mensaje profesional predefinido. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a OMNIACORP por WhatsApp"
      className="btn-lift group fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#1FA855] py-3 pl-3.5 pr-4 text-white shadow-lg shadow-[#1FA855]/30 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      <span className="text-sm font-semibold">WhatsApp</span>
      <span className="sr-only">(se abre en una ventana nueva)</span>
    </a>
  );
}
