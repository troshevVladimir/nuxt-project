<template>
  <transition name="empty-store" mode="out-in">
    <div class="empty" v-if="productArray.length === 0" key="empty">
      Добавте товары. Сейчас список товаров пуст
    </div>
    <div class="showcase" v-else key="fully">
      <ui-select
        class="showcase__filter"
        :filterProps="addFilterProps()"
        @selected="filterApply($event)"
      />
      <transition-group name="card-item" tag="div" class="showcase__grid">
        <card-item
          v-for="prod in productArray"
          :key="prod.id"
          :title="prod.title"
          :description="prod.description"
          :price="prod.price"
          :link="prod.link"
          :id="prod.id"
        />
      </transition-group>
    </div>
  </transition>
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
.card-item-enter-active,
.card-item-leave-active,
.empty-store-enter-active,
.empty-store-leave-active {
  transition: all ease 1s;
}

.card-item-leave-to,
.empty-store-leave-to,
.card-item-enter,
.empty-store-enter {
  opacity: 0;
}

.card-item-move {
  transition: all ease 0.3s;
}

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

    @media screen and(max-width: 940px) {
      flex-direction: column;
      margin-top: 16px;
    }
  }

  &__grid {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
}
</style>
