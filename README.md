# SoftwareHouse_Website-AI-Solution-_React_Node.js-_Mongo

📘 AI Solutions Web App (MERN Stack)
📌 Project Overview
AI Solutions is a full-stack MERN application offering AI-powered services, blog posts, events with bookings, and a secure admin dashboard. Users can explore content, book events, submit inquiries with file uploads, and leave comments. Admins can manage all submitted data via a dedicated dashboard.
📁 Folder Structure

ai_solutions/
├── backend/                      # Express + MongoDB API
│   ├── controllers/              # Logic for services, events, contact, comments, etc.
│   ├── models/                   # Mongoose schemas (Service, Event, Comment, etc.)
│   ├── routes/                   # API routes
│   ├── middleware/               # File upload logic, auth, etc.
│   ├── uploads/                  # Uploaded images and Word files
│   └── server.js                 # Express server entry
│
├── frontend/                     # Public Website (React + Bootstrap)
│   ├── pages/                    # Home, Blogs, Services, Events, ContactUs
│   ├── components/               # Navbar, Footer, Cards, etc.
│   ├── styles/                   # Custom CSS
│   └── App.js                    # React Router setup
│
├── admin-panel/                  # Admin Dashboard (React)
│   ├── pages/                    # Dashboard, ManageBlogs, ManageComments, etc.
│   ├── components/               # AdminNavbar, AdminLayout
│   └── App.js                    # Admin routing

🚀 How to Run the App

1. Clone the Project
   git clone https://github.com/your-username/ai-solutions.git
   cd ai-solutions

2. Set Up Environment Variables (backend/.env)
   MONGO_URI=mongodb://localhost:27017/ai_solutions
   JWT_SECRET=your_jwt_secret_key
   PORT=5001

3. Install Dependencies
   cd backend && npm install
   cd ../frontend && npm install
   cd ../admin-panel && npm install

4. Start All Servers
   Terminal 1: cd backend && npm start
   Terminal 2: cd ../frontend && npm start
   Terminal 3: cd ../admin-panel && npm start

   Access:
   - Public Website: http://localhost:3000
   - Admin Dashboard: http://localhost:3001
   - Backend API: http://localhost:5001
Admin Login : (thant-zin-soe-premium@gmail.com)| 123123
(remove ‘-’ in email u wont able to use forgot password feature because its’ my own mail and I didn’t add feature for  creating new admin )
✨ Features

🌍 Public Site
- Beautiful Home page with highlights
- Blogs with image, title, short description & full view
- AI Services page with detailed listings
- Events page with event booking
- Contact Us form with Word file + multiple image uploads
- Comment system on Services and Events

🛠️ Admin Dashboard
- Login system with token-based auth
- Dashboard overview for demo/event submissions
- Manage: Blogs, Services, Events, Comments, Contact Messages
- File download, message status tracking, and deletion

🔐 Security & Upload Notes

- File upload handled using Multer
- Uploaded files stored in /backend/uploads/
- Passwords hashed with bcrypt
- Admin token stored in browser localStorage
- Routes secured using middleware (if expanded)

📚 Requirements

- Node.js v16+
- MongoDB
- React (React Router)
- Express.js
- Multer, Bcrypt, JWT
- Bootstrap (React-Bootstrap for frontend)
