import { useEffect } from "react";
import "./reseñas.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { useContext } from "react";
import { ResenasContext } from "../../context/ReseñasContext";

import { useForm } from "react-hook-form";

export const Reseñas = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { listComments, getComments, createComments } =
    useContext(ResenasContext);

  useEffect(() => {
    /*Al renderizar todo el componente se obtienen todos los comentarios*/
    getComments();
  }, []);

  const insertComment = handleSubmit(async (data) => {
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
        <div className="container-comentarios" id="comentarios">
          <form onSubmit={insertComment} className="formulario-comentarios">
            <input
              type="text"
              {...register("description", { required: true })}
              className="input-comentarios"
              placeholder="Ingresa tu comentario"
            />
            <button type="submit" className="btn-insert-comment">
              Insertar comentario
            </button>
          </form>
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
            {...register("description", { required: true })}
            className="input-comentarios"
            placeholder="Ingresa tu comentario"
          />
          <button type="submit" className="btn-insert-comment">
            Insertar comentario
          </button>
        </form>
      </div>
    </>
  );
};
