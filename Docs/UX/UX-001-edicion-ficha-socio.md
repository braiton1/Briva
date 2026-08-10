# UX-001 — Edición directa de la ficha del socio

- Fecha: 2026-08-10
- Estado: Aceptada
- Ticket: BRI-002
- Pantalla o módulo: Socios

## Problema observado

El botón `Editar datos` activaba un modo de edición que no resultaba evidente. Aunque técnicamente los campos se habilitaban, la persona percibía que seguían bloqueados.

## Alternativas consideradas

1. Mantener un modo de lectura y destacar visualmente el modo de edición.
2. Mostrar los campos habilitados desde que se abre la ficha y utilizar un único botón para guardar.

## Decisión

La ficha abre con nombre, correo, teléfono y plan habilitados. El botón se llama `Guardar cambios` y la confirmación aparece solamente después de guardar.

La información de membresía se presenta en campos etiquetados, no en chips, para mantener un lenguaje visual consistente con el formulario.

## Motivo

Reduce pasos y hace evidente qué datos pueden modificarse. Es apropiado para una herramienta interna utilizada repetidamente por recepción.

## Validación

- Los campos están habilitados al abrir la ficha.
- No aparece un mensaje de éxito antes de guardar.
- El botón `Guardar cambios` persiste los datos.
- El comportamiento funciona en computadora y celular.

## Evidencia

Validación manual y automatizada en navegador local realizada durante la implementación de BRI-002.
