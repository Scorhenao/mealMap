# Funcionalidades 👥

## 1. **Users (Clientes)** 🧑‍🤝‍🧑

- **Visualización del Menú:** 🍽️
  - Los usuarios pueden ver el menú completo, incluidas las especialidades del día.
- **Realización de Pedidos:** 🛒
  - Permite a los usuarios seleccionar productos y personalizar sus pedidos (e.g., eliminar ingredientes).
- **Estado del Pedido:** 🔄
  - Los usuarios pueden rastrear en tiempo real el estado de su pedido (en preparación, listo, entregado).
- **Método de Pago:** 💳
  - Opciones de pago incluyen efectivo, débito y crédito.
- **Asignación de Mesa:** 🪑
  - El sistema asigna automáticamente al usuario a una mesa disponible al completar un pedido. Las mesas se identifican por número y piso (e.g., Mesa 201 en el piso 2).
- **Personalización de Pedidos:** ✨
  - Los usuarios pueden ajustar ingredientes específicos de los platos, lo que modifica automáticamente el precio.
- **Propina Voluntaria:** 💵
  - Se sugiere una propina del 6% del total del pedido, distribuida entre todos los meseros.

## 2. **Kitchen Staff (Personal de Cocina)** 👩‍🍳👨‍🍳

- **Gestión del Menú del Día:** 📋
  - Capacidad para definir los ingredientes disponibles y las especialidades del día.
- **Definición de Promociones y Especialidades:** 🎉
  - Posibilidad de establecer descuentos en platos seleccionados y definir especialidades.
- **Gestión de Pedidos:** 📝
  - **Orden de Preparación:** 
    - Detalles del plato(s) solicitado(s).
    - Ingredientes específicos del pedido.
    - Usuario que realizó el pedido.
    - Cantidad de platos solicitados.
    - Mesa asignada (incluyendo identificación del piso si aplica).
  - **Factura Detallada:**
    - Costo total de cada plato.
    - Costo adicional por ingredientes específicos.
    - Cantidad de platos solicitados.
    - **IVA** incluido en el total.
    - **Propina Voluntaria:** 6% del total del pedido, distribuida entre todos los meseros.

## 3. **Owners (Propietarios)** 🏠

- **Gestión de Pedidos:** 📊
  - Acceso a todos los pedidos realizados y su estado.
- **Reportes y Estadísticas:** 📈
  - Generación de reportes sobre ganancias diarias, pedidos por hora, y popularidad de los platos.
- **Control de Mesas y Reservas:** 🪑
  - Visualización y gestión de la disposición de mesas y reservas.

## 4. **Admins (Administradores)** 🛠️

- **Configuración del Sistema:** ⚙️
  - Acceso completo a configuraciones del sistema, incluyendo la creación de roles, gestión de usuarios y ajustes de precios.
- **Control de Inventario:** 📦
  - Gestión del inventario de ingredientes y establecimiento de precios dinámicos.
- **Gestión de Mesas:** 🪑
  - Gestión y asignación de números y pisos para las mesas del restaurante.
- **Configuración de Promociones:** 🎉
  - Creación y ajuste de promociones y ofertas especiales.
- **Configuración de Seguridad:** 🔐
  - Implementación y gestión de autenticación JWT para sesiones de usuarios (validez de 2 horas).
  - Encriptación de contraseñas utilizando bcrypt para proteger datos sensibles.
  - Middleware para validar permisos y roles de usuario (e.g., cliente, personal de cocina, propietarios, administradores).

## 5. **Meseros** 🍽️

- **Liberación de Mesas:** 🆓
  - Actualización del estado de las mesas a "disponible" una vez que los clientes terminan y la mesa está lista para uso.
- **Entrega de Pedidos:** 🚚
  - Información detallada sobre la mesa asignada y los platos para entregar.
- **Distribución de Propinas:** 💰
  - La propina voluntaria sugerida (6% del total del pedido) se distribuye equitativamente entre todos los meseros.
- **Actualización del Estado de Mesas:** 📋
  - Posibilidad de marcar mesas como "ocupadas" o "libres" según el estado actual.

