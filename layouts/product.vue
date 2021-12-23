<template>
  <div class="container">
    <ui-button
      size="normal"
      status="success"
      type="subbmit"
      @btnClick="submitHandler()"
    >
      На Главную
    </ui-button>
    <Nuxt />
  </div>
</template>

<script>
import UIButton from "../components/ui-kit/UI-Button";
export default {
  components: {
    "ui-button": UIButton,
  },
  methods: {
    submitHandler() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss"></style>
