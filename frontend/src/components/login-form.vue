<template>
  <form class="login-form">
    <h1 class="title-form">Login</h1>
    <label class="label-container" for="input-email"><img src="../images/mail.svg" alt="mail">
      <input id="input-email" name="email" type="email" autocapitalize="on" placeholder="Email">
    </label>
    <label class="label-container" for="input-password"><img src="../images/lock.svg" alt="">
      <input id="input-password" type="password" autocapitalize="off" placeholder="Password">
    </label>
    <div class="ErrorMessage">{{ $t('messages.ErrorMessage') }}</div>
    <a class="link-recoveryPassword" href="#">{{ $t('messages.recoverPassword') }}</a>
    <router-link class="link-registration" :to="{ name: 'Register' }">{{ $t('messages.linkRegistration') }}</router-link>
    <input class="buttonLogin" type="button" id="submit" :value="$t('messages.buttonLogin')"/>
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