import { createContext, useState } from "react";
import {
  createPromotionRequest,
  deletePromotionRequest,
  getPromotionsRequest,
} from "../api/promotions";

export const PromocionesContext = createContext();

export const PromocionesContextProvider = ({ children }) => {
  const [promotions, setPromotions] = useState([]);
  const [errors, setErrors] = useState([]);

  const getPromotions = async () => {
    try {
      const res = await getPromotionsRequest();
      setPromotions(res.data);
    } catch (error) {}
  };

  const createPromotions = async (data) => {
    try {
      const res = await createPromotionRequest(data);
    } catch (error) {
      /*error es el objeto general de axios, response es la respuesta y data son los errores como tal*/
      setErrors(error.response.data);
    }
  };

  const deletePromotion = async (id) => {
    try {
      const res = await deletePromotionRequest(id);
      if (res.status === 204)
        setPromotions(promotions.filter((promotion) => promotion.id !== id));
    } catch (error) {}
  };

  return (
    <PromocionesContext.Provider
      value={{
        getPromotions,
        createPromotions,
        deletePromotion,
        promotions,
        errors,
      }}
    >
      {children}
    </PromocionesContext.Provider>
  );
};
