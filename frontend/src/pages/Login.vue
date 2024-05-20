<script lang="js">
import {defineComponent} from "vue";
import {changeLanguage} from "../i18n";

export default defineComponent({
  name: "Login",
  data() {
    let errors = {
      email: false,
      password: false,
    };
    return {
      errors
    }
  },
  methods: {changeLanguage}
});
</script>

<template>
  <!--  <div>{{$t('messages.hello')}}</div>-->
  <main id="main-container">
    <form id="form-container">
      <label for="input-email" class="label-wrapper">
        <div class="input-block-wrapper">
          <img src="../images/mail.svg" alt="email" class="image-">
          <div class="input-wrapper">
            <input id="input-email" type="text" class="form-input">
            <div class="input-error">Error</div>
          </div>
        </div>
      </label>

      <label for="input-password" class="label-input">
        <div class="input-block-wrapper">
          <img src="../images/lock.svg" alt="password" class="image-">
          <div class="input-wrapper">
            <input id="input-password" type="text" class="form-input">
            <div class="input-error">Error</div>
          </div>
        </div>
      </label>
      <a>Зарегистрироваться</a>
      <input type="button" :value="$t('messages.buttonLogin')">
    </form>
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.scss');

</style>
