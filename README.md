# OMNIACORP — Sitio web corporativo

Landing corporativa premium para OMNIACORP, empresa de servicios integrales
(conserjería profesional, aseo institucional, mantenimiento locativo, jardinería
y zonas verdes, y mantenimiento de piscinas) en Barranquilla, Colombia.

## Stack técnico

- **React 18 + TypeScript + Vite** (build estático de producción, portable a cualquier hosting)
- **Tailwind CSS 3** con sistema de tokens de marca (`tailwind.config.js`)
- **Framer Motion** para animaciones coreografiadas
- **Lucide React** para iconografía
- Componentes modulares y reutilizables, mobile-first, accesibles (WCAG 2.2 AA)

> Nota: el brief original sugería Next.js. El proyecto usa Vite + React, que
> produce el mismo resultado (SPA estática optimizada) con menor complejidad.
> Si más adelante se requiere SSR o múltiples rutas, los componentes de
> `src/sections/` se migran a Next.js sin cambios de diseño.

## Arquitectura de carpetas

```
app/
├── index.html                  # SEO: title, meta description, OG, JSON-LD (ProfessionalService)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/                 # Logo oficial (color y blanco) + fotografías WebP
├── src/
│   ├── lib/content.ts          # TODO el contenido editable: textos, servicios, contacto, WhatsApp
│   ├── hooks/useReveal.ts      # Revelado progresivo al hacer scroll (IntersectionObserver)
│   ├── components/
│   │   ├── SectionHeading.tsx  # Encabezado de sección reutilizable
│   │   └── WhatsAppFloat.tsx   # Botón flotante de WhatsApp
│   ├── sections/
│   │   ├── Header.tsx          # Navegación fija que cambia al hacer scroll + menú móvil
│   │   ├── Hero.tsx            # Titular, CTAs y fotografía con profundidad ligera
│   │   ├── ValueProposition.tsx# “Un solo aliado…” con línea que se dibuja
│   │   ├── About.tsx           # Quiénes somos + 4 rasgos + cita de posicionamiento
│   │   ├── Services.tsx        # Explorador interactivo de los 5 servicios
│   │   ├── Sectors.tsx         # 6 sectores en composición numerada
│   │   ├── WhyOmnia.tsx        # Diferenciales en acordeón editorial
│   │   ├── Method.tsx          # Metodología en 4 pasos con línea de progreso
│   │   ├── TrustBlock.tsx      # Bloque de confianza CONFIGURADO, NO PUBLICADO
│   │   ├── Contact.tsx         # Contacto directo: CTAs de WhatsApp por servicio
│   │   └── Footer.tsx          # Pie con marca tipográfica de gran formato
│   ├── pages/Home.tsx          # Composición de la landing
│   ├── App.tsx / main.tsx      # Raíz de la aplicación
│   └── index.css               # Tokens, movimiento, accesibilidad, reduced-motion
└── tailwind.config.js          # Paleta y tipografías de marca
```

## Instalación y ejecución local

```bash
npm install       # instalar dependencias
npm run dev       # entorno de desarrollo (http://localhost:5173)
npm run build     # build de producción en dist/
npm run preview   # previsualizar el build de producción
```

## Publicación

El proyecto es un sitio estático estándar (`npm run build` → carpeta `dist/`),
listo para publicarse en cualquier hosting estático. En esta plataforma basta
con usar el botón **Publicar** de la tarjeta de versión para obtener una URL
pública. Si se despliega en Vercel: importar el repositorio, framework preset
**Vite**, build command `npm run build`, output directory `dist`.

**Antes de publicar**, actualice en `index.html`, `public/robots.txt` y
`public/sitemap.xml` el dominio definitivo (actualmente `somosomniacorp.co`
como marcador de posición del canonical/OG).

## Cómo actualizar contenidos

- **Textos, servicios, teléfono, Instagram, mensajes de WhatsApp:** todo vive en
  `src/lib/content.ts`. No hace falta tocar los componentes.
- **Colores y tipografías:** `tailwind.config.js` (claves `navy`, `action`,
  `skywash`, `care`, `paper`, `mist`).
- **Bloque de confianza (testimonios/clientes/certificaciones):**
  `src/sections/TrustBlock.tsx` está configurado pero no se publica. Cuando
  existan datos **reales y autorizados**, diligencie el arreglo `TESTIMONIALS`
  y agregue `<TrustBlock />` en `src/pages/Home.tsx`.
- **Contacto:** sin formulario — conversación directa por WhatsApp. La sección
  de contacto ofrece un CTA principal de diagnóstico y un botón por servicio,
  cada uno abre WhatsApp con un mensaje predefinido (`src/sections/Contact.tsx`).
  Los mensajes se editan en ese archivo y en `whatsappLink()` de
  `src/lib/content.ts`.

## Imágenes incluidas y lista de imágenes por proporcionar

Las fotografías actuales son **generadas con IA como material de posición**,
con uniforme azul marino consistente y sin logotipos inventados (el logo
oficial solo aparece en encabezado y pie, tal como indica el brief). Para la
versión definitiva, reemplácelas por fotografías reales en estas rutas:

| Archivo | Uso | Encuadre sugerido |
|---|---|---|
| `public/images/hero.webp` | Hero principal | Equipo (2–3 personas) trabajando en lobby o áreas comunes, horizontal 16:9 |
| `public/images/servicio-conserjeria.webp` | Servicio 01 | Conserje orientando a un visitante en recepción, horizontal 3:2 |
| `public/images/servicio-aseo.webp` | Servicio 02 | Profesional de aseo en oficina, horizontal 3:2 |
| `public/images/servicio-locativo.webp` | Servicio 03 | Técnico pintando o reparando, horizontal 3:2 |
| `public/images/servicio-jardineria.webp` | Servicio 04 | Jardinero podando en conjunto residencial, horizontal 3:2 |
| `public/images/servicio-piscinas.webp` | Servicio 05 | Técnico limpiando piscina, horizontal 3:2 |
| `public/images/nosotros.webp` | Quiénes somos | Supervisora y colaborador revisando lista de tareas, horizontal 3:2 |
| `public/images/logo-omniacorp.png` | Encabezado | Logo oficial con fondo transparente (alta resolución) |
| `public/images/logo-omniacorp-blanco.png` | Pie de página | Versión blanca del logo |

Guía para las fotografías reales: luz natural cálida, personal latinoamericano
en actividades reales (no posadas), uniforme azul marino impecable con el logo
oficial visible, sin elementos de vigilancia (cámaras, armas, radios), fondos
de instalaciones reales de Barranquilla.

### Prompts para regenerar fotografías con IA (mismo estilo)

Use estos prompts si necesita nuevas tomas consistentes. Mantenga siempre la
descripción del uniforme: *“immaculate dark navy blue short-sleeve work polo
shirt and navy work trousers, completely plain with NO logos, NO text, NO
badges”* (el logo oficial se aplica en la prenda real o se edita después;
nunca se genera con IA para no deformarlo).

1. **Hero:** “Hyperrealistic documentary photograph of a Latin American
   facilities service team of three workers collaborating in the bright modern
   lobby of a corporate building in Barranquilla, Colombia. All wear matching
   immaculate dark navy blue short-sleeve work polo shirts and navy work
   trousers, completely plain with NO logos. Warm tropical daylight, green
   plants, marble floor. Candid, authentic, 35mm, shallow depth of field.”
2. **Conserjería:** “Latin American male concierge behind a modern reception
   desk warmly greeting a visitor, dark navy plain polo, bright corporate
   lobby, warm daylight, candid, 35mm.”
3. **Aseo:** “Latin American woman cleaning professional dusting a bright
   modern corporate office, dark navy plain polo and trousers, microfiber
   cloth, warm daylight, candid, 35mm.”
4. **Locativo:** “Latin American maintenance worker painting an interior
   office wall with a roller, dark navy plain polo, drop cloth, ladder, warm
   daylight, candid, 35mm.”
5. **Jardinería:** “Latin American gardener trimming a green hedge in a
   residential complex garden in Barranquilla, tropical plants, dark navy
   plain polo, morning sunlight, candid, 35mm.”
6. **Piscinas:** “Latin American pool technician cleaning a turquoise
   residential pool with a telescopic pole, dark navy plain polo, tropical
   sunlight, candid, 35mm.”
7. **Nosotros:** “Latina supervisor and Latino team member reviewing a
   clipboard together in a residential hallway, both in dark navy plain
   polos, warm daylight, candid supervision moment, 35mm.”

## Accesibilidad y rendimiento

- Jerarquía H1→H3 correcta, textos alternativos descriptivos, foco visible,
  enlace “Saltar al contenido”, atributos ARIA en pestañas y acordeón.
- Respeta `prefers-reduced-motion` (CSS + `useReducedMotion` de Framer Motion).
- Imágenes WebP con `loading="lazy"` (hero con `fetchpriority="high"`).
- Sin carruseles automáticos; animaciones sutiles que no bloquean la navegación.
