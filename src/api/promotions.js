import axios from "./axios";

export const getPromotionsRequest = () => axios.get("/promotions");

export const createPromotionRequest = (promotion) =>
  axios.post("/promotions", promotion);

export const deletePromotionRequest = (id) => axios.delete(`/promotions/${id}`);
