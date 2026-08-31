import { BoardModel } from "../models/Board.js";
import { TaskModel } from "../models/Task.js";

export function listBoards(req, res) {
  res.json(BoardModel.find());
}

export function getBoard(req, res) {
  const board = BoardModel.findById(req.params.id);
  if (!board) return res.status(404).json({ error: "Board not found" });
  res.json(board);
}

export function getBoardColumns(req, res) {
  const board = BoardModel.findById(req.params.id);
  if (!board) return res.status(404).json({ error: "Board not found" });
  res.json(TaskModel.findByBoardGroupedByColumn(req.params.id));
}
