
---

# YUJI Server

Welcome to the server-side of **YUJI**! This repository contains the backend code for the YUJI application, which provides APIs, authentication, and real-time chat functionalities to support the frontend client.

## 📂 Project Structure

```
server/
├── .env
├── index.js
├── package-lock.json
├── package.json
├── config/
│   └── connectDB.js
├── controller/
│   ├── checkEmail.js
│   ├── checkPassword.js
│   ├── logout.js
│   ├── postController.js
│   ├── registerUser.js
│   ├── searchUser.js
│   ├── updateUserDetails.js
│   └── userDetails.js
├── helpers/
│   ├── getConversation.js
│   ├── getUserDetailsFromToken.js
│   └── openAIHelper.js
├── models/
│   ├── ConversationModel.js
│   ├── PostModel.js
│   └── UserModel.js
├── routes/
│   ├── index.js
│   └── yuuRoute.js
└── socket/
    └── index.js
```

## 🚀 Getting Started

To get the server up and running locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/yuji-server.git
   ```
2. **Navigate to the server directory**:
   ```bash
   cd yuji/server
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   Create a `.env` file in the root of the `server/` directory and add the following variables:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   FRONTEND_URL=http://localhost:3000
   JWT_SECRET=your_jwt_secret
   ```
5. **Run the server**:
   ```bash
   npm start
   ```

The server will be accessible at `http://localhost:8080`.

## 🧩 Project Code

- **`config/`**: Configuration files for database and other settings.
- **`controller/`**: Controllers for handling various API endpoints.
- **`helpers/`**: Utility functions and helper methods.
- **`models/`**: Mongoose models for MongoDB collections.
- **`routes/`**: API routes and route configurations.
- **`socket/`**: Socket.io server code for real-time communication.

## 🔧 Dependencies

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **Socket.io**: Real-time communication library.
- **jsonwebtoken**: For handling JSON Web Tokens.
- **dotenv**: To load environment variables from a `.env` file.


---
