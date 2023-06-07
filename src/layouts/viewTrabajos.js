import "../trabajos.css";
import { trabajos } from "../components/formTrabajos";
import { InfoTrabajos } from "../components/InfoTrabajos";
import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export const ApartadoTrabajos = () => {
  const [openChat, setOpenChat] = useState(false);
  const respuesta = useRef();

  const sendMessage = () => {
    setOpenChat(true);
  };
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.textContent === "¿Que requisitos necesito?") {
      respuesta.current.innerHTML =
        "Los requisitos que se necesitan son los siguientes: ine, comprobante de domicilio, acta de nacimiento, antecedentes no penales y presentar solicitud de empleo.";
    } else if (e.target.textContent === "¿Tengo que tener experiencia?") {
      respuesta.current.innerHTML =
        "Somos una empresa que nos dedicamos a impulsar el talento, por lo que no pedimos experiencia.";
    } else if (e.target.textContent === "¿Donde estan ubicados?") {
      respuesta.current.innerHTML =
        "Estamos ubicados en KM. 6.5 CARR. FEDERAL APIZACO-TLAXCO (ENTRONQUE TETLA).";
    } else if (e.target.textContent === "Deseo contactarlos directamente") {
      respuesta.current.innerHTML =
        "Puedes contactarnos a los numeros 241 110 74 47 o 241 131 47 32 a nombre de California Colors.";
    }
  });
  const trabajosRender = trabajos.map((e) => (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top img" src={e.imagen} />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "blue" }}>
          {e.trabajo}
        </h5>
        <p className="card-text">{e.descripcion}</p>
        <p>{e.precio}</p>
        <button className="btn-promo" onClick={sendMessage}>
          Me interesa
        </button>
      </div>
    </div>
  ));
  return trabajos.length > 0 ? (
    <div className="container-empleos">
      <div className="modalChat">
        <Modal size="lg" show={openChat} onHide={() => setOpenChat(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>
              Bienvenido a nuestro bot en linea!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <p style={{ color: "black", textAlign: "center" }}>
                Hola, en este chat automatico te brindamos informacion acerca de
                nuestras vacantes
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <p style={{ color: "black" }} ref={respuesta}></p>
              </div>
              <div
                className="btn-preguntas-vacante"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <Button style={{ width: "300px" }} variant="primary">
                  ¿Que requisitos necesito?
                </Button>
                <Button style={{ width: "300px" }} variant="primary">
                  ¿Tengo que tener experiencia?
                </Button>
                <Button style={{ width: "300px" }} variant="primary">
                  ¿Donde estan ubicados?
                </Button>
                <Button style={{ width: "300px" }} variant="primary">
                  Deseo contactarlos directamente
                </Button>
              </div>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setOpenChat(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <InfoTrabajos
        img="https://tse3.mm.bing.net/th?id=OIP.wUmYH4jLGn2E1dv37oH6FQHaFx&pid=Api&P=0&h=180"
        info="Somos una empresa que genera empleos en todo el estado de tlaxcala, en esta seccion de bolsa de trabajo encontraras todas las vacantes que esten disponibles en el momento que estes visitando nuestro sitio web. Podras pedir mas informacion comunicandote directamente con nosotros, al igual que postularte para una vacante. Recuerda que para nosotros es prioridad dar oportunidades a jovenes y proyectarlos a un gran futuro.."
        referencia="#trabajos"
      />

      <div
        id="trabajos"
        style={{
          marginTop: "30px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
        className="empleo-disponible"
      >
        {trabajosRender}
      </div>
    </div>
  ) : (
    <>
      <h1 style={{ color: "blue", textAlign: "center" }}>
        Seccion de trabajos
      </h1>
      <InfoTrabajos
        img="https://tse3.mm.bing.net/th?id=OIP.wUmYH4jLGn2E1dv37oH6FQHaFx&pid=Api&P=0&h=180"
        info="Somos una empresa que genera empleos en todo el estado de tlaxcala, en esta seccion de bolsa de trabajo encontraras todas las vacantes que esten disponibles en el momento que estes visitando nuestro sitio web. Podras pedir mas informacion comunicandote directamente con nosotros, al igual que postularte para una vacante. Recuerda que para nosotros es prioridad dar oportunidades a jovenes y proyectarlos a un gran futuro."
        referencia="#trabajos"
      />
      <h1
        id="trabajos"
        style={{ color: "blue", textAlign: "center", marginTop: "90px" }}
      >
        ¡Por el momento no hay vacantes disponibles!
      </h1>
    </>
  );
};
