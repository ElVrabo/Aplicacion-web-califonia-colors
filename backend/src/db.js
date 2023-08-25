import mongoose from "mongoose";
import dotenv from "dotenv";

/*Carga las variables de entorno desde el archivo .env*/
dotenv.config();

export const connectDB = async () => {
  try {
    /*Se conecta al cluster y se pone la password*/
    await mongoose.connect(
      /*procces.env es para acceder a las variables de entorno que se definieron en el archivo .env
      dentro del directorio donde se corre el servidor*/
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9fxfoaa.mongodb.net/?retryWrites=true&w=majority`,
      {
        /*Se especifica el nombre de la base de datos que se quiere acceder en ese cluster
        de mongoDB atlas*/
        dbName: "california-colors",
      }
    );
  } catch (error) {}
};
