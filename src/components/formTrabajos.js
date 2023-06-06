import { useState, useRef } from "react";
import "../trabajos.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export const Trabajos = ({ titulo }) => {
  const [imagen, setImagen] = useState("");
  const [trabajo, setTrabajo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [addExit, setAddExit] = useState(false);
  const [addError, setAddError] = useState(false);
  const [deleteJobExit, setDeleteJobExit] = useState(false);
  const [deleteJobError, setDeleteJobError] = useState(false);
  const FormTrabajos = useRef();
  const imagenTrabajoValue = useRef();
  const tituloTrabajoValue = useRef();
  const descripcionTrabajoValue = useRef();
  const resetInputs = () => {
    const inputs = Array.from(FormTrabajos.current.children).filter(
      (element) => element.tagName === "INPUT"
    );
    /*se recorre el arreglo y se le indica que el valor de cada input sera igual a una cadena vacia*/
    inputs.forEach((e) => (e.value = ""));
  };
  const selectFile = (e) => {
    /*se obtiene la imagen seleccionada mediante la propiedad target.files[0]*/
    const image = e.target.files[0];
    /*se valida que la imagen seleccionada sea del tipo image/ para asegurarse de que se esta cargando unicamente una imagen, si la imagen es valida se crea una URL temporal con el metodo URL.createObjectURL(image) y se actualiza el estado de la variable en setImagen con la url temporal generada, que se utilizara para posteriormente mostrar la imagen en el componente Promociones.js*/
    if (image.type.startsWith("image/")) {
      setImagen(URL.createObjectURL(image));
    }
  };

  const insertJob = () => {
    if (
      imagenTrabajoValue.current.files &&
      tituloTrabajoValue.current.value &&
      descripcionTrabajoValue.current.value
    ) {
      let cuerpo = {
        imagen,
        trabajo,
        descripcion,
      };
      trabajos = [...trabajos, cuerpo];
      setAddExit(true);
      resetInputs();
      descripcionTrabajoValue.current.value = "";
    } else {
      setAddError(true);
    }
  };

  const deleteJob = () => {
    if (trabajos.length > 0) {
      trabajos.splice(0, trabajos.length);
      setDeleteJobExit(true);
    } else {
      setDeleteJobError(true);
    }
  };

  return (
    <div className="container-trabajos">
      <div className="modals">
        <Modal show={addExit} onHide={() => setAddExit(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>Correcto!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tu vacantes se agrego y la podran ver tus clientes
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setAddExit(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={addError} onHide={() => setAddError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Algo salio mal, porfavor verifica todos los campos!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setAddError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={deleteJobExit} onHide={() => setDeleteJobExit(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>Exito!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Se borraron todas las vacantes correctamente!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setDeleteJobExit(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={deleteJobError} onHide={() => setDeleteJobError(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Algo salio mal, no tienes ninguna vacante para eliminar!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setDeleteJobError(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h1>{titulo}</h1>
      <div ref={FormTrabajos} className="agregar-trabajo">
        <label htmlFor="imagen">Añade una imagen:</label>
        <input
          ref={imagenTrabajoValue}
          onChange={selectFile}
          type="file"
          id="imagen"
          className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100 border-b-2 border-blue-700 border-t-0 border-r-0 border-l-0"
        />
        <label htmlFor="trabajo">Trabajo:</label>
        <input
          ref={tituloTrabajoValue}
          type="text"
          id="trabajo"
          onChange={(e) => setTrabajo(e.target.value)}
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        />
        <label htmlFor="descripcion">Descripcion:</label>
        <textarea
          ref={descripcionTrabajoValue}
          id="descripcion"
          cols="30"
          rows="10"
          onChange={(e) => setDescripcion(e.target.value)}
          className="border-b-2 border-blue-500 border-t-0 border-r-0 border-l-0 focus:outline-none"
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 w-50 text-white mt-2 w-100"
          onClick={insertJob}
        >
          Insertar
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 w-50 text-white mt-2 w-100"
          onClick={deleteJob}
        >
          Eliminar vacantes
        </button>
      </div>
    </div>
  );
};

export let trabajos = [];
