<template>
  <router-view />
</template>

<script lang="js">
import { defineComponent } from "vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineComponent({
  components: {},
  setup() {
    return {}
  }
});
import './styles/resetCSS.css'
</script>

<style lang="css">
body,html {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
  background: #4c007a;
}
</style>