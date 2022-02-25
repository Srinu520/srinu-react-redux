import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function ProductsList (props) {
  const { products, categories, loadProducts, loadCategories, loading, productsLoading } = props
  const [category, setCategory ] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    loadProducts()
    loadCategories()
  }, [])
  console.log('products', products)
  useEffect(() => {
    if (category === 'all') {
      console.log('all', products)
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.map(product => product.categoryId == category? product : null).filter(product => product != null))
    }
  }, [category, products])
  if(loading) {
    return (
      <button class="loader w-100" type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    )
  } else if (productsLoading) {
    return (
      <button class="loader w-100" type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        Loading products...
      </button>
    )
  }
  return (
    <div className="container">
      <div className='p-5'>
        <label className='p-3'> Sleclect Category </label>
        <select onChange={(e) => setCategory(e.target.value)} style={{width: '6rem'}}>
          <option value="all">All</option>
          {
            categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </select>
      </div>
      <div className="row">
        {
          filteredProducts?.map((product, index) => {
            return (
              <div className="col-md-4 col-12" key={product.id}>
                <Link to={`/${product.id}`} className='App-link'>
                <div className="card mb-4 shadow-sm">
                  <img src={`https://picsum.photos/200/300?random=${index}`} className="card-img-top"/>
                  <div className="card-body">
                    <p className="card-text App-link">{product.name}</p>
                    <p className="card-text text-gray">{product.model}</p>
                    <p className="card-text text-success">{product.price}</p>
                  </div>
                </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductsList