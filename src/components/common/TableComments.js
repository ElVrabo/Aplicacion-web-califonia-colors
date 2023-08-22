import "./tableComments.css"
import { useContext, useEffect } from "react";
import { ResenasContext } from "../../context/ReseñasContext";
import Button from "react-bootstrap/Button";

export const TableComments = () => {
  const { listComments, getComments, deleteComments } =
    useContext(ResenasContext);
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>Comentarios de tus clientes</h1>
      <table className="table-comments">
        <thead>
          <tr>
            <th>Numero</th>
            <th>Comentario</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listComments.map((comment, index) => (
            <tr key={comment._id}>
              <td>{index}</td>
              <td>{comment.comentario}</td>
              <td>
                <Button
                  variant="primary"
                  style={{ width: "auto" }}
                  onClick={() => {
                    deleteComments(comment._id);
                    /*Al dar click se visualizan todos los comentarios*/
                    getComments();
                  }}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        {listComments.length > 0 ? (
          <Button variant="primary" style={{ width: "auto" }}>
            Eliminar todos
          </Button>
        ) : (
          <h4 style={{ color: "black" }}>No hay comentarios aun</h4>
        )}
      </div>
    </div>
  );
};