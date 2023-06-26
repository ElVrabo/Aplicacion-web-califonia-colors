import { useContext } from "react";
import { PromocionesContext } from "../../context/PromocionesContext";

export const ListPromociones = () => {
  const { listPromociones } = useContext(PromocionesContext);

  return listPromociones.map((promocion) => (
    <div className="card" style={{ width: "18rem" }} key={promocion.id}>
      <img className="card-img-top img" src={promocion.imagen} />
      <div className="card-body">
        <h5 className="card-title">{promocion.titulo}</h5>
        <p className="card-text">{promocion.descripcion}</p>
        <p>{promocion.precio}</p>
        <button className="btn-promo">Mas informacion</button>
      </div>
    </div>
  ));
};
