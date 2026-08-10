# Módulo de socios

Este módulo contiene las piezas reutilizables para administrar personas asociadas a un negocio.

## Incluye

- directorio con búsqueda y filtros;
- ficha editable;
- estado de membresía;
- historial de pagos;
- registro e historial de asistencias;
- tipos de datos compartidos.

## Conexión con una aplicación

El módulo no decide dónde se guardan los datos. Recibe información y funciones mediante propiedades como `onSave`, `onAttendance` y `onChangeState`.

Esto permite conectarlo con una base local, una API remota o un sistema diferente sin reescribir sus pantallas.
