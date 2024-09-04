# Features 👥

## 1. **Users (Customers)** 🧑‍🤝‍🧑

- **Menu Viewing:** 🍽️
  - Users can see the full menu, including daily specials.
- **Placing Orders:** 🛒
  - Users can select items and customize their orders (e.g., remove ingredients).
- **Order Status:** 🔄
  - Users can track their order in real-time (preparing, ready, delivered).
- **Payment Method:** 💳
  - Payment options include cash, debit, and credit cards.
- **Table Assignment:** 🪑
  - The system automatically assigns a table when an order is placed. Tables are identified by number and floor (e.g., Table 201 on floor 2).
- **Order Customization:** ✨
  - Users can adjust specific ingredients, which changes the price automatically.
- **Optional Tip:** 💵
  - A 6% tip is suggested, to be shared among all waitstaff.

## 2. **Kitchen Staff** 👩‍🍳👨‍🍳

- **Manage Daily Menu:** 📋
  - Define available ingredients and daily specials.
- **Set Promotions and Specials:** 🎉
  - Create discounts on selected dishes and define specials.
- **Order Management:** 📝
  - **Preparation Order:**
    - Details of the dish(es) ordered.
    - Specific ingredients.
    - User who placed the order.
    - Quantity of dishes ordered.
    - Assigned table (including floor if applicable).
  - **Detailed Invoice:**
    - Total cost of each dish.
    - Extra cost for specific ingredients.
    - Quantity of dishes ordered.
    - **VAT** included in the total.
    - **Optional Tip:** 6% of the total order, shared among all waitstaff.

## 3. **Owners** 🏠

- **Order Management:** 📊
  - Access to all orders and their statuses.
- **Reports and Statistics:** 📈
  - Generate reports on daily earnings, orders per hour, and dish popularity.

## 4. **Admins** 🛠️

- **System Configuration:** ⚙️
  - Full access to system settings, including role creation, user management, and price adjustments.
- **Inventory Control:** 📦
  - Manage ingredient inventory and set dynamic pricing.
- **Table Management:** 🪑
  - Manage and assign table numbers and floors.
- **Promotion Setup:** 🎉
  - Create and adjust promotions and special offers.
- **Security Configuration:** 🔐
  - Implement and manage JWT authentication for user sessions (valid for 2 hours).
  - Encrypt passwords with bcrypt to protect sensitive data.
  - Middleware to validate user permissions and roles (e.g., customer, kitchen staff, owners, admins).

## 5. **Waitstaff** 🍽️

- **Freeing Tables:** 🆓
  - Update table status to "available" once customers leave and the table is ready for use.
- **Order Delivery:** 🚚
  - Detailed information about the assigned table and dishes to deliver.
- **Tip Distribution:** 💰
  - Suggested 6% tip is shared equally among all waitstaff.
- **Table Status Update:** 📋
  - Mark tables as "occupied" or "free" based on their current status.

---