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
@import "~/assets/SCSS/variables.scss";

.container {
  display: flex;
  column-gap: 16px;
  flex-direction: column;

  @media screen and (min-width: $tablet) {
    flex-direction: row;
  }
}
</style>
