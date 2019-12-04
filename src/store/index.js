import Vue from 'vue';
import Vuex from 'vuex';
import { mutations, actions } from './mutation-types';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    days: 0,
    cityName: '',
    isHintDisplayed: true,
    isLoading: false,
  },
  mutations: {
    [mutations.SET_DAYS] (state, days) {
      state.days = days;
    },
    [mutations.SET_CITY_NAME] (state, cityName) {
      state.cityName = cityName;
    },
    [mutations.SET_HINT_DISPLAYING] (state, isHintDisplayed) {
      state.isHintDisplayed = isHintDisplayed;
    },
    [mutations.SET_LOADING] (state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    [actions.SET_UNIQUE_DAYS] (context, dayList) {
      let days = [];
      let hours = [];
      let currentDate = new Date(dayList[0].dt * 1000).getDate();

      for (let day of dayList) {
        let monthDate = new Date(day.dt * 1000).getDate();

        if (currentDate !== monthDate) {
          days.push(hours);
          currentDate = monthDate;
          hours = [];
        }

        hours.push(day);
      }

      days.push(hours);

      context.commit(mutations.SET_DAYS, days);
    }
  }
});
