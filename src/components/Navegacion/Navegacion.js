import "./navegacion.css";
import { Link } from "react-router-dom";
import {
  CATALOGOSERVICIOS,
  CONTACTO,
  HOME,
  LOGIN,
  ListComentarios,
  ListPromociones,
  ListTrabajos,
} from "../../config/router/paths";
// import iconMenu from "../../assets/icons/iconMenu.png"

export const Navegacion = () => {
  const menuItems = [
    "Inicio",
    "Promociones",
    "Catalogo de servicios",
    "¿Buscas empleo?",
    "Comentarios",
    "Contacto",
    "Admin",
  ];
  return (
    <>
      <nav className="container-nav">
        {/* <input type="checkbox"/>
        <label htmlFor="check" className="bar-btn"></label> */}
        <Link className="nav-links" to={HOME}>
          {menuItems[0]}
        </Link>
        <Link className="nav-links" to={ListPromociones}>
          {menuItems[1]}
        </Link>
        <Link className="nav-links" to={CATALOGOSERVICIOS}>
          {menuItems[2]}
        </Link>
        <Link className="nav-links" to={ListTrabajos}>
          {menuItems[3]}
        </Link>
        <Link className="nav-links" to={ListComentarios}>
          {menuItems[4]}
        </Link>
        <Link className="nav-links" to={CONTACTO}>
          {menuItems[5]}
        </Link>
        <Link className="nav-links" to={LOGIN}>
          {menuItems[6]}
        </Link>
      </nav>
    </>
  );
};