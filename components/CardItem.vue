<template>
  <div class="card">
    <div class="card__button">
      <ui-button size="small" status="error" :handler="buttonHandler()"
        ><svg-icon name="basket"
      /></ui-button>
    </div>
    <img class="card__img" src="../assets/img/thumbnail.png" />
    <div class="card__body">
      <div class="card__title">Наименование товара</div>
      <div class="card__desc">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </div>
      <div class="card__price">10 000 руб.</div>
    </div>
  </div>
</template>

<script>
import UIButton from "./ui-kit/UI-Button.vue";
export default {
  name: "CardItem",
  components: {
    "ui-button": UIButton,
  },

  methods: {
    buttonHandler() {
      return function () {
        console.log("click");
      };
    },
  },
};
</script>

<style coped lang="scss">
.card {
  max-width: 332px;
  height: 423px;
  &__button {
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
}
</style>
