import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function ProductsList(props) {
  const { products, categories, loadProducts, loadCategories } = props
  const {category, setCategory } = useState('all')
  useEffect(() => {
    loadProducts()
    loadCategories()
  }, [])
  
  return (
    <div className="container">
      <div>
        <select onSelect={(e) => setCategory(e.target.value) }>
          <option value="">All</option>
          {
            categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </select>
      </div>
      <div className="row">
        {
          products.includes(category).find ((product, index) => {
            return (
              <div className="col-md-4 col-12" key={product.id}>
                <div className="card mb-4 shadow-sm">
                  <img className="card-img-top" src={product.image} sizes={'40px', '100px'} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">{product.model}</p>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)