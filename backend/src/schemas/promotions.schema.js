import { z } from "zod";

/*se hace un schema para validar los datos que envia el cliente al servidor*/
export const createPromotionsSchema = z.object({
  title: z
    .string({
      required_error:
        "El titulo de la promocion es requerido y tienen que ser letras",
    })
    .min(4, {
      message: "El titulo debe tener por lo menos 4 caracteres",
    }),
  description: z
    .string({
      required_error:
        "La descripcion de la promocion es requerida y deben de ser letras",
    })
    .min(4, {
      message: "La descripcion debe tener al menos 4 caracteres",
    }),
  price: z
    .string({
      required_error: "La promocion debe tener precio",
    })
    .min(4, {
      message: "El precio debe tener al menos 4 caracteres",
    }),
});
