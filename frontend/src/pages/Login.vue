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
   <main class="main-container">
     <form class="login__form" autocomplete="off">
       <div class="title_login">Вход</div>
       <label for="login">Введите почту <span v-if="errors.email" class="Error_Message">Неверная почта</span></label>
       <input type="text" id="email" name="email_" title="Email">
       <label for="password">Введите пароль<span v-if="errors.password" class="Error_Message"> </span></label>
       <input type="password" id="password" name="password_">
       <div class="NotHaveAccount">Нет аккаунта?<a href="#">Регистрация</a></div>
       <input value="Войти" type="button" id="login__button">
     </form>
   </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.main-container {
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login__form {
  background: #14112a;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  padding: 40px;
  border-radius: 15px;
}

@media (min-width: 1280px) and (max-width: 2560px) {

}
</style>