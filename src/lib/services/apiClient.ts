import { env } from "$env/dynamic/public";

import axios, { type AxiosInstance } from "axios";

axios.defaults.baseURL = env.PUBLIC_API_URL;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.responseEncoding = "utf8";
// set default origin header
axios.defaults.headers.common["Origin"] = env.PUBLIC_API_URL;

export const client: AxiosInstance = axios.create({});
