<template>
  <div class="vue-templeta"></div>
  <div class="moviePageTitle">The list of Movies</div>
  <div v-if="info" class="cardContainer">
    <div v-for="movies in info.data" class="card">
      <img :src="movies.img" alt="imagine" class="image" />
      <div class="title">{{ movies.title }}</div>
      <div class="year">{{ movies.year }}</div>
      <div class="year">Rating: {{ movies.rating }}</div>
    </div>
  </div>
  <button class="button" @click="changeRoute('login')">Logout</button>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  data() {
    return {
      info: "",
    };
  },

  mounted() {
    axios.get("http://localhost:8080/movies/allMovies").then((response) => {
      this.info = response;
    });
  },
  methods: {
    changeRoute(route) {
      router.push(route);
    },
  },
};
</script>

<style>
.button {
  background-color: #10735f; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 10px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 240px;
  height: 360px;
  margin-bottom: 10px;
  border-radius: 14px;
  color: white;
  font-family: Helvetica, sans-serif;
}

.moviePageTitle {
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 48px;
  margin-bottom: 4rem;
  margin-top: 4rem;
}

.container {
  padding: 2px 10px;
}

.title {
  font-size: 30px;
  margin-bottom: 0.5rem;
}

.year {
  font-size: 20px;
  margin-bottom: 0.5rem;
}

.cardContainer {
  display: flex;
  flex-direction: row;
  flex-grow: 3;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 4rem;
}

.image {
  width: 100%;
  height: 70%;
  border-radius: 14px;
}
</style>
