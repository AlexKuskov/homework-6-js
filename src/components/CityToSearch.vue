<template>
  <form v-on:submit="getForecastData" id="city-to-search" class="city-to-search block">
    <h2>City to search</h2>

    <div class="city-to-search__content">
      <div class="city">
        <label class="city__label" for="city">City:</label>
        <input class="city__input block" v-model="city" type="text" name="city" id="city">
      </div>

      <div class="country-code">
        <label class="country-code-label" for="country-code">Country:</label>
        <select class="country-code-dropdown" v-model="countryCode" name="country-code" id="country-code">
          <option value="ua">UA</option>
          <option value="us">US</option>
          <option value="ru">RU</option>
          <option value="gb">GB</option>
          <option value="de">DE</option>
        </select>
      </div>

      <button class="show-weather-btn block" type="submit">Show weather</button>
    </div>
  </form>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { mutations, actions } from '../store/mutation-types';
import { store } from '../store';

export default {
  name: 'CityToSearch',
  data() {
    return {
      city: 'Cherkasy',
      countryCode: 'ua'
    };
  },
  methods: {
    getForecastData (e) {
      const key = '16930e9bdf3ad11aa05152aeebf51f84';
      const query = `https://api.openweathermap.org/data/2.5/forecast?appId=${key}&q=${this.city},${this.countryCode}`;

      e.preventDefault();
      store.commit(mutations.SET_HINT_DISPLAYING, false);
      store.commit(mutations.SET_LOADING, true);

      axios.get(query)
        .then(function (response) {
          store.dispatch(actions.SET_UNIQUE_DAYS, response.data.list);
          store.commit(mutations.SET_CITY_NAME, response.data.city.name);
          store.commit(mutations.SET_LOADING, false);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.city-to-search {
  width: 70%;
  margin: 2% auto;
  padding-bottom: 2%;
  position: relative;
}
.city-to-search__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.city__input {
  padding: 1% 2%;
}
.city {
  display: inline-block;
}
.country-code {
  display: inline-block;
  margin: 0 50px 0 20px;
}
.city__label,
.country-code-label {
  display: block;
  margin-bottom: 5px;
}
.city__label,
.city__input,
.country-code-dropdown {
  float: left;
}
.show-weather-btn {
  align-self: flex-end;
  background-color: #FFF;
  text-transform: uppercase;
  padding: 4px 6px;
  cursor: pointer;
}
.block {
  border: 2px solid #888;
  border-radius: 10px;
}
</style>
