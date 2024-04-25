<template>
  <header class="text-logo-wrapper">
    <div class="text-logo">
      Fun Talk
    </div>
  </header>
  <main class="main-container">
    <form autofocus id="login-form">
      <h1 class="form-title">Register</h1>
      <div class="input-container">
        <label for="email"><img src="../images/mail.svg"></label>
        <input id="email" class="inputEmail" type="text" placeholder="Email" />
      </div>
      <div class="input-container">
        <label for="password"><img src="../images/lock.svg"></label>
        <input id="password" class="inputPassword" autocomplete="off" type="password" placeholder="Password" />
      </div>
      <div class="input-container">
        <label for="username"><img src="../images/user.svg"></label>
        <input id="username" class="inputUsername" autocomplete="off" type="text" placeholder="Username" />
      </div>
      <input type="submit" class="buttonSubmit" value="Register" />
      <div class="buttonRegister">
        <a href="/login">Login</a>
      </div>
    </form>
  </main>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Registration",
  components: {},
  setup() {
    return {}
  }
});

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.css');
</style>