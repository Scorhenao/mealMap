
---

# **🍽️ MVP MealMap 🍽️**

## Historia de Usuario: **"Acceso y Funcionalidades del MVP"**

**📝 Resumen**: Implementar las funciones básicas de login, gestión de pedidos, estado de mesas, y gestión de cocina para el MVP.  
**📖 Descripción**: Como **Owner**, quiero acceder a una única sección en la aplicación donde pueda ver el menú 🍲, realizar pedidos 📋, cambiar el estado de las mesas 🪑 y gestionar los pedidos en la cocina 👨‍🍳 para tener una gestión funcional de mi restaurante con la mayor eficiencia posible.

---

### **🖥️ Frontend (React)**

1. **🔑 Crear página de login**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Desarrollar una interfaz de login única para que el owner acceda al sistema.
   - **📖 Descripción**:
     - **Escenario**: Página de login
       - **Given**: El usuario abre la aplicación y accede a la página de login.
       - **When**: El usuario ingresa sus credenciales.
       - **Then**: El sistema autentica al usuario y lo redirige al panel principal.
       - **And**: Si las credenciales son incorrectas, se muestra un mensaje de error.
       - **And**: Si las credenciales son correctas, se muestra un mensaje de exito.
       - **And**: si se equivoca 2 veces agrega un mensaje recordando que tiene minimo 2 numeros.
   - **Dificultad**: 4
   - **🏷️ Etiquetas**: UI, React

2. **🍽️ Implementar sección de menú para pedidos**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Crear una página de pedidos donde el owner puede ver el menu segun la hora (daily,morning,noon.night) y realizar pedidos.
   - **📖 Descripción**:
     - **Escenario**: Página de pedidos
       - **Given**: El usuario accede a la sección de pedidos.
       - **When**: Selecciona los platos del menu segun la hora.
       - **Then**: Los platos seleccionados se añaden a la orden actual.
       - **And**: El sistema permite personalizar el pedido sin modificar el precio.
       - **And**: El sistema muestra un plato segun la hora.
       - **And**: El sistema muestra ciertos platos segun la hora.
       -**And**: Separa por secciones y muestra un resumen de cada tipo de plato.
   - **Dificultad**: 7
   - **🏷️ Etiquetas**: UI, React

3. **🪑 Implementar sección de estado de mesas**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Crear una sección para que los meseros actualicen el estado de las mesas.
   - **📖 Descripción**:
     - **Escenario**: Gestión de estado de mesas
       - **Given**: El mesero accede a la sección de mesas.
       - **When**: Cambia el estado de la mesa (disponible, ocupada).
       - **Then**: El sistema actualiza la disponibilidad de las mesas.
       - **And**: El sistema muestra el numero de cada mesa.
       - **And**: El sistema muestra la fecha y hora de creacion de la orden de la mesa.
   - **Dificultad**: 4
   - **🏷️ Etiquetas**: UI, React

4. **👨‍🍳 Crear interfaz de gestión de cocina**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Implementar la interfaz donde el kitchen staff puede ver los pedidos y cambiar su estado ().
   - **📖 Descripción**:
     - **Escenario**: Gestión de pedidos en cocina
       - **Given**: El kitchen staff accede a la lista de pedidos.
       - **When**: Actualiza el estado de los pedidos (preparando, listo).
       - **Then**: El sistema refleja los cambios en la orden.
       - **And**: Se muestra el total del pedido junto con su factura.
   - **Dificultad**: 5
   - **🏷️ Etiquetas**: UI, React

---

### **⚙️ Backend (NestJS)**

1. **🔐 Crear endpoint para login**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Crear un endpoint para manejar el proceso de autenticación.
   - **📖 Descripción**:
     - **Escenario**: Autenticación de usuarios
       - **Given**: El sistema recibe las credenciales del owner.
       - **When**: Valida las credenciales.
       - **Then**: El usuario es autenticado y recibe un token de acceso.
       - **And**: Si las credenciales no son válidas, se devuelve un error.
   - **Dificultad**: 6
   - **🏷️ Etiquetas**: Seguridad, NestJS

2. **📋 Desarrollar API para el menú y pedidos**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Crear un endpoint para obtener el menú y gestionar pedidos.
   - **📖 Descripción**:
     - **Escenario**: Gestión del menú y pedidos
       - **Given**: El usuario realiza una solicitud para obtener el menú.
       - **When**: El backend responde con el menú actualizado.
       - **Then**: El pedido es procesado y almacenado en la base de datos.
       - **And**: El estado del pedido se puede actualizar en la cocina.
   - **Dificultad**: 6
   - **🏷️ Etiquetas**: API, NestJS

3. **🪑 Implementar lógica para la asignación automática de mesas**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Crear lógica para asignar automáticamente mesas según la disponibilidad y número de personas.
   - **📖 Descripción**:
     - **Escenario**: Asignación de mesas
       - **Given**: El cliente realiza un pedido con el número de personas.
       - **When**: El sistema evalúa la disponibilidad de mesas.
       - **Then**: Se asigna automáticamente una mesa adecuada para el grupo.
   - **Dificultad**: 7
   - **🏷️ Etiquetas**: Lógica, NestJS

---


### **🛠️ Backend (Spring Boot)**

1. **📋 Crear operaciones CRUD para la gestión del menú**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Implementar operaciones CRUD para gestionar el menú del día.
   - **📖 Descripción**:
     - **Escenario**: CRUD del menú
       - **Given**: El sistema recibe solicitudes de creación, lectura, actualización o eliminación de menús.
       - **When**: El administrador realiza cambios en el menú.
       - **Then**: El menú se actualiza y se refleja en el frontend.
   - **Dificultad**: 7
   - **🏷️ Etiquetas**: CRUD, Spring Boot

2. **🪑 Gestionar el estado de las mesas desde el backend**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Desarrollar la funcionalidad para gestionar el estado de las mesas.
   - **📖 Descripción**:
     - **Escenario**: Gestión de mesas
       - **Given**: El sistema recibe actualizaciones sobre el estado de las mesas.
       - **When**: El mesero cambia el estado de la mesa.
       - **Then**: El backend actualiza el estado en la base de datos.
   - **Dificultad**: 5
   - **🏷️ Etiquetas**: Gestión de mesas, Spring Boot

3. **📋 Actualizar el estado de los pedidos en el backend**
   - **Tipo de incidencia**: Tarea
   - **Estado**: To do
   - **📝 Resumen**: Implementar la funcionalidad para cambiar el estado de los pedidos.
   - **📖 Descripción**:
     - **Escenario**: Actualización del estado de pedidos
       - **Given**: El kitchen staff actualiza el estado de un pedido.
       - **When**: El estado del pedido cambia a "preparando" o "listo".
       - **Then**: El sistema refleja los cambios en la base de datos.
   - **Dificultad**: 5
   - **🏷️ Etiquetas**: Pedidos, Spring Boot

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