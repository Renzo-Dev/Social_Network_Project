<script lang="js">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  components: {},
  setup() {
    return {
      incPassword: false
    }
  }
});

</script>

<template>
   <main class="main-container">
     <h1 class="h-login">Login</h1>
     <form class="login-form">
       <input id="inputEmail" type="text" name="inputEmail" placeholder="Email" />
       <input id="inputPassword" type="password" placeholder="Password">
       <input id="loginButton" type="button" value="Войти">
       <a class="register-link" href="#">Регистрация</a>
       <a class="incPassword" href="#" v-if="incPassword === false">
         Восстановить пароль
       </a>
     </form>
   </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.main-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .h-login{
    color: white;
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: calc(10   * .25vw);
    font-weight: 600;
    margin-bottom: 15px;
  }

  .login-form {
    display: flex;
    flex-direction: column;

    input {
      outline: none;
      border: none;
      padding: 10px;
      margin: 10px;
      &:focus {
        outline: none;
        border: none;
      }
    }
  }

}
@media (min-width: 1280px) and (max-width: 2560px) {

}
</style>