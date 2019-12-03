import Vue from 'vue';
import Vuex from 'vuex';
import { SET_DAY_LIST, SET_DAYS, SET_CITY_NAME } from './mutation-types';
import { isContext } from 'vm';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dayList: [],
    days: 0,
    cityName: ''
  },
  mutations: {
    [SET_DAY_LIST] (state, dayList) {
      state.dayList = dayList;
    },
    [SET_DAYS] (state, days) {
      state.days = days;
    },
    [SET_CITY_NAME] (state, cityName) {
      state.cityName = cityName;
    }
  },
  actions: {
    setUniqueDays (context, dayList) {
      let days = [];
      let currentDate = new Date().getDate();
      let hours = [];

      console.log(dayList);

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

      // console.log(days);

      context.commit(SET_DAYS, days);
    }
  }
});
