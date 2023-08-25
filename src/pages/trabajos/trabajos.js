import "./renderTrabajos.css";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import carruselImage1 from "../../assets/imagenesCarrusel/carrusel1.jpg";
import carruselImage2 from "../../assets/imagenesCarrusel/carrusel2.jpg";
import carruselImage3 from "../../assets/imagenesCarrusel/carrusel3.jpg";
import { Carrusel } from "../../components/carrusel/carrusel";
import { ListTrabajos } from "./ListTrabajos";
import { useContext, useEffect, useRef, useState } from "react";
import { TrabajosContext } from "../../context/TrabajosContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Trabajos = () => {
  const [openModalTrabajos, setOpenModalTrabajos] = useState(false);
  const { trabajos, getTrabajos } = useContext(TrabajosContext);
  const respuestaBot = useRef();

  useEffect(() => {
    getTrabajos();
  }, []);

  const handleClick = () => {
    setOpenModalTrabajos(true);
  };

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
      <h1 style={{ color: "black", textAlign: "center", marginTop: "40px" }}>
        Vacantes actuales
      </h1>
      <div id="trabajos" className="container-cards-trabajos">
        {trabajos.map((trabajo) => (
          <ListTrabajos
            trabajo={trabajo}
            showClick={handleClick}
            textButton="Me interesa"
            key={trabajo._id}
          />
        ))}
      </div>
      <Modal
        size="lg"
        show={openModalTrabajos}
        onHide={() => setOpenModalTrabajos(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "green" }}>
            Bot en linea, puedes preguntar.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ color: "black" }} ref={respuestaBot}></p>
          </div>
          <div
            className="opciones-bot"
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              style={{ width: "300px" }}
              onClick={() => {
                respuestaBot.current.innerHTML =
                  "Se necesita: ine, comprobante de domicilio, antecedentes no penales y presentar solicitud de empleo.";
              }}
            >
              ¿Que requisitos necesito?
            </Button>
            <Button
              style={{ width: "300px" }}
              onClick={() => {
                respuestaBot.current.innerHTML =
                  "Minimo 2 meses de experiencie segun la vacante correspondiente.";
              }}
            >
              ¿Necesito experiencia?
            </Button>
            <Button
              style={{ width: "300px" }}
              onClick={() => {
                respuestaBot.current.innerHTML =
                  "Estamos ubicados en KM. 6.5 CARR.FEDERAL. APIZACO-TLAXCO (ENTROQUE TETLA).";
              }}
            >
              ¿Donde estan ubicados?
            </Button>
            <Button
              style={{ width: "300px" }}
              onClick={() => {
                respuestaBot.current.innerHTML =
                  "Para agendarte una cita puede contactarte a los numeros 241-131-4735 o 241-110-7447.";
              }}
            >
              Quiero tener una entrevista
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setOpenModalTrabajos(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
