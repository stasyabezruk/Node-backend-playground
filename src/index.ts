import "dotenv/config";
import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import userRoutes from "./routes/user.routes";
import roleRoutes from "./routes/role.routes";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(userRoutes);
app.use(roleRoutes);
// 404
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(errorMiddleware);
