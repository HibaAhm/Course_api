<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

[![Node.js](https://img.shields.io/badge/node-%3E=18.x-green)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/framework-NestJS-red)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)](https://www.typescriptlang.org/)
[![Swagger](https://img.shields.io/badge/API-Documented%20with%20Swagger-brightgreen)]
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]

<p align="center">
A clean, modular <b>Node.js REST API</b> built with <b>NestJS</b> to manage courses, including full CRUD operations and Swagger documentation.
</p>

---

# 📚 Course API Overview

Course API is a RESTful backend system to manage courses.  
It demonstrates modular architecture, DTO validation, proper HTTP status handling, Swagger integration, and clean separation of concerns.

## ✅ Features

- Retrieve all courses
- Retrieve a course by ID (404 if not found)
- Create a new course
- Update a course (PUT)
- Delete a course (DELETE)
- DTO validation using `class-validator`
- Proper HTTP status codes (200, 201, 400, 404)
- Swagger API documentation
- In-memory data storage
- Clean module/controller/service structure

---

# 🛠 Tech Stack

- **Framework:** NestJS  
- **Runtime:** Node.js  
- **Language:** TypeScript  
- **Validation:** class-validator  
- **Documentation:** Swagger (@nestjs/swagger)  
- **Architecture:** Modular + Dependency Injection  
- **API Style:** REST  

---

# 📂 Project Structure

```
src/
├── courses/
│   ├── courses.controller.ts
│   ├── courses.service.ts
│   ├── courses.module.ts
│   └── dto/
│       ├── create-course.dto.ts
│       └── update-course.dto.ts
├── app.module.ts
└── main.ts
```

---

# 📌 API Endpoints

### GET /courses
Returns all courses  
**Response:** `200 OK`

---

### GET /courses/:id
Returns a course by ID  
**Responses:** `200 OK` | `404 Not Found`

---

### POST /courses
Creates a new course  
**Response:** `201 Created` | `400 Bad Request`

```json
{
  "title": "NestJS Fundamentals",
  "level": "Beginner",
  "duration": "6 weeks"
}
```

---

### PUT /courses/:id
Updates an existing course  
**Response:** `200 OK` | `404 Not Found`

---

### DELETE /courses/:id
Deletes a course  
**Response:** `200 OK` | `404 Not Found`

---

# ⚙️ Installation & Setup

```bash
git clone https://github.com/HibaAhm/Course_api.git
cd Course_api
npm install
npm run start:dev
```

Server runs at:

```
http://localhost:3000
```

---

# 📖 Swagger API Documentation

Interactive API documentation is available at:

```
http://localhost:3000/docs
```

To install Swagger:

```bash
npm install @nestjs/swagger swagger-ui-express
```

Swagger is configured inside `main.ts`.

---

# 🧪 Testing

You can test the API using:

- Postman  
- Thunder Client (VS Code)  
- curl  
- Browser (GET endpoints)  
- Swagger UI  

---

# 🧠 Concepts Practiced

- REST API design  
- DTO validation  
- Exception handling  
- Dependency Injection  
- Modular architecture  
- Swagger documentation  
- Type-safe development with TypeScript  

---

# 📈 Future Improvements

- Database integration (PostgreSQL / MongoDB)
- Unit testing (Jest)
- JWT Authentication
- Pagination & filtering
- Production configuration

---

# 👩‍💻 Author

Hiba Ahmedhussen  
Software Engineering Student  

---

# 📄 License

This project is for learning and technical assessment purposes.  
MIT License.