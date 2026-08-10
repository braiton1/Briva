# Entornos y base de datos

## Respuesta corta

No es necesario descargar un servidor de base de datos para desarrollar o probar la V1.

Briva Gestión utiliza SQLite mediante Node.js. La información se guarda en un archivo local y la aplicación crea sus tablas automáticamente.

## Entornos propuestos

### Desarrollo

- Base: `platform/.data/briva-gestion.sqlite`.
- Contiene datos ficticios utilizados durante el trabajo diario.
- No se elimina automáticamente.

### Pruebas

- Base propuesta: `platform/.data/briva-test.sqlite`.
- Se crea con datos controlados antes de cada conjunto de pruebas.
- Se elimina o reinicia al terminar.
- Nunca comparte datos con desarrollo.

### Producción

Se definirá después de validar la V1 con un cliente. Para un producto multiusuario probablemente utilizaremos PostgreSQL administrado, copias de seguridad y migraciones controladas.

No conviene elegir ni pagar infraestructura de producción antes de conocer:

- cantidad de clientes;
- cantidad de usuarios simultáneos;
- volumen de información;
- requisitos de seguridad y respaldo;
- integraciones necesarias.

## Reglas de seguridad

- Nunca copiar datos reales de clientes al ambiente de pruebas.
- Utilizar nombres, teléfonos y correos ficticios.
- Mantener archivos `.sqlite` fuera de Git.
- Hacer respaldos antes de migraciones de producción.
- Ejecutar pruebas destructivas únicamente contra la base de pruebas.

## Ticket relacionado

`BRI-006` implementará la creación y limpieza automática de la base de pruebas.
