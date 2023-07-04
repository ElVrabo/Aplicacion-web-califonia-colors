import { useContext } from "react";
import { TrabajosContext } from "../../context/TrabajosContext";

export const ListTrabajos = ({ handleClick }) => {
  const { listTrabajosData } = useContext(TrabajosContext);
  return listTrabajosData.map((trabajo) => (
    <div className="card" style={{ width: "18rem" }} key={trabajo.id}>
      <img className="card-img-top img" src={trabajo.imagen} />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "blue" }}>
          {trabajo.name}
        </h5>
        <p className="card-text">{trabajo.descripcion}</p>
        <button className="btn-promo" onClick={handleClick}>
          Me interesa
        </button>
      </div>
    </div>
  ));
};
