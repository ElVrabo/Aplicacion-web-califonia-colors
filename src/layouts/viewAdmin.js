import "../agregarpromociones.css";
import { useContext } from "react";
import { FormTrabajos } from "../components/formTrabajos";
import { FormPromociones } from "../components/formPromociones";
import { UserContext } from "../context/UserContext";
import { TableComments } from "../components/common/TableComments";
import FormdAddServices from "../components/FormAddServices";
import NavbarAdmin from "../components/common/NavbarAdmin";

export const ViewAdmin = () => {
  /*este componente puede hacer uso de la variable de usuario ya que se definio en el contexto UserContext*/
  const { userData } = useContext(UserContext);
  return (
    <div>
      <NavbarAdmin />
      <h1 style={{ marginTop: "35px" }}>¡Bienvenido {userData.nombre}!</h1>

      <FormPromociones />

      <FormTrabajos titulo="¡Publica una vacante nueva!" />
      <TableComments />
      <FormdAddServices />
    </div>
  );
};
