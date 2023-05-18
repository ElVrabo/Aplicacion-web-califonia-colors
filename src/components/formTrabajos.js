import { useState } from "react";
import "../trabajos.css";
export const Trabajos = ({ titulo }) => {
  const [imagen, setImagen] = useState("");
  const [trabajo, setTrabajo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  return (
    <div className="container-trabajos">
      <h1>{titulo}</h1>
      <div className="agregar-trabajo">
        <label htmlFor="imagen">Añade una imagen:</label>
        <input
          onChange={(e) => {
            /*se obtiene la imagen seleccionada mediante la propiedad target.files[0]*/
            const image = e.target.files[0];
            /*se valida que la imagen seleccionada sea del tipo image/ para asegurarse de que se esta cargando unicamente una imagen, si la imagen es valida se crea una URL temporal con el metodo URL.createObjectURL(image) y se actualiza el estado de la variable en setImagen con la url temporal generada, que se utilizara para posteriormente mostrar la imagen en el componente Promociones.js*/
            if (image.type.startsWith("image/")) {
              setImagen(URL.createObjectURL(image));
            }
          }}
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
          }}
          type="file"
          id="imagen"
        />
        <label htmlFor="trabajo">Trabajo:</label>
        <input
          type="text"
          id="trabajo"
          onChange={(e) => setTrabajo(e.target.value)}
        />
        <label htmlFor="descripcion">Descripcion:</label>
        <textarea
          id="descripcion"
          cols="30"
          rows="10"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            if (imagen && trabajo && descripcion) {
              let cuerpo = {
                imagen,
                trabajo,
                descripcion,
              };
              trabajos = [...trabajos, cuerpo];
            } else {
              alert("rellena los campos,porfavor");
            }
          }}
        >
          Insertar
        </button>
        <button
          onClick={() => {
            if (trabajos.length > 0) {
              trabajos.splice(0, trabajos.length);
            } else {
              alert("aun no hay vacantes para eliminar");
            }
          }}
        >
          Eliminar vacantes
        </button>
      </div>
    </div>
  );
};

export let trabajos = [];
