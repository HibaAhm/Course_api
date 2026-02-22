<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

[![Node.js](https://img.shields.io/badge/node-%3E=18.x-green)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/framework-NestJS-red)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)](https://www.typescriptlang.org/)
[![NPM Version](https://img.shields.io/npm/v/@nestjs/core.svg)](https://www.npmjs.com/package/@nestjs/core)
[![License](https://img.shields.io/npm/l/@nestjs/core.svg)](https://opensource.org/licenses/MIT)
[![CircleCI](https://img.shields.io/circleci/build/github/nestjs/nest/master)](https://circleci.com/gh/nestjs/nest)
[![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)](https://discord.gg/G7Qnnhy)

<p align="center">
A clean, modular <a href="https://nodejs.org/" target="_blank">Node.js</a> REST API built with <a href="https://nestjs.com/" target="_blank">NestJS</a> to manage courses.
</p>

---

## 📚 Course API Overview
Course API is a RESTful backend system to manage courses.  
It demonstrates modular architecture, DTO validation, proper HTTP status handling, and clean separation of concerns.

**Key Features:**
- Retrieve all courses
- Retrieve a course by ID (404 if not found)
- Create a new course
- DTO validation using `class-validator`
- Proper HTTP status codes (200, 201, 400, 404)
- In-memory data storage
- Clean module/controller/service structure

---

## 🛠 Tech Stack
- **Framework:** NestJS  
- **Runtime:** Node.js  
- **Language:** TypeScript  
- **Validation:** class-validator  
- **Architecture:** Modular + Dependency Injection  
- **API Style:** REST  

---

___
## 📂 Project Structure
src/
├── courses/
│ ├── courses.controller.ts
│ ├── courses.service.ts
│ ├── courses.module.ts
│ └── dto/
│ └── create-course.dto.ts
├── app.module.ts
└── main.ts



* * *

___



## 📌 API Endpoints

### GET /courses
Returns all courses.  
**Response:** `200 OK`  
Example: `http://localhost:3000/courses`

### GET /courses/:id
Returns a course by ID.  
**Responses:** `200 OK` or `404 Not Found`  
Example: `http://localhost:3000/courses/1`

### POST /courses
Creates a new course.  
**Request Body:**
```json
{
  "title": "NestJS Fundamentals",
  "level": "Beginner",
  "duration": "6 weeks"
}
Responses: 201 Created or 400 Bad Request
```
⚙️ Installation & Setup
```
git clone https://github.com/HibaAhm/Course_api.git
cd Course_api
npm install
npm run start:dev
Server runs at: http://localhost:3000
```
---
Swagger API Documentation

If Swagger is enabled in main.ts, docs are at:
http://localhost:3000/docs

Install Swagger:
```

npm install @nestjs/swagger swagger-ui-express
```

Then configure it inside main.ts following the NestJS Swagger docs.
---

🧪 Testing

Test API endpoints using:

Postman

Thunder Client (VS Code)

curl

Browser (GET endpoints)
---

🧠 Concepts Practiced

REST API design

DTO validation

Exception handling

Dependency Injection

Modular architecture

Type-safe development with TypeScript
---

📈 Future Improvements

PUT /courses/:id (update)

DELETE /courses/:id (delete)

Unit tests (Jest)

Database integration (PostgreSQL / MongoDB)

JWT Authentication

Production configuration
---

👩‍💻 Author

Hiba Ahmedhussen
Software Engineering Student
---

📄 License

This project is for learning and technical assessment purposes. MIT License.


