import { useForm } from "react-hook-form";
import "../styles/agregarTrabajos.css";
import { useContext, useState } from "react";
import { TrabajosContext } from "../context/TrabajosContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export const FormTrabajos = () => {
  const [addTrabajoExit, setAddTrabajoExit] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const { createTrabajo, errors } = useContext(TrabajosContext);

  const insertTrabajo = handleSubmit((formData) => {
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("avatar", formData.avatar[0]);
    createTrabajo(form);
    setValue("title", "");
    setValue("description", "");
    setValue("avatar", "");
    setAddTrabajoExit(true);
  });

  return (
    <div className="container-trabajos">
      <h2 style={{ fontFamily: "sans-serif", color: "black" }}>
        Agregar vacante
      </h2>
      <div style={{ backgroundColor: "red", borderRadius: "5px" }}>
        {errors.map((error) => (
          <div style={{ color: "white" }}>{`${error},`}</div>
        ))}
      </div>
      <form onSubmit={insertTrabajo} className="agregar-trabajo">
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg "
          {...register("avatar")}
        />
        <label style={{ color: "black" }} htmlFor="trabajo">
          Trabajo:
        </label>
        <input
          type="text"
          id="trabajo"
          {...register("title")}
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label style={{ color: "black" }} htmlFor="descripcion">
          Descripcion:
        </label>
        <textarea
          id="descripcion"
          rows="10"
          {...register("description")}
          className="input-descripcion-trabajo"
        ></textarea>

        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" type="onSubmit">
            Insertar vacante
          </Button>
        </div>
      </form>
      <Modal
        /*El modal se muestra solo cuando addTrabajoExit sea true y no haya ningun error*/
        show={addTrabajoExit && errors.length == 0}
        onHide={() => setAddTrabajoExit(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "green" }}>Correcto</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu vacante se agrego con exito</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setAddTrabajoExit(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
