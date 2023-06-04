import { useContext, useRef, useState } from "react";
import "../agregarpromociones.css";
import { useNavigate } from "react-router-dom";

export let promociones = [];

export const FormPromociones = () => {
  let [imagen, setImagen] = useState("");
  let [titulo, setTitulo] = useState("");
  let [descripcion, setDescripcion] = useState("");
  let [precio, setPrecio] = useState("");
  let FormPromociones = useRef();
  const navigete = useNavigate();

  const resetInputs = () => {
    /*Array.from se uso para convertir la coleccion de elementos obtenida en un array y luego filtramos los elementos por su propiedad tagName, en este caso el arreglo unicamente tendra elementos html input*/
    const inputs = Array.from(FormPromociones.current.children).filter(
      (element) => element.tagName === "INPUT"
    );
    /*se recorre el arreglo y se le indica que el valor de cada input sera igual a una cadena vacia*/
    inputs.forEach((input) => (input.value = ""));
  };

  const selectFile = (e) => {
    /*se obtiene la imagen seleccionada mediante la propiedad target.files[0]*/
    const image = e.target.files[0];
    /*se valida que la imagen seleccionada sea del tipo image/ para asegurarse de que se esta cargando unicamente una imagen, si la imagen es valida se crea una URL temporal con el metodo URL.createObjectURL(image) y se actualiza el estado de la variable en setImagen con la url temporal generada, que se utilizara para posteriormente mostrar la imagen en el componente Promociones.js*/
    if (image.type.startsWith("image/")) {
      setImagen(URL.createObjectURL(image));
    }
  };
  const insertPromotion = () => {
    if (imagen && titulo && descripcion && precio) {
      let promocion = {
        id: promociones.length,
        imagen,
        titulo,
        descripcion,
        precio,
      };
      promociones = [...promociones, promocion];
      resetInputs();
    } else {
      alert("rellena los campos porfavor");
    }
  };

  const deleteAllPromotions = () => {
    if (promociones.length == 0) {
      alert("no hay ninguna promocion por eliminar");
    } else {
      /*el metodo splice funciona para eliminar elementos de un array, se le proporciona el indice de inicio que es 0 y la cantidad de elementos que se quieren eliminar (longitud del array)*/
      promociones = [];
      alert(
        "se eliminaron todas tus promociones, pulsa el boton de arriba para checar"
      );
    }
  };

  return (
    <>
      <div ref={FormPromociones} className="form-agregar">
        <label htmlFor="imagen">Añade una imagen:</label>
        <input
          onChange={selectFile}
          type="file"
          id="imagen"
          className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100 border-b-2 border-blue-700 border-t-0 border-r-0 border-l-0 w-50"
        />
        <label htmlFor="input1">Nombre de tu promocion:</label>
        <input
          id="input1"
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label htmlFor="input2">Descripcion de la promocion:</label>
        <input
          id="input2"
          onChange={(e) => setDescripcion(e.target.value)}
          type="text"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label htmlFor="input3">Precio de la promocion:</label>
        <input
          id="input3"
          onChange={(e) => setPrecio(e.target.value)}
          type="text"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 w-50 text-white"
          onClick={insertPromotion}
        >
          Insertar promocion
        </button>
        <button
          onClick={() => {
            navigete("/inicio");
          }}
          className="bg-blue-500 hover:bg-blue-700 w-50 text-white"
        >
          Visualizar promociones
        </button>
        <button
          onClick={deleteAllPromotions}
          className="bg-blue-500 hover:bg-blue-700 w-50 text-white"
        >
          Eliminar todas las promociones
        </button>
      </div>
    </>
  );
};
