<template>
  <div class="showcase">
    <div class="showcase__grid">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheShowcase",
};
</script>

<style scoped lang="scss">
.showcase {
  &__grid {
    display: grid;
  }
}
</style>
