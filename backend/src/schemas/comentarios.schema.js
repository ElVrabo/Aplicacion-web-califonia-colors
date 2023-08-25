import { z } from "zod";

export const createCommentSchema = z.object({
  description: z
    .string({
      required_error: "El comentario es requerido",
    })
    .min(4, {
      message:
        "El comentario debe tener al menos 4 caracteres y no debe de ser ofensivo",
    }),
});
