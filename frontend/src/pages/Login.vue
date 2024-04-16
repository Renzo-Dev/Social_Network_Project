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
     <h1 class="h-login">Вход</h1>
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

.main-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .h-login{
    color: white;
    font-family: "Segoe MDL2 Assets",serif;
    font-size: calc(10 * .25vw);
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