
---

# **🍽️ MVP MealMap 🍽️**

## Historia de Usuario: **"Acceso y Funcionalidades del MVP"**

**📝 Resumen**: Implementar las funciones básicas de login, gestión de pedidos, estado de mesas, y gestión de cocina para el MVP.  
**📖 Descripción**: Como **Owner**, quiero acceder a una única sección en la aplicación donde pueda ver el menú 🍲, realizar pedidos 📋, cambiar el estado de las mesas 🪑 y gestionar los pedidos en la cocina 👨‍🍳 para tener una gestión funcional de mi restaurante con la mayor eficiencia posible.

---

### **🖥️ Frontend (React)**

1. **🔑 Create Login Page**
   - **Issue Type**: Task
   - **Status**: To do
   - **📝 Summary**: Develop a unique login interface for the owner to access the system.
   - **📖 Description**:
     - **Scenario**: Login Page
       - **Given**: The user opens the app and accesses the login page.
       - **When**: The user enters their credentials.
       - **Then**: The system authenticates the user and redirects them to the main dashboard.
       - **And**: If the credentials are incorrect, an error message is displayed.
       - **And**: If the credentials are correct, a success message is displayed.
       - **And**: If the user fails 2 times, a message reminds them to include at least 2 numbers in the password.
   - **Difficulty**: 4
   - **🏷️ Tags**: UI, React

2. **🍽️ Implement Menu Section for Orders**
   - **Issue Type**: Task
   - **Status**: To do
   - **📝 Summary**: Create an order page where the owner can view the menu based on the time (daily, morning, noon, night) and place orders.
   - **📖 Description**:
     - **Scenario**: Order Page
       - **Given**: The user accesses the order section.
       - **When**: They select dishes from the menu based on the time.
       - **Then**: The selected dishes are added to the current order.
       - **And**: The system allows customization of the order without changing the price.
       - **And**: The system displays a dish based on the time.
       - **And**: The system displays specific dishes based on the time.
       - **And**: Dishes are categorized by sections, and a summary of each dish type is shown.
   - **Difficulty**: 7
   - **🏷️ Tags**: UI, React

3. **🪑 Implement Table Status Section**
   - **Issue Type**: Task
   - **Status**: To do
   - **📝 Summary**: Create a section for waiters to update the table status.
   - **📖 Description**:
     - **Scenario**: Table Status Management
       - **Given**: The waiter accesses the table section.
       - **When**: They change the table status (available, occupied).
       - **Then**: The system updates the table availability.
       - **And**: The system shows the number of each table.
       - **And**: The system shows the creation date and time of the table's order.
   - **Difficulty**: 4
   - **🏷️ Tags**: UI, React

4. **👨‍🍳 Create Kitchen Management Interface**

   - **Issue Type**: Task
   - **Status**: To do
   - **📝 Summary**: Implement the interface where the kitchen staff can view orders and change their status.
   - **📖 Description**:
     - **Scenario**: Kitchen Order Management
       - **Given**: The kitchen staff accesses the order list.
       - **When**: They update the order status (preparing, ready).
       - **Then**: The system reflects the changes in the order.
       - **And**: The total order amount and its invoice are displayed.
   - **Difficulty**: 5
   - **🏷️ Tags**: UI, React

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
