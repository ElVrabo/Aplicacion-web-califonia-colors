import "../agregarpromociones.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PromocionesContext } from "../context/PromocionesContext";
import { Button } from "react-bootstrap";

export const FormPromociones = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createPromotions, errors } = useContext(PromocionesContext);
  const insertPromotion = handleSubmit((value) => {
    createPromotions(value);
    setValue("title", "");
    setValue("description", "");
    setValue("price", "");
  });

  return (
    <>
      <div className="form-agregar">
        <h1 style={{ fontFamily: "sans-serif" }}>¡Agrega una promocion!</h1>
        <div style={{ backgroundColor: "red", borderRadius: "10px" }}>
          {errors.map((error) => (
            <div style={{ color: "white" }}>{error}</div>
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
            {...register("title", { required: true })}
            type="text"
            className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
          />
          <label style={{ color: "black" }} htmlFor="input2">
            Descripcion de la promocion:
          </label>
          <textarea
            rows="10"
            className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
            {...register("description", { required: true })}
          ></textarea>
          <label style={{ color: "black" }} htmlFor="input3">
            Precio de la promocion:
          </label>
          <input
            id="input3"
            {...register("price", { required: true })}
            type="text"
            className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
          />
          <Button type="submit" variant="primary">
            Insertar promocion
          </Button>

          {/* <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <h2>Exito</h2>
          <p>Se agrego la e con exito</p>
        </Modal> */}
        </form>
      </div>
    </>
  );
};
