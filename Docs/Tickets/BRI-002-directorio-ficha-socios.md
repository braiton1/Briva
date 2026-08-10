# BRI-002 — Directorio y ficha editable de socios

- Estado: Terminado
- Prioridad: P1
- Versión: V1
- Módulo: Socios
- Tipo: Función y UX

## Problema

Recepción necesita encontrar rápidamente a una persona, consultar su situación y modificar sus datos sin tocar código.

## Resultado implementado

Se creó un módulo reutilizable con directorio, búsqueda, filtros y ficha editable. Permite consultar membresía, pago, asistencias e historial.

## Criterios de aceptación

- [x] Busca por nombre, correo o teléfono.
- [x] Filtra membresía y estado del pago.
- [x] La ficha abre con campos editables.
- [x] Guardar persiste los cambios.
- [x] Permite suspender y reactivar.
- [x] Funciona en computadora y celular.

## Decisión de UX

`Docs/UX/UX-001-edicion-ficha-socio.md`.

## Pruebas

- `SOC-001` a `SOC-004` y `RES-001`.
- Búsqueda, apertura y edición verificadas en navegador local.

## Implementación

- Archivos principales: `platform/src/modules/members/`.
- Commit: se asociará al guardar el bloque actual de trabajo.
