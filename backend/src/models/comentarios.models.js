import mongoose from "mongoose";

const comentariosSchema = new mongoose.Schema({
  comentario: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Comentario", comentariosSchema);
