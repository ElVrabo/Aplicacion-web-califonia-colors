import "tailwindcss/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./Screens/ScreenCliente";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Admin } from "./components/formAdmin";
import { FirebaseAppProvider } from "reactfire"; /*se importa el provedor de firebase para poder hacer uso de los servicios que nos ofrece*/
import firebaseConfig from "./firebase-config"; /*Se importa la configuracion de firebase que esta en el archivo firebase-config.js*/
import { ScreenHojalateria } from "./Screens/ScreenHojalateria";
import { ViewAdmin } from "./views/viewAdmin";
import { UserContextProvider } from "./context/UserContext";
/*Creando rutas con react-router-dom*/
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      /*El componente Admin puede hacer uso del contexto, para esto envolvemos el componente dentro de la funcion UserContextProvider, esta es la funcion que provee los valores al contexto*/
      <UserContextProvider>
        <Admin />
      </UserContextProvider>
    ),
  },
  {
    path: "/hojalateria",
    element: <ScreenHojalateria />,
  },
  {
    path: "/agregar",
    element: (
      /*El componente ViewAdmin puede hacer uso del contexto, para esto envolvemos el componente dentro de la funcion UserContextProvider, esta es la funcion que provee los valores al contexto*/
      <UserContextProvider>
        <ViewAdmin />
      </UserContextProvider>
    ),
  },
  {
    path: "/inicio",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
