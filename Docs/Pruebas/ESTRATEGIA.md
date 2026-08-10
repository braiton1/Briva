# Estrategia de pruebas de Briva Gestión

## Objetivo

Detectar errores antes de entregar cambios y proteger los recorridos que sostienen la operación del cliente.

No buscamos una cifra artificial de cobertura. Priorizamos que las funciones críticas estén verificadas en varios niveles.

## Niveles

### 1. Pruebas de lógica

Validan reglas pequeñas y rápidas, por ejemplo:

- cálculo del próximo vencimiento;
- filtros de socios;
- validación de estados;
- control de cupos.

### 2. Pruebas de API e integración

Validan servidor, permisos y base de datos:

- inicio de sesión;
- separación entre negocios;
- creación y edición de socios;
- pagos atómicos;
- suspensión y asistencias;
- reservas y cupos.

### 3. Pruebas de interfaz

Validan los recorridos desde la perspectiva del usuario:

- recepción busca un socio;
- edita la ficha;
- registra un pago;
- registra una asistencia;
- visualiza errores y confirmaciones.

### 4. Pruebas manuales exploratorias

Antes de una entrega se revisan computadora, celular, textos, estados vacíos y situaciones no previstas por las pruebas automáticas.

## Ambientes

- Desarrollo: datos ficticios que se pueden conservar durante el trabajo diario.
- Pruebas: base independiente que se crea y reinicia automáticamente.
- Producción: datos reales del cliente; nunca se utiliza para ejecutar pruebas destructivas.

## Definición de terminado

Un ticket se considera terminado cuando:

- cumple sus criterios de aceptación;
- tiene casos de prueba identificados;
- pasan compilación y análisis de código;
- pasan las pruebas automáticas relacionadas;
- se realiza validación visual si afecta la interfaz;
- se documentan riesgos o limitaciones conocidos.

## Evidencia

Cada ejecución debe registrar:

- fecha;
- versión o commit;
- ambiente;
- casos ejecutados;
- resultado;
- errores encontrados;
- responsable de la validación.
