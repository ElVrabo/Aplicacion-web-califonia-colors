import "./servicios.css";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { Carrusel } from "../../components/carrusel/carrusel";
import firstImageCarrusel from "../../assets/cristales.jpg";
import secondImageCarrusel from "../../assets/mecanica.jpg";
import thirdImageCarrusel from "../../assets/seccionesdañadas.jpg";
import imageMecanica from "../../assets/mecanicaPexels.jpg";
import imagePintura from "../../assets/pinturaPexels.jpg";
import imageElectrico from "../../assets/electrico.jpg";
import imageTapiceria from "../../assets/tapiceriaPexels.jpg";
import Button from "react-bootstrap/Button";

export const Servicios = () => {
  function numberWhatsApp() {
    const phoneNumber = "2412477577";
    return phoneNumber;
  }

  function getServicio(servicio) {
    const phoneNumber = numberWhatsApp();
    const message = `Hola, me podria proporcionar los servicios de ${servicio} que ofrecen. Por favor.`;
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
        <div id="servicios" className="body-card-services">
          <img src={imageMecanica} alt="" />
          <h4>Mecanica</h4>
          <Button onClick={() => getServicio("Mecanica")} variant="primary">
            Informacion
          </Button>
        </div>
        <div className="body-card-services">
          <img src={imagePintura} alt="" />
          <h4>Pintura</h4>
          <Button onClick={() => getServicio("Pintura")} variant="primary">
            Informacion
          </Button>
        </div>
        <div className="body-card-services">
          <img src={imageElectrico} alt="" />
          <h4>Electrico</h4>
          <Button onClick={() => getServicio("Electricidad")} variant="primary">
            Informacion
          </Button>
        </div>
        <div className="body-card-services">
          <img src={imageTapiceria} alt="" />
          <h4>Tapiceria</h4>
          <Button onClick={() => getServicio("Tapiceria")} variant="primary">
            Informacion
          </Button>
        </div>
      </div>
    </>
  );
};
