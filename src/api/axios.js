import axios from "axios";

const instance = axios.create({
  baseURL: "https://cal-colors-v30.vercel.app/api",
});
export default instance;
