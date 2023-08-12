import { Router } from "express";
import { validatorSchema } from "../middlewares/validatorSchema.js";
import { trabajosSchema } from "../schemas/trabajos.schema.js";
import {
  createTrabajo,
  deleteTrabajo,
  getTrabajos,
} from "../controllers/trabajos.controller.js";

const router = Router();

router.get("/trabajos", getTrabajos);
router.post("/trabajos", validatorSchema(trabajosSchema), createTrabajo);
router.delete("trabajos/:id", deleteTrabajo);

export default router;
