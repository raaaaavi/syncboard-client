# SyncBoard (CollabBoard) — Client Repository

![Milestone](https://img.shields.io/badge/Milestone-03_Full_Stack_%26_Database-success)
![Stack](https://img.shields.io/badge/Stack-React_%7C_Vite_%7C_Express_%7C_MongoDB-blue)

A collaborative, Kanban-style task management platform built progressively as a full-stack web application. 

This repository contains the **React Front-End** client. It is currently at **Milestone 3**, meaning the static UI and local mock data have been successfully replaced with live data fetched from a persistent MongoDB-backed REST API. 

Every action in the UI (creating boards, adding tasks, moving cards, starring boards) now reads from and writes to a cloud-hosted MongoDB Atlas cluster via the Express backend.

---

## 👥 Team (Group 49)

- **Ravindu Fernando** (Front-End & Backend Lead)
- **KTR Anthony** (Frontend & Backend Integration)
- **HMD Sathsarani** (UI/UX Design, API & Database Setup)
- **Chamoth Silva** (Documentation, Testing & QA)

---

## 🏗️ Architecture & Tech Stack

Per the assignment requirements, this application follows a decoupled client-server architecture.

**Frontend (This Repository):**
- **Core:** React 18 scaffolds with Vite.
- **Styling:** Plain CSS utilizing CSS custom properties (design tokens).
- **Icons:** `lucide-react`.
- **API Client:** Native `fetch` API abstracted into a modular client (`src/api/client.js`).

**Backend (syncboard-server):**
- Node.js & Express REST API.
- MongoDB Atlas (Free Tier M0) accessed via Mongoose ODM.

### Architecture Diagram
```mermaid
graph LR
    subgraph Client [Frontend - React/Vite]
        UI[React Components] --> API_Client[api/client.js]
    end
    subgraph Server [Backend - Express]
        API_Client -- HTTP GET/POST/PATCH/DELETE --> Routes[Express Routes]
        Routes --> Controllers[Controllers]
        Controllers --> Models[Mongoose Models]
    end
    subgraph Database [MongoDB Atlas]
        Models -- Read/Write --> DB[(MongoDB Cluster)]
    end
## Project structure

```
src/

  api/          client.js — talks to the Express backend
  components/
    board/       Board, Column, TaskCard, TaskModal
    common/       Avatar, Badge, SyncPulse
    layout/       Navbar, Sidebar
  pages/         LoginPage, DashboardPage, BoardPage
  data/          mockData.js (superseded — kept for reference only, see note in file)
  utils/         helpers.js
=======
  components/
    board/     Board, Column, TaskCard, TaskModal
    common/     Avatar, Badge, SyncPulse
    layout/     Navbar, Sidebar
  pages/        LoginPage, DashboardPage, BoardPage
  data/         mockData.js (boards, team, columns, tasks)
  utils/        helpers.js
## 🚀 How to Run (Setup Instructions)


This app needs the backend running first.

1. In a separate terminal, start the API (see `syncboard-server/README.md`):
   ```bash
   cd ../syncboard-server
   npm install
   npm run dev
   # -> http://localhost:5000
   ```
2. Then, in this folder:
   ```bash
   cp .env.example .env   # points VITE_API_URL at http://localhost:5000
   npm install
   npm run dev
   ```
3. Open the printed local URL (typically `http://localhost:5173`).

If the Dashboard or Board page shows a red "Couldn't reach the API" message,
the backend isn't running or `VITE_API_URL` doesn't match its port.
=======
```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).


## Pages

1. **Login** — entry screen (decorative form, no auth wired yet)

2. **Dashboard** — fetches `/api/boards`, shows progress bars per board
3. **Board** — fetches `/api/boards/:id` and `/api/boards/:id/columns`, renders
   To Do / Doing / Done columns with task cards. Fully interactive:
   - **+** on a column header opens an inline form to create a task (`POST /api/tasks`)
   - the ‹ › arrows on a card move it to the previous/next column (`PATCH /api/tasks/:id/move`)
   - opening a card shows **Move to** buttons and a **Delete** button (`DELETE /api/tasks/:id`)

   Every action re-fetches from the database afterwards, so what you see always reflects
   what's actually stored in MongoDB Atlas — not local component state.
4. **Starred** — same board grid, filtered to boards you've starred (`PATCH /api/boards/:id/star`
   toggles it from either this page or the Dashboard)
5. **Team** — fetches `/api/team`, and computes each member's open-task count live by
   reading every board's columns (not a hardcoded number)
6. **Settings** — shows the connected API URL, plus a working **Sign out** button

## Other working controls

- **Search** (navbar) — filters boards by name on Dashboard/Starred, and filters tasks
  by title on the Board page, live as you type
- **New board** (Dashboard) — inline form, calls `POST /api/boards`, which also seeds
  the new board with default To Do / Doing / Done columns server-side
- **Filter** (Board page) — dropdown of every tag present on the board; toggle tags to
  narrow the columns down to matching tasks
- **Bell / activity** (navbar) — a real, session-local activity log: every create, move,
  delete, and star action appends an entry here
