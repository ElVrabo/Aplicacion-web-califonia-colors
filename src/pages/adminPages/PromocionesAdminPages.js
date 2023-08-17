import "./promocionesAdminPages.css";
import { useContext, useEffect } from "react";
import NavbarAdmin from "../../components/common/NavbarAdmin";
import { ListPromociones } from "../promociones/ListPromociones";
import { PromocionesContext } from "../../context/PromocionesContext";

const PromocionesAdminPages = () => {
  const { getPromotions, promotions, deletePromotion } =
    useContext(PromocionesContext);
  useEffect(() => {
    getPromotions();
  }, []);

  if (promotions.length == 0) {
    return (
      <>
        <NavbarAdmin />
        <h1 style={{ marginTop: "25px" }}>No hay promociones</h1>
      </>
    );
  }

  return (
    <>
      <NavbarAdmin />
      <h1 style={{ marginTop: "25px" }}>Mis promociones</h1>
      <div className="container-mis-promociones">
        {promotions.map((promotion) => (
          <ListPromociones
            promotion={promotion}
            showClick={() => {
              deletePromotion(promotion._id);
            }}
            textButton="Eliminar"
            key={promotion._id}
          />
        ))}
      </div>
    </>
  );
};

export default PromocionesAdminPages;
