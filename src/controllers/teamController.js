import { TeamModel } from "../models/Team.js";

export function listTeam(req, res) {
  res.json(TeamModel.find());
}
