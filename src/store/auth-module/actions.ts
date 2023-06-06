import { ActionTree } from "vuex";
import { AuthUserState } from "./state";
import { StateInterface } from "../index";
import AuthService from "@/services/auth.service";

const actions: ActionTree<AuthUserState, StateInterface> = {
  login: ({ commit }, user) => {
    console.log(user);
    return AuthService.login(user).then(
      (user) => {
        commit("loginSuccess", user);
        return Promise.resolve(user);
      },
      (error) => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },

  logout: ({ commit }) => {
    AuthService.logout();
    commit("logout");
  },

  register: ({ commit }, user) => {
    return AuthService.register(user).then(
      ({ data }) => {
        commit("registerSuccess");
        return Promise.resolve(data);
      },

      (error) => {
        commit("registerFailure");
        return Promise.reject(error);
      }
    );
  },
};

export default actions;
