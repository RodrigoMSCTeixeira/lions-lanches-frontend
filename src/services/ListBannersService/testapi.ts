import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import AuthTokenError from "../errors/authTokenError";

export const testSetupApiClient = (context = undefined) => {
  let cookies = parseCookies(context);

  const options: Object = {
    baseURL: "https://portal-admin.sefaz.pi.gov.br/wp-json/",
    timeout: 1000 * 60,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${cookies["sefazUser.token"]}`,
    },
  };

  const testeapi = axios.create(options);

  testeapi.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (typeof window !== undefined) {
          console.log("saindo...");
        }
      } else {
        return Promise.reject(AuthTokenError);
      }

      return Promise.reject(error);
    }
  );

  return testeapi;
};
