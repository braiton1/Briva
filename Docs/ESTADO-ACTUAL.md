# Estado actual y punto de reanudación

Este archivo permite retomar Briva en una conversación nueva sin depender del historial del chat. Debe actualizarse después de decisiones o avances importantes.

Última actualización: 13 de agosto de 2026.

## Objetivo actual

Publicar la landing de Briva como infraestructura real para aprender el proceso completo. Todavía no se utilizará para una campaña comercial.

## Situación de publicación

- Dominio oficial: `briva.com.ar`.
- Registrado en NIC Argentina a nombre de Braian.
- DNS administrado mediante Cloudflare Free.
- Nameservers de Cloudflare cargados en NIC Argentina.
- Estado observado: el dominio está activo en Cloudflare.
- Registro TXT de verificación de Google agregado en Cloudflare, sin guardar su valor en Git.
- Google Workspace Business Starter creado con un solo usuario.
- `briva.com.ar` fue verificado correctamente en Google Workspace.
- Gmail fue activado y el registro MX de Google fue agregado.
- Usuario principal: `braian@briva.com.ar`.
- `contacto@briva.com.ar` está configurado como alias gratuito del usuario principal, no como una segunda licencia.
- Se comprobó correctamente el envío y la recepción con `braian@briva.com.ar` y `contacto@briva.com.ar`.
- SPF está configurado y confirmado en Cloudflare, sin registros SPF duplicados.
- Siguen pendientes DKIM y, posteriormente, DMARC.
- Cloudflare Pages todavía no configurado.
- La web oficial todavía no está online en `briva.com.ar`.

## Próxima acción

1. Esperar entre 24 y 72 horas desde la activación y configurar DKIM desde Google Admin.
2. Configurar DMARC de manera gradual después de validar SPF y DKIM.
3. Crear el proyecto de Cloudflare Pages conectado a `braiton1/Briva`.

Configuración de construcción prevista:

```text
Root directory: frontend
Build command: npm run build:publish
Build output directory: dist
```

## Decisiones vigentes

- Flujo deseado: `feature/* → Master → Release Env → Prod`.
- La rama actual sigue llamándose `main`; todavía no fue renombrada ni reemplazada.
- Release de Briva: `release.briva.com.ar`.
- Producción de Briva: `briva.com.ar`.
- Los clientes podrán revisar en URLs como `cliente.release.briva.com.ar`.
- Release no debe indexarse y podrá protegerse con Cloudflare Access.
- El mismo commit aprobado en Release debe llegar a Prod.
- El dominio de cada cliente debe quedar legalmente a nombre del cliente.
- Google Workspace es opcional para clientes y no se incluye automáticamente en una landing básica.
- Briva puede administrar DNS y renovaciones, pero debe documentar responsabilidades y entregar el control si termina el servicio.
- No guardar contraseñas, claves fiscales, tokens ni códigos de verificación en el repositorio.

## Documentos que hay que leer al retomar

1. `AGENTS.md`: criterio crítico y forma de colaboración.
2. `Docs/ESTADO-ACTUAL.md`: situación y próxima acción.
3. `Docs/Tecnico/PUBLICACION-DOMINIOS-Y-CORREO.md`: proceso completo de publicación y clientes.
4. `Docs/Producto/BRIVA-GESTION-V1.md`: alcance del producto de gestión.

## Cambios locales pendientes

La documentación de publicación y este punto de reanudación fueron creados localmente. Antes de cerrar definitivamente la sesión se debe revisar `git status` y decidir si se hace commit y push.
