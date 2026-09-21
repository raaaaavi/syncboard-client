import { LogOut, Server, GitBranch } from "lucide-react";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Row({ icon: Icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
      <Icon size={16} color="var(--ink-soft)" />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, color: "var(--ink-faint)" }}>{label}</div>
        <div style={{ fontSize: 13.5, color: "var(--ink)", fontFamily: "var(--font-mono)" }}>{value}</div>
      </div>
    </div>
  );
}

export default function SettingsPage({ onNav }) {
  return (
    <div className="app-shell">
      <Navbar onNav={onNav} />
      <div className="app-body">
        <Sidebar view="settings" onNav={onNav} />
        <div className="dashboard-page" style={{ maxWidth: 520 }}>
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Settings</h1>
              <p className="dashboard-sub">Connection and workspace info</p>
            </div>
          </div>

          <div className="board-card" style={{ cursor: "default", marginBottom: 20 }}>
            <Row icon={Server} label="Connected API" value={API_URL} />
            <Row icon={GitBranch} label="Workspace" value="SyncBoard — Group 49" />
          </div>

          <button
            onClick={() => onNav("login")}
            style={{
              display: "flex", alignItems: "center", gap: 8, background: "none",
              border: "1px solid var(--coral)", color: "var(--coral)", borderRadius: 8,
              padding: "10px 16px", fontWeight: 600, fontSize: 13.5, cursor: "pointer",
            }}
          >
            <LogOut size={15} /> Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
