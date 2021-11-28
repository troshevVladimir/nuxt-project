<template>
  <div class="showcase">
    <div class="showcase__grid">
      <card-item />
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  name: "TheShowcase",
  components: {
    "card-item": CardItem,
  },
};
</script>

<style scoped lang="scss">
.showcase {
  &__grid {
    display: grid;
  }
}
</style>
