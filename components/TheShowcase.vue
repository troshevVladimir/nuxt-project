<template>
  <div>
    <div class="empty" v-if="productArray.length === 0">
      Добавте товары. Сейчас список товаров пуст
    </div>
    <div class="showcase" v-else>
      <ui-select
        class="showcase__filter"
        :filterProps="addFilterProps()"
        @selected="filterApply($event)"
      />
      <div class="showcase__grid">
        <card-item
          v-for="prod in productArray"
          :key="prod.id"
          :title="prod.title"
          :description="prod.description"
          :price="prod.price"
          :link="prod.link"
          :id="prod.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
import UISelect from "../components/ui-kit/UI-Select.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TheShowcase",
  components: {
    "card-item": CardItem,
    "ui-select": UISelect,
  },

  methods: {
    ...mapMutations(["sortProducts"]),
    addFilterProps() {
      return [
        { name: "По возпростанию цены", id: 0 },
        { name: "По убыванию цены", id: 1 },
        { name: "По названию", id: 2 },
        { name: "По названию обратно", id: 3 },
      ];
    },
    filterApply(id) {
      this.$store.commit("sortProducts", id);
    },
  },

  computed: {
    ...mapGetters(["getProducts"]),
    productArray() {
      return this.getProducts;
    },
  },
};
</script>

<style scoped lang="scss">
.empty {
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
}
.showcase {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__filter {
    align-self: end;

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
