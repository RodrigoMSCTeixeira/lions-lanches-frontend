import { Module } from "vuex";
import { StateInterface } from "../index";
import state, { AuthUserState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const authUserModule: Module<AuthUserState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default authUserModule;
