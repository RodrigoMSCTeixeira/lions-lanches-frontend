import { GetterTree } from "vuex";
import { ListCompositeOrdersState } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<ListCompositeOrdersState, StateInterface> = {
  status: (state) => {
    return state.status;
  },

  items: (state) => {
    state.items;
  },
};

export default getters;
