import { Cards } from "../Cards-servicios";
import cristales from "../assets/cristales.jpg";
import bujes from "../assets/bujes.jpg";
import pernos from "../assets/pernos.jpg";
import chasis from "../assets/chasis.jpg";
import chapas from "../assets/chapas.jpg";
import manijas from "../assets/manijas.jpg";
import elevadores from "../assets/elevadores.jpg";
import secciones from "../assets/seccionesdañadas1.jpeg";
export const ScreenHojalateria = () => {
  return (
    <body>
      <h1 style={{ color: "blue", textAlign: "center", marginTop: "20px" }}>
        ¡Servicios de hojalateria!
      </h1>
      <div
        className="container-services"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <Cards
          imagenServicio={cristales}
          servicio={"Cambio de cristales"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          imagenServicio={bujes}
          servicio={"Cambio de bujes"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          imagenServicio={pernos}
          servicio={"Pernos de puertas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          imagenServicio={chasis}
          servicio={"Acorazado de chasis"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          imagenServicio={chapas}
          servicio={"Reparacion de chapas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          imagenServicio={manijas}
          servicio={"Reparacion de manijas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          imagenServicio={elevadores}
          servicio={"Elevadores de puertas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
        <Cards
          imagenServicio={secciones}
          servicio={"Secciones dañadas"}
          descripcion={
            "Ofrecemos un servicio muy amplio de pintura para todo tipo de auto"
          }
          funcion={() => {}}
        />
      </div>
    </body>
  );
};
