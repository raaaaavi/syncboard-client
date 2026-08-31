import { TaskModel } from "../models/Task.js";

export function listTasksForBoard(req, res) {
  res.json(TaskModel.findByBoard(req.query.boardId));
}

export function getTask(req, res) {
  const task = TaskModel.findById(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
}

export function createTask(req, res) {
  const { boardId, title } = req.body;
  if (!boardId || !title) {
    return res.status(400).json({ error: "boardId and title are required" });
  }
  const task = TaskModel.create(req.body);
  res.status(201).json(task);
}

export function moveTask(req, res) {
  const { columnId } = req.body;
  if (!columnId) return res.status(400).json({ error: "columnId is required" });
  const task = TaskModel.updateColumn(req.params.id, columnId);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
}

export function deleteTask(req, res) {
  const ok = TaskModel.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: "Task not found" });
  res.status(204).send();
}
