<template>
  <div class="card-wrapper" @click="cardClickHandler()">
    <div class="card__button" @click="buttonClickHandler()">
      <ui-button size="small" status="error">
        <svg-icon name="basket" />
      </ui-button>
    </div>
    <div class="card">
      <img class="card__img" :src="this.link" />
      <div class="card__body">
        <div class="card__title">{{ this.title }}</div>
        <div class="card__desc">
          {{ this.description }}
        </div>
        <div class="card__price">{{ this.price }}руб.</div>
      </div>
    </div>
  </div>
</template>

<script>
import UIButton from "./ui-kit/UI-Button.vue";
import { mapMutations } from "vuex";
export default {
  name: "CardItem",

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
    },
  },

  components: {
    "ui-button": UIButton,
  },

  methods: {
    ...mapMutations,
    cardClickHandler() {
      this.$emit("cardClick");
    },
    buttonClickHandler() {
      this.$store.commit("removeProduct", this.id);
    },
  },
};
</script>

<style coped lang="scss">
.card-wrapper {
  position: relative;
  cursor: pointer;
}

.card {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  background-color: var(--white-color);
  border-radius: 4px;
  overflow: hidden;

  &__button {
    position: absolute;
    top: -8px;
    right: -8px;

    svg {
      height: 16px;
    }
  }

  &__img {
    width: 100%;
    height: 200px;
    margin-bottom: 16px;
    object-fit: cover;
  }

  &__body {
    display: flex;
    flex: 1 auto;
    flex-direction: column;
    margin: 0 16px 32px;
  }

  &__title {
    margin-bottom: 16px;
    font-family: SourceSansPro;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  &__desc {
    flex: 1 1 auto;
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  &__price {
    justify-self: end;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
