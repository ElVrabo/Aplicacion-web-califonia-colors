import "./servicios.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { Carrusel } from "../../components/carrusel/carrusel";
import firstImageCarrusel from "../../assets/cristales.jpg";
import secondImageCarrusel from "../../assets/mecanica.jpg";
import thirdImageCarrusel from "../../assets/seccionesdañadas.jpg";
import iconMecanico from "../../assets/icons/146manmechanic2_100581.png";
import iconOferta from "../../assets/icons/oferta.png";
import Button from "react-bootstrap/Button";

export const Servicios = () => {
  function numberWhatsApp() {
    const phoneNumber = "2412477577";
    return phoneNumber;
  }

  function openWhatsApp() {
    const phoneNumber = numberWhatsApp();
    const message =
      "Hola, me podria proporcionar los servicios que ofrecen. Por favor.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = url;
  }
  return (
    <>
      <Navegacion />
      <div className="container-carrusel">
        <Carrusel
          firstTitle="Ofrecemos los mejores servicios"
          secondTitle="De muy buena calidad"
          thirdTitle="Servicios accesibles"
          firstImage={firstImageCarrusel}
          secondImage={secondImageCarrusel}
          thirdImage={thirdImageCarrusel}
          redireccion="#servicios"
          textoRedireccion="Ver"
        />
      </div>
      <div className="container-card-services">
        <div className="body-card-services">
          <img src={iconMecanico} alt="" />
          <h4>Pregunta por todos nuestros servicios</h4>
          <Button onClick={openWhatsApp} variant="primary">
            Informacion
          </Button>
        </div>
        <div className="body-card-services">
          <img src={iconOferta} alt="" />
          <h4>Aprovecha nuestras mejores promociones</h4>
          <Button onClick={openWhatsApp} variant="primary">
            Informacion
          </Button>
        </div>
      </div>
    </>
  );
};
