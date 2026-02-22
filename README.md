
# 📚 Course API

![Node](https://img.shields.io/badge/node-%3E=18.x-green)
![NestJS](https://img.shields.io/badge/framework-NestJS-red)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A clean and minimal RESTful API built with [NestJS](https://nestjs.com/) and [Node.js](https://nodejs.org/) for managing course data.

This project demonstrates modular architecture, DTO validation, proper HTTP status handling, and clean separation of concerns.

---

## 🚀 Features

- Retrieve all courses
- Retrieve a course by ID (404 if not found)
- Create a new course
- DTO validation using `class-validator`
- Proper HTTP status codes (200, 201, 400, 404)
- In-memory data storage
- Clean module / controller / service structure

---

## 🛠 Tech Stack

- **Framework:** NestJS
- **Runtime:** Node.js
- **Language:** TypeScript
- **Validation:** class-validator
- **Architecture:** Modular + Dependency Injection
- **API Style:** REST

---


## 📂 Project Structure

```bash
src/
 ├── courses/
 │    ├── courses.controller.ts
 │    ├── courses.service.ts
 │    ├── courses.module.ts
 │    └── dto/
 │         └── create-course.dto.ts
 ├── app.module.ts
 └── main.ts

---

---

## 📌 API Endpoints

### 1️⃣ GET /courses

Returns all courses.

**Response:** `200 OK`

---

### 2️⃣ GET /courses/:id

Returns a single course by ID.

**Responses:**
- `200 OK`
- `404 Not Found`

Example:GET http://localhost:3000/courses/1


---

### 3️⃣ POST /courses

Creates a new course.

**Request Body:**

```json
{
  "title": "Intro to HTML",
  "level": "Beginner",
  "duration": "4 weeks"
}

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/HibaAhm/Course_api.git
cd Course_api
2. Install dependencies
npm install
3. Run in development mode
npm run start:dev

The server will start at:

http://localhost:3000

Swagger API Documentation 

If Swagger is enabled in main.ts, documentation will be available at:

http://localhost:3000/docs

To enable Swagger, install:

npm install @nestjs/swagger swagger-ui-express

Then configure it inside main.ts.

🧪 Testing

You can test the API using:

Postman

Thunder Client

curl

Browser (GET endpoints)

🧠 Concepts Demonstrated

REST API design

DTO validation

Exception handling

Dependency Injection

Modular architecture

Type-safe development with TypeScript

📈 Future Improvements

PUT /courses/:id (update)

DELETE /courses/:id (delete)

Unit tests (Jest)

Database integration (PostgreSQL / MongoDB)

JWT Authentication

Production configuration

👩‍💻 Author

Hiba Ahmedhussen
Software Engineering Student

License

This project is created for learning and technical assessment purposes.