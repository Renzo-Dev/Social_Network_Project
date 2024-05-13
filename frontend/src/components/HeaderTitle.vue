<script lang="js">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HeaderTitle",
  components: {},
  data() {
    let headerTitle = "Fun Talk";
    return {
      headerTitle
    }
  },
  methods: {}
});
</script>

<template>
<div class="header_wrapper">
  <h1>{{ headerTitle }}</h1>
</div>
</template>

<style scoped lang="scss">
@import url('../styles/HeaderTitle.scss');
</style>