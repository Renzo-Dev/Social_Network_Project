<script lang="js">
import {defineComponent} from "vue";
import {changeLanguage} from "../i18n";
import {Authentication} from "../services/Authentication/Authentication";

export default defineComponent({
  name: "Login",
  data() {
    return {
      showError: false
    };
  },
  methods: {
    changeLanguage,
    checkCredentials() {
      if (!Authentication) {
        this.showError = true;
        alert('work')
      }
    }
  }
});
</script>

<template>
  <main class="main--container">
    <h1 class="form--title">Login</h1>
    <form class="form--container">
      <label class="label--container">
        <img class="input--image" src="../images/mail.svg" alt="">
        <input type="email" autocomplete="on" placeholder="Email"/>
      </label>

      <label class="label--container">
        <img class="input--image" src="../images/lock.svg" alt="">
        <input type="password" autocomplete="off" placeholder="Password"/>
      </label>
    </form>
    <div :hidden="!showError" style="color: red">Ошибка неверная почта или пароль</div>
    <input type="button" @click="checkCredentials" value="Login">
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.scss');

</style>
