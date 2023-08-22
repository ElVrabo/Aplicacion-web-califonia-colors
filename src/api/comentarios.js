import axios from "./axios";

export const getCommentsRequest = () => axios.get("/comentarios");
export const createCommentsRequest = (comment) =>
  axios.post("/comentarios", comment);

export const deleteCommentsRequest = (id) => axios.delete(`/comentarios/${id}`);
