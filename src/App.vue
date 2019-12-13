<template>
  <weather-widget class="app" />
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue';

export default {
  name: 'app',
  components: { WeatherWidget }
};
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
