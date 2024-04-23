<script lang="js">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Login",
  components: {},
  data() {
    let errors = {
      email: false,
      password: false,
    };
    return {
      errors
    }
  },
  methods: {

  }
});
</script>

<template>
  <header class="text-logo-wrapper">
    <div class="text-logo">
      Fun Talk
    </div>
  </header>
  <main class="main-container">
    <form autofocus id="login-form">
      <div class="input-container">
        <label for="email"><img src="../images/mail.svg"></label>
        <input id="email" class="inputEmail" type="text" placeholder="Email" />
      </div>
      <div class="input-container">
        <label for="password"><img src="../images/lock.svg"></label>
        <input id="password" class="inputPassword" autocomplete="off" type="password" placeholder="Password" />
      </div>
      <input type="submit" class="buttonSubmit" value="Login" />
      <div class="second-change">
        <div class="checkBox">
        <input id="remember" type="checkbox" value="remember" />
        <label class="chBoxRemember" for="remember">Remember me</label>
        </div>
        <a href="#">Forgot Password?</a>
      </div>
      <div class="buttonRegister">
        <a href="/register">Register</a>
      </div>
    </form>
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.css');

</style>