import "./servicios.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { Carrusel } from "../../components/carrusel/carrusel";
import firstImageCarrusel from "../../assets/motor.jpg";
import secondImageCarrusel from "../../assets/kilometraje.jpg";
import thirdImageCarrusel from "../../assets/carroPexels.jpg";
import { useContext, useEffect, useState } from "react";
import { ServiciosContext } from "../../context/ServiciosContext";
import serviciosMecanica from "../../utils/serviciosMecanica";
import { Link } from "react-router-dom";

export const Servicios = () => {
  const { servicios, setServicios } = useContext(ServiciosContext);

  useEffect(() => {
    setServicios(serviciosMecanica);
  }, []);

  return (
    <>
      <Navegacion />
      <div className="container-carrusel">
        <Carrusel
          firstTitle="Ofrecemos los mejores servicios"
          secondTitle="De muy buena calidad"
          thirdTitle="Servicios excelentes"
          firstImage={firstImageCarrusel}
          secondImage={secondImageCarrusel}
          thirdImage={thirdImageCarrusel}
          redireccion="#servicios"
          textoRedireccion="Ver"
        />
      </div>
      <div id="servicios" className="container-card-services">
        {servicios.map((servicio) => (
          <div className="body-card-services" key={servicio.id}>
            <img src={servicio.image} alt="imagen" />
            <h2>{servicio.nombre}</h2>
            <Link className="link-detalles" to={`/servicios/${servicio.id}`}>
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
