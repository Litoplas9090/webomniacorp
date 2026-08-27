/**
 * Contenido central de OMNIACORP.
 * Edite este archivo para actualizar textos, servicios y datos de contacto.
 */

export const CONTACT = {
  phoneDisplay: "315 244 8300",
  phoneIntl: "573152448300",
  instagram: "@somosomniacorp",
  instagramUrl: "https://www.instagram.com/somosomniacorp",
  city: "Barranquilla, Colombia",
} as const;

/** Construye el enlace de WhatsApp con un mensaje profesional predefinido. */
export function whatsappLink(message?: string): string {
  const defaultMessage =
    "Hola, OMNIACORP. Me interesa conocer sus servicios integrales para mis instalaciones. ¿Podríamos agendar una visita de diagnóstico?";
  return `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(message ?? defaultMessage)}`;
}

export interface Service {
  id: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  activities: string[];
  benefit: string;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    id: "conserjeria",
    number: "01",
    name: "Conserjería profesional",
    shortName: "Conserjería",
    tagline: "La primera impresión de su organización comienza con una atención profesional.",
    description:
      "Personas cuidadosamente preparadas que reciben, orientan y apoyan la operación diaria de sus instalaciones.",
    activities: [
      "Recepción y orientación de visitantes",
      "Control de proveedores",
      "Gestión de correspondencia",
      "Atención al usuario",
      "Supervisión de áreas comunes",
      "Apoyo operativo",
    ],
    benefit: "Cada visitante recibe una atención cordial que habla bien de su organización.",
    image: "/images/servicio-conserjeria.webp",
    imageAlt:
      "Conserje de OMNIACORP con uniforme azul marino orientando a un visitante en la recepción de un edificio corporativo",
  },
  {
    id: "aseo",
    number: "02",
    name: "Aseo institucional",
    shortName: "Aseo",
    tagline: "Espacios limpios fortalecen la imagen y el bienestar de su organización.",
    description:
      "Rutinas de limpieza planificadas para mantener oficinas y áreas comunes siempre ordenadas y presentables.",
    activities: [
      "Limpieza de oficinas",
      "Aseo de áreas comunes",
      "Atención de zonas de alto tránsito",
      "Orden y presentación de instalaciones",
      "Bienestar para colaboradores y visitantes",
    ],
    benefit: "Instalaciones impecables que cuidan a su equipo y a quienes lo visitan.",
    image: "/images/servicio-aseo.webp",
    imageAlt:
      "Profesional de aseo de OMNIACORP con uniforme azul marino limpiando una oficina corporativa moderna",
  },
  {
    id: "locativo",
    number: "03",
    name: "Mantenimiento locativo",
    shortName: "Locativo",
    tagline: "Protegemos la infraestructura que respalda su operación diaria.",
    description:
      "Atención preventiva y correctiva para conservar sus instalaciones en óptimas condiciones, sin sobresaltos.",
    activities: [
      "Pintura de fachadas e interiores",
      "Plomería básica",
      "Electricidad básica",
      "Reparaciones menores",
      "Mantenimiento preventivo",
      "Conservación de instalaciones",
    ],
    benefit: "Menos imprevistos y una infraestructura que siempre responde.",
    image: "/images/servicio-locativo.webp",
    imageAlt:
      "Técnico de mantenimiento de OMNIACORP con uniforme azul marino pintando un muro interior de oficinas",
  },
  {
    id: "jardineria",
    number: "04",
    name: "Jardinería y zonas verdes",
    shortName: "Zonas verdes",
    tagline: "Un entorno bien cuidado transmite confianza y bienestar.",
    description:
      "Cuidado constante de jardines y exteriores para que el entorno de sus instalaciones siempre se vea vivo.",
    activities: [
      "Corte de césped",
      "Poda",
      "Cuidado de jardines",
      "Conservación del entorno",
      "Embellecimiento de áreas comunes",
    ],
    benefit: "Exteriores verdes y ordenados que elevan la percepción de su propiedad.",
    image: "/images/servicio-jardineria.webp",
    imageAlt:
      "Jardinero de OMNIACORP con uniforme azul marino podando setos en los jardines de un conjunto residencial",
  },
  {
    id: "piscinas",
    number: "05",
    name: "Mantenimiento de piscinas",
    shortName: "Piscinas",
    tagline: "Espacios recreativos limpios y en óptimas condiciones.",
    description:
      "Control periódico del agua y cuidado preventivo para que la piscina esté siempre lista para disfrutarse.",
    activities: [
      "Limpieza",
      "Tratamiento químico",
      "Control periódico del agua",
      "Conservación",
      "Mantenimiento preventivo",
    ],
    benefit: "Agua cristalina y segura, sin preocupaciones para su comunidad.",
    image: "/images/servicio-piscinas.webp",
    imageAlt:
      "Técnico de OMNIACORP con uniforme azul marino limpiando una piscina residencial con red de superficie",
  },
];

export const SECTORS = [
  { name: "Empresas e industrias", icon: "Factory" },
  { name: "Oficinas corporativas", icon: "Building2" },
  { name: "Conjuntos residenciales", icon: "Home" },
  { name: "Instituciones educativas", icon: "GraduationCap" },
  { name: "Centros médicos", icon: "HeartPulse" },
  { name: "Entidades públicas y privadas", icon: "Landmark" },
] as const;

export const DIFFERENTIALS = [
  {
    title: "Atención personalizada",
    text: "Trato directo con quienes toman decisiones. Usted siempre sabe con quién hablar.",
  },
  {
    title: "Supervisión cercana",
    text: "Acompañamos cada servicio en sitio, con seguimiento permanente a los detalles.",
  },
  {
    title: "Personal capacitado",
    text: "Equipos preparados, uniformados y respaldados para cada labor que asumen.",
  },
  {
    title: "Respuesta oportuna",
    text: "Cuando algo requiere atención, actuamos sin demoras ni intermediarios.",
  },
  {
    title: "Flexibilidad",
    text: "Alcances ajustados a la operación real de cada instalación, no al revés.",
  },
  {
    title: "Un solo aliado integral",
    text: "Atención, aseo y mantenimiento coordinados por un mismo equipo responsable.",
  },
] as const;

export const METHOD_STEPS = [
  {
    number: "01",
    title: "Escuchamos",
    text: "Visitamos sus instalaciones y entendemos sus necesidades y prioridades.",
  },
  {
    number: "02",
    title: "Definimos",
    text: "Acordamos juntos el alcance, las rutinas y los indicadores del servicio.",
  },
  {
    number: "03",
    title: "Asignamos",
    text: "Preparamos y asignamos el personal adecuado para su operación.",
  },
  {
    number: "04",
    title: "Supervisamos",
    text: "Acompañamos el servicio y damos seguimiento permanente a cada detalle.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Por qué OMNIACORP", href: "#por-que" },
  { label: "Contacto", href: "#contacto" },
] as const;
