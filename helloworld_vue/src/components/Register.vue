<template>
  <div class="vue-template">
    <div class="container">
      <form @submit.prevent="checkForm">
        <div class="headerContainer">
          <h3 class="header">Register</h3>
        </div>
        <div class="inputContainer">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              name="firstName"
              class="form-control form-control-lg"
            />
            <p v-if="!firstNameValid" class="errorText">
              Need a valid FirstName
            </p>
          </div>

          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              v-model="form.lastName"
              name="lastName"
              class="form-control form-control-lg"
            />
            <p v-if="!lastNameValid" class="errorText">Need a valid LastName</p>
          </div>

          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              name="email"
              class="form-control form-control-lg"
            />
            <p v-if="!emailValid" class="errorText">Email Required</p>
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              name="password"
              class="form-control form-control-lg"
            />
            <p v-if="!passwordValid" class="errorText">Password Required</p>
          </div>

          <div class="form-group">
            <label>Verify Password</label>
            <input
              type="password"
              id="validatePassword"
              v-model="form.validatePassword"
              name="validatePassword"
              class="form-control form-control-lg"
            />
            <p v-if="!validatePasswordValid" class="errorText">
              Verify Password must match with Password
            </p>
          </div>
        </div>

        <div class="buttonContainer">
          <button @click="changeRoute('login')" class="registerButton">
            Log In
          </button>

          <button
            type="submit"
            value="Submit"
            class="btn btn-dark btn-lg btn-block"
            @click="onCreatePost()"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        validatePassword: null,
        errors: null,
      },
    };
  },

  computed: {
    firstNameValid() {
      return !!this.form.userName;
    },

    lastNameValid() {
      return !!this.form.userName;
    },

    emailValid() {
      return !!this.form.email;
    },

    passwordValid() {
      return !!this.form.password && this.form.password.length > 2;
    },

    validatePasswordValid() {
      return (
        !!this.form.validatePassword &&
        this.form.validatePassword === this.form.password
      );
    },
  },

  methods: {
    changeRoute(route) {
      router.push(route);
    },
    checkForm() {
      const formValid =
        this.form.email &&
        this.form.firstNameValid &&
        this.form.lastNameValid &&
        this.form.password &&
        this.form.validatePassword;
      if (formValid) {
        console.log("Valid");
      } else console.log(this.form.password, this.form.validatePassword);
    },
    onCreatePost() {
      axios
        .post("http://localhost:8080/users/register", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
          password: this.form.password,
          validatePassword: this.form.validatePassword,
        })
        .then((response) => console.log(response));
    },
  },
};
</script>

<style>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.errorText {
  color: red;
}

.form-group {
  display: flex;
  flex-direction: column;
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
