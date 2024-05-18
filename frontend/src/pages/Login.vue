<script lang="js">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Login",
  components: {HeaderTitle},
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
</template>

<style scoped lang="scss">
@import url('../styles/Login.scss');

</style>
