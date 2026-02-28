# 📊 TaskFlow — Task & Business Management Dashboard

> **Plan, prioritize, and accomplish your tasks with ease.** TaskFlow is a full-stack dashboard application that helps teams manage users, products, and analytics — all in one clean, modern interface.

![TaskFlow Banner](https://placehold.co/1200x400/6366f1/ffffff?text=TaskFlow+Dashboard)

---

## 🌐 Live Demo

- **Live Site:** [TaskFlow](https://modern-task-flow.netlify.app/)
- **Server Repo:** [Server](https://task-api-eight-flax.vercel.app/)

---

> **Demo Credentials**
>
> ```
> Email: abdullahshamim@gmail.com
> password: 1234Asdf
> Don't need to copy it , there is a dummy login on login page. Thank you!
> ```

---

## ✨ Features

- 🔐 **Firebase Authentication** — secure login with JWT token verification
- 📊 **Overview Dashboard** — stat cards with animated counters (users, revenue, growth)
- 👥 **User Management** — view, filter, and manage all users with status badges
- 📦 **Product Management** — full CRUD table with details, edit, and delete modals
- 📈 **Analytics Page** — line chart (views over time) + bar chart (clicks vs conversions)
- 🌙 **Dark / Light Mode** — DaisyUI theme switching built-in
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop
- 🔒 **Protected Routes** — dashboard inaccessible without login
- ⏱ **Time Tracker Widget** — track time spent on tasks
- 🔄 **Axios Interceptors** — auto-attach Bearer token, auto-logout on 401/403

---

## 🖼 Screenshots

### Login Page

![Login Page](/public/image.png)

### Dashboard Overview

![Dashboard](/public/overview.png)

### Analytics

![Analytics](/public/analytics.png)

### Products Table

![Products](/public/products.png)

> 📌 _Replace placeholder images with actual screenshots before submitting._

---

## 🏗 System Overview

```
┌─────────────────────────────────────────────────────┐
│                     TaskFlow                        │
│                                                     │
│   React Frontend          REST API Backend          │
│   ─────────────          ────────────────           │
│   Login Page        →    POST /api/login            │
│   Dashboard         →    GET  /api/overview         │
│   Users Page        →    GET  /api/users            │
│   Products Page     →    GET  /api/products         │
│   Analytics Page    →    GET  /api/analytics        │
│                                                     │
│   Firebase Auth → JWT Token → Axios Interceptor     │
└─────────────────────────────────────────────────────┘
```

---

## 🛠 Tech Stack

### Frontend

| Technology                                                | Purpose                       |
| --------------------------------------------------------- | ----------------------------- |
| [React](https://react.dev/)                               | UI framework                  |
| [Vite](https://vitejs.dev/)                               | Build tool                    |
| [React Router v7](https://reactrouter.com/)               | Client-side routing           |
| [Tailwind CSS](https://tailwindcss.com/)                  | Utility-first styling         |
| [DaisyUI](https://daisyui.com/)                           | Component library + theming   |
| [Recharts](https://recharts.org/)                         | Charts and graphs             |
| [Axios](https://axios-http.com/)                          | HTTP client with interceptors |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library                  |

### Backend / Services

| Technology                                    | Purpose                    |
| --------------------------------------------- | -------------------------- |
| [Firebase Auth](https://firebase.google.com/) | Authentication & JWT token |
| [Vercel](https://vercel.com/)                 | API hosting                |

---

## 📁 Project Structure

```
taskflow/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useAuth.jsx         # Firebase auth context
│   │   ├── useSecure.jsx       # Axios interceptor hook
│   │   ├── useAnalytics.jsx    # Fetch analytics data
│   │   ├── useUsers.jsx        # Fetch users data
│   │   └── useProducts.jsx     # Fetch products data
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   └── Dashboard/
│   │       ├── Dashboard.jsx   # Overview
│   │       ├── Users.jsx
│   │       ├── Products.jsx
│   │       ├── Analytics.jsx
│   │       └── AddProduct.jsx
│   ├── router/
│   │   └── router.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env.local
├── .env.example
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Local Setup

### Prerequisites

- Node.js `v18+`
- npm or yarn
- A Firebase project ([create one here](https://console.firebase.google.com/))

### 1. Clone the repository

```bash
git clone https://github.com/abdullah-shamim-2004/TaskFlow
cd taskflow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your Firebase credentials in `.env.local` (see below).

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
# .env.example

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# API Base URL
VITE_API_BASE_URL=https://task-api-eight-flax.vercel.app
```

> ⚠️ Never commit your `.env.local` file. It is already listed in `.gitignore`.

---

## 🚀 Run Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🔌 API Endpoints

Base URL: `https://task-api-eight-flax.vercel.app`

| Method | Endpoint            | Description                                 | Auth Required |
| ------ | ------------------- | ------------------------------------------- | ------------- |
| `POST` | `/api/login`        | Login and receive JWT token                 | ❌            |
| `GET`  | `/api/overview`     | Dashboard summary stats                     | ✅            |
| `GET`  | `/api/users`        | List all users                              | ✅            |
| `GET`  | `/api/users/:id`    | Get single user by ID                       | ✅            |
| `GET`  | `/api/products`     | List all products                           | ✅            |
| `GET`  | `/api/products/:id` | Get single product by ID                    | ✅            |
| `GET`  | `/api/analytics`    | Analytics data (views, clicks, conversions) | ✅            |
| `GET`  | `/api/dashboard`    | All data combined                           | ✅            |

### Auth Header Format

```
Authorization: Bearer <your_jwt_token>
```

---

## 🧠 Challenges & Solutions

| Challenge                                | Solution                                                               |
| ---------------------------------------- | ---------------------------------------------------------------------- |
| JWT token expiry causing silent failures | Added Axios response interceptor to auto-logout on 401/403             |
| Charts not rendering on initial load     | Used `useEffect` with `setTimeout` to trigger animation after mount    |
| Dark mode flicker on refresh             | Applied DaisyUI `data-theme` attribute on `<html>` with `localStorage` |
| Protected routes redirect loop           | Used `isLoading` state in auth context before rendering routes         |

---

## 🔮 Future Improvements

- [ ] Add `POST`, `PUT`, `DELETE` endpoints to the backend for full CRUD
- [ ] Real-time notifications with WebSocket or Firebase Realtime Database
- [ ] Export analytics data as CSV or PDF
- [ ] Add pagination to Users and Products tables
- [ ] Unit and integration tests with Vitest + React Testing Library
- [ ] Role-based access control (Admin vs User)
- [ ] Search and filter functionality across all pages

---

## 👨‍💻 Author

**Your Name**

- 🌐 Portfolio: [your-portfolio.com](https://abdullah-shamim-portfolio.netlify.app/)
- 💼 LinkedIn: [linkedin.com/in/your-profile](https://www.linkedin.com/in/abdullah-shamim-patwary/)
- 📧 Email: your.abdullahshamim884@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Made with ❤️ by <strong>Your Name</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
