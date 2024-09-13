# Clients

## Historia de Usuario: **"Ver Menú"**

**Resumen**: Ver el menú del día (mañana, tarde, noche) incluyendo los platos del día.  
**Descripción**: Como cliente, quiero ver el menú del día en la aplicación para poder elegir qué pedir. El menú debe estar visible y actualizarse en tiempo real con los platos del día. La aplicación debe permitir seleccionar el número de acompañamientos.

### **Frontend (React)**

1. **Crear interfaz de menú en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Crear una página para mostrar el menú del día (mañana, tarde, noche) incluyendo los platos del día.
   - **Descripción**:
     - **Escenario**: Página del menú del día
       - **Given**: El usuario abre la aplicación y se encuentra en la página principal.
       - **When**: Selecciona la opción de "Menú del día".
       - **Then**: Se muestra una página dividida en secciones (mañana, tarde, noche) con los platos disponibles.
       - **And**: La página debe actualizarse automáticamente cuando se agreguen o modifiquen los platos.
   - **Dificultad**: 6
   - **Etiquetas**: UI, React

2. **Agregar opción para seleccionar acompañamientos en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Permitir a los usuarios seleccionar el número de acompañamientos.
   - **Descripción**:
     - **Escenario**: Selección de acompañamientos
       - **Given**: El usuario está visualizando un plato del menú.
       - **When**: Selecciona el número de acompañamientos disponibles.
       - **Then**: El sistema permite al usuario elegir sin cambiar el precio total del plato.
       - **And**: Los acompañamientos seleccionados se reflejan en el pedido del cliente.
   - **Dificultad**: 5
   - **Etiquetas**: UI, React

3. **Actualizar el menú en tiempo real en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Conectar el menú con el backend para actualizaciones en tiempo real.
   - **Descripción**:
     - **Escenario**: Actualización en tiempo real del menú
       - **Given**: El usuario está visualizando el menú en la página correspondiente.
       - **When**: Se actualizan los platos en el backend.
       - **Then**: El menú en la interfaz del cliente se actualiza automáticamente sin necesidad de recargar la página.
       - **And**: El sistema muestra los nuevos platos agregados o las modificaciones hechas.
   - **Dificultad**: 7
   - **Etiquetas**: UI, React

4. **Notificaciones de actualización del menú en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Mostrar notificaciones cuando el menú cambie en tiempo real.
   - **Descripción**:
     - **Escenario**: Notificación de cambios en el menú
       - **Given**: El usuario está visualizando el menú.
       - **When**: Se agrega un nuevo plato o se modifica el menú en tiempo real.
       - **Then**: El sistema muestra una notificación visual en la interfaz.
       - **And**: La notificación desaparece después de un breve periodo o cuando el usuario la cierre.
   - **Dificultad**: 6
   - **Etiquetas**: UI, React

---

### **Backend (NestJS)**

1. **Crear API para el menú del día en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Desarrollar un endpoint API que proporcione el menú del día.
   - **Descripción**:
     - **Escenario**: Consulta del menú del día
       - **Given**: El sistema recibe una solicitud del frontend para obtener el menú.
       - **When**: La API procesa la solicitud.
       - **Then**: El menú del día, dividido por periodos (mañana, tarde, noche), es enviado al frontend en la respuesta.
       - **And**: Los datos son correctos y actualizados.
   - **Dificultad**: 6
   - **Etiquetas**: API, NestJS

2. **Gestionar la eliminación de ingredientes en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Añadir lógica para manejar las solicitudes de eliminación de ingredientes.
   - **Descripción**:
     - **Escenario**: Eliminación de ingredientes del plato
       - **Given**: El cliente selecciona un plato y decide eliminar ciertos ingredientes.
       - **When**: El cliente confirma su selección.
       - **Then**: La API recibe la solicitud y elimina los ingredientes seleccionados.
       - **And**: El precio total del plato permanece sin cambios.
   - **Dificultad**: 5
   - **Etiquetas**: API, NestJS

3. **Configurar notificaciones en tiempo real en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Configurar notificaciones en tiempo real para actualizar el frontend cuando cambie el menú o las opciones de ingredientes.
   - **Descripción**:
     - **Escenario**: Notificaciones en tiempo real
       - **Given**: Se realizan cambios en el menú o en los ingredientes.
       - **When**: El sistema detecta los cambios.
       - **Then**: Las notificaciones en tiempo real se envían al frontend.
       - **And**: Los usuarios reciben actualizaciones instantáneas sobre los cambios.
   - **Dificultad**: 7
   - **Etiquetas**: Notificaciones, NestJS

4. **Autenticación de usuario en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Asegurar que solo los usuarios autenticados puedan ver el menú.
   - **Descripción**:
     - **Escenario**: Autenticación de usuario
       - **Given**: El usuario intenta acceder al menú.
       - **When**: El sistema verifica la autenticación del usuario.
       - **Then**: Solo los usuarios autenticados reciben acceso al menú.
       - **And**: Se devuelve un error si el usuario no está autenticado.
   - **Dificultad**: 6
   - **Etiquetas**: Seguridad, NestJS

---

### **Backend (Spring Boot)**

1. **Operaciones CRUD para los menús del día en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar CRUD para los menús del día.
   - **Descripción**:
     - **Escenario**: Operaciones CRUD del menú
       - **Given**: El administrador accede al sistema de gestión de menús.
       - **When**: El administrador crea, lee, actualiza o elimina un menú.
       - **Then**: Los cambios se reflejan correctamente en la base de datos.
       - **And**: Los cambios se sincronizan con el sistema NestJS.
   - **Dificultad**: 7
   - **Etiquetas**: CRUD, Spring Boot

2. **Sincronizar menú con inventario en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Asegurar que solo los platos con ingredientes disponibles se muestren en el menú.
   - **Descripción**:
     - **Escenario**: Sincronización del menú con el inventario
       - **Given**: El administrador o chef actualiza el inventario de ingredientes.
       - **When**: El sistema valida la disponibilidad de ingredientes.
       - **Then**: Solo los platos con ingredientes disponibles se muestran en el menú.
       - **And**: Los platos con ingredientes agotados no están disponibles.
   - **Dificultad**: 7
   - **Etiquetas**: Inventario, Spring Boot

3. **Generar reportes de menú en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Crear reportes de ventas y tendencias de pedidos para cada menú.
   - **Descripción**:
     - **Escenario**: Generación de reportes del menú
       - **Given**: El administrador solicita reportes de ventas y tendencias.
       - **When**: El sistema procesa los datos de ventas del menú.
       - **Then**: Los reportes detallados se generan y muestran correctamente.
       - **And**: Los reportes incluyen las ventas diarias y las tendencias por periodo (mañana, tarde, noche).
   - **Dificultad**: 8
   - **Etiquetas**: Reportes, Spring Boot

---


## Historia de Usuario: **"Personalizar Pedido"**

**Resumen**: Seleccionar platos y personalizar el pedido (cantidad, ingredientes).  
**Descripción**: Como cliente, quiero seleccionar platos y personalizar mi pedido (cantidad, ingredientes) para ajustar mi comida a mis preferencias. Los platos pueden ser seleccionados y personalizados, pero el precio definido no debe cambiar. Se debe utilizar un método de pago que sea el mismo para todos, excepto para los pedidos físicos pagados con lector de tarjetas o en efectivo.

---

#### **Frontend (React)**

1. **Diseñar interfaz de personalización de pedido en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Crear una página para seleccionar platos y personalizar pedidos.
   - **Descripción**:
     - **Escenario**: Personalización de pedidos
       - **Given**: El cliente está en la página del menú visualizando un plato.
       - **When**: Selecciona un plato y decide personalizarlo ajustando la cantidad o eliminando ingredientes.
       - **Then**: La interfaz permite la personalización sin afectar el precio total del plato.
       - **And**: Las opciones seleccionadas se reflejan claramente en el pedido antes de confirmar.
   - **Dificultad**: 6
   - **Etiquetas**: UI, React

2. **Implementar opciones de pago en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Añadir métodos de pago en la interfaz de usuario.
   - **Descripción**:
     - **Escenario**: Opciones de pago
       - **Given**: El cliente ha finalizado su pedido y está en la página de pago.
       - **When**: El cliente selecciona un método de pago, como tarjeta de crédito o débito.
       - **Then**: La interfaz muestra los métodos de pago disponibles, exceptuando aquellos físicos como lectores de tarjetas o efectivo.
       - **And**: El cliente puede confirmar su pedido con el método de pago elegido, y el pedido se registra correctamente.
   - **Dificultad**: 7
   - **Etiquetas**: UI, React

---

#### **Backend (NestJS)**

1. **Manejar personalización de pedidos en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para personalizar pedidos.
   - **Descripción**:
     - **Escenario**: Lógica de personalización de pedidos
       - **Given**: El cliente ha personalizado su pedido desde el frontend.
       - **When**: El sistema recibe la solicitud de personalización.
       - **Then**: La API procesa la personalización del pedido, eliminando ingredientes o ajustando cantidades sin cambiar el precio total.
       - **And**: Los cambios se reflejan correctamente en el sistema antes de confirmar el pedido.
   - **Dificultad**: 6
   - **Etiquetas**: API, NestJS

2. **Integrar métodos de pago en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Gestionar la integración de métodos de pago.
   - **Descripción**:
     - **Escenario**: Integración de métodos de pago
       - **Given**: El cliente ha finalizado la personalización del pedido y selecciona un método de pago.
       - **When**: La API procesa la solicitud de pago con el método seleccionado.
       - **Then**: Los métodos de pago disponibles se gestionan correctamente, exceptuando los físicos como el uso de lectores de tarjetas o efectivo.
       - **And**: El sistema confirma el pedido y el pago de manera exitosa si la transacción es válida.
   - **Dificultad**: 7
   - **Etiquetas**: Pago, NestJS

---




## Historia de Usuario: **"Seguir el Estado del Pedido"**

**Resumen**: Seguir el estado del pedido en tiempo real desde la aplicación.  
**Descripción**: Como cliente, quiero rastrear el estado de mi pedido en tiempo real desde la aplicación para saber cuándo estará listo. El estado del pedido debe actualizarse en tiempo real y mostrar los estados (preparando, listo, entregado).

---

#### **Frontend (React)**

1. **Implementar seguimiento de estado del pedido en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Mostrar el estado del pedido en tiempo real.
   - **Descripción**:
     - **Escenario**: Seguimiento del estado del pedido
       - **Given**: El cliente ha realizado un pedido y desea seguir su progreso.
       - **When**: El cliente visualiza la página de estado del pedido.
       - **Then**: La interfaz muestra el estado del pedido en tiempo real (preparando, listo, entregado).
       - **And**: El estado del pedido se actualiza automáticamente conforme a los cambios realizados en el backend.
   - **Dificultad**: 5
   - **Etiquetas**: UI, React

2. **Configurar notificaciones de estado del pedido en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Notificar cambios en el estado del pedido.
   - **Descripción**:
     - **Escenario**: Notificaciones de estado del pedido
       - **Given**: El cliente ha realizado un pedido y está esperando actualizaciones.
       - **When**: El estado del pedido cambia en el backend.
       - **Then**: La interfaz de usuario envía una notificación en tiempo real al cliente informando del cambio de estado.
       - **And**: Las notificaciones son claras y oportunas, reflejando cada cambio importante en el proceso del pedido.
   - **Dificultad**: 6
   - **Etiquetas**: UI, React

---

#### **Backend (NestJS)**

1. **Manejar actualizaciones de estado del pedido en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para el seguimiento del estado del pedido.
   - **Descripción**:
     - **Escenario**: Actualización de estado del pedido
       - **Given**: El cliente ha realizado un pedido y el personal de cocina está procesándolo.
       - **When**: El estado del pedido cambia (por ejemplo, de "preparando" a "listo").
       - **Then**: La API de NestJS actualiza el estado del pedido en la base de datos y notifica al frontend sobre el cambio.
       - **And**: La actualización se refleja en tiempo real tanto en la interfaz del cliente como en los sistemas internos.
   - **Dificultad**: 6
   - **Etiquetas**: API, NestJS

2. **Enviar notificaciones de estado del pedido en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Configurar notificaciones en tiempo real para el estado del pedido.
   - **Descripción**:
     - **Escenario**: Notificaciones de estado del pedido
       - **Given**: El pedido del cliente está en proceso y su estado está cambiando.
       - **When**: El estado del pedido cambia en el backend.
       - **Then**: El sistema de NestJS envía notificaciones en tiempo real al frontend utilizando WebSockets u otro método.
       - **And**: Las notificaciones son enviadas al instante y reflejan con precisión el estado actual del pedido.
   - **Dificultad**: 7
   - **Etiquetas**: Notificaciones, NestJS

---

¿Te gustaría ajustar algún otro detalle en las tareas o agregar más escenarios?

Aquí está la **Historia de Usuario** con la estructura de **Escenario**, **Given**, **When**, **Then**, y **And** aplicada a las tareas:

---


## Historia de Usuario: **"Método de Pago"**

**Resumen**: Elegir entre efectivo, tarjeta de débito o crédito (lector de tarjeta o virtual).  
**Descripción**: Como cliente, quiero pagar con efectivo, tarjeta de débito o crédito (lector de tarjeta o virtual) para elegir mi método de pago preferido. Los métodos de pago deben ser accesibles y funcionales.

---

#### **Frontend (React)**

1. **Implementar opciones de método de pago en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Añadir opciones de pago en la interfaz de usuario.
   - **Descripción**:
     - **Escenario**: Selección del método de pago
       - **Given**: El cliente ha finalizado la selección de sus platos y está listo para pagar.
       - **When**: El cliente accede a la sección de métodos de pago en la interfaz.
       - **Then**: Se muestran las opciones de pago (efectivo, tarjeta de débito, tarjeta de crédito virtual o lector de tarjeta).
       - **And**: El cliente puede seleccionar y confirmar su método de pago preferido, y la interfaz refleja correctamente el método seleccionado.
   - **Dificultad**: 6
   - **Etiquetas**: UI, React

---

#### **Backend (NestJS)**

1. **Gestionar métodos de pago en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar la lógica de manejo de métodos de pago.
   - **Descripción**:
     - **Escenario**: Manejo de métodos de pago
       - **Given**: El cliente ha seleccionado su método de pago preferido (efectivo, tarjeta de débito, crédito virtual o lector de tarjeta).
       - **When**: El cliente confirma su método de pago en el frontend.
       - **Then**: La lógica en el backend procesa el método de pago seleccionado, validando la información y registrando la transacción.
       - **And**: El backend asegura que el proceso de pago se realice correctamente, notificando al frontend en caso de éxito o error.
   - **Dificultad**: 7
   - **Etiquetas**: Pago, NestJS

---


Aquí está la **Historia de Usuario: "Asignación de Mesa"** con la estructura de **Escenario**, **Given**, **When**, **Then**, y **And** aplicada a las tareas:

---

## Historia de Usuario: **"Asignación de Mesa"**

**Resumen**: Asignar automáticamente una mesa al realizar un pedido.  
**Descripción**: Como cliente, quiero que se me asigne automáticamente una mesa al realizar un pedido para tener un lugar donde sentarme. La mesa debe ser asignada y reflejada en el sistema (101, 202, etc.).

---

#### **Backend (NestJS)**

1. **Gestionar asignación automática de mesa en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar asignación automática de mesa al realizar un pedido.
   - **Descripción**:
     - **Escenario**: Asignación de una mesa al realizar un pedido.
     - **Given**: El sistema recibe una solicitud de pedido de un cliente autenticado.
     - **When**: Se confirma el pedido del cliente.
     - **Then**: Se asigna automáticamente una mesa disponible en el sistema (ej. mesa 101, 202, etc.).
     - **And**: La mesa asignada se refleja en la base de datos y es visible para el cliente en la aplicación.
   - **Etiquetas**: Mesa, NestJS

---

Aquí está la **Historia de Usuario: "Personalización de Pedido"** con la estructura de **Escenario**, **Given**, **When**, **Then**, y **And** aplicada a las tareas:

---

## Historia de Usuario: **"Personalización de Pedido"**

**Resumen**: Ajustar ingredientes en el pedido sin cambiar el precio.  
**Descripción**: Como cliente, quiero ajustar los ingredientes en mi pedido para personalizar mi comida. Los ingredientes pueden ser eliminados, pero el precio debe mantenerse igual.

---

#### **Frontend (React)**

1. **Implementar ajuste de ingredientes en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Permitir ajustar ingredientes en el pedido sin cambiar el precio.
   - **Descripción**: 
     - **Escenario**: Ajuste de ingredientes en un pedido desde el frontend.
     - **Given**: Un cliente autenticado visualiza su pedido en la aplicación.
     - **When**: El cliente selecciona la opción para eliminar ingredientes de su comida.
     - **Then**: El sistema actualiza el pedido para reflejar los ingredientes eliminados.
     - **And**: El precio total del pedido no cambia tras la personalización.
   - **Etiquetas**: UI, React

---

#### **Backend (NestJS)**

1. **Gestionar eliminación de ingredientes en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Añadir lógica para manejar eliminación de ingredientes sin cambiar el precio.
   - **Descripción**: 
     - **Escenario**: Procesamiento de eliminación de ingredientes en el backend.
     - **Given**: Un cliente autenticado realiza una solicitud de modificación de su pedido.
     - **When**: El cliente elimina uno o más ingredientes del pedido.
     - **Then**: La API en NestJS procesa la eliminación de los ingredientes solicitados.
     - **And**: El precio del pedido no se modifica, independientemente de los cambios en los ingredientes.
   - **Etiquetas**: API, NestJS

---


## Historia de Usuario: **"Propina Opcional"**

**Resumen**: Añadir una propina del 6% al pedido si se desea.  
**Descripción**: Como cliente, quiero agregar una propina del 6% a mi pedido si lo deseo, para agradecer al personal de espera. La opción de agregar una propina debe estar disponible y reflejada en el total en la aplicación o en la tablet de los camareros.

---

#### **Frontend (React)**

1. **Implementar opción de propina en React**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Añadir opción para agregar una propina al pedido.
   - **Descripción**: 
     - **Given** que un cliente está realizando un pedido en la aplicación,
     - **When** el cliente accede a la pantalla de resumen del pedido,
     - **Then** debe ver una opción para agregar una propina del 6%.
     - **And** la opción debe permitir al cliente agregar la propina si lo desea y reflejarla en el total del pedido.
   - **Etiquetas**: UI, React

---

#### **Backend (NestJS)**

1. **Gestionar propina en NestJS**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para manejar propinas opcionales.
   - **Descripción**: 
     - **Given** que un cliente ha optado por agregar una propina del 6% en el pedido,
     - **When** el pedido es enviado al backend,
     - **Then** el sistema debe calcular el total del pedido incluyendo la propina.
     - **And** el backend debe reflejar la propina en la información del pedido y enviarla al frontend para su visualización.
   - **Etiquetas**: API, NestJS

---

#### **Backend (Spring Boot)**

1. **Actualizar el total del pedido con propina en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Ajustar el total del pedido con la propina agregada.
   - **Descripción**: 
     - **Given** que un pedido ha sido procesado con una propina opcional añadida,
     - **When** el pedido es recibido en el sistema de Spring Boot,
     - **Then** el total del pedido debe actualizarse para incluir la propina del 6%.
     - **And** el sistema debe guardar el total actualizado y reflejarlo en los reportes y datos de facturación.
   - **Etiquetas**: Propina, Spring Boot

---



# Kitchen staff

## Historia de usuario: **Manage Daily Menu**

**Resumen**: Definir ingredientes disponibles basados en compras y especiales del día.  
**Descripción**: Como personal de cocina, quiero definir los ingredientes disponibles basados en las compras y los especiales del día, para que el menú se actualice de acuerdo con lo que está disponible.

#### **Frontend (React)**

1. **Actualizar menú con ingredientes y especiales**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Mostrar ingredientes disponibles y especiales en el menú.
   - **Descripción**: 
     - **Given** que los ingredientes y especiales han sido actualizados en el sistema,
     - **When** el cliente accede al menú en la aplicación,
     - **Then** debe ver los ingredientes disponibles y los especiales del día reflejados en el menú.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Actualizar ingredientes y especiales en el backend**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para actualizar ingredientes y especiales en el backend.
   - **Descripción**: 
     - **Given** que los ingredientes y especiales han sido actualizados,
     - **When** el sistema recibe nueva información,
     - **Then** debe actualizar los ingredientes y especiales en la base de datos.
     - **And** la información actualizada debe estar disponible para el frontend.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Sincronizar ingredientes y especiales con Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Sincronizar los ingredientes y especiales con el sistema de Spring Boot.
   - **Descripción**: 
     - **Given** que los ingredientes y especiales han sido actualizados en el sistema,
     - **When** la información es recibida en el sistema de Spring Boot,
     - **Then** debe actualizar la base de datos con los ingredientes y especiales.
     - **And** la información debe ser reflejada en los reportes y datos de inventario.
   - **Etiquetas**: Inventario, Spring Boot

---

## Historia de usuario: **Set Promotions and Specials**

**Resumen**: Crear descuentos y promociones en platos seleccionados.  
**Descripción**: Como personal de cocina, quiero crear descuentos y promociones en platos seleccionados, para que los platos especiales se ofrezcan a los clientes.

#### **Frontend (React)**

1. **Mostrar promociones y descuentos en el menú**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Añadir y mostrar promociones y descuentos en el menú.
   - **Descripción**: 
     - **Given** que se han creado promociones y descuentos,
     - **When** un cliente accede al menú en la aplicación,
     - **Then** debe ver las promociones y descuentos aplicados a los platos seleccionados.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Gestionar promociones y descuentos en el backend**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para manejar promociones y descuentos.
   - **Descripción**: 
     - **Given** que se han creado promociones y descuentos,
     - **When** un cliente realiza un pedido con una promoción,
     - **Then** el sistema debe aplicar los descuentos y actualizar el stock en consecuencia.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Actualizar stock con promociones y descuentos en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Ajustar el stock con promociones y descuentos aplicados.
   - **Descripción**: 
     - **Given** que un pedido con promoción ha sido procesado,
     - **When** el pedido es recibido en el sistema de Spring Boot,
     - **Then** el stock debe ser actualizado para reflejar los descuentos aplicados.
     - **And** la información del stock debe ser actualizada en los reportes y datos de inventario.
   - **Etiquetas**: Stock, Spring Boot

---

## Historia de usuario: **Manage Orders**

**Resumen**: Recibir detalles completos del pedido.  
**Descripción**: Como personal de cocina, quiero recibir detalles completos del pedido, para preparar los platos correctamente.

#### **Frontend (React)**

1. **Mostrar detalles del pedido en la pantalla de cocina**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Mostrar detalles completos del pedido en la pantalla de cocina.
   - **Descripción**: 
     - **Given** que un pedido ha sido realizado,
     - **When** el personal de cocina accede a la pantalla de cocina,
     - **Then** debe ver detalles del pedido incluyendo ingredientes eliminados, detalles del plato, ingredientes específicos, usuario que realizó el pedido, número de platos pedidos, y mesa asignada (incluyendo el piso si aplica).
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Procesar y enviar detalles del pedido al frontend**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para procesar y enviar detalles del pedido.
   - **Descripción**: 
     - **Given** que se ha realizado un pedido,
     - **When** el pedido es enviado al backend,
     - **Then** el sistema debe procesar y enviar los detalles completos del pedido al frontend para su visualización.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Registrar detalles del pedido en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Registrar detalles del pedido en el sistema de Spring Boot.
   - **Descripción**: 
     - **Given** que un pedido ha sido procesado,
     - **When** el pedido es recibido en el sistema de Spring Boot,
     - **Then** el sistema debe registrar todos los detalles del pedido incluyendo ingredientes eliminados, detalles del plato, ingredientes específicos, usuario que realizó el pedido, número de platos pedidos, y mesa asignada.
   - **Etiquetas**: Pedido, Spring Boot

---

## Historia de usuario: **Generate Detailed Invoice**

**Resumen**: Generar una factura detallada con costos, impuestos y propinas.  
**Descripción**: Como personal de cocina, quiero que el programa genere una factura detallada con costos, impuestos y propinas, para proporcionar un desglose claro a los clientes.

#### **Frontend (React)**

1. **Mostrar factura detallada en la aplicación**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Mostrar factura detallada con costos, impuestos y propinas.
   - **Descripción**: 
     - **Given** que se ha generado una factura,
     - **When** el cliente accede a la sección de facturación,
     - **Then** debe ver un desglose detallado de costos, impuestos y propinas en la aplicación.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Generar y enviar factura detallada al frontend**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para generar y enviar factura detallada.
   - **Descripción**: 
     - **Given** que se ha solicitado una factura,
     - **When** el backend genera la factura,
     - **Then** debe incluir todos los costos, impuestos y propinas en el desglose.
     - **And** la factura debe ser enviada al frontend para su visualización.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Actualizar y registrar detalles de la factura en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Ajustar y registrar detalles de la factura en el sistema de Spring Boot.
   - **Descripción**: 
     - **Given** que se ha generado una factura,
     - **When** la factura es recibida en el sistema de Spring Boot,
     - **Then** el sistema debe registrar todos los detalles de costos, impuestos y propinas.
     - **And** la información debe ser reflejada en los reportes y datos de facturación.
   - **Etiquetas**: Facturación, Spring Boot

---

# Admins

## Historia de usuario: **Inventory Control**

**Resumen**: Gestionar el inventario de ingredientes y ajustar precios dinámicamente.  
**Descripción**: Como administrador, quiero gestionar el inventario de ingredientes y ajustar los precios dinámicamente, para que el stock y los precios se mantengan actualizados.

#### **Frontend (React)**

1. **Actualizar inventario y precios en la interfaz de usuario**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar funcionalidades para actualizar inventario y precios.
   - **Descripción**: 
     - **Given** que un administrador accede a la interfaz de gestión de inventario,
     - **When** el administrador actualiza los ingredientes y precios,
     - **Then** los cambios deben reflejarse en la interfaz de usuario.
     - **And** el sistema debe permitir la visualización de los reportes de ingredientes utilizados basados en los pedidos.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Gestionar inventario y precios en el backend**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para gestionar inventario y precios.
   - **Descripción**: 
     - **Given** que se han realizado cambios en el inventario y precios,
     - **When** la información es enviada al backend,
     - **Then** el sistema debe actualizar el inventario y los precios en la base de datos.
     - **And** debe generar un reporte de ingredientes utilizados basado en los pedidos.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Sincronizar inventario y precios con Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Sincronizar inventario y precios con el sistema de Spring Boot.
   - **Descripción**: 
     - **Given** que el inventario y los precios han sido actualizados,
     - **When** la información es recibida en el sistema de Spring Boot,
     - **Then** debe actualizar el inventario y precios en la base de datos.
     - **And** debe generar y almacenar reportes de ingredientes utilizados basados en los pedidos.
   - **Etiquetas**: Inventario, Spring Boot

---

## Historia de usuario: **Promotion Setup**

**Resumen**: Crear y ajustar promociones y ofertas especiales en platos del día.  
**Descripción**: Como administrador, quiero crear y ajustar promociones y ofertas especiales en platos del día, para que se ofrezcan descuentos y promociones a los clientes.

#### **Frontend (React)**

1. **Mostrar promociones y ofertas especiales en la interfaz de usuario**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar funcionalidades para gestionar promociones en la interfaz.
   - **Descripción**: 
     - **Given** que un administrador accede a la interfaz de promociones,
     - **When** el administrador crea, ajusta o elimina promociones,
     - **Then** las promociones deben ser reflejadas en la interfaz de usuario.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Gestionar promociones en el backend**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para crear, ajustar y eliminar promociones.
   - **Descripción**: 
     - **Given** que se han creado o ajustado promociones,
     - **When** la información es enviada al backend,
     - **Then** el sistema debe actualizar las promociones en la base de datos.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Actualizar promociones y ofertas en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Sincronizar promociones y ofertas especiales con el sistema de Spring Boot.
   - **Descripción**: 
     - **Given** que se han actualizado promociones y ofertas,
     - **When** la información es recibida en el sistema de Spring Boot,
     - **Then** el sistema debe actualizar las promociones y ofertas en la base de datos.
   - **Etiquetas**: Promociones, Spring Boot

---

## Historia de usuario: **User Management**

**Resumen**: Crear y gestionar usuarios del sistema (excepto clientes).  
**Descripción**: Como administrador, quiero crear y gestionar usuarios para el sistema (excepto clientes), para controlar el acceso y los permisos.

#### **Frontend (React)**

1. **Gestionar usuarios en la interfaz de administración**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar funcionalidades para crear, eliminar y modificar usuarios.
   - **Descripción**: 
     - **Given** que un administrador accede a la interfaz de gestión de usuarios,
     - **When** el administrador crea, elimina o modifica usuarios,
     - **Then** los cambios deben reflejarse en la interfaz de usuario.
     - **And** los usuarios deben ser asignables a roles y permisos específicos.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Gestionar usuarios en el backend**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para crear, eliminar y modificar usuarios.
   - **Descripción**: 
     - **Given** que se han creado o modificado usuarios,
     - **When** la información es enviada al backend,
     - **Then** el sistema debe actualizar la base de datos con la información de usuarios.
     - **And** los usuarios deben ser asignables a roles y permisos.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Actualizar usuarios y permisos en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Sincronizar usuarios y permisos con el sistema de Spring Boot.
   - **Descripción**: 
     - **Given** que se han creado o modificado usuarios,
     - **When** la información es recibida en el sistema de Spring Boot,
     - **Then** el sistema debe actualizar la base de datos con los usuarios y permisos.
   - **Etiquetas**: Gestión de usuarios, Spring Boot

---

# Wait Staff

### Historia de usuario: **Table Management**

**Resumen**: Ver y gestionar el estado de las mesas, y permitir la adición de propinas para pedidos físicos.  
**Descripción**: Como mesero, quiero ver las mesas disponibles y ocupadas, para poder reasignar el estado de cada mesa (disponible, ocupada) y continuar con la asignación. También quiero seleccionar una mesa y mostrar la opción de propina para los pedidos físicos, permitiendo agregar una propina opcional.

#### **Frontend (React)**

1. **Mostrar y gestionar mesas en la interfaz de usuario**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar funcionalidades para mostrar y gestionar el estado de las mesas.
   - **Descripción**: 
     - **Given** que un mesero accede a la interfaz de gestión de mesas,
     - **When** el mesero visualiza el estado de las mesas,
     - **Then** debe ver las mesas disponibles y ocupadas.
     - **And** debe poder reasignar el estado de las mesas (disponible, ocupada).
     - **And** debe permitir seleccionar una mesa y mostrar la opción de propina para los pedidos físicos.
     - **And** debe permitir agregar una propina opcional.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Gestionar mesas y opciones de propina en el backend**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar lógica para gestionar el estado de las mesas y la opción de propina.
   - **Descripción**: 
     - **Given** que se ha reasignado el estado de una mesa o se ha agregado una propina,
     - **When** la información es enviada al backend,
     - **Then** el sistema debe actualizar el estado de la mesa en la base de datos.
     - **And** debe gestionar y almacenar la opción de propina para pedidos físicos.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Actualizar el estado de las mesas y gestionar propinas en Spring Boot**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Sincronizar el estado de las mesas y gestionar propinas con el sistema de Spring Boot.
   - **Descripción**: 
     - **Given** que se ha actualizado el estado de una mesa o se ha agregado una propina,
     - **When** la información es recibida en el sistema de Spring Boot,
     - **Then** el sistema debe actualizar el estado de la mesa en la base de datos.
     - **And** debe almacenar la opción de propina para los pedidos físicos y reflejarla en los reportes y datos de facturación.
   - **Etiquetas**: Gestión de mesas, Propina, Spring Boot

---

# Users

## Historia de usuario: **Login**

**Resumen**: Permitir a los usuarios iniciar sesión de manera segura en la aplicación.  
**Descripción**: Como usuario (cliente, administrador, personal de cocina, personal de espera o propietario), quiero iniciar sesión en la aplicación de manera segura, para poder utilizar todas las funcionalidades disponibles.

#### **Frontend (React)**

1. **Implementar interfaz de inicio de sesión**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Desarrollar la pantalla de inicio de sesión para los usuarios.
   - **Descripción**: 
     - **Given** que un usuario accede a la pantalla de inicio de sesión en la aplicación,
     - **When** el usuario ingresa su nombre de usuario y contraseña,
     - **Then** el sistema debe enviar estos datos al backend para su verificación.
     - **And** el sistema debe mostrar un mensaje de error si las credenciales son incorrectas.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Gestionar autenticación de usuarios**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar la lógica de autenticación segura para los usuarios.
   - **Descripción**: 
     - **Given** que el backend recibe las credenciales del usuario,
     - **When** se verifican las credenciales usando bcrypt,
     - **Then** se debe generar un token JWT si las credenciales son válidas.
     - **And** el sistema debe bloquear el acceso si las credenciales son incorrectas o si el usuario no está autorizado.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Verificar credenciales y generar tokens**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Validar las credenciales y generar tokens JWT en el sistema de Spring Boot.
   - **Descripción**: 
     - **Given** que las credenciales se han verificado por NestJS,
     - **When** se genera un token JWT,
     - **Then** Spring Boot debe validar el token y permitir el acceso a recursos según el rol del usuario.
   - **Etiquetas**: Seguridad, Spring Boot

---

## Historia de usuario: **Register**

**Resumen**: Permitir a los clientes registrarse en la aplicación para poder iniciar sesión.  
**Descripción**: Como cliente, quiero registrarme en la aplicación para que pueda iniciar sesión y usar la aplicación.

#### **Frontend (React)**

1. **Implementar formulario de registro**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Desarrollar la pantalla de registro para nuevos usuarios.
   - **Descripción**: 
     - **Given** que un cliente accede a la pantalla de registro en la aplicación,
     - **When** el cliente ingresa sus datos y envía el formulario,
     - **Then** el sistema debe enviar estos datos al backend para su procesamiento.
     - **And** debe mostrar mensajes de error si los datos son inválidos o ya están en uso.
   - **Etiquetas**: UI, React

#### **Backend (NestJS)**

1. **Gestionar el registro de nuevos usuarios**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Implementar la lógica para registrar nuevos usuarios en el sistema.
   - **Descripción**: 
     - **Given** que el backend recibe los datos de registro de un nuevo usuario,
     - **When** se valida y almacena la información en la base de datos,
     - **Then** el sistema debe confirmar el registro y permitir al usuario iniciar sesión.
     - **And** debe verificar que los datos sean válidos y no estén duplicados.
   - **Etiquetas**: API, NestJS

#### **Backend (Spring Boot)**

1. **Actualizar base de datos con nuevos usuarios**
   - **Proyecto**: mealMap (MEAL)
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **Resumen**: Asegurar que la base de datos se actualice con la información de nuevos usuarios.
   - **Descripción**: 
     - **Given** que un nuevo usuario ha sido registrado por NestJS,
     - **When** la información es enviada a la base de datos,
     - **Then** Spring Boot debe reflejar estos datos en la base de datos de manera consistente.
   - **Etiquetas**: Persistencia, Spring Boot

---


## User Story: **"API Gateway Integration for Microservices"**

**📝 Summary**: Implement the API Gateway to connect and manage interactions between NestJS microservices and Java services.

**📖 Description**: As a **Developer**, I want the API Gateway to effectively connect all NestJS microservices and Java services so that requests can be routed correctly, authentication can be handled uniformly, and data can be managed across services efficiently. This integration will ensure that all services communicate seamlessly, and that the overall system functions cohesively, providing a unified experience for end-users.

**Acceptance Criteria**:
1. **Service Integration**:
   - **Given**: The API Gateway is configured.
   - **When**: A request is made to any of the microservices.
   - **Then**: The request is correctly routed to the appropriate NestJS or Java service based on the endpoint.

2. **Authentication**:
   - **Given**: A user is authenticated through the API Gateway.
   - **When**: The user makes requests to various microservices.
   - **Then**: The API Gateway ensures that authentication tokens are validated across all services.

3. **Data Consistency**:
   - **Given**: Data is updated in one microservice.
   - **When**: The data change is propagated.
   - **Then**: The API Gateway ensures that the data remains consistent across all connected services.

4. **Error Handling**:
   - **Given**: An error occurs in any microservice.
   - **When**: The error is encountered.
   - **Then**: The API Gateway provides appropriate error responses and logs errors for debugging.

5. **Performance**:
   - **Given**: Multiple requests are made to various services.
   - **When**: Requests are processed.
   - **Then**: The API Gateway handles requests efficiently, ensuring minimal latency and high performance.