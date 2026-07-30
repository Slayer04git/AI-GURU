# 🧠 AI GURU

AI GURU is an AI-powered coding assistant that helps developers solve programming problems, debug code, and learn new concepts through natural language conversations. It leverages the Groq API to provide fast AI responses while securely managing user authentication and chat history.

---

## 🚀 Features

- 🤖 AI-powered coding assistant using Groq LLM
- 💬 Interactive real-time chat interface
- 🔐 Secure JWT-based user authentication
- 👤 User registration and login system
- 📝 Persistent chat history using MongoDB
- ⚡ Fast backend APIs built with Express.js
- 📱 Responsive and modern UI built with Next.js
- 🔒 Password encryption using bcrypt
- 🌐 RESTful API architecture

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | Next.js, React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| AI | Groq API |
| State Management | Zustand |

---

## 📂 Project Structure

```
AI-GURU/
│
├── client/              # Next.js Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Server/              # Express Backend
│   ├── Routes/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Slayer04git/AI-GURU.git
cd AI-GURU
```

### Install Backend

```bash
cd Server
npm install
```

### Install Frontend

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `Server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key
```

> Never commit your `.env` file to GitHub.

---

## ▶️ Running the Project

### Start Backend

```bash
cd Server
npm start
```

### Start Frontend

```bash
cd client
npm run dev
```

The application will be available at:

```
Frontend : http://localhost:3000

Backend  : http://localhost:5000
```

---

## 📸 Key Functionalities

- User Signup & Login
- AI Chat Assistant
- Chat History Storage
- Secure Authentication
- RESTful API Integration
- Responsive User Interface

---

## 🔒 Security

- JWT Authentication
- Password Hashing using bcrypt
- Environment Variable Protection
- MongoDB Secure Connection

---

## 📌 Future Improvements

- Code Editor with Syntax Highlighting
- Multiple AI Model Support
- Voice-Based AI Assistant
- Dark/Light Theme Toggle
- Code Execution Sandbox
- Chat Export (PDF)

---

## 👨‍💻 Author

-**Parth Randar**
-**Karambir**

-GitHub: https://github.com/Slayer04git
-GitHub: https://github.com/karambirstudentece24-arch
