# SyncBoard API (syncboard-server)

Milestone 2 — a working REST API backed by mock, in-memory data, ready to be
consumed by the syncboard-client front end.

## Tech stack

- Node.js + Express
- CORS, Morgan (request logging)
- Swagger (OpenAPI) docs via swagger-jsdoc + swagger-ui-express

## Project structure

```
src/
  server.js          entry point
  app.js             Express app assembly
  routes/            boardRoutes, taskRoutes, teamRoutes
  controllers/        request handlers
  models/             mock "model" layer (mirrors future Mongoose schema)
  data/               in-memory mock data (single source of truth)
  middleware/          404 + error handler
  docs/swagger.js      OpenAPI spec config
```

## How to run

```bash
npm install
npm run dev
```

Server starts on **http://localhost:5000** by default (override with a `PORT`
env var, see `.env.example`).

Interactive API docs (Swagger UI): **http://localhost:5000/api-docs**

## Endpoints

| Method | Endpoint                  | Description                              |
|--------|----------------------------|-------------------------------------------|
| GET    | `/api/boards`               | List all boards (with members, counts)    |
| GET    | `/api/boards/:id`            | Get one board                             |
| GET    | `/api/boards/:id/columns`     | Get columns for a board, populated with tasks |
| GET    | `/api/tasks?boardId=b1`       | List tasks for a board                    |
| POST   | `/api/tasks`                 | Create a task                             |
| GET    | `/api/tasks/:id`              | Get one task                              |
| PATCH  | `/api/tasks/:id/move`          | Move a task to a different column         |
| DELETE | `/api/tasks/:id`               | Delete a task                             |
| GET    | `/api/team`                  | List team members                         |

## Known limitations (Milestone 2)

- Data is in-memory mock data, not a real database — restarting the server resets it.
- No authentication yet (planned once the client's JWT flow lands).
- No request validation library yet — only manual checks in controllers.
