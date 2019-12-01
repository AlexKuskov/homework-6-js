<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <weather-widget />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import WeatherWidget from './components/WeatherWidget.vue';

export default {
  name: 'app',
  components: {
    'weather-widget': WeatherWidget
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.block {
  border: 2px solid #888;
  border-radius: 10px;
}
</style>
