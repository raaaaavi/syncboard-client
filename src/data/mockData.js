// In-memory mock data store for Milestone 2 (Working REST API with mock data).
// This will be replaced by Mongoose models backed by MongoDB in a later milestone,
// so the shape here is deliberately kept close to what the eventual schema will look like.

export const team = [
  { id: "u1", initials: "AR", name: "Aashi R.", color: "#3E3AE8", role: "Front-End" },
  { id: "u2", initials: "SK", name: "Sam K.", color: "#0E9C8E", role: "Back-End" },
  { id: "u3", initials: "NF", name: "Nadia F.", color: "#DB8A0C", role: "Testing & DevOps" },
  { id: "u4", initials: "TP", name: "Theo P.", color: "#DE5147", role: "Front-End" },
];

export const boards = [
  { id: "b1", name: "CollabBoard — Sprint 1", memberIds: ["u1", "u2", "u3"] },
  { id: "b2", name: "Marketing Launch", memberIds: ["u2", "u4"] },
  { id: "b3", name: "Design Backlog", memberIds: ["u1", "u3", "u4"] },
];

// Tasks live in a flat list, each pointing at a boardId + columnId,
// which is how a real Mongoose Task schema would reference its parents.
export let tasks = [
  { id: "t1", boardId: "b1", columnId: "todo", title: "Wireframe Board / Column / TaskCard components", tag: "Design", assigneeId: "u4", due: "2026-08-24", comments: 2 },
  { id: "t2", boardId: "b1", columnId: "todo", title: "Define REST API contract for tasks endpoint", tag: "Backend", assigneeId: "u2", due: "2026-08-26", comments: 0 },
  { id: "t3", boardId: "b1", columnId: "todo", title: "Set up Mongoose schemas: Board, Column, Task", tag: "Backend", assigneeId: "u2", due: "2026-08-27", comments: 1 },
  { id: "t4", boardId: "b1", columnId: "doing", title: "Build drag-and-drop between columns", tag: "Frontend", assigneeId: "u1", due: "2026-08-23", comments: 3 },
  { id: "t5", boardId: "b1", columnId: "doing", title: "JWT auth middleware + protected routes", tag: "Auth", assigneeId: "u3", due: "2026-08-23", comments: 1 },
  { id: "t6", boardId: "b1", columnId: "done", title: "Scaffold Vite + React project structure", tag: "Setup", assigneeId: "u4", due: "2026-08-20", comments: 0 },
  { id: "t7", boardId: "b1", columnId: "done", title: "Repo init + branch strategy agreed", tag: "Setup", assigneeId: "u3", due: "2026-08-19", comments: 0 },
  { id: "t8", boardId: "b1", columnId: "done", title: "Static Navbar + Sidebar layout", tag: "Frontend", assigneeId: "u1", due: "2026-08-21", comments: 2 },
  { id: "t9", boardId: "b1", columnId: "done", title: "Mock data module for boards/tasks", tag: "Frontend", assigneeId: "u4", due: "2026-08-21", comments: 0 },
  { id: "t10", boardId: "b1", columnId: "doing", title: "Wire Express REST API into React dashboard", tag: "Backend", assigneeId: "u2", due: "2026-08-30", comments: 0 },
];

export const COLUMNS = [
  { id: "todo", title: "To Do", accent: "#666A79" },
  { id: "doing", title: "Doing", accent: "#DB8A0C" },
  { id: "done", title: "Done", accent: "#0E9C8E" },
];

export function setTasks(next) {
  tasks = next;
}
