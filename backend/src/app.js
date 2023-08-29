import express from "express";
import morgan from "morgan";
import cors from "cors";
import promotionsRoutes from "./routes/promotions.routes.js";
import trabajosRoutes from "./routes/trabajos.routes.js";
import commentsRoutes from "./routes/comentarios.routes.js";
import { connectDB } from "./db.js";
const app = express();

/*Se llama aca a la funcion que conecta la base de datos, ya que este archivo es el que usa vercel 
para desplegar*/
connectDB();
/*el servidor solo aceptara peticiones de la siguiente url y solo peticiones con los
metodos GET,POST,DELETE*/
app.use(
  cors({
    origin: "https://california-colors.netlify.app",
    methods: ["GET", "POST", "DELETE"],
  })
);

/*esta línea de código habilita la entrega de archivos estáticos desde el directorio "uploads"
 de tu aplicación Express, lo que es útil para mostrar imágenes, documentos u otros recursos
  estáticos en tu sitio web.*/

app.use(express.static("uploads"));

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", promotionsRoutes);
app.use("/api", trabajosRoutes);
app.use("/api", commentsRoutes);


export default app;
