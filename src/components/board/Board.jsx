<<<<<<< HEAD
import { useCallback, useEffect, useMemo, useState } from "react";
import { Filter, Check } from "lucide-react";
import Column from "./Column.jsx";
import Avatar from "../common/Avatar.jsx";
import SyncPulse from "../common/SyncPulse.jsx";
import { api } from "../../api/client.js";
import { getTagColors } from "../../utils/helpers.js";

export default function Board({ boardId, onOpenTask, searchQuery = "", onActivity }) {
  const [board, setBoard] = useState(null);
  const [columns, setColumns] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [activeTags, setActiveTags] = useState([]); // empty = show all tags
  const [showFilter, setShowFilter] = useState(false);

  const load = useCallback(() => {
    if (!boardId) return;
    let cancelled = false;
    setStatus((s) => (s === "ready" ? "refreshing" : "loading"));
    Promise.all([api.getBoard(boardId), api.getBoardColumns(boardId)])
      .then(([boardData, columnsData]) => {
        if (!cancelled) {
          setBoard(boardData);
          setColumns(columnsData);
          setStatus("ready");
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setStatus("error");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [boardId]);

  useEffect(() => {
    const cancel = load();
    return cancel;
  }, [load]);

  async function handleCreateTask(columnId, title) {
    await api.createTask({ boardId, columnId, title });
    onActivity?.(`Added task "${title}"`);
    load();
  }

  async function handleMoveTask(taskId, nextColumnId) {
    const task = columns.flatMap((c) => c.tasks).find((t) => t.id === taskId);
    const target = columns.find((c) => c.id === nextColumnId);
    await api.moveTask(taskId, nextColumnId);
    onActivity?.(`Moved "${task?.title}" → ${target?.title}`);
    load();
  }

  async function handleDeleteTask(taskId) {
    const task = columns.flatMap((c) => c.tasks).find((t) => t.id === taskId);
    await api.deleteTask(taskId);
    onActivity?.(`Deleted task "${task?.title}"`);
    load();
  }

  const allTags = useMemo(
    () => [...new Set(columns.flatMap((c) => c.tasks.map((t) => t.tag)))],
    [columns]
  );

  function toggleTag(tag) {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  const visibleColumns = useMemo(() => {
    return columns.map((col) => ({
      ...col,
      tasks: col.tasks.filter((t) => {
        const matchesSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = activeTags.length === 0 || activeTags.includes(t.tag);
        return matchesSearch && matchesTag;
      }),
    }));
  }, [columns, searchQuery, activeTags]);

  if (status === "loading") {
    return <div className="board-page"><p style={{ color: "var(--ink-soft)" }}>Loading board from the API…</p></div>;
  }
  if (status === "error") {
    return (
      <div className="board-page">
        <p style={{ color: "var(--coral)" }}>
          Couldn't load this board ({error}). Make sure syncboard-server is running and MONGODB_URI is set.
        </p>
      </div>
    );
  }

=======
import { Filter } from "lucide-react";
import Column from "./Column.jsx";
import Avatar from "../common/Avatar.jsx";
import SyncPulse from "../common/SyncPulse.jsx";
import { team, columns } from "../../data/mockData.js";

export default function Board({ onOpenTask }) {
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
  return (
    <div className="board-page">
      <div className="board-header">
        <div>
<<<<<<< HEAD
          <h1 className="board-title">{board.name}</h1>
          <div style={{ marginTop: 6 }}>
            <SyncPulse label={status === "refreshing" ? "Syncing…" : `Synced · just now — ${board.members.length} collaborators live`} />
=======
          <h1 className="board-title">CollabBoard — Sprint 1</h1>
          <div style={{ marginTop: 6 }}>
            <SyncPulse label="Synced · just now — 4 collaborators live" />
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="avatar-stack">
<<<<<<< HEAD
            {board.members.map((p) => (
              <Avatar key={p.id} person={p} size={28} />
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowFilter((s) => !s)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: activeTags.length ? "var(--indigo-soft)" : "var(--surface)",
                border: "1px solid var(--border)", borderRadius: 8, padding: "7px 12px",
                fontSize: 12.5, fontWeight: 600, cursor: "pointer",
                color: activeTags.length ? "var(--indigo-deep)" : "var(--ink)",
              }}
            >
              <Filter size={13} /> Filter{activeTags.length ? ` (${activeTags.length})` : ""}
            </button>
            {showFilter && (
              <div style={{
                position: "absolute", top: 36, right: 0, width: 200, background: "var(--surface)",
                border: "1px solid var(--border)", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                zIndex: 20, padding: 10,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-faint)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8, padding: "0 4px" }}>
                  Filter by tag
                </div>
                {allTags.length === 0 && (
                  <div style={{ fontSize: 12.5, color: "var(--ink-faint)", padding: "4px" }}>No tags on this board.</div>
                )}
                {allTags.map((tag) => {
                  const active = activeTags.includes(tag);
                  const tc = getTagColors(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",
                        background: "none", border: "none", cursor: "pointer", padding: "7px 4px", borderRadius: 5,
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: tc.fg }} />
                        <span style={{ fontSize: 12.5, color: "var(--ink)" }}>{tag}</span>
                      </span>
                      {active && <Check size={13} color="var(--indigo)" />}
                    </button>
                  );
                })}
                {activeTags.length > 0 && (
                  <button
                    onClick={() => setActiveTags([])}
                    style={{ marginTop: 4, width: "100%", background: "none", border: "none", cursor: "pointer", fontSize: 11.5, color: "var(--ink-faint)", padding: "6px 4px", textAlign: "left" }}
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
=======
            {team.map((p) => (
              <Avatar key={p.id} person={p} size={28} />
            ))}
          </div>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "7px 12px",
              fontSize: 12.5,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Filter size={13} /> Filter
          </button>
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
        </div>
      </div>

      <div className="board-columns">
<<<<<<< HEAD
        {visibleColumns.map((col, i) => (
          <Column
            key={col.id}
            column={col}
            prevColumnId={columns[i - 1]?.id || null}
            nextColumnId={columns[i + 1]?.id || null}
            onOpen={(task) => onOpenTask({
              ...task,
              onMove: handleMoveTask,
              onDelete: handleDeleteTask,
              availableColumns: columns.map((c) => ({ id: c.id, title: c.title })),
            })}
            onCreateTask={(title) => handleCreateTask(col.id, title)}
            onMoveTask={handleMoveTask}
          />
=======
        {columns.map((col) => (
          <Column key={col.id} column={col} onOpen={onOpenTask} />
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
        ))}
      </div>
    </div>
  );
}
