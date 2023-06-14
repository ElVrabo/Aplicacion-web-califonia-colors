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
        <Link style={{ textDecoration: "none" }} to={HOME}>
          Inicio
        </Link>
        <Link style={{ textDecoration: "none" }} to={ListPromociones}>
          Promociones
        </Link>
        <Link style={{ textDecoration: "none" }} to={CATALOGOSERVICIOS}>
          Catalogo de servicios
        </Link>
        <Link style={{ textDecoration: "none" }} to={ListTrabajos}>
          ¿Buscas empleo?
        </Link>
        <Link style={{ textDecoration: "none" }} to={ListComentarios}>
          Comentarios
        </Link>
        <Link style={{ textDecoration: "none" }} to={CONTACTO}>
          Contacto
        </Link>
        <div
          className="container-admin"
          style={{
            backgroundColor: "blue",
            borderRadius: "10px",
            width: "80px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ borderRadius: "5px", backgroundColor: "blue" }}
            onClick={() => {
              navigete(LOGIN);
            }}
            variant="contained"
            startIcon={<AccountCircleRoundedIcon />}
          >
            Admin
          </Button>
        </div>
      </nav>
    </>
  );
};
