<template>
  <form class="login-form">
    <h1 class="title-form">Login</h1>
    <label class="label-container" for="input-email">Email
      <input id="input-email" name="email" type="email" autocapitalize="on" placeholder="Email">
    </label>
    <label class="label-container" for="input-password">Password
      <input id="input-password" type="password" autocapitalize="on" placeholder="Password">
    </label>
    <div class="ErrorMessage">Error Message</div>
  </form>
</template>

<style scoped lang="scss">
@import url('../styles/login-form.scss');
</style>

<script setup>

</script>