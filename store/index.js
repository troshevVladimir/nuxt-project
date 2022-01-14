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
    return JSON.parse(localStorage.getItem('products'));
  },
};

export const mutations = {
  addProductsFromLocStor(state, productsFromLockStor) {
    if (!state.products.length && productsFromLockStor) {
      this.state.products = state.products.concat(productsFromLockStor);
    }
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

    if (localStorage.getItem('products')) {
      const existInLocalStorage = JSON.parse(localStorage.getItem('products'));
      existInLocalStorage.push(productObject);
      const newInLocalStorage = JSON.stringify(existInLocalStorage);
      localStorage.setItem('products', newInLocalStorage);
    } else {
      localStorage.setItem('products', JSON.stringify([productObject]));
    }
  },

  removeProduct(state, id) {
    const elIdToRemove = state.products.findIndex((el) => {
      return el.id == id;
    });
    state.products.splice(elIdToRemove, 1);

    const existInLocalStorage = JSON.parse(localStorage.getItem('products'));
    existInLocalStorage.splice(elIdToRemove, 1);
    const newInLocalStorage = JSON.stringify(existInLocalStorage);
    localStorage.setItem('products', newInLocalStorage);
  },

  sortProductsTitleUp(state) {
    this.state.products = state.products.sort((prev, next) => {
      if (prev.title < next.title) return -1;
      if (prev.title === next.title) return 0;
      return 1;
    });
  },
  sortProductsTitleDwn(state) {
    this.state.products = state.products.sort((prev, next) => {
      if (prev.title < next.title) return 1;
      if (prev.title === next.title) return 0;
      return -1;
    });
  },
  sortProductsPriceUp(state) {
    this.state.products = state.products.sort((prev, next) => {
      return prev.price - next.price;
    });
  },
  sortProductsPriceDwn(state) {
    this.state.products = state.products.sort((prev, next) => {
      return next.price - prev.price;
    });
  },
};
