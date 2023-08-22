import { createContext, useState } from "react";
import {
  createCommentsRequest,
  deleteCommentsRequest,
  getCommentsRequest,
} from "../api/comentarios";

export const ResenasContext = createContext();

export const ResenasContextProvider = ({ children }) => {
  const [listComments, setListComments] = useState([]);
  const getComments = async () => {
    try {
      const res = await getCommentsRequest();
      setListComments(res.data);
    } catch (error) {}
  };

  const createComments = async (value) => {
    try {
      const res = await createCommentsRequest(value);
      console.log(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteComments = async (id) => {
    try {
      const res = await deleteCommentsRequest(id);
      if (res.status === 200) {
        setListComments(listComments.filter((comment) => comment.id !== id));
      }
    } catch (error) {}
  };

  return (
    <ResenasContext.Provider
      value={{
        getComments,
        createComments,
        deleteComments,
        listComments,
      }}
    >
      {children}
    </ResenasContext.Provider>
  );
};