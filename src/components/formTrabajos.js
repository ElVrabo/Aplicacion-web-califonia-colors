import { useForm } from "react-hook-form";
import "../styles/agregarTrabajos.css";
import { useContext, useState } from "react";
import { TrabajosContext } from "../context/TrabajosContext";
import Button from "react-bootstrap/Button";
export const FormTrabajos = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTrabajo, errors } = useContext(TrabajosContext);

  const insertTrabajo = handleSubmit((formData) => {
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);

    createTrabajo(form);
    setValue("title", "");
    setValue("description", "");
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
    </div>
  );
};
