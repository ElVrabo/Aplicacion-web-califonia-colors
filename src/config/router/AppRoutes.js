import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../../context/UserContext";
import { ScreenHojalateria } from "../../pages/ScreenHojalateria";
import { ViewAdmin } from "../../layouts/viewAdmin";
import {
  CATALOGOSERVICIOS,
  CONTACTO,
  HOJALATERIA,
  HOME,
  LOGIN,
  ListPromociones,
  PageAdmin,
  ListTrabajos,
  ListComentarios,
} from "./paths";
import { Home } from "../../pages/Home/Home";
import { Promociones } from "../../pages/promociones/promociones";
import { CatalogoServicios } from "../../pages/servicios/CatalogoServicios";
import { Trabajos } from "../../pages/trabajos/trabajos";
import { Reseñas } from "../../pages/reseñas/Reseñas";
import { Contacto } from "../../pages/contacto/Contacto";
import { Login } from "../../pages/Login/Login";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={ListPromociones} element={<Promociones />} />
      <Route path={CATALOGOSERVICIOS} element={<CatalogoServicios />} />
      <Route path={ListTrabajos} element={<Trabajos />} />
      <Route path={ListComentarios} element={<Reseñas />} />
      <Route path={CONTACTO} element={<Contacto />} />
      <Route path={HOJALATERIA} element={<ScreenHojalateria />} />
      <Route
        path={LOGIN}
        element={
          <UserContextProvider>
            <Login />
          </UserContextProvider>
        }
      />

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
