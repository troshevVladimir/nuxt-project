<template>
  <div class="container">
    <the-asside></the-asside>
    <nuxt />
  </div>
</template>

<script>
import TheAsside from "../components/TheAsside.vue";

export default {
  components: {
    "the-asside": TheAsside,
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  padding: 32px;
  column-gap: 16px;
}
</style>
