<template>
  <form v-on:submit="getForecastData" id="city-to-search" class="city-to-search block">
    <h2>City to search</h2>

    <label for="city">City:</label>
    <input type="text" name="city" id="city">

    <label for="country-code">Country:</label>
    <select name="country-code" id="country-code">
      <option value="ua">UA</option>
      <option value="us">US</option>
      <option value="gb">GB</option>
      <option value="de">DE</option>
    </select>

    <button type="submit">Show weather</button>
  </form>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { SET_DAY_LIST, SET_CITY_NAME } from '../store/mutation-types';
import { store } from '../store';

const key = '16930e9bdf3ad11aa05152aeebf51f84';
const query = `https://api.openweathermap.org/data/2.5/forecast?appId=${key}&q=Cherkasy,ua`;

// const form = new Vue({
//   el: '#city-to-search',
//   methods: {
//     getData (submitEvent) {
//       axios.get('query')
//         .then(function (response) {
//           // handle success
//           console.log(response);
//         });

//       submitEvent.preventDefault();
//     }
//   }
// });

export default {
  name: 'CityToSearch',
  props: {
    msg: String
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

      axios.get(query)
        .then(function (response) {
          store.commit(SET_DAY_LIST, response.data.list);
          store.commit(SET_CITY_NAME, response.data.city.name);
          console.log(response);

        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.city-to-search {
  width: 50%;
  margin: 2% auto;
  padding-bottom: 5%;

}
</style>
