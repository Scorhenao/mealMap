### Kickoff Meeting Report

**Date:** [30/sep/2024]  
**Attendees:** [Andres Gonzales, Jhonathan Vergara, Jorge Reyes, narciri Mena,Samuel echeverri]
**Clan** [Ritchie, Jeff bezzos]  
**Project Manager:** [Samuel Cordoba]

---

#### **Overview:**
The kickoff meeting covered five main points, each focusing on different aspects of the project, from technology selection to project structure and functionality. Below is a detailed summary of each topic discussed:

---

### **1. Application Architecture & Tools:**
- **Technologies Chosen:** The team decided to use **Nest.js**, **Spring Boot**, **React**, **JWT**, **Bcrypt**, and an **API Gateway**. 
- **Adherence to SOLID Principles:** All components will follow SOLID principles, except for Spring Boot, which will be initially implemented as per the team’s familiarity, with plans to refine it later.
- **Team Understanding:** After explaining the architecture and tools, everyone confirmed their understanding of the decisions made.

### **2. Git Repository Architecture:**
- **GitFlow Implementation:** The team agreed to use **GitFlow** with the following rules:
  - **Hotfix Branch:** Not required.
  - **Feature Branches:** Can be used freely.
  - **Release & Development Branches:** Require pull requests.
  - **Main Branch:** Will be managed exclusively by the Project Manager.
- **Team Agreement:** All team members understood the repository structure and their responsibilities.

### **3. Project Documentation & File Structure:**
- **Documentation in Markdown Files:** The team will use `.md` files for project documentation, which will include:
  - Acceptance criteria.
  - Functionalities.
  - Other helpful documents.
  - Explanation of GitFlow.
- **Team Understanding:** Everyone confirmed their understanding of the importance and structure of these documents.

### **4. Commit Criteria:**
- **Commit Language:** All commits must be written in English.
- **Reference Repository:** A repository that explains these criteria and other guidelines is available for reference.
- **Team Consensus:** The team agreed on the importance of consistent commit practices.

### **5. Project Overview & Idea:**
- **Concept:** The project idea was discussed thoroughly, using a restaurant scenario to explain the application’s functionality.
- **Functionality Details:**
  - **Order Placement:** Customers can place orders via physical interaction with a screen or through a waiter with a card reader. The program validates the order with the customer’s name and payment confirmation.
  - **Table Assignment:** The system assigns tables with unique IDs and displays the customer’s table location on a map.
  - **Order Management:** Orders are sent to the kitchen with details like customer name, dish, quantity, total price, and ingredients. The kitchen staff also receives a printed invoice.
  - **Tips:** Customers have an option to add a 6% tip through the app after their order is delivered.
  - **Roles & Permissions:** 
    - **Admin Role:** Manages daily inventory and product prices.
    - **Owner Role:** Views total daily orders and earnings.
  - **Additional Features:** Waiters can reassign tables, and the admin can add daily specials and adjust product stock in real-time.
- **Confirmation & Feedback:** 
  - The project idea was repeatedly confirmed for clarity. 
  - One team member joined late and missed the initial discussions but was present for the project overview.
  - The entire team expressed comfort with the project scope, with no requests to remove features due to difficulty.

