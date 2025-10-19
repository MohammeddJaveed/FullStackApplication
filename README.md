# 📱 Full Stack Mobile App

A full-stack **React Native + Node.js + Express + MongoDB** application that allows users to register, log in, create posts, manage their own posts, and edit their account details.  
Built with a clean architecture separating frontend, backend, and shared logic for scalability and maintainability.

---

## 🚀 Features

### 👤 User Features

- Register and log in securely using JWT authentication.
- View and update personal profile details.
- Logout functionality with session clearing.

### 📝 Posts Management

- Create, edit, and delete your own posts.
- View a list of your posts on the **My Posts** screen.
- Real-time post updates with Context API.
- Secure routes – only authenticated users can modify their posts.

---

## 🧱 Tech Stack

### Frontend (React Native)

- **React Native (0.81+)** with **TypeScript**
- **React Navigation** for screen routing
- **Axios** for API communication
- **Context API** for global state (Auth & Posts)
- **AsyncStorage** for token persistence
- **Lucide React Native / Heroicons** for icons
- **Moment.js** for date formatting
- Clean modular UI components

### Backend (Node.js + Express + MongoDB)

- **Express.js** for REST API
- **Mongoose** for database modeling
- **bcrypt** for password hashing
- **jsonwebtoken (JWT)** for authentication
- **dotenv** for environment management
- **CORS, Morgan, Colors** for middleware and logging

---

## 🗂️ Folder Structure

### 📱 Frontend

```
app/
├── App.tsx
├── context/
│ ├── AuthContext.tsx
│ ├── PostContext.tsx
├── Navigation/
│ ├── Navigation.tsx
├── components/
│ ├── EditModal.tsx
│ ├── InputBox.tsx
│ ├── PostCard.tsx
│ ├── SubmitButton.tsx
│ ├── menus/
│ │ ├── EditProfileMenu.tsx
│ │ ├── FooterMenu.tsx
├── screens/
│ ├── Account.tsx
│ ├── Home.tsx
│ ├── MyPosts.tsx
│ ├── Post.tsx
│ ├── About.tsx
```

---

### ⚙️ Backend

```
server/
├── config/
│ ├── db.js
├── controllers/
│ ├── PostController.js
│ ├── UserController.js
├── helpers/
│ ├── AuthHelper.js
├── models/
│ ├── PostModel.js
│ ├── UserModel.js
├── routes/
│ ├── PostRoute.js
│ ├── UserRoute.js
├── server.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MohammeddJaveed/FullStackApplication.git
cd FullStackApplication

cd server
npm install

Create a .env file in /server:

PORT=
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run the backend server:
npm run server


3️⃣ Frontend Setup

cd ../app
npm install

Run on iOS:
npm run ios
```

##API Endpoints Overview

```
| Method | Endpoint             | Description                        |
| ------ | -------------------- | ---------------------------------- |
| POST   | `/api/user/register` | Register a new user                |
| POST   | `/api/user/login`    | Authenticate user and return token |
| GET    | `/api/user/profile`  | Get user profile (protected)       |
| PUT    | `/api/user/update`   | Update user details                |
```

##Post Routes

```
| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/posts`     | Get all posts (protected) |
| POST   | `/api/posts`     | Create a new post         |
| PUT    | `/api/posts/:id` | Edit existing post        |
| DELETE | `/api/posts/:id` | Delete post               |

```

##Context Overview

```
AuthContext

Manages login, logout, token storage, and user state.

Provides authentication state across all screens.

PostContext

Manages user’s posts, including fetch, create, edit, and delete actions.

Integrates seamlessly with backend APIs.
```

##App Screens Overview

```
| Screen       | Description                               |
| ------------ | ----------------------------------------- |
| **Home**     | Main screen displaying app entry or feed. |
| **Post**     | Create a new post with content.           |
| **My Posts** | List and manage user’s own posts.         |
| **Account**  | View/edit profile and logout.             |
| **About**    | Display app or developer info.            |
```

##Author

```
Mohammed Javeed
📍 Dublin, Ireland
```
