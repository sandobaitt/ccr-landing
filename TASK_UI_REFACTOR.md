# Refactorización UI y Copywriting: Transición a Tema Claro y Tono Juvenil

> **Protocolo:** No modificar lógica de componentes, hooks, interfaces ni enrutamiento. Alterar exclusivamente clases de Tailwind, `globals.css`, variables de fuentes y literales de texto (cadenas).

## Fase 1: Variables Globales y Tipografía
- [x] **Tarea 1: Reconfiguración de Paleta de Colores**
  - Modificar variables en `tailwind.config.ts` o `globals.css`.
  - Reemplazar fondos oscuros base por paleta clara/pastel cálida.
  - Definir colores de acento vibrantes y alegres.
- [x] **Tarea 2: Actualización Tipográfica**
  - Modificar importaciones en `app/layout.tsx`.
  - Configurar nueva combinación tipográfica seleccionada.
  - Ajustar tracking y pesos para maximizar legibilidad en tema claro.

## Fase 2: Adaptación de Componentes Estructurales
- [x] **Tarea 3: Inversión de Contrastes en UI General**
  - Actualizar clases de texto a tonos oscuros (`text-zinc-900`/`text-zinc-800`).
  - Modificar fondos de tarjetas a colores puros o pasteles con sombras suaves (`bg-white shadow-md`).
  - Actualizar estados `hover` de botones y enlaces.
- [x] **Tarea 4: Refactorización de Animaciones (BrandLoader)**
  - Modificar `components/BrandLoader.tsx`.
  - Cambiar fondo del contenedor animado a tono claro.
  - Invertir colores de trazo (`stroke`) y relleno (`fill`) en el SVG.

## Fase 3: Refactorización de Copywriting (Tono Juvenil)
- [x] **Tarea 5: Reescritura de Textos Estáticos**
  - Modificar literales de texto en `Hero Section`, `Call to Actions` y modales.
  - Implementar tono cercano, empático, enérgico y pastoral (ej. "¡Sumate!", "Viví la experiencia", "Hagamos lío").
  - Eliminar lenguaje excesivamente institucional o rígido.
- [x] **Tarea 6: Actualización de Datos Estáticos (`/data/content.ts`)**
  - Reescribir las descripciones de los retiros, acción social y FAQ.
  - Adaptar las biografías de los Santos Redentoristas a un lenguaje inspiracional y dinámico para jóvenes.
  - Preservar estrictamente las interfaces y claves del JSON/objetos exportados.

## Fase 4: Verificación Técnica
- [x] **Tarea 7: Auditoría Final y Compilación**
  - Ejecutar `npm run lint` para verificar errores.
  - Ejecutar `npm run build` confirmando estabilidad.