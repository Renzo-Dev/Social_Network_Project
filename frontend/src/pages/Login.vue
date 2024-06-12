<script lang="js">
import {defineComponent} from "vue";
import {changeLanguage} from "../i18n";
import {Authentication} from "../services/Authentication/Authentication";
import LoginForm from "../components/login-form.vue";

export default defineComponent({
  name: "Login",
  components: {LoginForm},
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
  <main class="main-container">
    <login-form/>
  </main>
</template>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.scss');
</style>
