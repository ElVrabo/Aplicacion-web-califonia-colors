import { Router } from "express";
import {
  createPromotion,
  deletePromotion,
  getPromotions,
} from "../controllers/promotion.controller.js";
import { validatorSchema } from "../middlewares/validatorSchema.js";
import { createPromotionsSchema } from "../schemas/promotions.schema.js";
import { upload } from "../middlewares/upload.js";

const router = Router();

router.get("/promotions", getPromotions);
router.post(
  "/promotions",
  upload.single("avatar"),
  // validatorSchema(createPromotionsSchema),

  createPromotion
);
router.delete("/promotions/:id", deletePromotion);

export default router;
