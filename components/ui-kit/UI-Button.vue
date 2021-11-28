<template>
  <div class="ui-button"></div>
</template>

<script>
export default {
  name: "UIButton",
  props: {
    color: { type: String, require: false, default: "green" },
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
}
</style>
