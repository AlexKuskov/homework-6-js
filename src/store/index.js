import Vue from 'vue';
import Vuex from 'vuex';
import { SET_DAY_LIST, SET_CITY_NAME } from './mutation-types';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dayList: [],
    cityName: ''
  },
  mutations: {
    [SET_DAY_LIST] (state, dayList) {
      state.dayList = dayList;
    },
    [SET_CITY_NAME] (state, cityName) {
      state.cityName = cityName;
    }
  }
});
