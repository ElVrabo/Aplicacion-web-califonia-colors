import { useForm } from "react-hook-form";
import "../styles/agregarTrabajos.css";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { TrabajosContext } from "../context/TrabajosContext";
export const FormTrabajos = ({ titulo }) => {
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
  });

  return (
    <div className="container-trabajos">
      <h1 style={{ fontFamily: "sans-serif" }}>{titulo}</h1>
      <div style={{ backgroundColor: "red", borderRadius: "10px" }}>
        {errors.map((error) => (
          <div style={{ color: "white" }}>{error}</div>
        ))}
      </div>
      <form
        onSubmit={insertTrabajo}
        className="agregar-trabajo"
        style={{ marginTop: "15px" }}
      >
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg "
          {...register("avatar", { required: true })}
        />
        <label style={{ color: "black" }} htmlFor="trabajo">
          Trabajo:
        </label>
        <input
          type="text"
          id="trabajo"
          {...register("title", { required: true })}
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label style={{ color: "black" }} htmlFor="descripcion">
          Descripcion:
        </label>
        <textarea
          id="descripcion"
          rows="10"
          {...register("description", { required: true })}
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        ></textarea>
        <Button variant="primary" type="onSubmit">
          Insertar vacante
        </Button>
      </form>
    </div>
  );
};
