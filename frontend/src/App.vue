<template>
  <Header />
  <router-view/>
</template>

<script lang="js">
import {defineComponent} from "vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineComponent({
  components: { Header },
  setup() {
    return {}
  }
});
import './styles/resetCSS.css'
import Header from "./components/Header.vue";
</script>

<style lang="css">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body , #app {
  overflow: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #01020c, #06060e, #0b0b0f, #0f0f11, #121212);
}

</style>