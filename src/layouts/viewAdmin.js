import "../agregarpromociones.css";

import { FormTrabajos } from "../components/formTrabajos";
import { FormPromociones } from "../components/formPromociones";



import NavbarAdmin from "../components/common/NavbarAdmin";

export const ViewAdmin = () => {
  return (
    <div>
      <NavbarAdmin />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop: "20px",
        }}
        className="container-forms-admin"
      >
        <FormPromociones />

        <FormTrabajos />
      </div>
    </div>
  );
};
