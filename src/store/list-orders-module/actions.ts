import { ActionTree } from "vuex";
import { ListCompositeOrdersState } from "./state";
import { StateInterface } from "../index";
import ListOrdersService from "@/services/ListOrders/ListOrders.service";

const actions: ActionTree<ListCompositeOrdersState, StateInterface> = {
  setOrders: async ({ commit }) => {
    return ListOrdersService.execute();
  },
};

export default actions;
