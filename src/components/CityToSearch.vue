<template>
  <form class="city-to-search block">
    <h2>City to search</h2>

    <label for="city">City:</label>
    <input type="text" name="city" id="city">

    <label for="country-code">Country:</label>
    <select name="country-code" id="country-code">
      <option value="ua">UA</option>
      <option value="us">US</option>
      <option value="gb">GB</option>
      <option value="de">DE</option>
    </select>

    <button type="submit">Show weather</button>
  </form>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'CityToSearch',
  props: {
    msg: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.city-to-search {
  width: 50%;
  margin: 2% auto;
  padding-bottom: 5%;

}
</style>
