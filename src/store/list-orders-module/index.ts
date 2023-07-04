import { Module } from "vuex";
import { StateInterface } from "../index";
import state, { ListCompositeOrdersState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const listCompositeOrdersModule: Module<
  ListCompositeOrdersState,
  StateInterface
> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default listCompositeOrdersModule;
