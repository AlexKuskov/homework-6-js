<template>
  <div class="forecast">
    <h2 v-if="cityName">Forecast</h2>
    <h3>{{ cityName }}</h3>

    <p class="hint" v-if="isHintDisplayed">
      Please input your city/town, country
      code and press 'Show weather' button to see forecast
    </p>

    <div class="loader" v-if="isLoading"></div>
    <div v-if="!isLoading">
      <div
        class="forecast-day block"
        v-for="(day, dayIndex) of days"
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
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ForecastListItem from './ForecastListItem.vue';

export default {
  name: 'Forecast',
  components: { ForecastListItem },
  computed: mapState({
    cityName: state => state.cityName,
    isHintDisplayed: state => state.isHintDisplayed,
    isLoading: state => state.isLoading,
    days: state => state.days
  }),
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
.block {
  border: 2px solid #888;
  border-radius: 10px;
}
</style>
