import { LayoutGrid, Star } from "lucide-react";
import Avatar from "../common/Avatar.jsx";
import { completionPercent } from "../../utils/helpers.js";

export default function BoardGrid({ boards, onOpenBoard, onToggleStar }) {
  if (boards.length === 0) {
    return <p style={{ color: "var(--ink-faint)", fontSize: 13 }}>No boards to show here yet.</p>;
  }
  return (
    <div className="board-grid">
      {boards.map((b) => {
        const pct = completionPercent(b.doneCount, b.taskCount);
        return (
          <div key={b.id} className="board-card" onClick={() => onOpenBoard(b.id)}>
            <div className="board-card-top">
              <div className="board-card-icon">
                <LayoutGrid size={16} color="var(--indigo)" />
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); onToggleStar(b.id); }}
                aria-label={b.starred ? "Unstar board" : "Star board"}
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", padding: 0 }}
              >
                <Star size={16} color={b.starred ? "var(--amber)" : "var(--ink-faint)"} fill={b.starred ? "var(--amber)" : "none"} />
              </button>
            </div>
            <h3 className="board-card-name">{b.name}</h3>
            <p className="board-card-sub">{b.doneCount} of {b.taskCount} tasks done</p>
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
  );
}
