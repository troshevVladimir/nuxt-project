<template>
  <div class="asside">
    <h1 class="asside__h1">Добавление товара</h1>
    <form class="asside__body">
      <div
        class="asside__section asside__section_required"
        :class="{ mb0: !isValidTitle }"
      >
        <label for="title" class="asside__label">Наименование товара</label>
        <input
          v-model="title"
          type="text"
          id="title"
          class="asside__input"
          placeholder="Введите наименование товара"
        />
        <span v-if="!isValidTitle" class="asside__error">
          Поле является обязательным
        </span>
      </div>
      <div class="asside__section">
        <label for="desc" class="asside__label">Описание товара</label>
        <textarea
          v-model="description"
          id="desc"
          class="asside__input asside__input_textarea"
          placeholder="Введите описание товара"
        />
      </div>
      <div
        class="asside__section asside__section_required"
        :class="{ mb0: !isValidLink }"
      >
        <label for="link" class="asside__label">
          Ссылка на изображение товара
        </label>
        <input
          v-model="link"
          type="text"
          id="link"
          class="asside__input"
          placeholder="Введите ссылку"
        />
        <span v-if="!isValidLink" class="asside__error">
          Поле является обязательным
        </span>
      </div>
      <div
        class="asside__section asside__section_required"
        :class="{ mb0: !isValidPrice }"
      >
        <label for="price" class="asside__label">Цена товара</label>
        <input
          v-model="price"
          type="number"
          id="price"
          class="asside__input"
          placeholder="Введите цену"
        />
        <span v-if="!isValidPrice" class="asside__error">
          Поле является обязательным
        </span>
      </div>
      <ui-button
        size="block"
        :status="btnStatus"
        type="subbmit"
        @btnClick="submitHandler()"
      >
        Добавить товар
      </ui-button>
    </form>
  </div>
</template>

<script>
import UIButton from "./ui-kit/UI-Button.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TheAsside",
  components: {
    "ui-button": UIButton,
  },

  data() {
    return {
      title: null,
      price: null,
      link: null,
      description: null,

      isValidTitle: false,
      isValidPrice: false,
      isValidLink: false,

      isFormValid: false,
    };
  },

  methods: {
    ...mapMutations(["addProduct"]),

    submitHandler() {
      if (this.isFormValid) {
        this.$store.commit("addProduct", {
          title: this.title,
          description: this.description,
          price: Number(this.price),
          link: this.link,
          id: this.getNextId,
        });

        this.description = this.title = this.price = this.link = null;
      }
    },

    formValid() {
      if (this.isValidTitle && this.isValidPrice && this.isValidLink) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },
  },

  computed: {
    ...mapGetters(["getNextId"]),
    btnStatus() {
      if (this.isFormValid) {
        return "success";
      }
      return "disable";
    },
  },

  mounted() {
    console.log(this.getNextId);
  },

  watch: {
    title: function (val) {
      if (val) {
        this.isValidTitle = true;
      } else {
        this.isValidTitle = false;
      }
      this.formValid();
    },

    price: function (val) {
      if (val) {
        this.isValidPrice = true;
      } else {
        this.isValidPrice = false;
      }

      this.formValid();
    },

    link: function (val) {
      if (val) {
        this.isValidLink = true;
      } else {
        this.isValidLink = false;
      }
      this.formValid();
    },
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/SCSS/variables.scss";
.asside {
  min-width: 332px;
  margin-bottom: 20px;

  @media screen and (min-width: $tablet) {
    margin-bottom: 0;
  }

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

    &_required {
      & label {
        display: flex;

        &::after {
          display: block;
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 4px;
          background-color: var(--red-color);
        }
      }
    }
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
    width: 100%;
    padding: 10px 16px;
    border: 1px solid transparent;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    color: var(--disable-text-color);

    &_textarea {
      resize: vertical;
    }

    &:focus {
      background-color: var(--gray-color);
    }

    &_invalid {
      border: 1px solid var(--red-color);
    }
  }

  &__error {
    font-size: 8px;
    line-height: 10px;
    color: var(--red-color);
    margin-bottom: 2px;
    padding-top: 4px;
  }

  .mb0 {
    margin-bottom: 0;
  }
}
</style>
