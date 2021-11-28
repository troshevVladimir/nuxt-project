<template>
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
</template>

<script>
export default {
  name: "CardItem",
};
</script>

<style coped lang="scss">
.card {
  max-width: 332px;
  height: 423px;

  &__img {
    width: 100%;
    height: 200px;
    margin-bottom: 16px;
    object-fit: cover;
  }
}
</style>
