# SyncBoard — CollabBoard Client

<<<<<<< HEAD
A collaborative Kanban-style task board. This is **Milestone 2 — Working REST API
(with mock data) Integrated with Frontend**: the UI now fetches everything from
the `syncboard-server` Express API instead of local static data.
=======
A collaborative Kanban-style task board. This is the **Milestone 1 — Static Front-End Skeleton**:
UI components wired to mock data only, no backend yet.
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345

## Tech stack

- React 18 + Vite
- lucide-react (icons)
- Plain CSS with CSS custom properties (design tokens in `src/index.css`)
<<<<<<< HEAD
- `fetch` via a small API client (`src/api/client.js`)
=======
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345

## Project structure

```
src/
<<<<<<< HEAD
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
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
```

## How to run

<<<<<<< HEAD
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
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345

## Pages

1. **Login** — entry screen (decorative form, no auth wired yet)
<<<<<<< HEAD
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

## Known limitations (Milestone 3)

- No real authentication yet (JWT auth is a later milestone)
- No drag-and-drop yet — task movement works via the ‹ › buttons and the
  task modal's "Move to" buttons instead, both calling the same `/move` endpoint
- No offline/client-side persistence yet
- No real-time sync yet (the "Synced" indicator in the navbar is a static mock for now,
  will be wired to Socket.io in a later milestone)
- The activity log resets on page refresh (it's client-side only, not stored in the database)
=======
2. **Dashboard** — grid of the user's boards with progress bars
3. **Board** — Kanban view: To Do / Doing / Done columns, task cards, click a card for detail

## Known limitations (Milestone 1)

- No real authentication, API, or database — all data is mocked in `src/data/mockData.js`
- No drag-and-drop yet (planned for Milestone 3 alongside persistence)
- No real-time sync yet (the "Synced" indicator in the navbar is a static mock for now,
  will be wired to Socket.io in Milestone 5)
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
