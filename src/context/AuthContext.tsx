import { createContext, ReactNode, useState } from "react";
import { api } from "../services/apiClient";
import { destroyCookie, setCookie } from "nookies";
import Router from "next/router";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  singIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export const signOut = () => {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch {
    console.error("Erro ao deslogar!");
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user; // converte em boolean

  const singIn = async ({ email, password }: SignInProps) => {
    try {
      const reponse = await api.post("/session", {
        email,
        password,
      });

      const { id, name, token } = reponse.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/", //Quais caminhos tem acesso aos cookies,
      });

      setUser({
        id,
        name,
        email,
      });

      //Passar para as próximas requisições o token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Logado com sucesso");

      //Redirecionar o user para o dashboard
      Router.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao acessar!");
    }
  };

  const signUp = async ({ email, name, password }: SignUpProps) => {
    try {
      const response = await api.post("/users", {
        name,
        email,
        password,
      });

      toast.success("Conta criada com sucesso!");

      Router.push("/");
    } catch (error) {
      toast.error("Erro ao cadastrar!");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, singIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
