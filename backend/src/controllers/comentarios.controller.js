import Comentario from "../models/comentarios.models.js";

export const getComments = async (req, res) => {
  try {
    const comentarios = await Comentario.find();
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(404).json({ message: "Algo salio mal" });
  }
};

export const createComments = async (req, res) => {
  try {
    const { description } = req.body;
    const newComment = new Comentario({
      comentario: description,
    });
    const saveComment = await newComment.save();
    res.json(saveComment);
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Ocurrio un error al crear el comentario" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const commentFound = await Comentario.findByIdAndDelete(id);
    if (!commentFound)
      return res.status(404).json({ message: "No se encontro el comentario" });
    return res.status(200);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
