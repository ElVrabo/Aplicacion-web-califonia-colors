import { useState, useRef } from "react";
import "../reseñas.css";

export const Reseñas = () => {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const textarea = useRef();

  /*se recorre el arreglo*/
  const comentariosRender = comentarios.map((comentario, index) => {
    return (
      <div key={index} className="cards-comentarios">
        <div className="card">{comentario}</div>
      </div>
    );
  });

  return (
    <div className="container-comentarios">
      {comentarios.length === 0 ? (
        <h1>¡No hay ningún comentario!</h1>
      ) : (
        comentariosRender
      )}
      <div className="formulario-comentarios">
        <textarea
          ref={textarea}
          onChange={(e) => setComentario(e.target.value)}
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 w-50 text-white text-decoration-none text-center rounded-md"
          onClick={() => {
            /*El arreglo destructurado [...comentarios,comentario] es una forma de agregar un elemento nuevo al final del arreglo comentarios. Esto se logra creando un nuevo arreglo que contenga los elementos del original, para esto se usa el [...comentarios] seguidos del nuevo elemento (comentario)*/
            if (comentario) {
              /*se crea un nuevo arreglo con los elementos del anterior y se le agrega un nuevo valor (comentario)*/
              setComentarios([...comentarios, comentario]);
              textarea.current.value = "";
              console.log(comentarios);
            } else {
              alert("No rellenaste el campo");
            }
          }}
        >
          Insertar comentario
        </button>
      </div>
    </div>
  );
};
