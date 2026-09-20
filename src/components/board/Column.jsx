<<<<<<< HEAD
import { useState } from "react";
import { Plus, X, Check } from "lucide-react";
import TaskCard from "./TaskCard.jsx";

export default function Column({ column, prevColumnId, nextColumnId, onOpen, onCreateTask, onMoveTask }) {
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit() {
    const trimmed = title.trim();
    if (!trimmed) {
      setAdding(false);
      return;
    }
    setSaving(true);
    try {
      await onCreateTask(trimmed);
      setTitle("");
      setAdding(false);
    } finally {
      setSaving(false);
    }
  }

=======
import { Plus } from "lucide-react";
import TaskCard from "./TaskCard.jsx";

export default function Column({ column, onOpen }) {
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
  return (
    <div className="column">
      <div className="column-header">
        <span className="column-dot" style={{ background: column.accent }} />
        <h3 className="column-title">{column.title}</h3>
        <span className="column-count">{column.tasks.length}</span>
<<<<<<< HEAD
        <button className="column-add" aria-label={`Add task to ${column.title}`} onClick={() => setAdding(true)}>
          <Plus size={16} />
        </button>
      </div>

      <div className="column-drop">
        {adding && (
          <div className="task-card" style={{ padding: "10px 12px" }}>
            <input
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
                if (e.key === "Escape") { setAdding(false); setTitle(""); }
              }}
              placeholder="Task title…"
              disabled={saving}
              style={{
                width: "100%", border: "none", outline: "none", fontSize: 13.5,
                fontFamily: "inherit", color: "var(--ink)", marginBottom: 8,
              }}
            />
            <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
              <button
                onClick={() => { setAdding(false); setTitle(""); }}
                disabled={saving}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--ink-faint)", display: "flex" }}
              >
                <X size={16} />
              </button>
              <button
                onClick={submit}
                disabled={saving}
                style={{ background: "var(--indigo)", border: "none", borderRadius: 6, cursor: "pointer", color: "#fff", display: "flex", padding: 4 }}
              >
                <Check size={14} />
              </button>
            </div>
          </div>
        )}

        {column.tasks.map((t) => (
          <TaskCard
            key={t.id}
            task={t}
            onOpen={onOpen}
            onMovePrev={prevColumnId ? () => onMoveTask(t.id, prevColumnId) : null}
            onMoveNext={nextColumnId ? () => onMoveTask(t.id, nextColumnId) : null}
          />
=======
        <button className="column-add" aria-label={`Add task to ${column.title}`}>
          <Plus size={16} />
        </button>
      </div>
      <div className="column-drop">
        {column.tasks.map((t) => (
          <TaskCard key={t.id} task={t} onOpen={onOpen} />
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
        ))}
      </div>
    </div>
  );
}
