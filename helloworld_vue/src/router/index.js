import HelloWorld from "../components/HelloWorld.vue";
import LogIn from "../components/LogIn.vue";
import Register from "../components/Register.vue";
import Weather from "../components/Weather.vue";
import Movies from "../components/Movies.vue";

import { createRouter, createWebHistory } from "vue-router";

const Home = { template: "<div>Home</div>" };

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/login", component: LogIn },
  { path: "/register", component: Register },
  { path: "/weather", component: Weather },
  { path: "/movies", component: Movies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
