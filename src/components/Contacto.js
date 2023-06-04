import { useRef } from "react";
import "../contacto.css";
import emailjs from "@emailjs/browser";
export const Contacto = ({ seccion }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
  };
  return (
    <>
      <form id="contacto" className="form" ref={form} onSubmit={sendEmail}>
        <h1>{seccion}</h1>
        <label>Nombre</label>
        <input
          type="text"
          name="user_name"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label>email</label>
        <input
          type="email"
          name="user_email"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label>mensaje</label>
        <textarea
          name="message"
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <input className="send" type="submit" value="Enviar mensaje" />
      </form>
    </>
  );
};
