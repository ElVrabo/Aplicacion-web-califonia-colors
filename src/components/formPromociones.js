import "../agregarpromociones.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { PromocionesContext } from "../context/PromocionesContext";
import Button from "react-bootstrap/Button";

export const FormPromociones = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createPromotions, errors } = useContext(PromocionesContext);
  const insertPromotion = handleSubmit((formData) => {
    /* se utiliza para crear una instancia de FormData que contendrá los datos del formulario,
     incluido el campo de imagen seleccionada. Luego, los campos de título, descripción, precio
      e imagen se agregan a esta instancia utilizando el método append()*/
    const form = new FormData();
    /*se asigna un campo title al conjunto de datos de FormData y se le asigna el valor
      del input con name title
      */
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("price", formData.price);
    /*Se envian estos datos al endpoint http://localhost:4000/api/promotions y si pasa las
      validaciones del backend, se envian a la base de datos de mongodb*/
    createPromotions(form);
    setValue("title", "");
    setValue("description", "");
    setValue("price", "");
  });

  return (
    <>
      <div className="form-agregar">
        <h2 style={{ fontFamily: "sans-serif", color: "black" }}>
          Agregar promocion
        </h2>
        <div style={{ backgroundColor: "red", borderRadius: "5px" }}>
          {errors.map((error) => (
            <div style={{ color: "white" }}>{`${error},`}</div>
          ))}
        </div>
        <form
          onSubmit={insertPromotion}
          className="agregar-promocion"
          encType="multipart/form-data"
        >
          <label style={{ color: "black" }} htmlFor="input1">
            Nombre de tu promocion:
          </label>
          <input
            // name="title"
            id="input1"
            {...register("title")}
            type="text"
            className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
          />
          <label style={{ color: "black" }} htmlFor="input2">
            Descripcion de la promocion:
          </label>
          <textarea
            rows="10"
            className="input-description-promotion"
            {...register("description")}
          ></textarea>
          <label style={{ color: "black" }} htmlFor="input3">
            Precio de la promocion:
          </label>
          <input
            id="input3"
            {...register("price")}
            type="text"
            className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
          />
          <div style={{ marginTop: "30px" }}>
            <Button type="submit" variant="primary">
              Insertar promocion
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
