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
      <form className="form" ref={form} onSubmit={sendEmail}>
        <h1>{seccion}</h1>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>email</label>
        <input type="email" name="user_email" />
        <label>mensaje</label>
        <textarea name="message" />
        <input className="send" type="submit" value="Enviar mensaje" />
      </form>
    </>
  );
};
