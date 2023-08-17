import Trabajo from "../models/trabajos.model.js";

export const getTrabajos = async (req, res) => {
  try {
    const trabajos = await Trabajo.find();
    res.status(200).json(trabajos);
  } catch (error) {
    res.status(400).json({ message: "Algo salio mal con la peticion" });
  }
};

export const createTrabajo = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTrabajo = new Trabajo({
      title,
      description,
      date,
    });
    if (req.file) {
      newTrabajo.avatar = req.file.filename;
    }
    const saveTrabajo = await newTrabajo.save();
    res.json(saveTrabajo);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteTrabajo = async (req, res) => {
  try {
    const foundTrabajo = await Trabajo.findByIdAndDelete(req.params.id);
    if (!foundTrabajo)
      return res.status(404).json({ message: "No se encontro la tarea" });
    return res.status(204);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
