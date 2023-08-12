import z from "zod";

export const trabajosSchema = z.object({
  title: z
    .string({
      required_error: "El titulo es requerido",
    })
    .min(4, {
      message: "Trabajo debe tener al menos 4 caracteres",
    }),
  description: z
    .string({
      required_error: "Descripcion es requerida",
    })
    .min(4, {
      message: "Descripcion debe tener al menos 4 caracteres",
    }),
});
