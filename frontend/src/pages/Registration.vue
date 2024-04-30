<template>
  <header class="text-logo-wrapper">
    <div class="text-logo">
      Fun Talk
    </div>
  </header>
  <main class="main-container">
    <form autofocus id="login-form">
      <h1 class="form-title">Registration</h1>
      <div v-if="errors.email===true" id="emailError" class="ErrorMessage">Некорректная почта
        <div class="rectangle"><span class="exclamation-mark">!</span></div>
      </div>
      <div class="input-container">
        <label for="email"><img src="../images/mail.svg"></label>
        <input id="email" class="inputEmail" type="text" placeholder="Email" @input="emailIsValidate($event.target.value)"/>
      </div>
      <div v-if="errors.password" id="passwordError" class="ErrorMessage">Некорректный пароль
        <div class="rectangle"><span class="exclamation-mark">!</span></div>
      </div>
      <div class="input-container">
        <label for="password"><img src="../images/lock.svg"></label>
        <input id="password" class="inputPassword" autocomplete="off" type="password" placeholder="Password"/>
      </div>
      <div v-if="errors.username" id="usernameError"  class="ErrorMessage">Некорректное Username
        <div class="rectangle"><span class="exclamation-mark">!</span></div>
      </div>
      <div class="input-container">
        <label for="username"><img src="../images/user.svg"></label>
        <input id="username" class="inputUsername" autocomplete="off" type="text" placeholder="Username"/>
      </div>
      <input type="submit" class="buttonSubmit" value="Register"/>
      <div class="buttonRegister">
        <a href="/login">Login</a>
      </div>
    </form>
  </main>
</template>

<script lang="js">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Registration",
  components: {},
  data() {
    let errors = {
      email: false,
      password: false,
      username: false
    }
    return {
      errors
    }
  },
  methods: {
  },
  setup() {
    return {}
  }
});

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.scss');
</style>