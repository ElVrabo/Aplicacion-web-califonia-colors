import Promotion from "../models/promotions.model.js";
export const getPromotions = async (req, res) => {
  try {
    /*El metodo find obtiene todos los documentos de la coleccion Promotion*/
    const promotions = await Promotion.find();
    /*Responde al cliente con objeto un json con esos documentos encontrados*/
    res.status(200).json(promotions);
  } catch (error) {
    res.status(404).json({ message: "algo salio mal" });
  }
};

export const createPromotion = async (req, res) => {
  try {
    const { title, description, price, date } = req.body;

    let newPromotion = new Promotion({
      // avatar: req.file,
      title,
      description,
      price,
      date,
    });
    /*Si hay un archivo en la peticion*/
    if (req.file) {
      /*En el objeto newPromotion se le agregara una propiedad avatar que sera igual al path
      de ese archivo*/
      newPromotion.avatar = req.file.path;
    }
    /*El metodo save de moongose es para guardar ese documento creado en la bd*/
    const savePromotion = await newPromotion.save();
    res.json(savePromotion);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const deletePromotion = async (req, res) => {
  const { id } = req.params;
  try {
    /*el metodo findByIdAndDelete busca documentos por su id y los elimina de la coleccion*/
    const promotionFound = await Promotion.findByIdAndDelete(id);
    if (!promotionFound)
      return res.status(404).json({ message: "No se encontro la promocion" });
    return res.status(204);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
