# Mapa Arquitectónico y Registro del Agente (CCR Landing)

> **Rol de este archivo:** Memoria persistente del agente. Aquí se registran los componentes, interfaces, dependencias y resultados de pruebas para mantener coherencia estructural.

## 🏗️ Stack y Dependencias Instaladas
* **Base:** Next.js (App Router), TypeScript, Tailwind CSS.
* **Iconos:** lucide-react.
* **Animaciones:** framer-motion, gsap.

## 🧩 Mapa de Componentes y Archivos Clave
*(El agente completará esta tabla a medida que crea archivos)*

| Ruta del Archivo | Propósito Principal | Dependencias / Props |
| :--- | :--- | :--- |
| `app/layout.tsx` | Layout principal y fuentes configurado para CCR | `next/font/google`, `globals.css`, `ScheduleTicker` |
| `app/page.tsx` | Landing page limpia con título inicial | - |
| `app/globals.css` | Sistema de Diseño Base y Variables | Tailwind CSS |
| `components/Button.tsx` | Componente botón modular y accesible | `variant`, `size`, `children` |
| `components/SectionTitle.tsx` | Título modular animado con ScrollFloat | `title`, `subtitle`, `align`, `ScrollFloat` |
| `components/ScrollFloat/` | Componente de animación de texto al scroll (React Bits) | `gsap`, `ScrollTrigger` |
| `components/LogoLoop/` | Componente de carrusel/scroll infinito animado (React Bits) | CSS Keyframes |
| `components/ScheduleTicker.tsx` | Barra superior (Ticker) de horarios de misas y adoración | `LogoLoop`, `lucide-react` |
| `components/Navbar.tsx` | Navegación con menú tipo Sidebar deslizante desde la derecha | `lucide-react` |
| `components/Footer.tsx` | Pie de página institucional Parroquia Asunción | - |
| `components/BrandLoader.tsx` | Splash Screen Animado (Cruz Redentorista -> "T") | `framer-motion` |
| `components/Hero.tsx` | Sección principal inicial con Call to Actions | `framer-motion`, `lucide-react` |
| `components/Pillars.tsx` | Lista compacta de 3 pilares para mejor espacio vertical en móviles | `framer-motion`, `lucide-react`, `SectionTitle` |
| `types/content.ts` | Interfaces TypeScript: `NewsItem`, `SupplyItem`, `DonationInfo` | - |
| `data/content.ts` | Mock data tipada: novedades, insumos, datos bancarios | `types/content` |
| `components/NewsGrid.tsx` | Tarjetas de novedades con galería interactiva 3D | `framer-motion`, `lucide-react`, `SectionTitle`, `CircularGallery`, `data/content` |
| `components/CircularGallery/` | Componente interactivo WebGL para galería de fotos | `ogl`, `next/dynamic` |
| `components/BorderGlow/` | Efecto de resplandor interactivo de React Bits | `framer-motion` |
| `components/Donations.tsx` | Insumos urgentes + datos bancarios con copiar al portapapeles | `framer-motion`, `lucide-react`, `SectionTitle`, `data/content` |
| `components/NextRetreat.tsx` | Sección informativa y cuenta regresiva del próximo retiro | `framer-motion`, `lucide-react`, `SectionTitle`, `Button`, `data/content` |
| `components/BlurText.tsx` | Animación de texto difuminado por palabras/letras | `framer-motion` |
| `components/SaintsGrid.tsx` | Sección interactiva de Santos con modal flotante | `framer-motion`, `lucide-react`, `SectionTitle`, `data/content` |
| `components/Communities.tsx` | Carrusel interactivo (horizontal-scroll/swipe) del Camino CCR | `framer-motion`, `lucide-react`, `SectionTitle` |
| `components/DailyVerse.tsx` | Sección de versículo del día rotativo dinámicamente | `framer-motion`, `lucide-react`, `data/content` |
| `components/StarryBackground.tsx` | Fondo global estrellado renderizado con HTML5 Canvas e interactividad | - |
| `components/RoamingChrist.tsx` | Mascota virtual (Pixel Art) autónoma con máquina de estados finitos que recorre la pantalla de forma aleatoria | `framer-motion`, CSS Sprites |

## 🧪 Registro de Pruebas y Verificaciones
*(El agente registrará cada build/test ejecutado)*

* **[Inicio]**: Esqueleto del proyecto en espera de inicialización.
* **[Tarea 1 - Exitosa]**: Ejecutado `npm run build` sin errores. Dependencias instaladas y layout limpiado.
* **[Tarea 2 - Exitosa]**: Ejecutado `npm run build` sin errores. Carpetas creadas y componentes UI base implementados.
* **[Tarea 2.5 - Exitosa]**: `framer-motion` verificado. `npm run build` exitoso sin errores de tipado.
* **[Tarea 3 - Exitosa]**: `npm run build` validó correctamente los componentes Navbar y Footer integrados.
* **[Tarea 3.5 - Exitosa]**: `npm run build` validó la correcta integración del Splash Screen Animado con `framer-motion` en el layout.
* **[Tarea 4 - Exitosa]**: `npm run build` exitoso. El Hero Section fue maquetado correctamente en `page.tsx` sin errores de compilación ni de TypeScript.
* **[Tarea 5 - Exitosa]**: `npm run build` exitoso. Pillars grid responsive con animaciones staggered al scroll. Error de tipado `ease` corregido con tupla explícita.
* **[Tarea 6 - Exitosa]**: `npm run build` exitoso. Interfaces en `types/content.ts` y mock data tipada en `data/content.ts` sin errores.
* **[Tarea 7 - Exitosa]**: `npm run build` exitoso. NewsGrid con tarjetas categorizadas, fechas formateadas y animaciones al scroll integrado en la landing.
* **[Tarea 8 - Exitosa]**: `npm run build` exitoso. Donations con grid de insumos (badges urgentes), datos bancarios con CopyButton y feedback visual "¡Copiado!".
* **[Tarea 9 - Exitosa]**: `npm run lint` con 0 errores/warnings. `npm run build` exitoso. Proyecto listo para despliegue en Vercel.
* **[Tarea 10 - Exitosa]**: `npm run build` exitoso. Actualizado `types/content.ts` con la interfaz `RetreatInfo` y `data/content.ts` con el objeto `nextRetreat`.
* **[Tarea 11 - Exitosa]**: `npm run build` exitoso. Hero Section modificado con lógica condicional para el botón "Inscribirse al CCR 32" o "Inscripciones próximamente" deshabilitado.
* **[Tarea 12 - Exitosa]**: `npm run build` exitoso. Componente `NextRetreat.tsx` creado y renderizado en `page.tsx` con cuenta regresiva dinámica y renderizado condicional.
* **[Integración Exitosa]**: `npm run build` validó correctamente la creación del componente `BorderGlow` (React Bits) tipado con TypeScript y su integración alrededor del temporizador en `NextRetreat.tsx`.
* **[Tarea 13 - Exitosa]**: `npm run build` exitoso. Módulo de Acción Social (`Donations.tsx`) refactorizado. Título modificado, banner informativo de recorridas añadido y datos de insumos actualizados (`data/content.ts`). Feedback visual del CopyButton mantenido.
* **[Tarea 14 - Exitosa]**: `npm run build` exitoso. `Footer.tsx` actualizado con estructura robusta a 2 columnas con iconos (`lucide-react`) de dirección, horarios de secretaría e Instagram. Error de importación de `Instagram` corregido con `AtSign`.
* **[Tarea 14.5 - Exitosa]**: `npm run build` exitoso. Donaciones monetarias comentadas por seguridad. Añadida la interfaz `CoordinatorInfo` y datos de coordinadores en `/data/content.ts`. UI de `Donations.tsx` actualizada con listado dinámico de coordinadores y enlaces directos a WhatsApp.
* **[Tarea 15 - Exitosa]**: `npm run build` exitoso. Estructuras `SaintInfo` y `CommunityInfo` agregadas a `types/content.ts`. Mock data de los 4 santos y 4 comisiones agregada en `data/content.ts`.
* **[Tarea 16 - Exitosa]**: `npm run build` exitoso. Componente `SaintsGrid.tsx` creado usando `AnimatePresence` y `layoutId` de framer-motion para el Modal interactivo de biografía. Integrado correctamente en `app/page.tsx`.
* **[Ajustes de UI y Menú - Exitosa]**: `npm run build` exitoso.
  - Se modificó `Pillars.tsx` a un formato de lista en fila para optimizar el espacio vertical en móviles.
  - Se implementó carrusel horizontal táctil (`overflow-x-auto` con `snap-center`) en las etapas de `Communities.tsx`.
  - Se integró el componente `ScrollFloat` de React Bits en todos los títulos de sección (`SectionTitle.tsx`) instalando `gsap`.
  - Se rediseñó el `Navbar.tsx` para usar un menú lateral deslizante (Sidebar) desde la derecha, con enlaces ordenados según el flujo de la página y efectos visuales al hacer hover.
* **[Refactor Tarea 1 - Exitosa]**: Ejecutado `npm run build` sin errores. Variables globales y configuración de Tailwind actualizadas al nuevo tema claro/pastel (`bg-ccr-primary` `#fff9f2`, acento vibrante `#ef4444`).
* **[Refactor Tarea 2 - Exitosa]**: Ejecutado `npm run build` sin errores. Tipografías actualizadas a DM Sans (cuerpo) y Outfit (títulos). Eliminadas clases rígidas de fondo en `layout.tsx`. Nuevos colores pastel (mint, peach, lavender, rose, blue) añadidos a `tailwind.config.ts`.
* **[Refactor Tarea 3 - Exitosa]**: Ejecutado `npm run build` sin errores. Se invirtieron todos los contrastes de la UI. Ahora los componentes usan fondos blancos y pasteles (mint, peach, lavender, rose, blue) con textos oscuros (`zinc-900`, `zinc-600`), y los `BorderGlow` / `Modal` se adaptaron a la nueva estética.
* **[Refactor Tarea 4 - Exitosa]**: Ejecutado `npm run build` sin errores. Se refactorizó la animación inicial `BrandLoader.tsx`, cambiando su fondo de `zinc-950` a `ccr-primary` e invirtiendo los colores del SVG de la cruz redentorista (`#fafafa` a `#18181b`) y los textos para asegurar el contraste adecuado.
* **[Refactor Tarea 5 - Exitosa]**: Ejecutado `npm run build` sin errores. Textos de interfaz estáticos (UI) en todos los componentes fueron refactorizados a un tono juvenil, empático y pastoral argentino, eliminando frases rígidas e institucionales.
* **[Refactor Tarea 6 - Exitosa]**: Ejecutado `npm run build` sin errores. Se reescribió `data/content.ts`, adaptando descripciones de retiros, acciones sociales, comunidades de perseverancia y biografías de los santos a un tono cercano y dinámico, manteniendo intacta la estructura y las claves del JSON.
* **[Optimización UI y Limpieza - Exitosa]**: `npm run build` sin errores. Se limpió el "Ghost Code" removiendo props sin usar (`theme`), se agregó el componente `ScheduleTicker` en la parte superior con un `LogoLoop` de React Bits, y se configuró un fondo animado pastel para el ticker. 
* **[Correcciones Móviles - Exitosa]**: `npm run build` sin errores. Se corrigió el desbordamiento del Footer mediante `flex-wrap`, se redujo el padding vertical de las secciones en móviles (de `py-24` a `py-16`), se centraron correctamente las palabras largas en `BlurText`, y se mejoró la lógica táctil del `CircularGallery` añadiendo bloqueo direccional para evitar rebotes de scroll.
* **[Preparación para Despliegue - Exitosa]**: `npm run build` exitoso. Se inyectó `@vercel/analytics` para monitoreo de tráfico, se añadieron metadatos SEO y etiquetas Open Graph en `layout.tsx` para generar tarjetas de vista previa en redes sociales, y se limpió el repositorio ignorando archivos internos en el `.gitignore`.
* **[Roaming Christ (Mascota Virtual) - Exitosa]**: Se programó un motor de spritesheet en CSS y una máquina de estados finitos en `RoamingChrist.tsx` para simular una mascota autónoma que camina, saluda y se esconde a lo largo de toda la aplicación. Se integró exitosamente a nivel global en `app/layout.tsx`.