import { Module } from "vuex";

interface StoreUser {
  text: string;
}

const store: Module<StoreUser, unknown> = {
  namespaced: true,
  state() {
    return {
      text: "hiiii",
    };
  },
  mutations: {
    setText(state: StoreUser, payload: AnyObject) {
      state.text = payload.text;
    },
  },
  actions: {
    setText(context, payload: AnyObject) {
      context.commit("setText", payload);
    },
  },
  getters: {
    getText(state: StoreUser) {
      return state.text;
    },
  },
};

export default store;

//check12
//hi
