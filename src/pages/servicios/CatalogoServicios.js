import { Navegacion } from "../../components/Navegacion/Navegacion";
import { CardsServicios } from "./CardsServicios";
import { HOJALATERIA } from "../../config/router/paths";
import imageHojalateria from "../../assets/hojalateria.jpeg";
import imageTapiceria from "../../assets/tapiceria.jpeg";
import imageElectrico from "../../assets/electrico.jpg";
import imagePintura from "../../assets/pintura.jpeg";
import imageMecanica from "../../assets/mecanica.jpg";
import "./catalogoServicios.css";

export const CatalogoServicios = () => {
  return (
    <>
      <Navegacion />
      <div className="catalogo-servicios">
        <CardsServicios
          imagen={imageHojalateria}
          nombreServicio={"Hojalateria"}
          descripcionServicio={"Servicio de hojalateria"}
          link={HOJALATERIA}
        />
        <CardsServicios
          imagen={imageTapiceria}
          nombreServicio={"Tapiceria"}
          descripcionServicio={"Servicio de tapiceria"}
          link={HOJALATERIA}
        />
        <CardsServicios
          imagen={imageElectrico}
          nombreServicio={"Electrico"}
          descripcionServicio={"Servicio de electricidad"}
          link={HOJALATERIA}
        />
        <CardsServicios
          imagen={imagePintura}
          nombreServicio={"Pintura"}
          descripcionServicio={"Servicio de pintura"}
          link={HOJALATERIA}
        />
        <CardsServicios
          imagen={imageMecanica}
          nombreServicio={"Mecanica"}
          descripcionServicio={"Servicio de mecanica"}
          link={HOJALATERIA}
        />
      </div>
    </>
  );
};
