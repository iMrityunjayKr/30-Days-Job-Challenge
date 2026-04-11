# React Todo App

A clean and minimal todo application built with React as part of my **30-Day Frontend Job-Ready Challenge** (Days 12–13).

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)

🔗 **[Live Demo](https://react-to-do-app-mrityunjay.vercel.app/)**

---

## Description

A task management app where users can add, complete, and delete tasks. Data persists across page reloads using localStorage — so your tasks are never lost.

---

## Features

- ✅ Add a new task
- ✅ Mark a task as complete (strikethrough on click)
- ✅ Delete a task
- ✅ Data persistence with localStorage
- ✅ Prevents adding empty tasks

---

## Tech Stack

| Technology        | Usage                   |
| ----------------- | ----------------------- |
| React 18          | UI and state management |
| JavaScript (ES6+) | Logic and array methods |
| CSS               | Styling and layout      |
| localStorage      | Client-side persistence |

---

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/iMrityunjayKr/react-todo-app

# 2. Navigate into the project
cd react-todo-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── App.jsx
├── App.css
└── component/
    ├── Heading.jsx
    ├── TaskInput.jsx
    └── Todolist.jsx
```

---

## What I Learned

- **State management** — choosing the right data type for each `useState` variable
- **Immutable state updates** — never mutating arrays directly, always creating new copies
- **Array methods** — using `filter` to delete and `map` to transform todos
- **Event bubbling** — using `e.stopPropagation()` to prevent child clicks from triggering parent handlers
- **Controlled inputs** — binding `value={state}` so React owns the input
- **localStorage** — persisting data with `JSON.stringify` and `JSON.parse`
- **useEffect** — syncing state changes to localStorage via the dependency array

---

## Part of My 30-Day Challenge

| Day   | Project                                  |
| ----- | ---------------------------------------- |
| 1–11  | Weather App (React + OpenWeatherMap API) |
| 12–13 | Todo App (this project)                  |
| 14+   | Coming soon...                           |

---

> Built by Mrityunjay — learning in public, one project at a time. 🚀
