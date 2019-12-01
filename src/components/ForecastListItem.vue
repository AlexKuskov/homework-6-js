<template>
  <div class="forecast-list-item block">
    <div class="time">12:00</div>
    <figure>
      <img src="../assets/images/01d@2x.png" alt="Sun">
      <figcaption>
         <p>Sunny</p>
      </figcaption>
    </figure>
    <p>12-13C*</p>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

const key = '16930e9bdf3ad11aa05152aeebf51f84';
const query = `https://api.openweathermap.org/data/2.5/forecast?appId=${key}&q=Cherkasy,ua`;

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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.forecast-list-item {
  // display: inline-block;
}
</style>
