# Briva Gestión

Aplicación local multiempresa para probar distintos negocios y permisos desde un único acceso.

## Iniciar la aplicación

Desde esta carpeta:

```bash
npm run build
npm start
```

Después abrir:

```text
http://127.0.0.1:5190
```

## Cuentas de demostración

### Dueño de NÚCLEO

- Usuario: `owner@nucleo.demo`
- Contraseña: `NucleoDemo2026!`
- Puede ver socios, clases, pagos y estadísticas financieras.

### Recepción de NÚCLEO

- Usuario: `recepcion@nucleo.demo`
- Contraseña: `RecepcionDemo2026!`
- Puede ver socios, clases y pagos. No recibe estadísticas financieras.

## Gestión de socios

Cada socio tiene una ficha propia desde la que el personal autorizado puede:

- consultar su plan, estado y próximo vencimiento;
- editar sus datos de contacto y el plan contratado;
- registrar asistencias;
- suspender o reactivar la membresía;
- revisar el historial de pagos y asistencias.

Toda la información queda separada por negocio. Un usuario de otro comercio no puede consultar ni modificar los socios de NÚCLEO.

El directorio, los filtros, la ficha y los tipos de datos están agrupados en `src/modules/members`. La aplicación principal se conecta al módulo mediante funciones, por lo que puede reutilizarse o retirarse sin reconstruir el resto del panel.

### Dueño de Moto Central

- Usuario: `owner@motocentral.demo`
- Contraseña: `MotosDemo2026!`
- Accede solamente al inventario y las métricas de Moto Central.

## Información importante

- La base de datos local se guarda en `.data/briva-gestion.sqlite`.
- Los pagos generan un historial con importe, medio de pago, operador, próximo vencimiento y comprobante interno.
- `.data/` está ignorada por Git para no publicar información privada.
- Las contraseñas están almacenadas mediante `scrypt` con un salt único.
- Las sesiones se guardan en el servidor y se identifican mediante una cookie `HttpOnly`.
- Esta es una base local funcional, no una versión lista para recibir información real de clientes en Internet.
