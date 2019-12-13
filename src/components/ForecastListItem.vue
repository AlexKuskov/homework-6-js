<template>
  <div class="hour-list__item">
    <div class="time">{{ getTime(hourWeather.dt) }}</div>
    <figure>
      <img class="weather-icon" :src="getImgUrl(hourWeather.weather[0].icon)" alt="Sun">
      <figcaption>
         <p>{{ hourWeather.weather[0].main }}</p>
      </figcaption>
    </figure>
    <p>{{ convertKelvinToCelsius(hourWeather.main.temp) }}	&#186;C</p>
  </div>
</template>

<script>
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
      const images = require.context('../assets/images/', false, /\.png$/);

      return images('./' + weatherIcon + "@2x.png");
    },
    convertKelvinToCelsius(kelvinTemperature) {
      const celsiusTemperature = kelvinTemperature - 273.15;

      return Math.round(celsiusTemperature);
    }
  }
};
</script>

<style scoped>
.hour-list__item {
  border: 2px solid #888;
  max-width: 180px;
  height: auto;
  text-align: center;
}
.time {
  font-weight: 900;
  margin-top: 5%;
}
.weather-icon {
  width: 100%;
}
</style>
