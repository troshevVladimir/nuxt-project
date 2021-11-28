<template>
  <div class="ui-button" :class="[this.statusClass, this.sizeClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UIButton",
  props: {
    color: { type: String, required: false, default: "green" },
    status: { type: String, required: true },
    size: { type: String, required: true },
    handler: { type: Function, required: true },
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

  methods: {
    clickHandler() {},
  },
};
</script>

<style scoped lang="scss">
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

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
  }

  &_color_green {
    background-color: var(--green-color);
  }
}
</style>
