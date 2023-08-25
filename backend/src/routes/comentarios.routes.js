import { Router } from "express";
import {
  createComments,
  deleteComment,
  getComments,
} from "../controllers/comentarios.controller.js";
import { validatorSchema } from "../middlewares/validatorSchema.js";
import { createCommentSchema } from "../schemas/comentarios.schema.js";

const router = Router();

router.get("/comentarios", getComments);
router.post(
  "/comentarios",
  validatorSchema(createCommentSchema),
  createComments
);
router.delete("/comentarios/:id", deleteComment);

export default router;
