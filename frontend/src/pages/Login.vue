<script lang="js">
import {defineComponent} from "vue";

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
  methods: {}
});
</script>

<template>
  <div>{{$t('messages.hello')}}</div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.scss');

</style>
