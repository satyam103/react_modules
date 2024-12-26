import axios from "axios";

export const localAxios = axios.create({
  baseURL: "http://192.168.3.81:8080",
});
