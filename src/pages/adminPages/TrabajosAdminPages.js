import { useContext, useEffect } from "react";
import NavbarAdmin from "../../components/common/NavbarAdmin";
import { TrabajosContext } from "../../context/TrabajosContext";
import { ListTrabajos } from "../trabajos/ListTrabajos";

const TrabajosAdminPages = () => {
  const { getTrabajos, trabajos, deleteTrabajo } = useContext(TrabajosContext);

  useEffect(() => {
    getTrabajos();
  }, []);

  if (trabajos.length == 0) {
    return (
      <>
        <NavbarAdmin />;<h1>No hay trabajos</h1>;
      </>
    );
  }
  return (
    <>
      <NavbarAdmin />
      <h1 style={{ marginTop: "25px" }}>Mis trabajos</h1>
      <div
        className="container-mis-trabajos"
        style={{
          display: "flex",
          marginTop: "30px",
          justifyContent: "center",
          flexWrap: "wrap-reverse",
          gap: "20px",
        }}
      >
        {trabajos.map((trabajo) => (
          <ListTrabajos
            trabajo={trabajo}
            showClick={() => {
              deleteTrabajo(trabajo._id);
              getTrabajos();
            }}
            textButton="Eliminar"
            key={trabajo._id}
          />
        ))}
      </div>
    </>
  );
};

export default TrabajosAdminPages;
