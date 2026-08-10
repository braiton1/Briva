# BRI-001 — Acceso por negocio y roles

- Estado: Terminado
- Prioridad: P0
- Versión: V1
- Módulo: Autenticación
- Tipo: Función

## Problema

Cada persona debe acceder únicamente a su negocio y ver las herramientas permitidas por su rol.

## Resultado implementado

La aplicación permite iniciar sesión como dueño o recepción de NÚCLEO y como dueño de Moto Central. La sesión identifica usuario, negocio y rol. Recepción no visualiza información financiera.

## Criterios de aceptación

- [x] Credenciales válidas crean una sesión.
- [x] Credenciales inválidas son rechazadas.
- [x] Los datos se filtran por negocio.
- [x] Los permisos cambian según el rol.
- [x] La sesión utiliza una cookie no accesible desde JavaScript.

## Pruebas

- `AUT-001`, `AUT-002`, `AUT-003` y `TEN-001`.
- Validación manual aprobada; automatización completa pendiente en BRI-007.

## Implementación

- Archivos principales: `platform/server.mjs`, `platform/src/App.tsx`.
- Commit: revisar historial de Git anterior a la creación formal de tickets.
