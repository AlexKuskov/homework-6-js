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


const key = '16930e9bdf3ad11aa05152aeebf51f84';
const query = `https://api.openweathermap.org/data/2.5/forecast?appId=${key}&q=Cherkasy,ua`;

// Vue.component('CityToSearch', CityToSearch);
// Vue.component('Forecast', Forecast);

Vue.component('axio', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>',
  data () {
    return {
      getData () {
        axios.get('/user?ID=12345')
          .then(function (response) {
            // handle success
            console.log(response);
          });
      }
    };
  }
});

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
