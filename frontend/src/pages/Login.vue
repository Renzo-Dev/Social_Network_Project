<script lang="js">
import {defineComponent} from "vue";
import HeaderTitle from "../components/HeaderTitle.vue";

export default defineComponent({
  name: "Login",
  components: {HeaderTitle},
  data() {
    let errors = {
      email: false,
      password: false,
    };
    return {
      errors
    }
  },
  methods: {}
});
</script>

<template>
  <header>
    <HeaderTitle/>
  </header>
  <main class="main-container">
    <form id="login-form">
      <h1>Login</h1>
      <div class="input-container">
        <label for="email">
          <img src="../images/mail.svg" alt="mail">
        </label>
        <input type="email" id="email" class="inputEmail">
      </div>
      <div class="input-container">
        <label for="password">
          <img src="../images/lock.svg" alt="password">
        </label>
        <input type="password" id="password" class="inputPassword">
      </div>
      <div class="checkbox-wrapper-65">
        <label for="cbk1-65">
          <input type="checkbox" id="cbk1-65">
          <span class="cbx">
      <svg width="12px" height="11px" viewBox="0 0 12 11">
        <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
      </svg>
    </span>
          <span class="checkbox--text">Remember me ?</span>
        </label>
      </div>
      <input class="button-form" type="button" value="Sign In">
      <input class="button-form" type="button" value="Sign Up">
    </form>
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.scss');

</style>
