<template>
  <div class="showcase">
    <ui-select class="showcase__filter" />
    <div class="showcase__grid">
      <card-item />
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
import UISelect from "../components/ui-kit/UI-Select.vue";

export default {
  name: "TheShowcase",
  components: {
    "card-item": CardItem,
    "ui-select": UISelect,
  },
};
</script>

<style scoped lang="scss">
.showcase {
  display: grid;
  width: 100%;

  &__filter {
    justify-self: end;
  }

  &__grid {
    display: grid;
  }
}
</style>
