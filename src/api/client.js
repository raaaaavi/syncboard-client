const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  getBoards: () => request("/api/boards"),
  getBoard: (id) => request(`/api/boards/${id}`),
  getBoardColumns: (id) => request(`/api/boards/${id}/columns`),
  createBoard: (name) => request("/api/boards", { method: "POST", body: JSON.stringify({ name }) }),
  toggleStarBoard: (id) => request(`/api/boards/${id}/star`, { method: "PATCH" }),
  getTeam: () => request("/api/team"),
  createTask: (task) => request("/api/tasks", { method: "POST", body: JSON.stringify(task) }),
  moveTask: (id, columnId) =>
    request(`/api/tasks/${id}/move`, { method: "PATCH", body: JSON.stringify({ columnId }) }),
  deleteTask: (id) => request(`/api/tasks/${id}`, { method: "DELETE" }),
};
