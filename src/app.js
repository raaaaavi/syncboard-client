import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import boardRoutes from "./routes/boardRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import { swaggerSpec } from "./docs/swagger.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ name: "SyncBoard API", status: "ok", docs: "/api-docs" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/team", teamRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
