<template>
  <div class="card-wrapper">
    <div class="card__button">
      <ui-button size="small" status="error"
        ><svg-icon name="basket"
      /></ui-button>
    </div>
    <div class="card">
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
.card-wrapper {
  position: relative;
}
.card {
  max-width: 332px;
  height: 423px;
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
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
