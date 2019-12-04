<template>
  <div class="forecast">
    <h2 v-if="$store.state.cityName">Forecast</h2>
    <h3>{{ $store.state.cityName }}</h3>

    <p class="hint" v-if="$store.state.isHintDisplayed">
      Please input your city/town, country
      code and press 'Show weather' button to see forecast
    </p>

    <div class="loader" v-if="$store.state.isLoading"></div>
    <div v-if="!$store.state.isLoading">
      <div
        class="forecast-day block"
        v-for="(day, dayIndex) of $store.state.days"
        v-bind:key="dayIndex"
      >
        <h3>{{ getDate(day[0].dt) }}</h3>
        <div class="hour-list">
          <div
            v-for="(hour, hourIndex) of day"
            v-bind:key="hourIndex + 10"
          >
            <forecast-list-item :hourWeather="hour" />
          </div>
        </div>
      </div>
    </div>


    <!-- getDaysNumber($store.state.dayList) -->

    <!-- <div class="forecast-list block" v-for="(day, index) of $store.state.dayList" v-bind:key="index">
      <h3>{{ getDate(day.dt) }}</h3>
      <forecast-list-item :dayWeather="day" />
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
    // getDaysNumber (dayList) {
    //   let days = [];

    //   for (day of dayList) {
    //     const convertedDate = getDate(day.dt);

    //     if (!~days.indexOf(convertedDate)) days.push(convertedDate);
    //   }

    //   return days;
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.forecast {
  width: 90%;
  margin: 0 auto;
}
.hint{
  font-size: 25px;
  color: #ABABAB;
  margin-top: 10%;
  margin-bottom: 10%;
}
.loader {
  display: inline-block;
  border: 10px solid #ffffff;
  border-top: 10px solid #494949;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-top: 5%;
  margin-bottom: 5%;
  animation: spin .8s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.forecast-day {
  background-color: #CACACA;
  margin-bottom: 5%;
}
.forecast-list {
  display: inline-block;
}
.hour-list {
  display: flex;
  justify-content: space-evenly;
  background-color: #FFF;
}
</style>
