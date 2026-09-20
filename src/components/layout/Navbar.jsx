<<<<<<< HEAD
import { useEffect, useState } from "react";
import { LayoutGrid, Search, Bell, X } from "lucide-react";
import Avatar from "../common/Avatar.jsx";
import SyncPulse from "../common/SyncPulse.jsx";
import { api } from "../../api/client.js";

export default function Navbar({ onNav, searchQuery = "", onSearchChange, activity = [] }) {
  const [team, setTeam] = useState([]);
  const [showActivity, setShowActivity] = useState(false);

  useEffect(() => {
    api.getTeam().then(setTeam).catch(() => setTeam([]));
  }, []);

  return (
    <div className="navbar" style={{ position: "relative" }}>
=======
import { LayoutGrid, Search, Bell } from "lucide-react";
import Avatar from "../common/Avatar.jsx";
import SyncPulse from "../common/SyncPulse.jsx";
import { team } from "../../data/mockData.js";

export default function Navbar({ onNav }) {
  return (
    <div className="navbar">
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
      <div className="navbar-brand" onClick={() => onNav("dashboard")}>
        <div className="navbar-brand-icon">
          <LayoutGrid size={14} />
        </div>
        <span className="navbar-brand-name">SyncBoard</span>
      </div>

      <div className="navbar-search">
        <Search size={15} />
<<<<<<< HEAD
        <input
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="Search boards, tasks, people…"
          style={{
            border: "none", outline: "none", background: "none", fontSize: 13,
            fontFamily: "inherit", color: "var(--ink)", width: "100%",
          }}
        />
        {searchQuery && (
          <button onClick={() => onSearchChange?.("")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", padding: 0 }}>
            <X size={14} color="var(--ink-faint)" />
          </button>
        )}
=======
        <span>Search tasks, boards, people…</span>
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
      </div>

      <div className="navbar-right">
        <SyncPulse />
<<<<<<< HEAD
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowActivity((s) => !s)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", position: "relative" }}
          >
            <Bell size={17} color="var(--ink-soft)" />
            {activity.length > 0 && (
              <span style={{
                position: "absolute", top: -2, right: -2, width: 7, height: 7, borderRadius: "50%",
                background: "var(--coral)",
              }} />
            )}
          </button>
          {showActivity && (
            <div style={{
              position: "absolute", top: 30, right: 0, width: 280, background: "var(--surface)",
              border: "1px solid var(--border)", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              zIndex: 20, padding: 10,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-faint)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8, padding: "0 4px" }}>
                Recent activity
              </div>
              {activity.length === 0 ? (
                <div style={{ fontSize: 12.5, color: "var(--ink-faint)", padding: "8px 4px" }}>
                  Nothing yet — create, move or delete a task to see it here.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 2, maxHeight: 260, overflowY: "auto" }}>
                  {activity.map((entry, i) => (
                    <div key={i} style={{ fontSize: 12.5, color: "var(--ink)", padding: "7px 4px", borderRadius: 5 }}>
                      {entry}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
=======
        <Bell size={17} color="var(--ink-soft)" />
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
        <div className="avatar-stack">
          {team.slice(0, 3).map((p) => (
            <Avatar key={p.id} person={p} size={30} />
          ))}
        </div>
      </div>
    </div>
  );
}
