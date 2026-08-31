import { team } from "../data/mockData.js";

export const TeamModel = {
  find() {
    return team;
  },
  findById(id) {
    return team.find((t) => t.id === id) || null;
  },
};
