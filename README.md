# 🕊️ Crecer con Cristo Redentor (CCR) - Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-f040b8?logo=framer)](https://www.framer.com/motion/)
[![Sanity CMS](https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity)](https://www.sanity.io/)

> Una experiencia web inmersiva, de alto rendimiento y estilo vibrante, diseñada para la comunidad juvenil de la Parroquia Asunción.

---

## 🚀 Sobre el Proyecto

Este proyecto nació como una iniciativa para modernizar y profesionalizar la presencia digital del movimiento **Crecer con Cristo Redentor (CCR)**. Como estudiante de ingeniería, decidí aplicar paradigmas modernos de desarrollo web (arquitecturas basadas en componentes, renderizado estático híbrido, micro-interacciones fluidas y diseño de interfaces avanzadas) para construir una **Single Page Application (SPA)** de primer nivel.

### 🤖 Desarrollo Asistido por Inteligencia Artificial (Agentic AI)

Este proyecto fue desarrollado en modalidad de *Pair Programming* junto a **Antigravity** (un agente avanzado de IA desarrollado por el equipo de Google Deepmind). A través de iteraciones conjuntas, ingeniería de prompts y planificación arquitectónica, logramos:
- **Prototipado rápido** y escalable de componentes complejos.
- **Refactorización de UI/UX** transitando hacia patrones de "Glassmorphism" y estéticas de colores pastel que aumentan la retención del usuario.
- **Implementación de animaciones avanzadas** integrando librerías matemáticas y de hardware (WebGL vía `ogl`, animaciones SVG fluidas, físicas de resortes con `framer-motion`).
- Mantenimiento estricto de **clean code**, eliminación de código inerte (ghost code) y buenas prácticas en la estructura del proyecto.

## ✨ Características Principales

- **Estética "Vibrante" & Glassmorphism:** Interfaz vibrante con fondos borrosos (backdrop blur), mallas de gradientes animados (gradient meshes) y colores pastel de alto contraste.
- **Micro-Interacciones:** Componentes como `ScheduleTicker` (cinta infinita de horarios), `CircularGallery` (galería WebGL rotativa en 3D), y tarjetas interactivas que reaccionan al scroll y al cursor del usuario.
- **Rendimiento Óptimo:** Construido sobre **Next.js 16.2** (App Router) y Turbopack, garantizando tiempos de carga ultrarrápidos mediante generación estática e ISR.
- **Arquitectura Dinámica (Headless CMS):** Toda la información del sitio (fechas de retiros, cronogramas, santos, novedades y redes sociales) se gestiona de forma intuitiva a través de **Sanity CMS**, permitiendo a cualquier voluntario actualizar la página web sin tocar una sola línea de código.
- **Mobile-First & Responsivo:** Menú lateral (Sidebar) nativo para móviles, adaptabilidad táctil en carruseles (`snap-scroll`) y grillas fluidas.

## 🛠️ Stack Tecnológico

- **Framework Core:** [Next.js (App Router)](https://nextjs.org/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Gestor de Contenido (CMS):** [Sanity.io](https://www.sanity.io/)
- **Animaciones UI/2D:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Gráficos 3D / WebGL:** [Ogl](https://github.com/oframe/ogl)
- **Bloques UI Dinámicos:** [React Bits](https://reactbits.dev/)

## 📂 Arquitectura del Repositorio

El proyecto sigue una estructura modular dictada por Next.js:
- `/app`: Configuración global, Layout principal (fuentes, Ticker de horarios, Navbar persistente, Footer) y el punto de entrada de la Landing Page (`page.tsx`).
- `/components`: Componentes modulares y altamente reutilizables agrupados lógicamente (Hero, Novedades, Comunidades, Pilares, Donaciones).
- `/sanity`: Configuración y esquemas de base de datos del panel administrativo local e integrado de Sanity Studio.
- `/data`: Modelos de datos estáticos de respaldo (*fallback*) y herramientas útiles.
- `/types`: Definiciones estrictas de interfaces de TypeScript para prevenir errores en tiempo de compilación.

## 💻 Instalación y Uso Local

Si querés aportar al proyecto o correrlo en tu máquina:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/sandobaitt/ccr-landing.git
   cd ccr-landing
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Copiá el archivo `.env.example` a `.env.local` y completá con los IDs de Sanity:
   ```bash
   cp .env.example .env.local
   ```

4. **Correr el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. Abrir [http://localhost:3000](http://localhost:3000) para ver la web y [http://localhost:3000/admin](http://localhost:3000/admin) para acceder al panel de control de Sanity CMS.

## 👨‍💻 Autor

Desarrollado con ❤️, mucha lógica y unas cuantas tazas de café por **[sandobaitt](https://github.com/sandobaitt)** (Estudiante de Ingeniería).  
*Ad Maiorem Dei Gloriam.*
