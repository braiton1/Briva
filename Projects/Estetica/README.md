# Lúmina Estudio — Demo conceptual

## Propósito

Crear una landing profesional para un pequeño centro de estética que necesita presentar sus servicios y recibir reservas por WhatsApp.

El proyecto forma parte del portfolio conceptual de Briva. Los nombres, precios, testimonios y datos comerciales son ficticios.

## Negocio

- Nombre: Lúmina Estudio.
- Responsable conceptual: Sofía.
- Rubro: estética facial, cejas y pestañas.
- Ubicación conceptual: Godoy Cruz, Mendoza.
- Tamaño: emprendimiento atendido por su dueña y una colaboradora.
- Modalidad: atención únicamente con turno.
- Público principal: mujeres de 20 a 50 años.

## Propuesta de valor

Atención cálida, profesional y personalizada, con tratamientos pensados para cuidar y resaltar la belleza natural.

Frase principal:

> Un momento para vos, con tratamientos pensados para cuidar y resaltar tu belleza natural.

## Objetivo de conversión

La acción principal será `Reservar turno por WhatsApp`.

Mensaje sugerido:

> Hola, vi la página de Lúmina Estudio y quiero consultar por un turno para [servicio].

El número será configurable y se definirá antes de publicar la demo. No se utilizarán datos personales sin autorización.

## Servicios y precios ilustrativos

| Servicio | Precio desde |
| --- | ---: |
| Limpieza facial profunda | $24.000 |
| Dermaplaning | $26.000 |
| Diseño y perfilado de cejas | $10.000 |
| Lifting de pestañas | $18.000 |
| Combo mirada: cejas y pestañas | $26.000 |

Los precios son ficticios, pero toman como referencia valores publicados por centros de Godoy Cruz y Mendoza. Deberán mostrarse como ilustrativos dentro de la demo.

## Información operativa

- Lunes a viernes: 9:00 a 19:00.
- Sábados: 9:00 a 14:00.
- Medios de pago: efectivo, transferencia y tarjetas.
- Cancelaciones: aviso mínimo de 24 horas.

## Secciones de la landing

1. Header y navegación.
2. Hero con propuesta principal y reserva.
3. Servicios y precios.
4. Motivos para elegir Lúmina.
5. Galería o resultados.
6. Proceso de atención.
7. Testimonios conceptuales.
8. Preguntas frecuentes.
9. Ubicación y horarios.
10. Contacto y reserva por WhatsApp.
11. Footer.

## Dirección visual

- Estilo cálido, moderno, natural y femenino.
- Fondos marfil y arena.
- Verde oliva suave o terracota como acento.
- Texto marrón oscuro.
- Fotografías luminosas con piel y texturas naturales.
- Tipografía elegante para títulos y sencilla para lectura.
- Bordes suaves, composición limpia y bastante espacio.

## Criterios de diseño

- No utilizar rosa fuerte como recurso principal.
- Evitar una apariencia clínica o excesivamente lujosa.
- Priorizar confianza, cercanía y claridad.
- El botón de reserva debe permanecer visible durante el recorrido.
- Diseñar primero computadora y celular antes de implementar.

## Tickets relacionados

- `EST-001`: definición del negocio, marca y contenido.
- `EST-002`: diseño UI responsive.
- `EST-003`: implementación.
- `EST-004`: QA, SEO y publicación.

## Arquitectura implementada

La landing está desarrollada en React y organizada en componentes por sección:

```text
src/
├── components/
│   ├── About.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Location.tsx
│   ├── Process.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── data/
│   └── siteContent.ts
├── App.tsx
└── App.css
```

`App.tsx` compone la página, los componentes definen la presentación y `siteContent.ts` centraliza la información editable del negocio. Esta separación permite adaptar la estructura a otros proyectos que trabajen con servicios y turnos.
