import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/californiadb");
    console.log("Se conecto exitosamente a la base de datos");
  } catch (error) {
    console.log("ocurrio un error", error);
  }
};
