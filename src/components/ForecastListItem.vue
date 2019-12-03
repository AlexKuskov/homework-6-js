<template>
  <div class="forecast-list-item block">
    <div class="time">{{ getTime(hourWeather.dt) }}</div>
    <figure>
      <img :src="getImgUrl(hourWeather.weather[0].icon)" alt="Sun">
      <figcaption>
         <p>{{ hourWeather.weather[0].main }}</p>
      </figcaption>
    </figure>
    <p>{{ convertKelvinToCelsius(hourWeather.main.temp) }}	&#186;C</p>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Forecast',
  props: {
    hourWeather: Object
  },
  methods: {
    getTime (date) {
      const currentDate = new Date(date * 1000);
      const options = { hour: '2-digit', minute: '2-digit' };

      return currentDate.toLocaleTimeString('ru-RU', options);
    },
    getImgUrl(weatherIcon) {
      var images = require.context('../assets/images/', false, /\.png$/);

      return images('./' + weatherIcon + "@2x.png");
    },
    convertKelvinToCelsius(kelvinTemperature) {
      const celsiusTemperature = kelvinTemperature - 273.15;

      return Math.round(celsiusTemperature);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .forecast-list-item {
//   // display: inline-block;
// }
</style>
