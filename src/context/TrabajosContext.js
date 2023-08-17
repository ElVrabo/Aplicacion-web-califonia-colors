import { createContext, useState } from "react";
import {
  createTrabajoRequest,
  deleteTrabajoRequest,
  getTrabajosRequest,
} from "../api/trabajos";

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
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const deleteTrabajo = async (id) => {
    try {
      const res = await deleteTrabajoRequest(id);
      if (res.status === 204)
        setTrabajos(trabajos.filter((trabajo) => trabajo._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TrabajosContext.Provider
      value={{
        trabajos,
        errors,
        getTrabajos,
        createTrabajo,
        deleteTrabajo,
      }}
    >
      {children}
    </TrabajosContext.Provider>
  );
};
