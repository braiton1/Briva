# BRI-003 — Registro e historial de pagos

- Estado: Terminado
- Prioridad: P1
- Versión: V1
- Módulo: Pagos
- Tipo: Función

## Problema

El gimnasio necesita registrar cobros, saber quién los ingresó y calcular el próximo vencimiento.

## Resultado implementado

Los pagos guardan socio, importe, medio, fecha, operador, próximo vencimiento y comprobante interno. La operación actualiza la cuenta del socio de manera atómica.

## Criterios de aceptación

- [x] Registra importes y medios válidos.
- [x] Actualiza el próximo vencimiento.
- [x] Genera comprobante interno.
- [x] Registra el operador.
- [x] Muestra historial reciente y detalle por socio.

## Pruebas

- `PAG-001` aprobado mediante API.
- `PAG-002` pendiente de automatizar en BRI-007.

## Implementación

- Archivos principales: `platform/server.mjs`, `platform/src/App.tsx`.
- Commit: revisar historial de Git anterior a la creación formal de tickets.
