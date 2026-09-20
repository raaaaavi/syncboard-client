<<<<<<< HEAD
import { ChevronLeft, ChevronRight, Calendar, MessageSquare } from "lucide-react";
import Badge from "../common/Badge.jsx";
import Avatar from "../common/Avatar.jsx";
import { formatShortDate, getTagColors } from "../../utils/helpers.js";

export default function TaskCard({ task, onOpen, onMovePrev, onMoveNext }) {
  const tagColors = getTagColors(task.tag);

  function stop(e, fn) {
    e.stopPropagation();
    if (fn) fn();
  }

  return (
    <div className="task-card" onClick={() => onOpen(task)}>
      <div className="task-card-top">
        <Badge label={task.tag} fg={tagColors.fg} bg={tagColors.bg} />
        <div style={{ display: "flex", gap: 2 }}>
          <button
            onClick={(e) => stop(e, onMovePrev)}
            disabled={!onMovePrev}
            aria-label="Move to previous column"
            style={{ background: "none", border: "none", cursor: onMovePrev ? "pointer" : "default", opacity: onMovePrev ? 1 : 0.25, display: "flex", padding: 2 }}
          >
            <ChevronLeft size={14} color="#9C9FAC" />
          </button>
          <button
            onClick={(e) => stop(e, onMoveNext)}
            disabled={!onMoveNext}
            aria-label="Move to next column"
            style={{ background: "none", border: "none", cursor: onMoveNext ? "pointer" : "default", opacity: onMoveNext ? 1 : 0.25, display: "flex", padding: 2 }}
          >
            <ChevronRight size={14} color="#9C9FAC" />
          </button>
        </div>
=======
import { MoreHorizontal, Calendar, MessageSquare } from "lucide-react";
import Badge from "../common/Badge.jsx";
import Avatar from "../common/Avatar.jsx";

export default function TaskCard({ task, onOpen }) {
  return (
    <div className="task-card" onClick={() => onOpen(task)}>
      <div className="task-card-top">
        <Badge label={task.tag} fg={task.tagColor} bg={task.tagBg} />
        <MoreHorizontal size={15} color="#9C9FAC" />
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
      </div>
      <p className="task-card-title">{task.title}</p>
      <div className="task-card-bottom">
        <div className="task-card-meta">
          <span className="task-card-meta-item">
<<<<<<< HEAD
            <Calendar size={12} /> {task.due ? formatShortDate(task.due) : "—"}
=======
            <Calendar size={12} /> {task.due}
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
          </span>
          {task.comments > 0 && (
            <span className="task-card-meta-item">
              <MessageSquare size={12} /> {task.comments}
            </span>
          )}
        </div>
        <Avatar person={task.assignee} size={24} />
      </div>
    </div>
  );
}
