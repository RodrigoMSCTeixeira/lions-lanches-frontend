import { GetterTree } from "vuex";
import { AuthUserState } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<AuthUserState, StateInterface> = {
  status: (state) => {
    return state.status;
  },

  user: (state) => {
    state.user;
  },
};

export default getters;
