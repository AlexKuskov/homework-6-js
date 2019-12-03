<template>
  <div class="weather-widget block">
    <h1>Weather widget</h1>
    <city-to-search />
    <forecast />
    <!-- <axio v-on:click="getData" /> -->
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import CityToSearch from './CityToSearch.vue';
import Forecast from './Forecast.vue';


const key = '16930e9bdf3ad11aa05152aeebf51f84';
const query = `https://api.openweathermap.org/data/2.5/forecast?appId=${key}&q=Cherkasy,ua`;

export default {
  name: 'WeatherWidget',
  props: {
    msg: String
  },
  components: {
    'city-to-search': CityToSearch,
    'forecast': Forecast
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather-widget {
  width: 90%;
  padding-bottom: 5%;
}
</style>
