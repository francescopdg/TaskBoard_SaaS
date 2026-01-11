# TaskBoard (B2B SaaS)

A minimal **B2B task management SaaS** built with:

- **Frontend**: React + Vite + React Router
- **Auth / Orgs**: [Clerk](https://clerk.com/) (sign-in/up + organizations)
- **Backend**: FastAPI + SQLAlchemy
- **DB**: SQLite (dev)

The app provides an organization-scoped Kanban board (To Do / In Progress / Done) with role-based permissions.

---

## Features

- Clerk authentication (Sign in / Sign up)
- Organization switcher + multi-tenant data isolation via `org_id`
- Kanban board
  - Create / edit / delete tasks (based on org role/permissions)
  - Status: `pending`, `started`, `completed`
- FastAPI REST API with SQLAlchemy models

---

## Project structure

```
.
├── backend/              # FastAPI app (API, auth, models)
└── frontend/             # React app (UI)
```

Key backend modules:

- `backend/app/main.py` – FastAPI app + CORS + router inclusion
- `backend/app/api/tasks.py` – `/api/tasks` endpoints
- `backend/app/core/auth.py` – Clerk verification + permission checks
- `backend/app/models/task.py` – SQLAlchemy Task model

---

## Prerequisites

- **Node.js** (recommended: 18+)
- **Python** (3.12+)
- A **Clerk** application (publishable + secret keys)

---

## Environment variables

### Backend (`backend/.env`)

```env
CLERK_SECRET_KEY=...
CLERK_PUBLISHABLE_KEY=...
CLERK_JWKS_URL=...
CLERK_WEBHOOK_SECRET=

DATABASE_URL=sqlite:///./taskboard.db
FRONTEND_URL=http://localhost:5173
```

### Frontend (`frontend/.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=...
```

---

## Run locally (development)

### 1) Backend (FastAPI)

From the repo root:

```bash
cd backend

# Create/activate a venv (example)
python -m venv .venv
source .venv/bin/activate

# Install deps (choose one approach)
# If you use uv:
#   uv sync
# Otherwise (manual):
pip install fastapi uvicorn sqlalchemy python-dotenv pyjwt clerk-backend-api svix

# Run
python start.py
```

Backend runs at: `http://localhost:8000`

### 2) Frontend (Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## API overview

Base URL: `http://localhost:8000`

- `GET /api/tasks` – list tasks for the current organization
- `POST /api/tasks` – create a task
- `PUT /api/tasks/{task_id}` – update a task
- `DELETE /api/tasks/{task_id}` – delete a task

All endpoints require Clerk authentication and enforce organization permissions.

---

## Notes

- **CORS**: configured in `backend/app/main.py` using `FRONTEND_URL`.
- **Database**: SQLite file lives in `backend/taskboard.db` (dev only).

