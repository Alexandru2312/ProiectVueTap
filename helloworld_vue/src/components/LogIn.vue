<template>
  <div class="vue-template">
    <div class="container">
      <div class="headerContainer">
        <h3 class="header">Sign In</h3>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          placeholder="Email"
          class="form-control form-control-lg"
          v-model="form.email"
        />
        <p v-if="!emailValid" class="errorText">An email is mandatory</p>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          placeholder="Password"
          v-model="form.password"
        />
        <p v-if="!passwordValid" class="errorText">A password is mandatory</p>
      </div>

      <div class="buttonContainer">
        <button @click="changeRoute('register')" class="registerButton">
          Register
        </button>
        <button @click="onCreatePost()" class="btn btn-dark btn-lg btn-block">
          Sign In
        </button>
        <button @click="changeRoute('/')" class="registerButton">Home</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";
export default {
  data() {
    return {
      v$: useValidate(),
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations() {
    return {
      form: {
        email: { required },
        password: { required },
      },
    };
  },

  methods: {
    changeRoute(route) {
      router.push(route);
    },
    onCreatePost() {
      axios
        .post("http://localhost:8080/users/login", {
          email: this.form.email,
          password: this.form.password,
        })
        .then((response) => {
          console.log(response);
          router.push("movies");
        });
    },
  },

  computed: {
    emailValid() {
      return !!this.form.email;
    },

    passwordValid() {
      return !!this.form.password && this.form.password.length > 2;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #1abc9c !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  height: 90%;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.headerContainer {
  border-radius: 20px;
  height: auto;
  margin: auto;
}

.header {
  padding: 60px;
  text-align: center;
  color: white;
  font-size: 30px;
}

label {
  color: white;
  font-size: 24px;
}
button {
  background-color: #4caf50; /* Green */
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

.registerButton {
  background-color: #504caf;
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

input {
  width: 300px;
  box-sizing: border-box;
  border: 2px solid #28e1bd;
  border-radius: 4px;
  font-size: 16px;
  background-color: #28e1bd;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
}
</style>
