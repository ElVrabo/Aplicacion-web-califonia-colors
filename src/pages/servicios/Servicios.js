import "./servicios.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { Carrusel } from "../../components/carrusel/carrusel";
import firstImageCarrusel from "../../assets/motor.jpg";
import secondImageCarrusel from "../../assets/kilometraje.jpg";
import thirdImageCarrusel from "../../assets/carroPexels.jpg";
import { useContext, useEffect } from "react";
import { ServiciosContext } from "../../context/ServiciosContext";
import serviciosMecanica from "../../utils/serviciosMecanica";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Servicios = () => {
  const { listServicios, setListServicios } = useContext(ServiciosContext);
  const navigate = useNavigate();

  useEffect(() => {
    /*Cuando se renderize por primera ves el componente la variable listServicios
    sera igual al array de servicios de mecanica*/
    setListServicios(serviciosMecanica);
  }, []);

  /*Funcion para que cuando el usuario busque un servicio en especifico, este mismo se renderize
  para eso funciona el metodo filter de arrays*/
  const searchService = (e) => {
    const filterProduct = serviciosMecanica.filter((servicio) => {
      return servicio.nombre == e.target.value;
    });
    /*Se actualiza la variable listServicios con los servicios filtrados dada una condicion*/
    setListServicios(filterProduct);
  };

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
      <div className="container-input-search-service">
        <div className="input-search">
          <label style={{ color: "black" }}>Busca un servicio</label>
          <select onChange={searchService}>
            <option value="" disabled>
              Elige una opcion
            </option>
            <option value="Mecanica">Mecanica</option>
            <option value="Pintura">Pintura</option>
            <option value="Electrico">Electrico</option>
            <option value="Tapiceria">Tapiceria</option>
          </select>
        </div>
      </div>
      <div id="servicios" className="container-card-services">
        {listServicios.map((servicio) => (
          <div className="body-card-services" key={servicio.id}>
            <img src={servicio.image} alt="imagen" />
            <h2>{servicio.nombre}</h2>
            <Button
              variant="primary"
              onClick={() => {
                navigate(`/servicios/${servicio.id}`);
              }}
            >
              Detalles
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};
