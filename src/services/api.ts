import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import AuthTokenError from "./errors/authTokenError";
import { signOut } from "../context/AuthContext";

export const setupApiClient = (ctx = undefined) => {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${cookies["@nextauth.token"]}`,
    },
  });

  api.interceptors.response.use(
    (reponse) => {
      return reponse;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (typeof window !== undefined) {
          signOut();
        } else {
          return Promise.reject(AuthTokenError);
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
};
