<template>
  <div class="weather-widget block">
    <h1>Weather widget</h1>
    <city-to-search />
    <forecast />
  </div>
</template>

<script>
import CityToSearch from './CityToSearch.vue';
import Forecast from './Forecast.vue';

export default {
  name: 'WeatherWidget',
  components: {
    CityToSearch,
    Forecast
  }
};
</script>

<style scoped>
.weather-widget {
  width: 90%;
  padding-bottom: 5%;
  margin: 0 auto;
}
.block {
  border: 2px solid #888;
  border-radius: 10px;
}
</style>
