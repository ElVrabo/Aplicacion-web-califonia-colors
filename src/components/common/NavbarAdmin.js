import "./navbarAdmin.css";
import { Link } from "react-router-dom";
import {
  HOME,
  PageAdminViewPost,
  comentariosAdminPages,
  viewTrabajosAdmin,
} from "../../config/router/paths";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NavbarAdmin = () => {
  const { userData } = useContext(UserContext);
  return (
    <nav className="container-nav-admin">
      <h7 style={{ color: "white" }}>Bienvenido {userData.nombre}</h7>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        className="nav-link"
        to={PageAdminViewPost}
      >
        Mis promociones
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to={viewTrabajosAdmin}
      >
        Mis vacantes
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to={comentariosAdminPages}
      >
        Comentarios de usuarios
      </Link>

      <Link style={{ color: "white", textDecoration: "none" }} to={HOME}>
        Cerrar sesion
      </Link>
    </nav>
  );
};
export default NavbarAdmin;
