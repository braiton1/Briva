# Herramientas y flujo de trabajo de Briva

## Herramientas oficiales

### Código y versiones

- Repositorio: `https://github.com/braiton1/Briva`
- Git conserva el historial del código.
- Cada implementación debe relacionarse con un ticket.

### Tickets y planificación

- Herramienta elegida: GitHub Issues y GitHub Projects.
- Estado de conexión: instalada con acceso de lectura; pendiente habilitar escritura para crear Issues desde Codex.
- Proyecto: [Briva Gestión — V1](https://github.com/users/braiton1/projects/1/views/1).
- Vista principal: `Board`.
- Columnas: `To Do`, `Dev in Progress`, `QA`, `Ready to Release` y `Released`.

### Diseño y experiencia

- Herramienta: Figma.
- Archivo: [Briva Gestión — Producto V1](https://www.figma.com/design/QuCMegk6AvcRKphjfJD4xh)
- Plan actual: Starter, con un máximo de tres páginas por archivo.
- Organización elegida:
  - `00 — Inicio`;
  - `01 — Sistema visual`;
  - `02 — Producto V1`, organizado internamente mediante secciones.

### Documentación

- Producto: `Docs/Producto/`.
- Tickets locales y plantillas: `Docs/Tickets/`.
- Decisiones UX: `Docs/UX/`.
- Estrategia y evidencia de pruebas: `Docs/Pruebas/`.
- Arquitectura y ambientes: `Docs/Tecnico/`.

## Flujo de una función

1. Registrar la necesidad como Issue.
2. Definir alcance y criterios de aceptación.
3. Crear o actualizar el diseño en Figma cuando afecte la interfaz.
4. Documentar decisiones de UX relevantes.
5. Implementar el cambio en una rama o bloque de trabajo identificable.
6. Ejecutar pruebas automáticas y manuales.
7. Vincular el commit o pull request con el Issue.
8. Registrar evidencia, aprobar la entrega y mover el ticket a `Released`.

## Enlaces obligatorios

Un ticket de interfaz debe contener:

- enlace al frame específico de Figma;
- enlace o referencia a la decisión UX;
- casos de prueba relacionados;
- commit o pull request de implementación.

Una pantalla de Figma preparada para desarrollo debe indicar:

- número del ticket;
- estado del diseño;
- versión del producto;
- comportamiento en computadora y celular;
- estados normales, vacíos y de error.

## Principio

GitHub dice qué se construye. Figma muestra cómo se comporta y se ve. La documentación explica por qué. Las pruebas demuestran que funciona.
