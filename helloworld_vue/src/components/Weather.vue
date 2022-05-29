<template>
  <div class="vue-templeta">
    <div v-if="info" class="Card">
      <div v-if="info.data.location.name" class="Title">
        {{ info.data.location.name }}
      </div>
      <div v-if="info.data.current.temp_c" class="Title">
        {{ info.data.current.temp_c }} &#x2103
        <img v-bind:src="info.data.current.condition.icon" alt="image" />
      </div>
      <div v-if="info.data.location.name">
        The temperature in {{ info.data.location.name }} is
        {{ info.data.current.temp_c }} degrees Celsius
      </div>
      <div v-if="info.data.current.wind_kph">
        Wind speed: {{ info.data.current.wind_kph }} km/h
      </div>
      <div v-if="info.data.current.condition">
        It is
        {{ info.data.current.condition.text }}
      </div>
    </div>
    <div v-if="!info">
      Sorry, we don't have information about this city or have some Errors
    </div>
    <label>City</label>
    <input
      type="text"
      placeholder="City"
      class="form-control form-control-lg"
      v-model="city"
    />
    <button @click="getWeather">Get Weather</button>
  </div>
</template>

<script>
import axios from "axios";
import Vuetify from "vuetify";
export default {
  data() {
    return {
      info: "",
      city: "cluj",
    };
  },
  methods: {
    getWeather() {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=6580aadc787b4dd894295821222805&q=${this.city}&aqi=yes`
        )
        .then((response) => {
          this.info = response;
          console.log(this.info.data.location.name);
        });
    },
  },
};
</script>

<style>
.Card {
  display: flex;
  flex-direction: column;
  color: white;
  font-family: sans-serif;
}

.Title {
  font-size: 48px;
}
</style>
