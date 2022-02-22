import axios from 'axios';

export const products = {
  state: {
    products: [],
    categories: [],
  }, // initial state
  reducers: {
    products: (state, payload) => {
      console.log('products reducer', payload);
      return {
        ...state,
        products: payload,
      };
    },
    categories: (state, payload) => {
      console.log('categories reducer', payload);
      return {
        ...state,
        categories: payload,
      };
    }
  },
  effects: (dispatch) => ({
    async loadProducts(payload, rootState) {
      const products = await axios('https://aveosoft-react-assignment.herokuapp.com/products');
      // const categories = await axios('https://aveosoft-react-assignment.herokuapp.com/categories');
      // console.log('response', products.data, categories.data);
      dispatch.products.products(products.data);
      // dispatch.products.categories(categories.data);
    },
    async loadCategories(payload, rootState) {
      const categories = await axios('https://aveosoft-react-assignment.herokuapp.com/categories');
      console.log('response', categories.data);
      dispatch.products.categories(categories.data);
    }
  }),
};