import axios from 'axios';

export const products = {
  state: {
    products: [],
    categories: [],
  }, // initial state
  reducers: {
    products: (state, payload) => {
      return {
        ...state,
        products: payload,
      };
    },
    categories: (state, payload) => {
      return {
        ...state,
        categories: payload,
      };
    },
    selectedProduct: (state, payload) => {
      return {
        ...state,
        selectedProduct: payload,
      };
    }
  },
  effects: (dispatch) => ({
    async loadProducts(payload, rootState) {
      const products = await axios('https://aveosoft-react-assignment.herokuapp.com/products');
      dispatch.products.products(products.data);
    },
    async loadCategories(payload, rootState) {
      const categories = await axios('https://aveosoft-react-assignment.herokuapp.com/categories');
      dispatch.products.categories(categories.data);
    },
    async loadProduct(payload, rootState, id) {
      const product = await axios(`https://aveosoft-react-assignment.herokuapp.com/products/${id}`);
      dispatch.products.selectedProduct(product.data);
    }
  }),
};