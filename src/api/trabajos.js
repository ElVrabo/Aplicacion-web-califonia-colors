import axios from "./axios";

export const getTrabajosRequest = () => axios.get("/trabajos");

export const createTrabajoRequest = (trabajo) =>
  axios.post("/trabajos", trabajo);

export const deleteTrabajoRequest = (id) => axios.delete(`/trabajos/${id}`);
