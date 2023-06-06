import { MutationTree } from "vuex";
import { AuthUserState } from "./state";

const mutations: MutationTree<AuthUserState> = {
  loginSuccess: (state, user) => {
    state.status = true;
    state.user = user;
  },

  loginFailure: (state) => {
    state.status = false;
    state.user = null;
  },

  logout: (state) => {
    state.status = false;
    state.user = null;
  },

  registerSuccess: (state) => {
    state.status = false;
  },

  regsterFailure: (state) => {
    state.status = false;
  },
};

export default mutations;
