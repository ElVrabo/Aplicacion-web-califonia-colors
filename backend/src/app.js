import express from "express";
import morgan from "morgan";
import cors from "cors";
import promotionsRoutes from "./routes/promotions.routes.js";
import trabajosRoutes from "./routes/trabajos.routes.js";
import path from "path";
const app = express();

/*el servidor solo aceptara peticiones del puerto 3000*/
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", promotionsRoutes);
app.use("/api", trabajosRoutes);

export default app;
