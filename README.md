# 📝 TaskFlow - To-Do Manager

A modern, minimal To-Do web application built with **Next.js 14** + **TypeScript** + **Tailwind CSS**.  
*Designed to showcase clean architecture and professional frontend development skills.*

---

## ✨ Features

- ✅ **Add, Edit & Delete** tasks with ease  
- ✅ **Mark tasks as completed** with visual feedback  
- ✅ **Priority levels** (High, Medium, Low) with color coding  
- ✅ **Due dates** with overdue detection  
- ✅ **Filter tasks** — All, Completed, Pending  
- ✅ **Light & Dark mode** toggle  
- ✅ **Responsive design** (mobile + desktop)  
- ✅ **LocalStorage persistence** — tasks survive page reload  
- ✅ **Smooth animations** for modern UX  

---

## 📸 Screenshots

| Light Mode | Dark Mode | Mobile |
|:----------:|:---------:|:------:|
| ![Light](screenshots/light.png) | ![Dark](screenshots/dark.png) | ![Mobile](screenshots/mobile.png) |

> 📌 *Add your app screenshots to the `/screenshots` folder*

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **State** | React Hooks (useState, useEffect, useCallback) |
| **Storage** | LocalStorage |

---

## 📁 Project Structure

```
todo-app/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Home page (task list)
│   └── globals.css         # Global styles
├── components/             # Reusable UI components
│   ├── Navbar.tsx
│   ├── TaskItem.tsx
│   ├── TaskList.tsx
│   ├── TaskForm.tsx
│   ├── FilterTabs.tsx
│   └── EmptyState.tsx
├── hooks/                  # Custom React hooks
│   └── useTasks.ts         # Task CRUD logic
├── lib/                    # Utilities
│   ├── storage.ts          # LocalStorage functions
│   └── utils.ts            # Helper functions
├── types/                  # TypeScript types
│   └── task.ts
└── public/screenshots/     # App screenshots
```

---

## 🚀 Setup & Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/TaskFlow-ToDo.git
cd TaskFlow-ToDo

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🔮 Future Improvements

- 🔔 Browser notifications for task reminders  
- ☁️ Cloud sync with Firebase/Supabase  
- 👤 User authentication  
- 📊 Task analytics dashboard  

---

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

<p align="center">
  Made with ❤️ for learning and portfolio showcase
</p>
# To-Do-Manager
