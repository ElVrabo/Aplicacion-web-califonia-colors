export const validatorSchema = (schema) => (req, res, next) => {
  try {
    /*Las validaciones que solicita el backend se comparan con los datos que 
    envia el cliente*/
    schema.parse(req.body);
    /*Si se cumplen, se hace la peticion correctamente*/
    next();
  } catch (error) {
    /*Si no se cumplen, se regresan los messages de las validaciones y se recorren,
    y se responde al cliente en un objeto json*/
    res.status(404).json(error.errors.map((error) => error.message));
  }
};
