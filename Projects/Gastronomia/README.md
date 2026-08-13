# Miga — Demo conceptual

Landing y catálogo para una cafetería y panadería artesanal pequeña de Ciudad de Mendoza.

## Objetivo

Presentar la propuesta del local, mostrar productos con precios y permitir que una persona prepare un pedido para enviarlo por WhatsApp.

Los nombres, precios, testimonios, dirección y datos comerciales son ficticios. Los importes toman como referencia general valores publicados por comercios de Mendoza y se muestran únicamente con fines demostrativos.

## Propuesta

- Nombre: Miga.
- Rubro: cafetería y panadería artesanal.
- Ubicación conceptual: Quinta Sección, Ciudad de Mendoza.
- Conversión principal: armar un pedido y enviarlo por WhatsApp.
- Modalidad: consumo en el local o retiro.
- Personalidad: artesanal, cálida, alegre y de barrio.

## Catálogo inicial

- Medialuna de manteca.
- Pan de campo de masa madre.
- Torta húmeda de chocolate.
- Café con leche.
- Focaccia de estación.
- Merienda Miga.

## Arquitectura

El contenido editable vive en `src/data/siteContent.ts`. Las secciones y el catálogo están separados en componentes. El catálogo administra cantidades, total y generación del mensaje de WhatsApp sin necesitar una tienda online ni un panel administrativo.
