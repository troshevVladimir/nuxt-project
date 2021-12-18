export const state = () => ({
  products: [],
});

export const getters = {
  getProducts(state) {
    return state.products;
  },
};

export const mutations = {
  addProduct(state, payload) {
    const { title, description, price, link, id } = payload;
    state.products.push({
      title,
      description,
      price,
      link,
      id,
    });
  },

  removeProduct(state, id) {
    const elIdToRemove = state.products.findIndex((el) => {
      return el.id == id;
    });
    state.products.splice(elIdToRemove, 1);
  },

  sortProducts(state, id) {
    let sortFunc;
    switch (id) {
      case 0: // По возпростанию цены
        sortFunc = (prev, next) => {
          if (prev.price > next.price) {
            return 1;
          }
          if (prev.price < next.price) {
            return -1;
          }
          return 0;
        };
        break;
      case 1: // По убыванию цены
        sortFunc = (prev, next) => {
          if (prev.price > next.price) {
            return -1;
          }
          if (prev.price < next.price) {
            return 1;
          }
          return 0;
        };
        break;
      case 2: // По названию
        sortFunc = (prev, next) => {
          if (prev.title > next.title) {
            return -1;
          }
          if (prev.title < next.title) {
            return 1;
          }
          return 0;
        };
        break;
      case 3: // По названию обратно
        sortFunc = (prev, next) => {
          if (prev.title > next.title) {
            return 1;
          }
          if (prev.title < next.title) {
            return -1;
          }
          return 0;
        };
        break;
    }
    this.state.products = state.products.sort(sortFunc);
  },
};
