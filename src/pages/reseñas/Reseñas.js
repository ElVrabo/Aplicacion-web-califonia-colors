import { useEffect, useState } from "react";
import "./reseñas.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { useContext } from "react";
import { ResenasContext } from "../../context/ReseñasContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";

export const Reseñas = () => {
  const [commentError, setCommentError] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const { listComments, getComments, createComments, errors } =
    useContext(ResenasContext);

  useEffect(() => {
    /*Al renderizar todo el componente se obtienen todos los comentarios*/
    getComments();
  }, []);

  const insertComment = handleSubmit(async (data) => {
    if (data.description === "" || data.description.length < 4) {
      setCommentError(true);
    }
    await createComments(data);
    setValue("description", "");
    /*Se llama aca igual la funcion para que cuando inserte un comentario
    se visualizen enseguida*/
    getComments();
  });

  if (listComments == 0) {
    return (
      <>
        <Navegacion />
        <h1 style={{ marginTop: "10px" }}>No hay ningun comentario</h1>
        <div className="container-comentarios" id="comentarios">
          <form onSubmit={insertComment} className="formulario-comentarios">
            <input
              type="text"
              {...register("description")}
              className="input-comentarios"
              placeholder="Ingresa tu comentario"
            />
            <button type="submit" className="btn-insert-comment">
              Insertar comentario
            </button>
          </form>
          <Modal show={commentError} onHide={() => setCommentError(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "red" }}>¡Error!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                {errors.map((error) => (
                  <div>{error}</div>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setCommentError(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }

  return (
    <>
      <Navegacion />

      <div className="container-comentarios" id="comentarios">
        {listComments.map((comment) => {
          return (
            <div
              key={comment._id}
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                height: "auto",
                width: "auto",
              }}
            >
              {comment.comentario}
            </div>
          );
        })}

        <form onSubmit={insertComment} className="formulario-comentarios">
          <input
            type="text"
            {...register("description")}
            className="input-comentarios"
            placeholder="Ingresa tu comentario"
          />
          <button type="submit" className="btn-insert-comment">
            Insertar comentario
          </button>
        </form>
        <Modal show={commentError} onHide={() => setCommentError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>¡Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setCommentError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
