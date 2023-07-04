import { createStore } from "vuex";
import { AuthUserState } from "./auth-module/state";
import { ListCompositeOrdersState } from "./list-orders-module/state";
import authUserModule from "./auth-module";
import listCompositeOrdersModule from "./list-orders-module";

export interface StateInterface {
  authUser: AuthUserState;
  listOrders: ListCompositeOrdersState;
}
export default createStore({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    authUser: authUserModule,
    listOrders: listCompositeOrdersModule,
  },
});
