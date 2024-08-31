### **Project Summary**

This project is a comprehensive restaurant management system designed to handle everything from customer experience to kitchen operations. Built with **Nest.js** and **spring boot** for the backend and **React** for the frontend, it provides secure authentication, user and role management, and efficient order and table management.

### **Key Features 🌟**
1. **Authentication and Roles:**
   - JWT authentication with sessions up to 2 hours.
   - Password validation with security requirements (2 numbers and 2 special characters).
   - Middleware to validate permissions based on roles: users, kitchen staff, owners, and admins.

2. **Order Management:**
   - Customers can track their order status and choose payment methods (cash, debit, credit).
   - Orders are automatically assigned to an available table, with tables numbered by location (e.g., 201 for floor 2).
   - The kitchen staff receives full order details, including the assigned table, for easy delivery.

3. **Billing:**
   - Automatic bill generation with the cost of each dish, ingredients, tax, and a voluntary tip of 6% of the total, shared among all waiters.

4. **Table Management:**
   - Automatic table assignment to customers when an order is placed.
   - Tables change to "available" status when marked by a waiter.

5. **Promotions:**
   - Kitchen staff can set discounts and daily specials, visible to customers.

### **Key Differentiators 🏅**
- **Automatic Table Assignment:** Smart table management improves restaurant efficiency.
- **Integrated Billing and Tips:** Accurate billing with automatic tip calculation, making income management and tip distribution easier.
- **Kitchen Staff Role:** Active involvement of kitchen staff in order management and promotions, ensuring smooth and synchronized operations.

### **Criteria Fulfillment ✅**
The project meets the criteria of:
- **Security:** Strong authentication and password validation.
- **Scalability:** Modular, layered architecture that can grow and adapt to the restaurant’s needs.
- **Usability:** Intuitive features for both customers and restaurant staff, with well-defined roles and automated processes.

### **Target Audience 🎯**
This system is designed for **medium to large restaurants** looking for a complete solution to manage tables, orders, and internal operations. It's ideal for establishments that want to optimize their workflow, enhance customer experience, and efficiently manage their staff and resources.
