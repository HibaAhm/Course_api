<p align="center">
  <h1 align="center">📚 Course API</h1>
  <p align="center">
    A RESTful backend API built with 
    <a href="https://nestjs.com/" target="_blank">NestJS</a> and 
    <a href="https://nodejs.org/" target="_blank">Node.js</a>
    for managing course data.
  </p>
</p>

---

## 🚀 Overview

<p>
Course API is a simple backend system that allows users to:
</p>

<ul>
  <li>Retrieve all courses</li>
  <li>Retrieve a course by ID</li>
  <li>Create a new course</li>
</ul>

<p>
It is built using a modular structure and follows REST principles.
</p>

---

## 🛠 Tech Stack

<ul>
  <li><strong>Framework:</strong> <a href="https://nestjs.com/" target="_blank">NestJS</a></li>
  <li><strong>Runtime:</strong> <a href="https://nodejs.org/" target="_blank">Node.js</a></li>
  <li><strong>Language:</strong> TypeScript</li>
  <li><strong>Architecture:</strong> Modular + Dependency Injection</li>
  <li><strong>API Type:</strong> RESTful API</li>
</ul>

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
📌 API Endpoints
🔹 Get All Courses
GET /courses

Example:

http://localhost:3000/courses
🔹 Get Course by ID
GET /courses/:id

Example:

http://localhost:3000/courses/1
🔹 Create a Course
POST /courses

Request Body (JSON):

{
  "title": "NestJS Fundamentals",
  "level": "Beginner",
  "duration": "6 weeks"
}
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/HibaAhm/Course_api.git
cd Course_api
2️⃣ Install dependencies
npm install
3️⃣ Run in development mode
npm run start:dev

Server will start at:

http://localhost:3000
🧪 Testing the API

You can test endpoints using:

<ul> <li>Browser (for GET requests)</li> <li>Postman</li> <li>Thunder Client (VS Code extension)</li> <li>curl</li> </ul>
🧠 Concepts Practiced
<ul> <li>Controllers</li> <li>Services</li> <li>Modules</li> <li>Dependency Injection</li> <li>DTOs (Data Transfer Objects)</li> <li>Route Parameters</li> <li>HTTP Status Codes</li> <li>TypeScript typing</li> </ul>
📈 Future Improvements
<ul> <li>Add PUT (update course)</li> <li>Add DELETE endpoint</li> <li>Integrate database (MongoDB or PostgreSQL)</li> <li>Add validation with class-validator</li> <li>Add authentication (JWT)</li> <li>Add Swagger documentation</li> </ul>
👩‍💻 Author
<p> Developed by <strong>Hiba Ahmedhussen</strong><br/> Software Engineering Student </p>
📜 License
<p> This project is for learning and educational purposes. </p> ```