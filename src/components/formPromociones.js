import { useRef, useState } from "react";
import "../agregarpromociones.css";
import { useNavigate } from "react-router-dom";

export const FormPromociones = () => {
  const [imagen, setImagen] = useState("");
  let [titulo, setTitulo] = useState("");
  let [descripcion, setDescripcion] = useState("");
  let [precio, setPrecio] = useState("");
  let inputTitulo = useRef();
  let inputDescripcion = useRef();
  let inputPrecio = useRef();
  const navigete = useNavigate();

  return (
    <>
      <div className="form-agregar">
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
        <label htmlFor="input1">Nombre de tu promocion:</label>
        <input
          id="input1"
          ref={inputTitulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
        />
        <label htmlFor="input2">Descripcion de la promocion:</label>
        <input
          id="input2"
          ref={inputDescripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          type="text"
        />
        <label htmlFor="input3">Precio de la promocion:</label>
        <input
          id="input3"
          ref={inputPrecio}
          onChange={(e) => setPrecio(e.target.value)}
          type="text"
        />
        <button
          className="botones"
          onClick={() => {
            if (imagen && titulo && descripcion && precio) {
              let promocion = {
                imagen,
                titulo,
                descripcion,
                precio,
              };
              /*se crea un nuevo arreglo donde ...promociones contiene los elementos(objetos) del arreglo anterior y promocion es un nuevo valor (objeto) que se le agregara */
              promociones = [...promociones, promocion];

              inputTitulo.current.value = "";
              inputDescripcion.current.value = "";
              inputPrecio.current.value = "";
            } else {
              alert("rellena los campos porfavor");
            }
          }}
        >
          Insertar promocion
        </button>
        <button
          onClick={() => {
            navigete("/inicio");
          }}
          className="botones"
        >
          Visualizar promociones
        </button>
        <button
          onClick={() => {
            if (promociones.length == 0) {
              alert("no hay ninguna promocion por eliminar");
            } else {
              /*el metodo splice funciona para eliminar elementos de un array, se le proporciona el indice de inicio que es 0 y la cantidad de elementos que se quieren eliminar (longitud del array)*/
              promociones.splice(0, promociones.length);
              alert(
                "se eliminaron todas tus promociones, pulsa el boton de arriba para checar"
              );
            }
          }}
          className="botones"
        >
          Eliminar todas las promociones
        </button>
      </div>
    </>
  );
};
export let promociones = [];
