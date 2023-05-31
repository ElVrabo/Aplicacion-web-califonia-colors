import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider
      value={{ usuario, setUsuario, password, setPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};
