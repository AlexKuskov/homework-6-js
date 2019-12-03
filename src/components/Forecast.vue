<template>
  <div class="forecast block">
    <h2>Forecast</h2>
    <h3>{{ $store.state.cityName }}</h3>

    <div class="forecast-list block" v-for="(day, index) of $store.state.dayList" v-bind:key="index">
      <h3>{{ getDate(day.dt) }}</h3>
      <forecast-list-item :dayWeather="day" />
    </div>

    <!-- <div class="forecast-list block">
      <h3>01.12.2019</h3>
      <forecast-list-item />
    </div>

    <div class="forecast-list block">
      <h3>01.12.2019</h3>
      <forecast-list-item />
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import ForecastListItem from './ForecastListItem.vue';

const key = '16930e9bdf3ad11aa05152aeebf51f84';
const query = `https://api.openweathermap.org/data/2.5/forecast?appId=${key}&q=Cherkasy,ua`;

// list[0].dt - date
// list[0].weather[0].icon
// list[0].weather[0].main
// list[0].main.temp
// data.city.name

// Vue.component('axio', {
//   props: ['title'],
//   template: '<h3>{{ title }}</h3>',
//   data () {
//     return {
//       getData () {
//         axios.get('/user?ID=12345')
//           .then(function (response) {
//             // handle success
//             console.log(response);
//           });
//       }
//     };
//   }
// });

export default {
  name: 'Forecast',
  props: {
    msg: String
  },
  components: {
    'forecast-list-item': ForecastListItem
  },
  methods: {
    getDate (date) {
      const currentDate = new Date(date * 1000);

      return currentDate.toLocaleDateString('ru-RU');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.forecast {
  width: 50%;
  margin: 0 auto;
}
.forecast-list {
  display: inline-block;
}
</style>
