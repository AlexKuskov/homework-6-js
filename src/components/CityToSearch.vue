<template>
  <form v-on:submit="getForecastData" id="city-to-search" class="city-to-search block">
    <h2>City to search</h2>

    <label class="city-label" for="city">City:</label>
    <input class="city" v-model="city" type="text" name="city" id="city">

    <label class="country-code-label" for="country-code">Country:</label>
    <select class="country-code" v-model="countryCode" name="country-code" id="country-code">
      <option value="ua">UA</option>
      <option value="us">US</option>
      <option value="ru">RU</option>
      <option value="gb">GB</option>
      <option value="de">DE</option>
    </select>

    <button class="show-weather-btn block" type="submit">Show weather</button>
  </form>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { mutations } from '../store/mutation-types';
import { store } from '../store';

export default {
  name: 'CityToSearch',
  props: {
    msg: String
  },
  data() {
    return {
      city: 'Cherkasy',
      countryCode: 'ua'
    };
  },
  methods: {
    getData (submitEvent) {
      axios.get(query)
        .then(function (response) {
          // handle success
          console.log(response);
        });

      submitEvent.preventDefault();
    },
    getForecastData (e) {
      e.preventDefault();
      store.commit(mutations.SET_HINT_DISPLAYING, false);
      store.commit(mutations.SET_LOADING, true);

      const key = '16930e9bdf3ad11aa05152aeebf51f84';
      const query = `https://api.openweathermap.org/data/2.5/forecast?appId=${key}&q=${this.city},${this.countryCode}`;

      axios.get(query)
        .then(function (response) {
          store.dispatch('setUniqueDays', response.data.list);
          store.commit(mutations.SET_DAY_LIST, response.data.list);
          store.commit(mutations.SET_CITY_NAME, response.data.city.name);
          store.commit(mutations.SET_LOADING, false);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.city-to-search {
  width: 70%;
  margin: 2% auto;
  padding-bottom: 5%;

}
.city {
  padding: 1% 2%;
}
.country-code {

}
.city-label,
.country-code-label {
  display: block;
}
.show-weather-btn {
  background-color: #FFF;
  text-transform: uppercase;
  padding: 1% 2%;
}
</style>
