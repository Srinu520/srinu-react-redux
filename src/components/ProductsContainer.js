import { connect } from 'react-redux'
import ProductsList from './ProductList'

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.products.categories
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