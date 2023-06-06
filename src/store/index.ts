import { createStore } from "vuex";
import authUserModule from "./auth-module";
import { AuthUserState } from "./auth-module/state";

export interface StateInterface {
  authUser: AuthUserState;
}
export default createStore({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    authUser: authUserModule,
  },
});
