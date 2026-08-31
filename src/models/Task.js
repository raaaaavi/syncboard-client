import { tasks, team, setTasks, COLUMNS } from "../data/mockData.js";

let nextId = tasks.length + 1;

function withAssignee(task) {
  return { ...task, assignee: team.find((t) => t.id === task.assigneeId) || null };
}

export const TaskModel = {
  findByBoard(boardId) {
    return tasks.filter((t) => t.boardId === boardId).map(withAssignee);
  },
  findByBoardGroupedByColumn(boardId) {
    return COLUMNS.map((col) => ({
      ...col,
      tasks: tasks.filter((t) => t.boardId === boardId && t.columnId === col.id).map(withAssignee),
    }));
  },
  findById(id) {
    const task = tasks.find((t) => t.id === id);
    return task ? withAssignee(task) : null;
  },
  create({ boardId, columnId, title, tag, assigneeId, due }) {
    const task = {
      id: `t${nextId++}`,
      boardId,
      columnId: columnId || "todo",
      title,
      tag: tag || "General",
      assigneeId: assigneeId || null,
      due: due || null,
      comments: 0,
    };
    setTasks([...tasks, task]);
    return withAssignee(task);
  },
  updateColumn(id, columnId) {
    const idx = tasks.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    const next = [...tasks];
    next[idx] = { ...next[idx], columnId };
    setTasks(next);
    return withAssignee(next[idx]);
  },
  remove(id) {
    const exists = tasks.some((t) => t.id === id);
    if (!exists) return false;
    setTasks(tasks.filter((t) => t.id !== id));
    return true;
  },
};
