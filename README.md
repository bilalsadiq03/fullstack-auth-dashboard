# Full-Stack Auth Dashboard


A modern, scalable full-stack web application featuring secure authentication, a protected dashboard, and task management with **optimistic UI updates**.

Built as part of a **Internship assignment**, this project demonstrates clean architecture, real-world engineering practices, and production-ready UI/UX.

## Features

### Authentication
- User registration & login
- JWT-based authentication
- Password hashing using bcrypt
- Protected dashboard routes
- Secure logout flow

###  Dashboard
- Personal user dashboard
- Create, update, delete tasks
- Mark tasks as **completed / pending**
- Clear visual differentiation between completed and incomplete tasks
- Task statistics (total, pending, completed)

### User Experience
- Optimistic UI updates for instant feedback
- Toast notifications for success & error states

### Engineering & Scalability
- Feature-based frontend architecture
- Centralized API and authentication utilities
- React Query for caching, background sync, and mutations

---

##  Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **TanStack Query (React Query)**
- **React Hook Form + Zod**
- **Sonner (Toast notifications)**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT Authentication**
- **bcrypt**

---

## 🗂 Project Structure

frontend/
├── app/
│ ├── (auth)/
│ │ ├── login/
│ │ └── register/
│ ├── dashboard/
│ └── page.tsx
│
├── features/
│ ├── auth/
│ │ ├── api.ts
│ │ ├── hooks.ts
│ │ ├── schemas.ts
│ │ └── components/
│ └── tasks/
│ ├── api.ts
│ ├── hooks.ts
│ ├── schemas.ts
│ └── components/
│
├── components/
│ └── ui/ # shadcn components
│
├── lib/
│ ├── api.ts
│ ├── auth.ts
│ └── providers.tsx

This structure is designed to support **scalability**, **feature isolation**, and long-term maintainability.

---

## Optimistic UI (Key Highlight)

Task creation, deletion, and completion toggling are implemented using **optimistic updates**:

- UI updates instantly
- Backend sync happens in the background
- Automatic rollback on failure

This approach improves perceived performance and reflects real-world production behavior.

---

##  API Endpoints

### Authentication
POST  `/api/auth/register`
POST  `/api/auth/login` 

### Tasks
GET `/api/tasks` 
POST `/api/tasks` 
PUT `/api/tasks/:id`
DELETE `/api/tasks/:id`

> All task routes are protected using JWT authentication.

---

## Setup Instructions

### 1 Clone the Repository
```bash
git clone https://github.com/bilalsadiq03/fullstack-auth-dashboard
cd fullstack-auth-dashboard 
```

### 2 Backend Setup
```bash
cd backend
npm install
```

Create a .env file:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend:
``` bash
npm run dev
```

### 3️ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend will run on: http://localhost:3000