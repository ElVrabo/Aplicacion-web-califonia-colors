import "../agregarpromociones.css";

import { Trabajos } from "../components/formTrabajos";
import { FormPromociones } from "../components/formPromociones";

export const ViewAdmin = () => {
  return (
    <>
      <h1>¡Agrega tus promociones!</h1>

      <FormPromociones />

      <Trabajos titulo="¡Publica una vacante nueva!" />
    </>
  );
};
