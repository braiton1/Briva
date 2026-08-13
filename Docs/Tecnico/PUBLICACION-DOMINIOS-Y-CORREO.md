# Publicación, dominios y correo profesional

Este documento define el procedimiento inicial de Briva para publicar su propia web y, más adelante, las páginas de clientes.

## Estado actual de Briva

Actualizado el 13 de agosto de 2026.

- `briva.com.ar` está registrado en NIC Argentina y pertenece a Braian.
- El dominio fue agregado a Cloudflare con el plan Free.
- Los servidores DNS de Cloudflare fueron cargados en NIC Argentina.
- Cloudflare está activo y administra el DNS del dominio.
- El registro TXT solicitado por Google Workspace fue agregado a Cloudflare.
- Google Workspace Business Starter verificó el dominio y Gmail está activo.
- Existe un solo usuario pago, `braian@briva.com.ar`; `contacto@briva.com.ar` se utiliza como alias.
- El envío y la recepción del usuario principal y del alias fueron probados correctamente.
- SPF está configurado y confirmado en Cloudflare, sin registros SPF duplicados.
- Están pendientes DKIM y DMARC.
- La web todavía no fue publicada en Cloudflare Pages.

## Próximos pasos para Briva

1. Configurar DKIM cuando Google lo permita.
2. Configurar DMARC gradualmente después de comprobar SPF y DKIM.
6. Conectar el repositorio `braiton1/Briva` a Cloudflare Pages.
7. Publicar desde la carpeta `frontend` usando:
   - rama actual del repositorio: `main`;
   - comando: `npm run build:publish`;
   - salida: `dist`.
8. Conectar `briva.com.ar` y `www.briva.com.ar` a la publicación.
9. Implementar el flujo acordado `Master → Release Env → Prod` sin cambiar ramas antes de diseñar la promoción a producción.
10. Realizar un cambio visual pequeño en Release Env, revisarlo y promover exactamente la versión aprobada a Prod.

## Modelo de ambientes acordado

Briva utilizará los nombres conocidos por Braian en su trabajo:

```text
feature/* → Master → Release Env → Prod
```

Los términos no significan exactamente lo mismo:

- **Master:** código integrado y candidato a revisión. En el repositorio la rama todavía se llama `main`; no fue renombrada.
- **Release Env:** sitio online donde Braian o el cliente revisan cambios antes de publicarlos.
- **Prod:** sitio público y estable que ven los visitantes.

La intención es que un cambio en Master actualice Release Env, pero no Prod. La publicación en Prod debe ser deliberada y utilizar el mismo commit exacto que fue aprobado en Release Env. Las versiones publicadas se identificarán con etiquetas como `v1.0.0`.

No se crearán tres ramas permanentes únicamente para imitar los nombres de los ambientes. Eso aumenta el riesgo de diferencias y conflictos entre ramas. Primero se definirá en Cloudflare Pages cómo promover una versión ya probada sin reconstruir código distinto.

### URLs de Briva

```text
release.briva.com.ar → Release Env
briva.com.ar         → Prod
```

### Flujo de un cambio

```text
Ticket
→ feature/nombre-del-cambio
→ revisión técnica
→ Master
→ Release Env
→ QA y aprobación
→ etiqueta de versión
→ Prod
```

## Release Env para clientes

Cada cliente podrá revisar su sitio en una dirección de Briva antes de conectarlo a su dominio real.

Ejemplos:

```text
nucleo.release.briva.com.ar
miga.release.briva.com.ar
lumina.release.briva.com.ar
```

Estos subdominios no requieren comprar dominios adicionales. Briva controla el ambiente de revisión y el cliente conserva la titularidad de su dominio de producción.

El recorrido será:

```text
feature/*
→ Master
→ cliente.release.briva.com.ar
→ QA y aprobación del cliente
→ versión aprobada
→ dominio real del cliente
```

Release Env es temporal y no reemplaza la web pública. Debe evitarse su indexación mediante `noindex, nofollow`. Cuando haya información sensible, una URL difícil de adivinar no será suficiente: se utilizará protección con contraseña, Cloudflare Access o acceso limitado por correo.

## Qué necesita una landing de un cliente

### Obligatorio

- Código de la página aprobado.
- Dominio registrado.
- Titular del dominio identificado.
- Servicio de publicación configurado.
- DNS conectado al servicio de publicación.
- HTTPS activo.
- Dominio principal y `www` probados.
- Formulario, WhatsApp y enlaces revisados.
- Procedimiento de renovación definido.

### Opcional

- Correo profesional con dominio propio.
- Google Workspace u otro proveedor de correo.
- Release Env con subdominio propio y control de acceso.
- Métricas, formularios avanzados o integraciones.
- Base de datos y servicios de servidor.

Una landing puede publicarse sin Google Workspace. El correo profesional es un servicio adicional con costo y soporte propios.

## Responsabilidad sobre el dominio

Regla recomendada: el cliente debe ser el titular legal de su dominio.

Briva puede administrar la configuración técnica y recordar la renovación, pero el nombre debe permanecer bajo control del cliente. Esto evita conflictos si el servicio termina y permite entregar la administración de forma clara.

Antes de publicar se debe registrar:

- titular del dominio;
- fecha de alta y vencimiento;
- responsable de pagar la renovación;
- cuenta donde está registrado;
- proveedor DNS;
- persona autorizada para realizar cambios;
- procedimiento de entrega si finaliza el servicio.

Nunca se deben guardar contraseñas, códigos de verificación, tokens ni claves fiscales en Git o en esta documentación.

## Modalidades comerciales posibles

### Briva administra la parte técnica

- El dominio permanece a nombre del cliente.
- Briva configura DNS, publicación y renovaciones.
- El costo puede incluirse en la cuota acordada.
- El cliente recibe información clara sobre vencimientos y titularidad.

### El cliente administra el dominio

- El cliente registra y paga el dominio directamente.
- Otorga a Briva acceso técnico temporal o la autorización necesaria.
- Briva configura la publicación y luego documenta lo realizado.

Para pequeños negocios, la primera modalidad puede resultar más simple, pero debe quedar respaldada por condiciones de servicio claras.

## Correo profesional

El correo profesional no forma parte automática de una landing.

Si un cliente lo solicita:

- se cotiza la configuración inicial;
- la licencia mensual del proveedor queda identificada por separado;
- se define quién administra usuarios, contraseñas y recuperación;
- se evita crear usuarios innecesarios que generen licencias adicionales;
- cuando sea posible se utilizan alias para direcciones como `contacto@`, `hola@` o `presupuestos@`.

Briva no debería absorber indefinidamente el costo de Google Workspace dentro de un mantenimiento básico.

## Flujo repetible para clientes

```text
Relevamiento
→ diseño y desarrollo
→ publicación de prueba
→ aprobación del cliente
→ registro o acceso al dominio
→ configuración DNS
→ publicación en producción
→ QA con la URL real
→ entrega y mantenimiento
```

## Finalización del servicio

Las condiciones comerciales deben aclarar:

- qué ocurre con la web si se interrumpe el mantenimiento;
- quién conserva el dominio;
- qué archivos se entregan;
- cuánto tiempo se conserva una copia;
- qué servicios externos debe continuar pagando el cliente;
- cómo se transfieren DNS y accesos técnicos.

El dominio del cliente no debe retenerse como mecanismo para exigir pagos. Las deudas comerciales y la titularidad digital deben tratarse por separado.

## Lista de control de publicación

- [ ] Dominio registrado y titular confirmado.
- [ ] Fecha de renovación registrada.
- [ ] DNS configurado.
- [ ] Publicación de prueba aprobada.
- [ ] Producción conectada.
- [ ] HTTPS activo.
- [ ] Dominio principal probado.
- [ ] `www` probado.
- [ ] Celular y computadora revisados.
- [ ] Formulario y WhatsApp probados.
- [ ] Correo probado, si fue contratado.
- [ ] Accesos y responsabilidades documentados.
- [ ] Procedimiento de actualización definido.
