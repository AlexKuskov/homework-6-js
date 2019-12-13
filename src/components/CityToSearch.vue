<template>
  <form @submit.prevent="getForecastData" class="city-to-search block">
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
import axios from 'axios';
import { mutations, actions } from '../store/mutation-types';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'CityToSearch',
  data: () => ({
    city: 'Cherkasy',
    countryCode: 'ua'
  }),
  methods: {
    ...mapMutations({
      setHintDisplaying: mutations.SET_HINT_DISPLAYING,
      setLoading: mutations.SET_LOADING,
      setCityName: mutations.SET_CITY_NAME
    }),
    ...mapActions({
      setUniqueDays: actions.SET_UNIQUE_DAYS
    }),
    getForecastData () {
      const key = '16930e9bdf3ad11aa05152aeebf51f84';
      const query = "https://api.openweathermap.org/data/2.5/forecast";
      const params = { appId: key, q: `${this.city},${this.countryCode}` };

      this.setHintDisplaying(false);
      this.setLoading(true);

      axios.get(query, { params })
        .then(response => {
          this.setUniqueDays(response.data.list);
          this.setCityName(response.data.city.name);
          this.setLoading(false);
        });
    }
  }
};
</script>

<style scoped>
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
</style>
