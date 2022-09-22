import axios, { type AxiosInstance } from "axios";

axios.defaults.baseURL = "https://api.pheivez.horlakz.com/api/v1";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.responseEncoding = "utf8";
// set default origin header
axios.defaults.headers.common["Origin"] =
  "https://api.pheivez.horlakz.com/api/v1";

export const client: AxiosInstance = axios.create({});
