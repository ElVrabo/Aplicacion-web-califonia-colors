import { useState, useRef } from "react";
import "./reseñas.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Reseñas = () => {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [viewModalExit, setViewModalExit] = useState(false);
  const [viewModalError, setViewModalError] = useState(false);
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
    <>
      <Navegacion />
      <div className="container-modals">
        <Modal show={viewModalExit} onHide={() => setViewModalExit(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>¡Gracias!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Gracias por tu comentario, nos ayudas mucho opinando!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setViewModalExit(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={viewModalError} onHide={() => setViewModalError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>¡Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ocurrio un error, verifica que hayas llenado todos los campos
            porfavor!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setViewModalError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

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
                setViewModalExit(true);
                textarea.current.value = "";
              } else {
                setViewModalError(true);
              }
            }}
          >
            Insertar comentario
          </button>
        </div>
      </div>
    </>
  );
};
