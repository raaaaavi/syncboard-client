import { Router } from "express";
import { listBoards, getBoard, getBoardColumns } from "../controllers/boardController.js";

const router = Router();

/**
 * @openapi
 * /api/boards:
 *   get:
 *     summary: List all boards
 *     tags: [Boards]
 *     responses:
 *       200:
 *         description: Array of boards with members and task counts
 */
router.get("/", listBoards);

/**
 * @openapi
 * /api/boards/{id}:
 *   get:
 *     summary: Get a single board by id
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Board object }
 *       404: { description: Board not found }
 */
router.get("/:id", getBoard);

/**
 * @openapi
 * /api/boards/{id}/columns:
 *   get:
 *     summary: Get a board's columns, each populated with its tasks
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Array of columns [{ id, title, accent, tasks: [] }] }
 *       404: { description: Board not found }
 */
router.get("/:id/columns", getBoardColumns);

export default router;
