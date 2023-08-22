import { Router } from "express";
import {
  createComments,
  deleteComment,
  getComments,
} from "../controllers/comentarios.controller.js";

const router = Router();

router.get("/comentarios", getComments);
router.post("/comentarios", createComments);
router.delete("/comentarios/:id", deleteComment);

export default router;
