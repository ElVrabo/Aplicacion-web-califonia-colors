import { Router } from "express";
import { validatorSchema } from "../middlewares/validatorSchema.js";
import { trabajosSchema } from "../schemas/trabajos.schema.js";
import { upload } from "../middlewares/upload.js";
import {
  createTrabajo,
  deleteTrabajo,
  getTrabajos,
} from "../controllers/trabajos.controller.js";

const router = Router();

router.get("/trabajos", getTrabajos);
router.post(
  "/trabajos",
  upload.single("avatar"),
  validatorSchema(trabajosSchema),
  createTrabajo
);
router.delete("/trabajos/:id", deleteTrabajo);

export default router;
