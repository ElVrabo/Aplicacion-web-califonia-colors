import { createContext, useState } from "react";
import { createTrabajoRequest, getTrabajosRequest } from "../api/trabajos";

export const TrabajosContext = createContext();

export const TrabajosContextProvider = ({ children }) => {
  const [trabajos, setTrabajos] = useState([]);
  const [errors, setErrors] = useState([]);

  const getTrabajos = async () => {
    try {
      const res = await getTrabajosRequest();
      setTrabajos(res.data);
    } catch (error) {}
  };

  const createTrabajo = async (newTrabajo) => {
    try {
      const res = await createTrabajoRequest(newTrabajo);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  return (
    <TrabajosContext.Provider
      value={{
        trabajos,
        errors,
        getTrabajos,
        createTrabajo,
      }}
    >
      {children}
    </TrabajosContext.Provider>
  );
};
