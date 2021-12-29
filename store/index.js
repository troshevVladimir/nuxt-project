export const state = () => ({
  products: [],
});

export const getters = {
  getNextId(state) {
    if (state.products.length) {
      return state.products[state.products.length - 1].id + 1;
    }
    return 0;
  },
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return function (id) {
      const product = state.products.find((el) => {
        return el.id == id;
      });
      return product;
    };
  },
  getProductsFromLocStor() {
    return JSON.parse(localStorage.getItem("products"));
  },
};

export const mutations = {
  addProductsFromLocStor(state, productsFromLockStor) {
    state.products = state.products.concat(productsFromLockStor);
  },

  addProduct(state, payload) {
    const { title, description, price, link, id } = payload;
    const productObject = {
      title,
      description,
      price,
      link,
      id,
    };
    state.products.push(productObject);

    if (localStorage.getItem("products")) {
      const existInLocalStorage = JSON.parse(localStorage.getItem("products"));
      existInLocalStorage.push(productObject);
      const newInLocalStorage = JSON.stringify(existInLocalStorage);
      localStorage.setItem("products", newInLocalStorage);
    } else {
      localStorage.setItem("products", JSON.stringify([productObject]));
    }
  },

  removeProduct(state, id) {
    const elIdToRemove = state.products.findIndex((el) => {
      return el.id == id;
    });
    state.products.splice(elIdToRemove, 1);

    const existInLocalStorage = JSON.parse(localStorage.getItem("products"));
    existInLocalStorage.splice(elIdToRemove, 1);
    const newInLocalStorage = JSON.stringify(existInLocalStorage);
    localStorage.setItem("products", newInLocalStorage);
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
