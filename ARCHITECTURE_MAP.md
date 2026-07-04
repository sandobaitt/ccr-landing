# Mapa Arquitectónico y Registro del Agente (CCR Landing)

> **Rol de este archivo:** Memoria persistente del agente. Aquí se registran los componentes, interfaces, dependencias y resultados de pruebas para mantener coherencia estructural.

## 🏗️ Stack y Dependencias Instaladas
* **Base:** Next.js (App Router), TypeScript, Tailwind CSS.
* **Iconos:** lucide-react.
* **Animaciones:** framer-motion.

## 🧩 Mapa de Componentes y Archivos Clave
*(El agente completará esta tabla a medida que crea archivos)*

| Ruta del Archivo | Propósito Principal | Dependencias / Props |
| :--- | :--- | :--- |
| `app/layout.tsx` | Layout principal y fuentes configurado para CCR | `next/font/google`, `globals.css` |
| `app/page.tsx` | Landing page limpia con título inicial | - |
| `app/globals.css` | Sistema de Diseño Base y Variables | Tailwind CSS |
| `components/Button.tsx` | Componente botón modular y accesible | `variant`, `size`, `children` |
| `components/SectionTitle.tsx` | Título modular para separar secciones | `title`, `subtitle`, `align` |
| `components/Navbar.tsx` | Navegación responsive con menú móvil | `lucide-react`, `Button` |
| `components/Footer.tsx` | Pie de página institucional Parroquia Asunción | - |
| `components/BrandLoader.tsx` | Splash Screen Animado (Cruz Redentorista -> "T") | `framer-motion` |
| `components/Hero.tsx` | Sección principal inicial con Call to Actions | `framer-motion`, `lucide-react` |
| `components/Pillars.tsx` | Grid de 3 pilares: Espiritualidad, Comunidad, Acción Social | `framer-motion`, `lucide-react`, `SectionTitle` |
| `types/content.ts` | Interfaces TypeScript: `NewsItem`, `SupplyItem`, `DonationInfo` | - |
| `data/content.ts` | Mock data tipada: novedades, insumos, datos bancarios | `types/content` |
| `components/NewsGrid.tsx` | Tarjetas de novedades con galería interactiva 3D | `framer-motion`, `lucide-react`, `SectionTitle`, `CircularGallery`, `data/content` |
| `components/CircularGallery/` | Componente interactivo WebGL para galería de fotos | `ogl`, `next/dynamic` |
| `components/Donations.tsx` | Insumos urgentes + datos bancarios con copiar al portapapeles | `framer-motion`, `lucide-react`, `SectionTitle`, `data/content` |
| `components/BlurText.tsx` | Animación de texto difuminado por palabras/letras | `framer-motion` |

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