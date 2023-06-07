import { Route, Routes } from "react-router-dom";
import App from "../../pages/ScreenCliente";
import { UserContextProvider } from "../../context/UserContext";
import { Admin } from "../../components/formAdmin";
import { ScreenHojalateria } from "../../pages/ScreenHojalateria";
import { ViewAdmin } from "../../layouts/viewAdmin";
import { HOJALATERIA, HOME, LOGIN, PageAdmin } from "./paths";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME} element={<App />} />
      <Route
        path={LOGIN}
        element={
          <UserContextProvider>
            <Admin />
          </UserContextProvider>
        }
      />
      <Route path={HOJALATERIA} element={<ScreenHojalateria />} />
      <Route
        path={PageAdmin}
        element={
          <UserContextProvider>
            <ViewAdmin />
          </UserContextProvider>
        }
      />
    </Routes>
  );
};
