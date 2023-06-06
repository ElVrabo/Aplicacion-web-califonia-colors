import "../trabajos.css";
import { trabajos } from "../components/formTrabajos";
import { InfoTrabajos } from "../components/InfoTrabajos";
export const ApartadoTrabajos = () => {
  const sendMessage = () => {
    const phoneNumber = "2412477577"; // numero al que se enviara el mensaje
    const message = "Hola, me interesa esta vacante"; // mensaje que se desea enviar

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = url;
  };
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
