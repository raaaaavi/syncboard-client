import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import BoardGrid from "../components/board/BoardGrid.jsx";
import { api } from "../api/client.js";

export default function StarredPage({ onNav, searchQuery, onSearchChange, activity, onActivity }) {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState("loading");

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

  async function handleToggleStar(id) {
    const board = boards.find((b) => b.id === id);
    await api.toggleStarBoard(id);
    onActivity?.(`${board?.starred ? "Unstarred" : "Starred"} board "${board?.name}"`);
    load();
  }

  const starred = boards.filter((b) => b.starred);
  const filtered = searchQuery
    ? starred.filter((b) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : starred;

  return (
    <div className="app-shell">
      <Navbar onNav={onNav} searchQuery={searchQuery} onSearchChange={onSearchChange} activity={activity} />
      <div className="app-body">
        <Sidebar view="starred" onNav={onNav} />
        <div className="dashboard-page">
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Starred boards</h1>
              <p className="dashboard-sub">
                {status === "loading" ? "Loading…" : `${filtered.length} starred`}
              </p>
            </div>
          </div>
          {status === "ready" && starred.length === 0 && (
            <p style={{ color: "var(--ink-faint)", fontSize: 13.5 }}>
              You haven't starred any boards yet — click the star on a board card in the Dashboard to pin it here.
            </p>
          )}
          {(status === "ready" || status === "refreshing") && starred.length > 0 && (
            <BoardGrid boards={filtered} onOpenBoard={(id) => onNav("board", id)} onToggleStar={handleToggleStar} />
          )}
        </div>
      </div>
    </div>
  );
}
