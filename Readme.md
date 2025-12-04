# 🍽️ Recipe App

A User Authentication and Authorization with Bearer Token, built using Node.js, Express.js, and MongoDB, JWT for secure access to recipe management features.The project follows the MVC architecture and includes Postman documentation for easy testing.

## 📁 Folder Structure

```
NODE_JS_02-12-25/
│
├── Controllers/
│   └── user.controller.js
│
├── Database/
│   └── dbconfig.js
│
├── Middleware/
│   └── Middleware.js
│
├── Models/
│   └── user.schema.js
│
├── Routers/
│   └── user.router.js
│
├── Utils/
│
├── node_modules/
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── Readme.md
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | ➕ SignIn |
| POST | `/api/auth/login` | 📄 Login |
| GET | `/api/auth/userdetails` | This for auth |
|

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Postman for API testing


## ✅ Features

- ✔ MVC Design Pattern
- ✔ MongoDB Integration
- ✔ JWT Authentication
- ✔ RESTful API Endpoints
- ✔ Error Handling

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Configure `.env` file
3. Run server: `node index.js`
4. Test API using Postman
## 📄 Postman Documentation
Postman documentation is available [click here](https://documenter.getpostman.com/view/50373235/2sB3dPRADS).