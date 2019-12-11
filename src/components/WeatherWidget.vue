<template>
  <div class="weather-widget block">
    <h1>Weather widget</h1>
    <city-to-search />
    <forecast />
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import CityToSearch from './CityToSearch.vue';
import Forecast from './Forecast.vue';

export default {
  name: 'WeatherWidget',
  props: {
    msg: String
  },
  components: {
    CityToSearch,
    Forecast
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather-widget {
  width: 90%;
  padding-bottom: 5%;
  margin: 0 auto;
}
</style>
