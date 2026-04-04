# 🌏 Explore Australia: Adventure Management System

[![CI/CD Pipeline](https://github.com/n12516864/N12516864_Sam-Liao_IFQ636/actions/workflows/ci.yml/badge.svg)](https://github.com/n12516864/N12516864_Sam-Liao_IFQ636/actions)

**Explore Australia** is a full-stack MERN (MongoDB, Express, React, Node.js) application tailored for travelers to plan and organize their Australian journeys. This project showcases a robust DevOps lifecycle, featuring automated testing, continuous integration, and cloud deployment.

### 🌐 Live Demo
Experience the live application here:  
👉 [http://13.239.24.246:3000](http://13.239.24.246:3000)

---

## 🚀 Features & Functions

### 🔐 Test Credentials
For evaluation, please use the following authorized account:
* **Account:** `user@gmail.com`
* **Password:** `user`

### 🛠 Core Functionalities
* **User Authentication**: Secure JWT-based Login/Logout system with encrypted password storage.
* **Adventure CRUD**: Full Create, Read, Update, and Delete capabilities for tour itineraries.
* **Image Management**: Integrated **Multer** middleware for handling destination photo uploads.
* **Responsive Design**: A seamless user interface optimized for both desktop and mobile devices.
* **Protected Access**: Private routes ensure that "My Bookings" and management tools are only accessible to authenticated users.

---

## 🛠 Installation & Setup

Follow these steps to set up the project locally. 
> **Prerequisite:** Node.js `v20.0.0` or higher is recommended.

### 1. Clone the Repository
```bash
git clone https://github.com/n12516864/N12516864_Sam-Liao_IFQ636.git
cd N12516864_Sam-Liao_IFQ636
```

### 2. Environment Variables
Create a `.env` file in the `backend/` directory and configure the following:
```env
PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

### 3. Backend Setup
```bash
cd backend
npm install
npm start
```

### 4. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```
The application will launch at `http://localhost:3000`.

---

## 📂 Project Structure

```text
├── backend/
│   ├── config/          # DB connection & environment logic
│   ├── controllers/     # Business logic for API endpoints
│   ├── middleware/      # Auth (JWT) & Error handling
│   ├── models/          # Mongoose Schemas (User, Tour, Booking)
│   ├── routes/          # API Route definitions
│   ├── uploads/         # Static storage for destination images
│   └── test/            # Jest unit & integration tests
├── frontend/
│   ├── public/          # Static assets
│   └── src/
│       ├── components/  # Reusable UI elements
│       ├── pages/       # Main view components
│       └── api/         # Axios instance & API calls
└── .github/workflows/   # CI/CD Pipeline (GitHub Actions)
```

---

## ⚙️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime** | Node.js v24.14.1 |
| **Frontend** | React v18.x |
| **Backend** | Express v4.18.x |
| **Database** | MongoDB Atlas (Mongoose v6.x) |
| **Testing** | Jest & Supertest |
| **Deployment** | AWS EC2 & PM2 |
| **Web Server** | Nginx (Reverse Proxy) |

---

## 🤖 CI/CD Pipeline (DevOps Excellence)

This project implements a fully automated **GitHub Actions** workflow. Every push or Pull Request to the `main` branch triggers the following pipeline:

1.  **Build Environment**: Sets up the Node.js environment.
2.  **Install Dependencies**: Clean installation of all `npm` packages.
3.  **Automated Testing**: Executes the **Jest** test suite to ensure API stability and zero regressions.
4.  **Verification**: Confirms the build succeeds before proceeding.
5.  **Auto-Deployment**: Once verified, the code is synchronized with the **AWS EC2** instance, ensuring the live site is always up-to-date.

---

## 📩 Contact & Credit

**Sam Liao**
* **Student ID:** N12516864  
* **Institution:** Queensland University of Technology (QUT)  
* **Course:** IFQ636  

---