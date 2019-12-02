import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    forecastData: []
  },
  mutations: {
    changeForecastData(state, weatherResponse) {
      state.weatherResponse = weatherResponse;
    }
  }
});
