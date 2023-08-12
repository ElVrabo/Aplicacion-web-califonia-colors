import path from "path";
import multer from "multer";

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    /*en una carpeta uploads que se debe crear dentro de la carpeta raiz (backend) 
    se guardaran las imagenes que se suban*/
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    /*Aqui se renombrara el archivo con la fecha actual y su extension(png,etc)*/
    cb(null, Date.now() + ext);
  },
});

export let upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    /*Si el archivo es de tipo png,jpeg o jpg entonces se va a guardar en la bd*/
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg"
    ) {
      callback(null, true);
    } else {
      /*Si no, entonces no se guardara*/
      callback(null, false);
    }
  },
  /*Los archivos que se pueden subir solo seran de 2mb*/
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});
