export const state = () => ({
  products: [
    {
      id: 0,
      title: "0",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 10000,
      link: "asdfasdf",
    },

    {
      id: 1,
      title: "1",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 10000,
      link: "asdfasdf",
    },

    {
      id: 2,
      title: "2",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 10000,
      link: "asdfasdf",
    },
  ],
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
};
