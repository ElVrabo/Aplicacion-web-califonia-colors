import "./navegacion.css";
import { Link, useNavigate } from "react-router-dom";
import {
  CATALOGOSERVICIOS,
  CONTACTO,
  HOME,
  LOGIN,
  ListComentarios,
  ListPromociones,
  ListTrabajos,
} from "../../config/router/paths";
import { Button } from "@mui/material";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
export const Navegacion = () => {
  const navigete = useNavigate();

  return (
    <>
      <nav className="container-nav">
        <Link className="nav-links" to={HOME}>
          Inicio
        </Link>
        <Link className="nav-links" to={ListPromociones}>
          Promociones
        </Link>
        <Link className="nav-links" to={CATALOGOSERVICIOS}>
          Catalogo de servicios
        </Link>
        <Link className="nav-links" to={ListTrabajos}>
          ¿Buscas empleo?
        </Link>
        <Link className="nav-links" to={ListComentarios}>
          Comentarios
        </Link>
        <Link className="nav-links" to={CONTACTO}>
          Contacto
        </Link>
        <Link className="nav-links" to={LOGIN}>
          Admin
        </Link>
      </nav>
    </>
  );
};
