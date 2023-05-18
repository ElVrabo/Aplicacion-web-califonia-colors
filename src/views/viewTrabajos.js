import "../trabajos.css";
import { trabajos } from "../components/formTrabajos";
export const ApartadoTrabajos = () => {
  const trabajosRender = trabajos.map((e) => (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top img" src={e.imagen} />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "blue" }}>
          {e.trabajo}
        </h5>
        <p className="card-text">{e.descripcion}</p>
        <p>{e.precio}</p>
        <button className="btn-promo">Informacion</button>
      </div>
    </div>
  ));
  return trabajos.length > 0 ? (
    <div className="container-empleos">
      <h2 style={{ color: "blue" }}>
        Estamos buscando empleados para las areas:
      </h2>
      <div style={{ marginTop: "30px" }} className="empleo-disponible">
        {trabajosRender}
      </div>
    </div>
  ) : (
    <>
      <h1 style={{ color: "blue", textAlign: "center" }}>
        Seccion de trabajos
      </h1>
      <h1 style={{ color: "blue", textAlign: "center" }}>
        ¡No hay vacantes disponibles!
      </h1>
    </>
  );
};
