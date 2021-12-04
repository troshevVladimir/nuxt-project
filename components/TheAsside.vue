<template>
  <div class="asside">
    <h1 class="asside__h1">Добавление товара</h1>
    <div class="asside__body">
      <div class="asside__section">
        <label for="title" class="asside__label">Наименование товара</label>
        <input
          type="text"
          id="title"
          class="asside__input"
          placeholder="Введите наименование товара"
        />
      </div>
      <div class="asside__section">
        <label for="desc" class="asside__label">Описание товара</label>
        <input
          type="textarea"
          id="desc"
          class="asside__input asside__input_textarea"
          placeholder="Введите описание товара"
        />
      </div>
      <div class="asside__section">
        <label for="link" class="asside__label">
          Ссылка на изображение товара
        </label>
        <input
          type="text"
          id="link"
          class="asside__input"
          placeholder="Введите ссылку"
        />
      </div>
      <div class="asside__section">
        <label for="price" class="asside__label">Цена товара</label>
        <input
          type="text"
          id="price"
          class="asside__input"
          placeholder="Введите цену"
        />
      </div>
      <ui-button size="block" status="success">Добавить товар</ui-button>
    </div>
  </div>
</template>

<script>
import UIButton from "./ui-kit/UI-Button.vue";

export default {
  name: "TheAsside",
  components: {
    "ui-button": UIButton,
  },
};
</script>

<style scoped lang="scss">
.asside {
  width: 332px;

  &__h1 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }

  &__body {
    padding: 24px;
    background: var(--white-color);
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }

  &__section {
    margin-bottom: 16px;
    width: 100%;
  }

  &__label {
    display: block;
    color: var(--text-color);
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }

  &__input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    border: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    color: var(--disable-text-color);
  }
}
</style>
