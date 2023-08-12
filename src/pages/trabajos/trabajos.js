import "./renderTrabajos.css";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import carruselImage1 from "../../assets/imagenesCarrusel/carrusel1.jpg";
import carruselImage2 from "../../assets/imagenesCarrusel/carrusel2.jpg";
import carruselImage3 from "../../assets/imagenesCarrusel/carrusel3.jpg";
import { Carrusel } from "../../components/carrusel/carrusel";
import { ListTrabajos } from "./ListTrabajos";
import { useContext, useEffect } from "react";
import { TrabajosContext } from "../../context/TrabajosContext";

export const Trabajos = () => {
  const { trabajos, getTrabajos } = useContext(TrabajosContext);

  useEffect(() => {
    getTrabajos();
  }, []);

  if (trabajos == 0) {
    return (
      <>
        <Navegacion />
        <div className="container-carrusel">
          <Carrusel
            firstTitle="¿Buscas un empleo?"
            secondTitle="¡No esperes mas!"
            thirdTitle="Se de nuestro equipo"
            firstImage={carruselImage1}
            secondImage={carruselImage2}
            thirdImage={carruselImage3}
            redireccion="#trabajos"
            textoRedireccion="Ver vacantes"
          />
        </div>

        <div className="icon-error">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <h1 id="trabajos" style={{ color: "black", textAlign: "center" }}>
          ¡No hay vacantes aun!
        </h1>
      </>
    );
  }
  return (
    <>
      <Navegacion />
        <div className="container-carrusel">
          <Carrusel
            firstTitle="¿Buscas un empleo?"
            secondTitle="¡No esperes mas!"
            thirdTitle="Se de nuestro equipo"
            firstImage={carruselImage1}
            secondImage={carruselImage2}
            thirdImage={carruselImage3}
            redireccion="#trabajos"
            textoRedireccion="Ver vacantes"
          />
        </div>
      <h1 style={{color:"black", textAlign:"center",marginTop:"40px"}}>Nuestras vacantes</h1>  
    <div id="trabajos" className="container-cards-trabajos">
      {trabajos.map((trabajo)=>(
         <ListTrabajos trabajo={trabajo} textButton="Me interesa" key={trabajo._id} />
      ))}
    </div>
    </>
  )
};
