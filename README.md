# Project Idea 

### **Project Summary**

This project is a comprehensive restaurant management system designed to handle everything from customer experience to kitchen operations. Built with **Nest.js** and **spring boot** for the backend and **React** for the frontend, it provides secure authentication, user and role management, and efficient order and table management.

### **Key Features 🌟**
1. **Authentication and Roles:***
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

# Confluence 
### Confluence Structure for README

#### **1. Overview**
This section gives a brief introduction to the project, its goals, and the key features.

#### **2. Project Architecture**
- **Backend:** Explanation of the chosen architecture using Nest.js and Spring Boot.
- **Frontend:** Overview of the React structure and how it integrates with the backend.
- **Database:** MySQL setup and entity-relationship diagram (ERD).
- **API Gateway:** How the services are connected and communicate through the gateway.
  
#### **3. Development Workflow**
- **GitFlow:** Detailed explanation of the branch management strategy, including branch roles and rules for commits and pull requests.
- **Task Management:** How tasks are assigned and tracked using Jira, including the workflow and lifecycle of tasks.

#### **4. Environment Setup**
- **Backend:** Step-by-step guide to setting up the backend environment for both Nest.js and Spring Boot.
- **Frontend:** Instructions for setting up the React environment.
- **CI/CD Pipeline:** How the pipeline is configured for automated testing, building, and deployment.

#### **5. Documentation and Best Practices**
- **Code Documentation:** Guidelines for documenting code using comments and markdown files.
- **Commit Standards:** Commit message format and standards.
- **Testing:** How to write and structure tests for both frontend and backend.

#### **6. Deployment**
- **Deployment Strategy:** Explanation of the deployment process, environment configurations, and post-deployment monitoring.
- **Rollback Plan:** Steps to revert to a previous stable state in case of issues.

### **User Stories**

#### **1. Clients 🧑‍🤝‍🧑**

1. **View Menu**
   - **As** a client,
   - **I want** to see the menu for the day (morning, afternoon, evening) including the dishes of the day,
   - **So that** I can choose what to order.
   - **Acceptance Criteria:**
     - The menu should be visible and update in real-time with the dishes of the day.
     - The app should let me select the number of accompaniments.

2. **Place Order**
   - **As** a client,
   - **I want** to select dishes and customize my order (quantity, ingredients),
   - **So that** I can adjust my food to my preferences.
   - **Acceptance Criteria:**
     - Dishes can be selected and customized, but the defined price does not change.
     - A payment method should be used that is the same for all, except for physical orders paid by card reader or cash.

3. **Track Order Status**
   - **As** a client,
   - **I want** to track the status of my order in real-time from the app,
   - **So that** I know when it will be ready.
   - **Acceptance Criteria:**
     - The order status should update in real-time and show statuses (preparing, ready, delivered).

4. **Payment Method**
   - **As** a client,
   - **I want** to pay with cash, debit card, or credit card (card reader or virtual),
   - **So that** I can choose my preferred payment method.
   - **Acceptance Criteria:**
     - Payment methods should be accessible and functional.

5. **Table Assignment**
   - **As** a client,
   - **I want** to be automatically assigned a table when placing an order,
   - **So that** I have a place to sit.
   - **Acceptance Criteria:**
     - A table should be automatically assigned and reflected in the system (101, 202, etc.).

6. **Order Customization**
   - **As** a client,
   - **I want** to adjust ingredients in my order,
   - **So that** I can customize my food.
   - **Acceptance Criteria:**
     - Ingredients can be removed from a dish, but the price remains the same.

7. **Optional Tip**
   - **As** a client,
   - **I want** to add a 6% tip to my order if I want,
   - **So that** I can thank the wait staff.
   - **Acceptance Criteria:**
     - The option to add a tip should be available and reflected in the total on the app or on the tablet that waiters usually have.

#### **2. Kitchen Staff 👩‍🍳👨‍🍳**

1. **Manage Daily Menu**
   - **As** kitchen staff,
   - **I want** to define available ingredients based on purchases and daily specials,
   - **So that** the menu is updated according to what's available.
   - **Acceptance Criteria:**
     - Ingredients and specials should be updated in the system.

2. **Set Promotions and Specials**
   - **As** kitchen staff,
   - **I want** to create discounts and promotions on selected dishes,
   - **So that** special dishes are offered to clients.
   - **Acceptance Criteria:**
     - Promotions and discounts should be visible on the menu.
     - Orders should update stock.

3. **Manage Orders**
   - **As** kitchen staff,
   - **I want** to receive complete details of the order,
   - **So that** I can prepare the dishes correctly.
   - **Acceptance Criteria:**
     - Orders should include details like removed ingredients, dish details, specific ingredients, the user who placed the order, number of dishes ordered, and assigned table (including floor if applicable).

4. **Generate Detailed Invoice**
   - **As** kitchen staff,
   - **I want** the program to generate a detailed invoice with costs, taxes, and tips,
   - **So that** I can provide a clear breakdown to clients.
   - **Acceptance Criteria:**
     - The invoice should show all costs and breakdowns of taxes and tips.

#### **3. Owners 🏠**

1. **Manage Orders**
   - **As** an owner,
   - **I want** to access all orders and their statuses for each restaurant I have in the app,
   - **So that** I can monitor workflow and operations.
   - **Acceptance Criteria:**
     - It should be possible to view all orders and their statuses in the system.

2. **Generate Reports and Statistics**
   - **As** an owner,
   - **I want** the program to generate daily reports on sold orders,
   - **So that** I can analyze performance and make informed decisions.
   - **Acceptance Criteria:**
     - Reports should include data on physical and virtual orders.

#### **4. Admins 🛠️**

1. **Inventory Control**
   - **As** an admin,
   - **I want** to manage ingredient inventory and adjust prices dynamically,
   - **So that** stock and prices are kept up to date.
   - **Acceptance Criteria:**
     - Inventory and prices should be manageable and updatable in the system.
     - The system should generate a report of ingredients used based on orders.

2. **Promotion Setup**
   - **As** an admin,
   - **I want** to create and adjust promotions and special offers on dishes of the day,
   - **So that** discounts and promotions are offered to clients.
   - **Acceptance Criteria:**
     - Promotions should be creatable, deletable, and modifiable easily.

3. **User Management**
   - **As** an admin,
   - **I want** to create and manage users for the system (except clients),
   - **So that** I can control access and permissions.
   - **Acceptance Criteria:**
     - Users should be creatable, deletable, and modifiable.
     - Users should be assignable to roles.
     - Each role should have certain permissions in the app.

#### **5. Wait Staff 🍽️**

1. **Table Management**
   - **As** a waiter,
   - **I want** to see available and occupied tables,
   - **So that** I can reassign the state of each table (available, occupied) and continue assigning.
   - **Acceptance Criteria:**
     - The program should show available and occupied tables.
     - The program should be able to reassign the state of the table.
     - The program should allow selecting a table and showing the tip option for physical orders, allowing an optional tip to be added.

#### **6. Users 🔐**

1. **Login**
   - **As** a user (client, admin, kitchen staff, wait staff, or owner),
   - **I want** to log in to the app securely,
   - **So that** I can use the app.
   - **Acceptance Criteria:**
     - The system should allow users to log in to the app.
     - The system should verify user credentials before granting access.
     - The system should block access to unauthorized users.
     - The system should use bcrypt for secure credentials and JWT for sessions.

2. **Register**
   - **As** a client,
   - **I want** to register in the app,
   - **So that** I can log in and use the app.
   - **Acceptance Criteria:**
     - The system should allow users to register in the app.
     - The system should verify that registration data is valid.
     - The system should block access to unauthorized users.
   
# Contacts