import "../Promociones.css";

import { useEffect, useState } from "react";
import { promociones } from "../components/formPromociones";

export const Promociones = () => {
  const [promocionesList, setPromocionesList] = useState([]);

  useEffect(() => {
    setPromocionesList(promociones);
  }, [promociones]);

  const promocionesRender = promocionesList.map((e) => (
    <div className="card" style={{ width: "18rem" }} key={e.id}>
      <img className="card-img-top img" src={e.imagen} />
      <div className="card-body">
        <h5 className="card-title">{e.titulo}</h5>
        <p className="card-text">{e.descripcion}</p>
        <p>{e.precio}</p>
        <button className="btn-promo">Mas informacion</button>
      </div>
    </div>
  ));

  return promocionesList.length > 0 ? (
    <div className="container-promociones">{promocionesRender}</div>
  ) : (
    <h1 style={{ color: "blue", textAlign: "center" }}>
      ¡No hay promociones disponibles!
    </h1>
  );
};