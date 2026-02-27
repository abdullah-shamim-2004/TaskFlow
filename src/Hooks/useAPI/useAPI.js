import axios from "axios";

const Api = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app",
});
const useAPI = () => {
  return Api;
};
export default useAPI;
