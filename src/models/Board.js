import { boards, tasks, team } from "../data/mockData.js";

// Mock "model" layer — deliberately mirrors the query shape a Mongoose model
// would expose (find, findById), so swapping in real Mongoose later only
// touches this file, not the controllers or routes.
export const BoardModel = {
  find() {
    return boards.map((b) => ({
      ...b,
      members: team.filter((t) => b.memberIds.includes(t.id)),
      taskCount: tasks.filter((t) => t.boardId === b.id).length,
      doneCount: tasks.filter((t) => t.boardId === b.id && t.columnId === "done").length,
    }));
  },
  findById(id) {
    const board = boards.find((b) => b.id === id);
    if (!board) return null;
    return {
      ...board,
      members: team.filter((t) => board.memberIds.includes(t.id)),
    };
  },
};
