import { connect } from 'react-redux'
import ProductsList from './ProductList'

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.products.categories,
    loading: state.loading.global,
    productsLoading: state.loading.effects.products.loadProducts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch.products.loadProducts(),
    loadCategories: () => dispatch.products.loadCategories()
}
}
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsList)
export default ProductsContainer