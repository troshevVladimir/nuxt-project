<template>
  <div class="select" tabindex="0">
    <div class="select__input">
      <div class="select__input-text">{{ this.currentProp }}</div>
      <svg-icon name="arrow-corner" />
    </div>
    <div class="select__dropdown">
      <div
        v-for="item in filterProps"
        :key="item.id"
        class="select__item"
        tabindex="0"
        @click="clickHandler(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UI-Select",
  data() {
    return {
      currentProp: "Не отсортировано",
    };
  },
  emits: ["selected"],
  props: {
    filterProps: {
      type: [Array, String],
    },
  },
  methods: {
    clickHandler(item) {
      this.currentProp = item.name;
      this.$emit("selected", item.id);
    },
  },
};
</script>

<style scoped lang="scss">
.select {
  position: relative;
  display: inline-block;
  width: fit-content;
  color: var(--disable-text-color);

  &:hover .select__dropdown {
    top: calc(100% - 15px);
    opacity: 1;
    visibility: visible;
  }

  &__input {
    padding: 10px 16px;
    margin-bottom: 16px;
    display: inline-flex;
    align-items: center;
    color: currentColor;
    background-color: var(--white-color);
    border-radius: 4px;
    cursor: pointer;

    svg {
      width: 6px;
      height: 6px;
      stroke: currentColor;
    }
  }

  &__input-text {
    font-size: 12px;
    margin-right: 5px;
  }

  &__dropdown {
    min-width: 100%;
    position: absolute;
    top: calc(100% - 40px);
    right: 0;
    background-color: var(--white-color);
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    transition: all ease 0.5s;
    z-index: 1;

    &:hover,
    &:focus {
      top: calc(100% - 15px);
      opacity: 1;
      visibility: visible;
    }
  }

  &__item {
    color: currentColor;
    padding: 10px 16px;
    cursor: pointer;
    &:hover {
      background-color: var(--gray-color);
    }
  }
}
</style>
