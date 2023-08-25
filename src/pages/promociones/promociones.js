import "../../Promociones.css";
import { Carrusel } from "../../components/carrusel/carrusel";
import ImageAhorrar from "../../assets/imagenesCarrusel/ahorrar.jpg";
import ImageComprar from "../../assets/imagenesCarrusel/compras.jpg";
import ImageAuto from "../../assets/imagenesCarrusel/auto.jpg";
import { Navegacion } from "../../components/Navegacion/Navegacion";
import { useContext, useEffect } from "react";
import { PromocionesContext } from "../../context/PromocionesContext";
import { ListPromociones } from "./ListPromociones";

export const Promociones = () => {
  const { getPromotions, promotions } = useContext(PromocionesContext);

  const handleClick = (promotion) => {
    const number = 2411314735;
    const message = `Hola, me interesa la promocion de ${promotion.toLowerCase()}. Por favor.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  useEffect(() => {
    getPromotions();
  }, []);

  if (promotions == 0) {
    return (
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
        <div
          id="promociones"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="text-promociones"
        >
          <div className="icon-error">
            <ion-icon
              style={{ color: "red" }}
              name="close-circle-outline"
            ></ion-icon>
          </div>
          <h1 style={{ color: "black", textAlign: "center" }}>
            ¡No hay promociones aun!
          </h1>
        </div>
        ;
      </>
    );
  }
  return (
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
      <h1 style={{ color: "black", marginTop: "40px" }}>
        Promociones actuales
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
        }}
        id="promociones"
      >
        {promotions.map((promotion) => (
          <ListPromociones
            promotion={promotion}
            showClick={() => handleClick(promotion.title)}
            textButton="Informacion"
            key={promotion._id}
          />
        ))}
      </div>
    </>
  );
};
