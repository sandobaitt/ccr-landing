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
  - Integrar en `app/layout.tsx` con lógica de auto-desmontaje tras completar la carga/animación.
- [x] **Tarea 4: Hero Section**
  - Maquetar sección principal de alto impacto visual.
- [x] **Tarea 5: Sección de Objetivos y Pilares**
  - Maquetar grid responsive de 3 columnas (Espiritualidad, Comunidad, Acción Social).

## Fase 3: Módulos Dinámicos y Datos Base
- [x] **Tarea 6: Estructura de Datos Centralizada**
  - Crear interfaces TypeScript en `/types/content.ts`.
  - Crear mock data tipada en `/data/content.ts`.
- [x] **Tarea 7: Módulo de Novedades**
  - Crear componente `NewsGrid.tsx` que consuma `/data/content.ts`.
- [x] **Tarea 8: Módulo de Ayuda y Donaciones**
  - Crear componente `Donations.tsx` con listado visual de insumos urgentes.

## Fase 4: Auditoría Base
- [x] **Tarea 9: Revisión Final de UI/UX, Tipado y Despliegue Inicial**
  - Confirmar build final exitoso con `npm run build`.

## Fase 5: Expansión del Núcleo Operativo (Prioridad 1)
- [x] **Tarea 10: Actualización del Modelo de Datos para Inscripciones y Retiros**
  - Modificar `/types/content.ts` y `/data/content.ts` para agregar la estructura del próximo retiro (ej. `CCR 32`), incluyendo: estado de inscripción (`open: boolean`), fecha objetivo para el contador, enlace de Google Forms, requisitos y edad mínima.
- [x] **Tarea 11: Actualización del Hero Section con Lógica Condicional**
  - Modificar la `Hero Section` para que el botón directo de **"Inscribirse al próximo retiro"** evalúe el estado `open`. Si está en `false`, debe renderizarse visualmente deshabilitado con un tooltip o texto aclaratorio (ej. *"Inscripciones próximamente"*).
- [x] **Tarea 12: Módulo del Próximo Retiro (CCR 32) y Cuenta Regresiva**
  - Crear componente `NextRetreat.tsx` con un temporizador (`Countdown`) elegante que muestre días, horas y minutos restantes para el retiro.
  - Renderizar los datos clave del CCR 32 y el botón de Google Forms con la misma lógica de deshabilitado condicional.
- [x] **Tarea 13: Refactorización y Mejora UI del Módulo de Acción Social (Recorridas Nocturnas)**
  - Optimizar el componente existente de recorridas de los miércoles en plazas, Hospital Perrando y Pediátrico.
  - Diseñar un listado interactivo e intuitivo de insumos urgentes con iconos de `lucide-react` muy reconocibles para cada ítem (abrigo, café, mantas, alimentos).
  - Verificar que el botón de **"Copiar CBU/Alias"** mantenga un feedback visual instantáneo (*"¡Copiado!"*).
- [x] **Tarea 14: Actualización del Footer Institucional**
  - Asegurar que `Footer.tsx` contenga la dirección y horarios exactos de secretaría de la Parroquia Nuestra Señora de la Asunción y enlaces directos al Instagram oficial.
- [x] **Tarea 14.5: Ocultar Donaciones Monetarias y Añadir Contactos de Coordinadores**
  - Comentar por seguridad toda lógica de `DonationInfo` (Alias/CBU) en `/data/content.ts` y `/types/content.ts`.
  - Ocultar bloque monetario en `Donations.tsx`.
  - Crear estructura `CoordinatorInfo` e integrar listado visual de coordinadores con enlaces directos de WhatsApp a modo de reemplazo.

## Fase 6: Identidad Carismática y Comunidades Post-Retiro (Prioridad 2)
- [ ] **Tarea 15: Datos y Estructura para Santos Redentoristas y Comunidades**
  - Ampliar `/types/content.ts` y `/data/content.ts` sumando biografías de Santos Redentoristas y la estructura de comunidades de perseverancia.
- [ ] **Tarea 16: Sección "Nuestras Raíces: Santos Redentoristas" con Modal Interactivo**
  - Crear componente `SaintsGrid.tsx` con tarjetas para San Alfonso María de Ligorio, San Gerardo Majella, San Clemente Hofbauer y Beato Pedro Donders.
  - Implementar un **Modal flotante** (usando `framer-motion`) que se abra al hacer clic en un santo, mostrando su biografía completa y su conexión con el carisma del retiro y las recorridas.
- [ ] **Tarea 17: Expansión del Módulo "Pilares del CCR y Post-Retiro"**
  - Actualizar la sección de pilares integrando las etapas: Pre-retiro, Retiro y Post-retiro.
  - Agregar dentro de Post-retiro las comunidades de perseverancia: **Ministerio de Música Shesma**, las **3 Comisiones juveniles de servicio** y un bloque extensible para futuras actividades parroquiales.

## Fase 7: Auditoría Final de Expansión
- [ ] **Tarea 18: Verificación General, Accesibilidad y Build de Expansión**
  - Ejecutar `npm run lint` resolviendo cualquier error estricto de TypeScript en los nuevos modales y temporizadores.
  - Probar vistas en dispositivos móviles (360px).
  - Confirmar build de producción exitoso con `npm run build`.