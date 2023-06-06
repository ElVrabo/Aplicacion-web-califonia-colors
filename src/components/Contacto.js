import { useRef, useState } from "react";
import "../contacto.css";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export const Contacto = ({ seccion }) => {
  const [emailExit, setEmailExit] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const form = useRef();
  const nombre = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (nombre.current.value && email.current.value && message.current.value) {
      emailjs
        .sendForm(
          "service_9avnbwg",
          "template_thab00j",
          form.current,
          "YWx6lOh4WVjX0KXRT"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setEmailExit(true);
      setEmailError(false);
    } else {
      setEmailError(true);
      setEmailExit(false);
    }
  };

  return (
    <>
      <form id="contacto" className="form" ref={form} onSubmit={sendEmail}>
        <div className="modals">
          <Modal show={emailExit} onHide={() => setEmailExit(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "green" }}>¡Gracias!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Gracias por tu mensaje, nos contactaremos contigo pronto!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setEmailExit(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={emailError} onHide={() => setEmailError(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "red" }}>¡Error!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Algo salio mal, porfavor verifica si llenaste todos los campos
              correctamente!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setEmailError(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <h1>{seccion}</h1>
        <label>Nombre</label>
        <input
          ref={nombre}
          type="text"
          name="user_name"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label>email</label>
        <input
          ref={email}
          type="email"
          name="user_email"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label>mensaje</label>
        <textarea
          ref={message}
          name="message"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <input
          className="bg-blue-500 hover:bg-blue-700 w-50 text-white text-decoration-none text-center rounded-md"
          type="submit"
          value="Enviar mensaje"
        />
      </form>
    </>
  );
};
