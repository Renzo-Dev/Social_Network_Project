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
  methods: {}
});
</script>

<template>
  <main class="main-container">
    <form class="login__form">
      <div class="title__login">Вход</div>
      <label for="inputEmail">Введите почту <span v-if="errors.email" class="Error_Message">Неверная почта</span></label>
      <input type="text" id="inputEmail" class="formInput" autocomplete="on" name="email_" title="Email" placeholder="Email">
      <label for="inputPassword">Введите пароль<span v-if="errors.password" class="Error_Message"> </span></label>
      <input type="password" id="inputPassword" class="formInput" name="password" title="Password"
             placeholder="Password">
      <div class="NotHaveAccount">Нет аккаунта?<a
          :href="`${$router.resolve({ name: 'Register' }).href}`">Регистрация</a></div>
      <input value="Войти" type="submit" id="buttonSubmit">
      <div class="resetPassword"><a href="#">Сбросить пароль</a></div>
    </form>
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.css');

</style>