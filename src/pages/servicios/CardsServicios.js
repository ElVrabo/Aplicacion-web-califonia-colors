import { Link } from "react-router-dom";
import "./cardsServicios.css";
export const CardsServicios = ({
  imagen,
  nombreServicio,
  descripcionServicio,
  link,
}) => {
  return (
    <div className="cards-servicios">
      <div className="body-cards">
        <img src={imagen} alt="" />
        <h2>{nombreServicio}</h2>
        <p>{descripcionServicio}</p>
        <div className="btn-ver">
          <Link style={{ color: "white", textDecoration: "none" }} to={link}>
            Ver
          </Link>
        </div>
      </div>
    </div>
  );
};
