<<<<<<< HEAD
import { useState } from "react";
import { X, MessageSquare, Paperclip, Trash2 } from "lucide-react";
import Badge from "../common/Badge.jsx";
import Avatar from "../common/Avatar.jsx";
import { getTagColors, formatShortDate } from "../../utils/helpers.js";

export default function TaskModal({ task, onClose }) {
  const [busy, setBusy] = useState(false);
  if (!task) return null;
  const tagColors = getTagColors(task.tag);
  const otherColumns = (task.availableColumns || []).filter((c) => c.id !== task.columnId);

  async function handleMoveTo(columnId) {
    if (!task.onMove) return;
    setBusy(true);
    try {
      await task.onMove(task.id, columnId);
      onClose();
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    if (!task.onDelete) return;
    setBusy(true);
    try {
      await task.onDelete(task.id);
      onClose();
    } finally {
      setBusy(false);
    }
  }

=======
import { X, MessageSquare, Paperclip } from "lucide-react";
import Badge from "../common/Badge.jsx";
import Avatar from "../common/Avatar.jsx";

export default function TaskModal({ task, onClose }) {
  if (!task) return null;
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
<<<<<<< HEAD
          <Badge label={task.tag} fg={tagColors.fg} bg={tagColors.bg} />
=======
          <Badge label={task.tag} fg={task.tagColor} bg={task.tagBg} />
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
          <X size={18} color="var(--ink-faint)" style={{ cursor: "pointer" }} onClick={onClose} />
        </div>
        <h2 className="modal-title">{task.title}</h2>

        <div className="modal-meta-row">
          <div>
            <div className="modal-meta-label">ASSIGNEE</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
<<<<<<< HEAD
              {task.assignee ? (
                <>
                  <Avatar person={task.assignee} size={22} />
                  <span style={{ fontSize: 13 }}>{task.assignee.name}</span>
                </>
              ) : (
                <span style={{ fontSize: 13, color: "var(--ink-faint)" }}>Unassigned</span>
              )}
=======
              <Avatar person={task.assignee} size={22} />
              <span style={{ fontSize: 13 }}>{task.assignee.name}</span>
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
            </div>
          </div>
          <div>
            <div className="modal-meta-label">DUE</div>
<<<<<<< HEAD
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{task.due ? formatShortDate(task.due) : "—"}</span>
=======
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{task.due}</span>
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
          </div>
        </div>

        <div className="modal-meta-label">DESCRIPTION</div>
        <p className="modal-desc">
<<<<<<< HEAD
          Live from the database — moving, editing or deleting this task here updates the record in
          MongoDB Atlas and every other page that reads it.
        </p>

        {otherColumns.length > 0 && (
          <>
            <div className="modal-meta-label" style={{ marginTop: 4 }}>MOVE TO</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {otherColumns.map((c) => (
                <button
                  key={c.id}
                  disabled={busy}
                  onClick={() => handleMoveTo(c.id)}
                  style={{
                    background: "var(--surface-alt)", border: "1px solid var(--border)", borderRadius: 6,
                    padding: "6px 11px", fontSize: 12.5, fontWeight: 600, color: "var(--ink)", cursor: "pointer",
                  }}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="modal-footer" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 14 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <MessageSquare size={13} /> {task.comments} comments
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Paperclip size={13} /> 0 files
            </span>
          </div>
          <button
            onClick={handleDelete}
            disabled={busy}
            style={{
              display: "flex", alignItems: "center", gap: 5, background: "none", border: "none",
              color: "var(--coral)", cursor: "pointer", fontSize: 12.5, fontWeight: 600,
            }}
          >
            <Trash2 size={13} /> Delete
          </button>
=======
          Mock detail view for the static front-end skeleton — this panel will bind to the real
          task document once the REST API and MongoDB layer land in the next milestone.
        </p>

        <div className="modal-footer">
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <MessageSquare size={13} /> {task.comments} comments
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Paperclip size={13} /> 0 files
          </span>
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
        </div>
      </div>
    </div>
  );
}
