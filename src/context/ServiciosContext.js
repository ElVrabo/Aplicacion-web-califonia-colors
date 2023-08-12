import { createContext, useState } from "react";

export const ServiciosContext = createContext();

export const ServiciosContextProvider = ({ children }) => {
  const [listServicios, setListServicios] = useState([]);
  return (
    <ServiciosContext.Provider value={{ listServicios, setListServicios }}>
      {children}
    </ServiciosContext.Provider>
  );
};
