<template>
  <form class="login-form">
    <h1 class="title-form">Login</h1>
    <label class="label-container" for="input-email"><img src="../images/mail.svg" alt="mail">
      <input id="input-email" name="email" type="email" autocapitalize="on" placeholder="Email">
    </label>
    <label class="label-container" for="input-password"><img src="../images/lock.svg" alt="">
      <input id="input-password" type="password" autocapitalize="on" placeholder="Password">
    </label>
    <div v-show="true" class="ErrorMessage">Error Message</div>
    <a href="#">{{ $t('messages.recoverPassword') }}</a>
    <input type="button" id="submit" :value="$t('messages.buttonLogin')" />
  </form>
</template>

<style scoped lang="scss">
@import url('../styles/login-form.scss');
</style>

<script lang="js">
import {changeLanguage} from "../i18n";

export default {

  name: 'LoginForm',
  components: {},
  methods: {
    changeLanguage
  }
}


</script>