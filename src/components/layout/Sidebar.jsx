<<<<<<< HEAD
import { useEffect, useState } from "react";
import { LayoutGrid, Star, Users, Settings, LogOut } from "lucide-react";
import { api } from "../../api/client.js";
=======
import { LayoutGrid, Star, Users, Settings, LogOut } from "lucide-react";
import { boards } from "../../data/mockData.js";
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", Icon: LayoutGrid },
  { key: "starred", label: "Starred", Icon: Star },
  { key: "team", label: "Team", Icon: Users },
];

export default function Sidebar({ view, onNav }) {
<<<<<<< HEAD
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    api.getBoards().then(setBoards).catch(() => setBoards([]));
  }, []);

=======
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
  return (
    <div className="sidebar">
      {NAV_ITEMS.map(({ key, label, Icon }) => (
        <button
          key={key}
          className={`sidebar-item ${view === key ? "active" : ""}`}
          onClick={() => onNav(key)}
        >
          <Icon size={16} />
          <span>{label}</span>
        </button>
      ))}

      <div className="sidebar-heading">Your Boards</div>
      {boards.map((b) => (
<<<<<<< HEAD
        <div key={b.id} className="sidebar-board" onClick={() => onNav("board", b.id)}>
=======
        <div key={b.id} className="sidebar-board" onClick={() => onNav("board")}>
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
          <span className="sidebar-board-dot" />
          <span className="sidebar-board-name">{b.name}</span>
        </div>
      ))}

      <div className="sidebar-footer">
        <button className="sidebar-item" onClick={() => onNav("settings")}>
          <Settings size={16} />
          <span>Settings</span>
        </button>
<<<<<<< HEAD
        <button className="sidebar-item" onClick={() => onNav("login")}>
=======
        <button className="sidebar-item">
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
          <LogOut size={16} />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}
