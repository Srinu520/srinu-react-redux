import { init } from "@rematch/core";
import { products } from './models/products';
import loading from '@rematch/loading'

const store = init({
  name: 'root',
  models: {
    products: products,
  },
  plugins: [
    loading()
  ]
})

export default store;