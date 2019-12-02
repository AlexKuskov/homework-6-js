<template>
  <form v-on:submit="getForecastData" id="city-to-search" class="city-to-search block">
    <h2>City to search {{ $store.state.count }}</h2>

    <label for="city">City:</label>
    <input type="text" name="city" id="city">

    <label for="country-code">Country:</label>
    <select name="country-code" id="country-code">
      <option value="ua">UA</option>
      <option value="us">US</option>
      <option value="gb">GB</option>
      <option value="de">DE</option>
    </select>

    <!-- <button type="button" v-on:click="getForecastData">Show weather</button> -->
    <button type="submit">Show weather</button>
    <!-- <show-weather-button /> -->
  </form>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

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



// Vue.component('show-weather-button', {
//   data() {
//     return {

//     };
//   },
//   methods: {
//     getData (clickEvent) {
//       axios.get('query')
//         .then(function (response) {
//           // handle success
//           console.log(response);
//         });

//       clickEvent.preventDefault();
//     }
//   },
//   template: `<button type="submit" v-on:click="getData">Show weather</button>`
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
        console.log(response);
      });

      // console.log(e);


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
