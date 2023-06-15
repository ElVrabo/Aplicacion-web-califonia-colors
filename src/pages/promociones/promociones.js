import "../../Promociones.css";

import { useEffect, useState } from "react";
import { promociones } from "../../components/formPromociones";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { Carrusel } from "../../components/carrusel/carrusel";
import ImageAhorrar from "../../assets/imagenesCarrusel/ahorrar.jpg";
import ImageComprar from "../../assets/imagenesCarrusel/compras.jpg";
import ImageAuto from "../../assets/imagenesCarrusel/auto.jpg";

export const Promociones = () => {
  const [promocionesList, setPromocionesList] = useState([]);

  useEffect(() => {
    setPromocionesList(promociones);
  }, [promociones]);

  const promocionesRender = promocionesList.map((e) => (
    <div className="card" style={{ width: "18rem" }} key={e.id}>
      <img className="card-img-top img" src={e.imagen} />
      <div className="card-body">
        <h5 className="card-title">{e.titulo}</h5>
        <p className="card-text">{e.descripcion}</p>
        <p>{e.precio}</p>
        <button className="btn-promo">Mas informacion</button>
      </div>
    </div>
  ));

  return promocionesList.length > 0 ? (
    <>
      <Navegacion />
      <div className="container-carrusel">
        <Carrusel
          firstTitle="¡Ahorrate unos pesos!"
          secondTitle="Adquiere cualquier promocion"
          thirdTitle="Mejora tu auto"
          firstImage={ImageAhorrar}
          secondImage={ImageComprar}
          thirdImage={ImageAuto}
          redireccion="#promociones"
          textoRedireccion="Ver promociones"
        />
      </div>
      <div id="promociones" className="container-promociones">
        {promocionesRender}
      </div>
    </>
  ) : (
    <div className="no-promociones">
      <Navegacion />
      <div className="container-carrusel">
        <Carrusel
          firstTitle="¡Ahorrate unos pesos!"
          secondTitle="Adquiere cualquier promocion"
          thirdTitle="Mejora tu auto"
          firstImage={ImageAhorrar}
          secondImage={ImageComprar}
          thirdImage={ImageAuto}
          redireccion="#promociones"
          textoRedireccion="Ver promociones"
        />
      </div>
      <div
        id="promociones"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="text-promociones"
      >
        <h1 style={{ color: "blue", textAlign: "center" }}>
          ¡No hay promociones disponibles!
        </h1>
      </div>
    </div>
  );
};
