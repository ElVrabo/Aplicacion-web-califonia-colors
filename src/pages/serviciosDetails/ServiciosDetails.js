import "./serviciosDetails.css";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import puntuacionServicio from "./puntuacionServicio";
import { CATALOGOSERVICIOS } from "../../config/router/paths";
import serviciosMecanica from "../../utils/serviciosMecanica";

const ServiciosDetail = () => {
  let { servicioID } = useParams();
  const navigete = useNavigate();

  let servicioSeleccionado = serviciosMecanica.find(
    (servicio) => servicio.id == servicioID
  );
  function openWhatsApp(servicio) {
    const number = 2411314735;
    const message = `Hola, me podrian proporcionar informacion sobre lo que ofreces de ${servicio}. Por favor.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  return (
    <>
      <div className="container-card-details">
        <div className="body-card-details">
          <img
            className="image-service"
            src={servicioSeleccionado.image}
            alt=""
          />
          <div className="text-service-details">
            <p style={{ color: "black" }}>
              {servicioSeleccionado.recomendado
                ? "Recomendado"
                : "No recomendado"}
            </p>
            <p style={{ color: "black" }}>
              {`Servicios de ${servicioSeleccionado.nombre}`}
            </p>
            <div className="puntuacion-service">
              <img
                style={{ height: "20px", width: "20px" }}
                src={puntuacionServicio.star}
                alt=""
              />
              <img
                style={{ height: "20px", width: "20px" }}
                src={puntuacionServicio.star}
                alt=""
              />
              <img
                style={{ height: "20px", width: "20px" }}
                src={puntuacionServicio.star}
                alt=""
              />
              <img
                style={{ height: "20px", width: "20px" }}
                src={puntuacionServicio.star}
                alt=""
              />
            </div>
            {servicioSeleccionado.servicios.map((servicio) => (
              <ol style={{ marginTop: "10px" }} key={servicio}>
                <li style={{ color: "black" }}>{`✅ ${servicio}`}</li>
              </ol>
            ))}
            <div className="btns-details">
              <Button
                onClick={() => openWhatsApp(servicioSeleccionado.nombre)}
                variant="primary"
              >
                Me interesa
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  navigete(CATALOGOSERVICIOS);
                }}
              >
                Regresar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiciosDetail;
