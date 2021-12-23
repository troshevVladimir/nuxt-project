<template>
  <div class="container">
    <div class="image">
      <img :src="this.link" alt="Product" />
    </div>
    <h1 class="title">{{ title }}</h1>
    <div class="descrioption">{{ description }}</div>
    <div class="price">{{ price }} руб.</div>

    <div class="buttons">
      <ui-button
        class="buy-button"
        size="normal"
        status="disable"
        type="subbmit"
        @btnClick="purchaseHandler()"
      >
        Купить
      </ui-button>
      <ui-button
        size="normal"
        status="error"
        type="subbmit"
        @btnClick="deleteHandler()"
      >
        Удалить
      </ui-button>
    </div>
  </div>
</template>

<script>
import uiButton from "@@/components/ui-kit/UI-Button";
import { mapGetters, mapMutations } from "vuex";
export default {
  layout: "product",

  data() {
    return {
      title: "",
      description: "",
      price: "",
      link: "",
      id: "",
    };
  },
  components: {
    "ui-button": uiButton,
  },
  methods: {
    imageHref() {
      return "asdfasdf";
    },

    currentID() {
      return this.$route.params.id;
    },

    deleteHandler() {
      this.$store.commit("removeProduct", this.$route.params.id);
      this.$router.push("/");
    },

    purchaseHandler() {},
  },
  computed: {
    ...mapGetters(["getProduct"]),
    ...mapMutations(["removeProduct"]),
  },
  mounted() {
    const { title, description, price, link } = this.getProduct(
      this.currentID()
    );
    this.title = title;
    this.description = description;
    this.price = price;
    this.link = link;
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  color: var(--text-color);
}

.image {
  display: flex;
  align-items: center;
  max-width: 500px;
  max-height: 300px;
  margin-bottom: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}

.descrioption {
  color: var(--disable-text-color);
  margin-bottom: 10px;
}

.price {
  font-size: 20px;
  margin-bottom: 30px;
}

.buttons {
  display: flex;

  .buy-button {
    margin-right: 10px;
  }
}
</style>
