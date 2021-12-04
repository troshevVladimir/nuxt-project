<template>
  <button class="ui-button" :class="[this.statusClass, this.sizeClass]">
    <slot />
  </button>
</template>

<script>
export default {
  name: "UIButton",
  props: {
    color: { type: String, required: false, default: "green" },
    status: { type: String, required: true },
    size: { type: String, required: true },
  },

  computed: {
    statusClass() {
      switch (this.status) {
        case "success":
          return "ui-button_color_green";
        case "error":
          return "ui-button_color_red";
        case "disable":
          return "ui-button_color_gray";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "small":
          return "ui-button_size_small";
        case "block":
          return "ui-button_size_block";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: filter ease 0.2s;

  font-family: Inter;
  font-weight: 600;
  font-size: 12px;

  &:hover {
    filter: brightness(80%);
  }

  &:active,
  &:focus {
    filter: brightness(90%);
  }

  &_size_small {
    width: 32px;
    height: 32px;
  }

  &_size_block {
    width: 100%;
    height: 32px;
  }

  &_color_red {
    background-color: var(--red-color);
  }

  &_color_gray {
    background-color: var(--gray-color);
    color: var(--disable-text-color);
    cursor: not-allowed;
  }

  &_color_green {
    background-color: var(--green-color);
    color: var(--white-color);
  }
}
</style>
