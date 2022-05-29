<script>
import router from "../router";
export default {
  methods: {
    changeRoute(route) {
      router.push(route);
    },
  },
};
</script>

<template>
  <div class="page">
    <div class="header">Welcome to the Movie App</div>
    <div class="buttonContainer">
      <button @click="changeRoute('login')">LogIn</button>
      <button @click="changeRoute('register')">Register</button>
      <button @click="changeRoute('weather')">Weather</button>
    </div>
  </div>
</template>

<style scoped>
.buttonContainer {
  margin: 0 auto;
  text-align: center;
}

button {
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

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  background-color: #169e83;
}

.page {
  background: #1abc9c;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header {
  padding: 60px;
  text-align: center;
  color: white;
  font-size: 30px;
}
</style>
