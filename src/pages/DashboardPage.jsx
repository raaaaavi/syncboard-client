<<<<<<< HEAD
import { useCallback, useEffect, useState } from "react";
import { Plus, Check, X } from "lucide-react";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import BoardGrid from "../components/board/BoardGrid.jsx";
import { api } from "../api/client.js";

export default function DashboardPage({ onNav, searchQuery, onSearchChange, activity, onActivity }) {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState("loading");
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [saving, setSaving] = useState(false);

  const load = useCallback(() => {
    let cancelled = false;
    setStatus((s) => (s === "ready" ? "refreshing" : "loading"));
    api
      .getBoards()
      .then((data) => {
        if (!cancelled) {
          setBoards(data);
          setStatus("ready");
        }
      })
      .catch(() => !cancelled && setStatus("error"));
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => load(), [load]);

  async function handleCreateBoard() {
    const name = newName.trim();
    if (!name) {
      setAdding(false);
      return;
    }
    setSaving(true);
    try {
      await api.createBoard(name);
      onActivity?.(`Created board "${name}"`);
      setNewName("");
      setAdding(false);
      load();
    } finally {
      setSaving(false);
    }
  }

  async function handleToggleStar(id) {
    const board = boards.find((b) => b.id === id);
    await api.toggleStarBoard(id);
    onActivity?.(`${board?.starred ? "Unstarred" : "Starred"} board "${board?.name}"`);
    load();
  }

  const filtered = searchQuery
    ? boards.filter((b) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : boards;

  return (
    <div className="app-shell">
      <Navbar onNav={onNav} searchQuery={searchQuery} onSearchChange={onSearchChange} activity={activity} />
=======
import { Plus, LayoutGrid, Star } from "lucide-react";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import Avatar from "../components/common/Avatar.jsx";
import { boards } from "../data/mockData.js";
import { completionPercent } from "../utils/helpers.js";

export default function DashboardPage({ onNav }) {
  return (
    <div className="app-shell">
      <Navbar onNav={onNav} />
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
      <div className="app-body">
        <Sidebar view="dashboard" onNav={onNav} />
        <div className="dashboard-page">
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Your boards</h1>
<<<<<<< HEAD
              <p className="dashboard-sub">
                {status === "loading" && "Loading from the API…"}
                {status === "error" && "Couldn't reach the API — is syncboard-server running?"}
                {(status === "ready" || status === "refreshing") &&
                  (searchQuery
                    ? `${filtered.length} of ${boards.length} boards match "${searchQuery}"`
                    : `${boards.length} active boards`)}
              </p>
            </div>
            {!adding ? (
              <button className="new-board-btn" onClick={() => setAdding(true)}>
                <Plus size={15} /> New board
              </button>
            ) : (
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <input
                  autoFocus
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCreateBoard();
                    if (e.key === "Escape") { setAdding(false); setNewName(""); }
                  }}
                  placeholder="Board name…"
                  disabled={saving}
                  style={{
                    border: "1px solid var(--border)", borderRadius: 8, padding: "8px 12px",
                    fontSize: 13, fontFamily: "inherit", outline: "none", width: 200,
                  }}
                />
                <button onClick={() => { setAdding(false); setNewName(""); }} disabled={saving} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", color: "var(--ink-faint)" }}>
                  <X size={18} />
                </button>
                <button onClick={handleCreateBoard} disabled={saving} style={{ background: "var(--indigo)", border: "none", borderRadius: 8, cursor: "pointer", display: "flex", padding: 8, color: "#fff" }}>
                  <Check size={16} />
                </button>
              </div>
            )}
          </div>

          {(status === "ready" || status === "refreshing") && (
            <BoardGrid boards={filtered} onOpenBoard={(id) => onNav("board", id)} onToggleStar={handleToggleStar} />
          )}
=======
              <p className="dashboard-sub">3 active boards · 4 teammates online</p>
            </div>
            <button className="new-board-btn">
              <Plus size={15} /> New board
            </button>
          </div>

          <div className="board-grid">
            {boards.map((b) => {
              const pct = completionPercent(b.done, b.tasks);
              return (
                <div key={b.id} className="board-card" onClick={() => onNav("board")}>
                  <div className="board-card-top">
                    <div className="board-card-icon">
                      <LayoutGrid size={16} color="var(--indigo)" />
                    </div>
                    <Star size={16} color="var(--ink-faint)" />
                  </div>
                  <h3 className="board-card-name">{b.name}</h3>
                  <p className="board-card-sub">{b.done} of {b.tasks} tasks done</p>
                  <div className="board-progress-track">
                    <div className="board-progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="board-card-bottom">
                    <div className="avatar-stack">
                      {b.members.map((m) => (
                        <Avatar key={m.id} person={m} size={24} />
                      ))}
                    </div>
                    <span className="board-card-pct">{pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
        </div>
      </div>
    </div>
  );
}
