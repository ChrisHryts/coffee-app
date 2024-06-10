 <h1>Coffee App</h1>
 
# Overview
The Coffee App is a web application for managing transactions related to coffee and cake purchases. It includes features for analyzing, filtering, and sorting transaction data. The application consists of a frontend built with React.js and a backend developed using Express with Prisma ORM for database operations.

Tech Stack

# Frontend:

React.js

Material-UI for styling

Axios for API requests


# Backend:

Express.js

Prisma ORM

PostgreSQL database


# Getting Started
To get started with the Coffee App project, follow these steps:

1. Clone the repository:
```javascript
git clone https://github.com/ChrisHryts/coffee-app.git
cd coffee-app
```

2. Install dependencies for both frontend and backend:
# Frontend
```javascript
cd frontend
npm install
```
# Backend
```javascript
cd ../backend
npm install
```
3. Set up the PostgreSQL database:

Create a PostgreSQL database named 'coffeedb'.

Update the database connection details in the backend .env file.

4. Run the migrations to create database tables:
```javascript
npx prisma migrate dev
```
5. Start the development servers:
# Frontend
```javascript
cd frontend
npm start
```
# Backend
```javascript
cd ../backend
npm start
```

6. Access the Coffee App in your browser at http://localhost:3000 (port 3000 or your opened port)

# Roadmap
Implement advanced filtering and sorting options.

Improve the user interface and user experience.

Add support for additional transaction categories.




