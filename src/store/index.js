import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutation-types';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dayList: [],
    days: 0,
    cityName: '',
    isHintDisplayed: true,
    isLoading: false,
  },
  mutations: {
    [mutations.SET_DAY_LIST] (state, dayList) {
      state.dayList = dayList;
    },
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
    setUniqueDays (context, dayList) {
      let days = [];
      let currentDate = new Date(dayList[0].dt * 1000).getDate();
      let hours = [];

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
