import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { DogService } from "../services/index";

// define typings for the store state
export interface State {
  images: string[];
  contentLoading: boolean;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    images: [],
    contentLoading: false,
  },
  mutations: {
    SAVE_IMAGES(state, images) {
      state.images = [...images];
    },

    SET_LOADING_STATUS(state, status) {
      state.contentLoading = status;
    },
  },
  actions: {
    async fetchImages({ commit }) {
      let data = await DogService.fetchRandomImages();
      commit("SAVE_IMAGES", data);
      return data;
    },

    async searchRandomImages({ commit }, query?: string) {
      let data = await DogService.searchRandomImages(query);
      console.log(data);

      commit("SAVE_IMAGES", data.results);
      //   localStorage.setItem("breedImages", JSON.stringify(data));
      return data;
    },

    toggleLoadingStatus({ commit }, status) {
      commit("SET_LOADING_STATUS", status);
    },
  },
});
