# YUJI <img src="https://github.com/user-attachments/assets/10be6554-1a98-473a-80e3-2bcbb5f298e4" width=40px>


## 📄 Project Documentation

For a comprehensive overview of the project check out [project overview PDF](docs/project_overview.pdf).


## 📦 Project Structure

### Client

```
client/
├── .env
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── assets/
│   │   ├── logo.png
│   │   ├── lotus.png
│   │   ├── wallpaper.jpeg
│   │   └── yuu.png
│   ├── components/
│   │   ├── Avatar.js
│   │   ├── Divider.js
│   │   ├── EditUserDetails.js
│   │   ├── Loading.js
│   │   ├── MessagePage.js
│   │   ├── PostsPage.js
│   │   ├── SearchUser.js
│   │   ├── Sidebar.js
│   │   ├── UserSearchCard.js
│   │   └── YuuChat.js
│   ├── helpers/
│   │   ├── uploadFile.js
│   │   └── yuuAPI.js
│   ├── layout/
│   │   └── index.js
│   ├── pages/
│   │   ├── CheckEmailPage.js
│   │   ├── CheckPasswordPage.js
│   │   ├── Forgotpassword.js
│   │   ├── Home.js
│   │   └── RegisterPage.js
│   ├── redux/
│   │   ├── store.js
│   │   └── userSlice.js
│   └── routes/
│       └── index.js
```

### Server

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

### Client

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/yuji-client.git
   ```
2. **Navigate to the client directory**:
   ```bash
   cd yuji/client
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   Create a `.env` file in the root of the `client/` directory and add the necessary variables:
   ```env
   REACT_APP_API_URL=http://localhost:8080
   REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   ```
5. **Run the client**:
   ```bash
   npm start
   ```

### Server

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
   OPENAI_API_KEY=your_openai_api_key
   ```
5. **Run the server**:
   ```bash
   npm start
   ```

## 🔍 Features

### Client

- **Authentication**: Register, login, and manage user accounts.
- **Real-time Chat**: Communicate with others using real-time messaging.
- **User Profiles**: View and edit user profiles.
- **Wellness Tools**: Track mood, sleep, tasks, and more with Yuu.
- **Community**: Connect with others through shared interests and support.

### Server

- **API Endpoints**: RESTful APIs for authentication, user management, and messaging.
- **Socket.io Integration**: Real-time chat and notifications.
- **Database Models**: Mongoose schemas for user data, conversations, and posts.
- **Authentication**: Secure user authentication using JSON Web Tokens (JWT).

## 📜 Documentation

### Client Documentation

- **Components**: Description of UI components and their usage.
- **Helpers**: Functions for API interactions and file uploads.
- **Redux**: State management setup and actions.

### Server Documentation

- **Controllers**: Explanation of controller functions and API logic.
- **Helpers**: Utility functions for user authentication and conversation handling.
- **Models**: Mongoose models for data management.
- **Socket Integration**: Setup and functionality of real-time communication.

## 🛠️ Development

For development, you can use tools like [Postman](https://www.postman.com/) for testing API endpoints and [Insomnia](https://insomnia.rest/) for managing HTTP requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🗨️ Feedback & Support

For feedback or support, please open an issue on [GitHub Issues](https://github.com/codingsneha/yuji/issues) or contact at [codingsneha@gmail.com](mailto:codingsneha@gmail.com).

---
