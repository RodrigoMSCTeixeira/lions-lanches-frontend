import { MutationTree } from "vuex";
import { ListCompositeOrdersState } from "./state";

const mutations: MutationTree<ListCompositeOrdersState> = {
  setOrders: (state, payload) => {
    state.items = payload;
  },
};

export default mutations;
