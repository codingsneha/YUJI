
---

# YUJI Client

Welcome to the client-side of **YUJI**! This repository contains the frontend code for the YUJI application, a platform designed to enhance wellbeing and foster connections through community and personal tools.

## 📂 Project Structure

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

## 🚀 Getting Started

To get the client up and running locally, follow these steps:

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
4. **Run the development server**:
   ```bash
   npm start
   ```

The client will be accessible at `http://localhost:3000`.

## 🧩 Project Code

- **`public/`**: Contains static files like HTML, images, and favicon.
- **`src/`**: Main source code directory.
  - **`assets/`**: Images and other static assets.
  - **`components/`**: Reusable UI components.
  - **`helpers/`**: Utility functions and API calls.
  - **`layout/`**: Layout components and configurations.
  - **`pages/`**: Page components for different routes.
  - **`redux/`**: Redux store configuration and slices.
  - **`routes/`**: Routing configurations.
- **`tailwind.config.js`**: Tailwind CSS configuration file.

---
