# Checklist de Desarrollo: Landing Page CCR

> **REGLA DE DOCUMENTACIÓN CONTINUA:** Al finalizar cada tarea, y DESPUÉS de verificar con comandos terminal (ej. `npm run build`), debes actualizar obligatoriamente el archivo `ARCHITECTURE_MAP.md` documentando las decisiones tomadas, componentes creados y pruebas realizadas.
> **Protocolo para el Agente:** Lee este archivo antes de iniciar. Ejecuta únicamente la primera tarea marcada como pendiente `[ ]`. Al terminar y verificar con un build exitoso, marca la tarea como completada `[x]` y espera instrucciones.

## Fase 1: Configuración y Base Arquitectónica
- [x] **Tarea 1: Inicialización del Proyecto**
  - Instalar Next.js (App Router), TypeScript y Tailwind CSS.
  - Instalar `lucide-react`.
  - Limpiar el layout base y verificar que `npm run build` compile sin errores.
- [x] **Tarea 2: Sistema de Diseño Base y Estructura de Carpetas**
  - Configurar paleta de colores minimalista en `tailwind.config.ts`.
  - Crear directorios: `/components`, `/data`, `/types`.
  - Crear componente modular `Button.tsx` y `SectionTitle.tsx`.
- [x] **Tarea 2.5: Dependencias de Animación**
  - Instalar `framer-motion` y verificar tipados.
  - Registrar la dependencia en `ARCHITECTURE_MAP.md`.

## Fase 2: Componentes Estáticos y Splash Screen
- [x] **Tarea 3: Layout y Navegación Base**
  - Crear `Navbar.tsx` responsive (con menú móvil limpio).
  - Crear `Footer.tsx` con información institucional de la Parroquia Nuestra Señora de la Asunción.
- [x] **Tarea 3.5: Splash Screen Animado (Cruz Redentorista -> "T")**
  - Crear componente `BrandLoader.tsx` usando `framer-motion`.
  - **Especificación visual:** Dibujar en vectores (SVG o bloques con CSS) la silueta geométrica de la **Cruz Redentorista** (líneas sobrias, proporciones firmes).
  - **Animación secuencial:** 
    1. Entrada suave de la Cruz Redentorista en el centro de la pantalla.
    2. Transformación fluida donde el travesaño horizontal se desplaza y reposiciona para formar la letra **"T"**.
    3. Fade-in sincronizado del texto restante: **"CRIS[T]O REDENTOR"** (fundiendo la "T" animada con el resto de la tipografía moderna).
  - Integrar en `app/layout.tsx` con lógica de auto-desmontaje tras completar la carga/animación (aprox. 2.5 a 3 segundos).
- [x] **Tarea 4: Hero Section**
  - Maquetar sección principal de alto impacto visual.
  - Integrar botones de acción (*Call to Action*): "Ver Novedades" y "Cómo Ayudar".
- [x] **Tarea 5: Sección de Objetivos y Pilares**
  - Maquetar grid responsive de 3 columnas (Espiritualidad, Comunidad, Acción Social).
  - Integrar iconos representativos de `lucide-react`.

## Fase 3: Módulos Dinámicos y Datos
- [x] **Tarea 6: Estructura de Datos Centralizada**
  - Crear interfaces TypeScript en `/types/content.ts`.
  - Crear mock data tipada en `/data/content.ts` (Novedades de retiros e Insumos para recorridas).
- [x] **Tarea 7: Módulo de Novedades**
  - Crear componente `NewsGrid.tsx` que consuma `/data/content.ts`.
  - Diseñar tarjetas limpias con etiquetas de categoría y fecha.
- [x] **Tarea 8: Módulo de Ayuda y Donaciones**
  - Crear componente `Donations.tsx` con listado visual de insumos urgentes.
  - Implementar lógica interactiva para copiar CBU/Alias al portapapeles con cambio de estado visual (feedback "¡Copiado!").

## Fase 4: Auditoría y Cierre
- [x] **Tarea 9: Revisión Final de UI/UX, Tipado y Despliegue**
  - Ejecutar `npm run lint` y solucionar cualquier warning/error de TypeScript.
  - Verificar espaciado (padding/margin) en vistas móviles (360px).
  - Confirmar build final exitoso con `npm run build`.