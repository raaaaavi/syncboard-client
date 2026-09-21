import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import Avatar from "../components/common/Avatar.jsx";
import { api } from "../api/client.js";

export default function TeamPage({ onNav, searchQuery, onSearchChange, activity }) {
  const [team, setTeam] = useState([]);
  const [taskCounts, setTaskCounts] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    Promise.all([api.getTeam(), api.getBoards()])
      .then(async ([members, boards]) => {
        // Tally how many open (not-done) tasks each member currently has,
        // across every board — real data, not a placeholder number.
        const counts = {};
        for (const board of boards) {
          const columns = await api.getBoardColumns(board.id);
          for (const col of columns) {
            if (col.id.endsWith("-done")) continue;
            for (const task of col.tasks) {
              if (task.assignee) counts[task.assignee.id] = (counts[task.assignee.id] || 0) + 1;
            }
          }
        }
        if (!cancelled) {
          setTeam(members);
          setTaskCounts(counts);
          setStatus("ready");
        }
      })
      .catch(() => !cancelled && setStatus("error"));
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = searchQuery
    ? team.filter((m) => m.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : team;

  return (
    <div className="app-shell">
      <Navbar onNav={onNav} searchQuery={searchQuery} onSearchChange={onSearchChange} activity={activity} />
      <div className="app-body">
        <Sidebar view="team" onNav={onNav} />
        <div className="dashboard-page">
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Team</h1>
              <p className="dashboard-sub">
                {status === "loading" ? "Loading…" : `${filtered.length} members · fetched from /api/team`}
              </p>
            </div>
          </div>

          {status === "ready" && (
            <div className="board-grid">
              {filtered.map((m) => (
                <div key={m.id} className="board-card" style={{ cursor: "default" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <Avatar person={m} size={40} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14.5, color: "var(--ink)" }}>{m.name}</div>
                      <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>{m.role}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--indigo)" }}>
                      {taskCounts[m.id] || 0}
                    </span>{" "}
                    open task{taskCounts[m.id] === 1 ? "" : "s"} assigned
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
