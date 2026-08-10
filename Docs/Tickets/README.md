# Sistema de tickets de Briva

Un ticket representa un cambio concreto que se puede comprender, implementar y probar de manera independiente.

## Estados

- `To Do`: trabajo pendiente y priorizado.
- `Dev in Progress`: se está implementando.
- `QA`: implementación terminada y en pruebas.
- `Ready to Release`: aprobada y lista para publicar.
- `Released`: publicada y disponible.
- `Bloqueado`: necesita una decisión o recurso externo.

## Prioridades

- `P0`: bloquea el funcionamiento o compromete datos.
- `P1`: necesaria para la versión actual.
- `P2`: importante, pero puede esperar.
- `P3`: mejora opcional.

## Flujo de trabajo

1. Definir el problema y el resultado esperado.
2. Acordar los criterios de aceptación.
3. Registrar decisiones de UX cuando corresponda.
4. Implementar el cambio.
5. Ejecutar y documentar las pruebas.
6. Asociar el commit de Git.
7. Mover el ticket a `Ready to Release`.
8. Publicar y moverlo a `Released`.

## Nomenclatura

Los tickets de GitHub comienzan con el producto: `[Briva Landing]`, `[NÚCLEO Landing]` o `[Briva Management]`.

Los tickets técnicos de Management también conservan el identificador `BRI-000` para coincidir con los documentos locales.

El [board de GitHub](https://github.com/users/braiton1/projects/1/views/1) muestra el estado oficial. Los documentos locales conservan el detalle y la evidencia.
