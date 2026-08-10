# Matriz de pruebas — Briva Gestión V1

| ID | Área | Caso | Resultado esperado | Estado |
|---|---|---|---|---|
| AUT-001 | Acceso | Ingresar con credenciales válidas | Abre el negocio y rol correctos | Manual aprobado |
| AUT-002 | Acceso | Ingresar con contraseña incorrecta | Informa el error y no crea sesión | Pendiente de automatizar |
| AUT-003 | Permisos | Recepción abre el panel | No muestra métricas financieras | Manual aprobado |
| TEN-001 | Seguridad | Usuario de otro negocio consulta un socio | No accede a información ajena | Pendiente de automatizar |
| SOC-001 | Socios | Crear socio con datos válidos | Aparece en el directorio | Manual aprobado |
| SOC-002 | Socios | Buscar por nombre, correo o teléfono | Muestra solamente coincidencias | Automatización de navegador aprobada |
| SOC-003 | Socios | Editar y guardar datos | Persiste después de recargar | Automatización de navegador aprobada |
| SOC-004 | Socios | Suspender membresía | Muestra estado suspendido | Prueba de API aprobada |
| PAG-001 | Pagos | Registrar pago válido | Actualiza vencimiento y genera comprobante | Prueba de API aprobada |
| PAG-002 | Pagos | Enviar importe inválido | Rechaza la operación sin modificar datos | Pendiente de automatizar |
| ASI-001 | Asistencia | Registrar asistencia activa | Guarda fecha y operador | Prueba de API aprobada |
| ASI-002 | Asistencia | Registrar asistencia suspendida | Rechaza la operación | Prueba de API aprobada |
| CLS-001 | Clases | Reservar un cupo disponible | Asocia socio y clase | Pendiente de implementar |
| CLS-002 | Clases | Reservar sin cupo | Rechaza la reserva | Pendiente de implementar |
| CLS-003 | Clases | Reservar socio suspendido | Rechaza la reserva | Pendiente de implementar |
| CLS-004 | Clases | Duplicar reserva | Rechaza el duplicado | Pendiente de implementar |
| CLS-005 | Clases | Cancelar reserva | Libera el cupo | Pendiente de implementar |
| CLS-006 | Clases | Consultar ficha | Muestra próximas clases | Pendiente de implementar |
| RES-001 | Responsive | Usar recorridos críticos en celular | No hay desbordes ni controles inaccesibles | Manual parcial |
