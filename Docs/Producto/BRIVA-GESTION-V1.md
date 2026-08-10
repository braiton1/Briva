# Briva Gestión — Plan de versión 1

## Objetivo

Validar que Briva puede ayudar a un gimnasio pequeño a administrar su operación diaria sin utilizar planillas separadas ni tocar código.

La V1 debe ser una demostración completa y coherente, preparada para enseñársela a un posible cliente y aprender de sus comentarios.

## Usuario objetivo

Un gimnasio pequeño con:

- una persona dueña;
- una o más personas en recepción;
- socios con diferentes planes;
- cobros mensuales;
- clases con cupos;
- necesidad de registrar asistencias.

## Incluido en la V1

### Acceso y seguridad

- Inicio y cierre de sesión.
- Separación de información por negocio.
- Roles de dueño y recepción.
- Métricas financieras visibles solamente para el dueño.

### Socios

- Crear socios.
- Buscar por nombre, teléfono o correo.
- Filtrar por membresía y estado del pago.
- Consultar y editar la ficha.
- Suspender y reactivar una membresía.
- Consultar historial de pagos y asistencias.

### Pagos

- Registrar un pago.
- Actualizar el próximo vencimiento.
- Generar un comprobante interno.
- Guardar importe, medio de pago, fecha y operador.
- Consultar movimientos recientes.

### Clases y asistencias

- Consultar clases y cupos.
- Reservar un cupo.
- Registrar la asistencia de un socio.
- Impedir asistencias con membresía suspendida.

### Calidad

- Diseño adaptable a computadora y celular.
- Estados vacíos, mensajes de error y confirmaciones.
- Pruebas documentadas de los recorridos críticos.
- Datos de demostración separados de los datos de prueba.

## Fuera de la V1

- Envíos automáticos por WhatsApp o correo.
- Pagos online y facturación fiscal.
- Aplicación móvil nativa.
- Estadísticas predictivas o sugerencias automáticas.
- Promociones automáticas.
- Edición de imágenes.
- Integración con Mercado Libre.
- Personalización completa para múltiples rubros.
- Recuperación automática de contraseña.

Estos puntos no están descartados. Permanecen fuera para evitar construir funciones antes de comprobar que un cliente las necesita.

## Criterio de finalización

La V1 se considera terminada cuando:

- todos los tickets marcados para V1 están en `Terminado`;
- los recorridos críticos pasan sus pruebas;
- no existen errores que bloqueen el trabajo diario;
- la versión funciona en computadora y celular;
- puede demostrarse desde el inicio de sesión hasta el registro de un pago y una asistencia;
- las limitaciones conocidas están documentadas.

## Próximo hito

Completar y probar la relación entre socios, clases y reservas. Después se realizará una revisión integral de la V1 antes de agregar nuevas funciones.
