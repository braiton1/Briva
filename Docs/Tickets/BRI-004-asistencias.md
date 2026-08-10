# BRI-004 — Registro básico de asistencias

- Estado: Terminado
- Prioridad: P1
- Versión: V1
- Módulo: Asistencias
- Tipo: Función

## Problema

Recepción necesita dejar constancia de la entrada de un socio y evitar el acceso con una membresía suspendida.

## Resultado implementado

La ficha permite registrar una asistencia con fecha, hora y operador. Las membresías suspendidas son rechazadas por el servidor.

## Criterios de aceptación

- [x] Registra asistencia para una membresía activa.
- [x] Guarda quién realizó la operación.
- [x] Muestra el historial en la ficha.
- [x] Rechaza una membresía suspendida.

## Pruebas

- `ASI-001` y `ASI-002` aprobados mediante API.

## Implementación

- Archivos principales: `platform/server.mjs`, `platform/src/modules/members/MemberProfile.tsx`.
- Commit: se asociará al guardar el bloque actual de trabajo.
