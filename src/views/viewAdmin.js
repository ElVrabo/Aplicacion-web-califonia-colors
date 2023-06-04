import "../agregarpromociones.css";
import { useContext } from "react";
import { Trabajos } from "../components/formTrabajos";
import { FormPromociones } from "../components/formPromociones";
import { UserContext } from "../context/UserContext";

export const ViewAdmin = () => {
  /*este componente puede hacer uso de la variable de usuario ya que se definio en el contexto UserContext*/
  const { usuario } = useContext(UserContext);
  return (
    <div>
      <h1>¡Bienvenido {usuario}!</h1>

      <FormPromociones />

      <Trabajos titulo="¡Publica una vacante nueva!" />
    </div>
  );
};
