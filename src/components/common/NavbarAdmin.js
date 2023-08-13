import "./navbarAdmin.css";
import { Link } from "react-router-dom";
import { PageAdmin, PageAdminViewPost } from "../../config/router/paths";

const NavbarAdmin = () => {
  return (
    <nav className="container-nav-admin">
      <Link style={{ color: "white", textDecoration: "none" }} to={PageAdmin}>
        Insertar publicaciones
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        className="nav-link"
        to={PageAdminViewPost}
      >
        Ver mis publicaciones
      </Link>
    </nav>
  );
};
export default NavbarAdmin;