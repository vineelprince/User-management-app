# User Management App

A modern and responsive full-stack User Management System built using the MERN Stack. This application enables users to create, manage, and view user profiles through a clean and professional dashboard interface.

---

# Live Demo

## Frontend
https://user-management-app-frontend-dima.onrender.com

## Backend API
https://user-management-app-w5uf.onrender.com

---

# Core Features

- Create new users
- View all users
- View individual user details
- Responsive modern UI
- REST API integration
- MongoDB database connectivity
- Error handling
- Loading states
- Clean folder structure
- Professional dashboard interface

---

# Technology Stack

## Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Vite

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

## Deployment
- Render (Frontend + Backend)
- MongoDB Atlas

---

# Project Structure

```bash
USER-MANAGEMENT/
│
├── backend/
│   ├── APIs/
│   ├── models/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│
└── README.md
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/vineelprince/User-management-app.git
```

---

# Backend Setup

## Navigate to Backend Directory

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
DB_URL=your_mongodb_connection_string
PORT=4000
```

## Start Backend Server

```bash
npm start
```

---

# Frontend Setup

## Navigate to Frontend Directory

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=http://localhost:4000
```

## Start Frontend Application

```bash
npm run dev
```

---

# API Endpoints

## Get All Users

```http
GET /user-api/users
```

## Create User

```http
POST /user-api/users
```

---

# Application Modules

## Home Page
- Professional dashboard layout
- Live user statistics
- Fully responsive interface

## Users List
- Responsive user cards
- User detail previews
- Structured grid layout

## Add User
- User creation workflow
- Validation support
- Modern form interface

---

# Environment Variables

## Backend `.env`

```env
DB_URL=your_mongodb_connection_string
PORT=4000
```

## Frontend `.env`

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

# Deployment Guide

# Backend Deployment (Render)

## Configuration

### Root Directory

```bash
backend
```

### Build Command

```bash
npm install
```

### Start Command

```bash
npm start
```

---

# Frontend Deployment (Render)

## Configuration

### Root Directory

```bash
frontend
```

### Build Command

```bash
npm install && npm run build
```

### Publish Directory

```bash
dist
```

---

# Future Enhancements

- User Authentication
- Edit User Feature
- Delete User Feature
- Search Functionality
- Pagination
- Dark Mode
- Toast Notifications
- Dashboard Analytics
- User Profile Images

---

# Author

## VINEEL KRISHNA

- B.Tech Information Technology Student

## GitHub

https://github.com/vineelprince

---

# License

This project is developed for educational and learning purposes.

---
