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
  const inputComentario = useRef();

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

      <div className="container-comentarios" id="comentarios">
        {comentarios.length === 0 ? (
          <h1 style={{ color: "black" }}>Comentarios</h1>
        ) : (
          comentariosRender
        )}
        <div className="formulario-comentarios">
          <input
            type="text"
            ref={inputComentario}
            onChange={(e) => setComentario(e.target.value)}
            className="input-comentarios"
            placeholder="Ingresa tu comentario"
          />
          <button
            className="btn-insert-comment"
            onClick={() => {
              /*El arreglo destructurado [...comentarios,comentario] es una forma de agregar un elemento nuevo al final del arreglo comentarios. Esto se logra creando un nuevo arreglo que contenga los elementos del original, para esto se usa el [...comentarios] seguidos del nuevo elemento (comentario)*/
              if (inputComentario.current.value) {
                /*se crea un nuevo arreglo con los elementos del anterior y se le agrega un nuevo valor (comentario)*/
                setComentarios([...comentarios, comentario]);
                setViewModalExit(true);
                inputComentario.current.value = "";
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
