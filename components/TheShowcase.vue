<template>
  <div class="showcase">
    <ui-select class="showcase__filter" />
    <div class="showcase__grid">
      <card-item :key="i" v-for="i in 10" />
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

    @media screen and(max-width: 650px) {
      flex-direction: column;
      margin-top: 16px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media screen and(max-width: 1400px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and(max-width: 940px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
