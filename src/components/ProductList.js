import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function ProductsList (props) {
  const { products, categories, loadProducts, loadCategories, loading, productsLoading } = props
  const [category, setCategory ] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    loadProducts()
    loadCategories()
  },[])
  console.log('products', products)
  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.map(product => product.categoryId === category? product : null).filter(product => product != null))
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
  const changeHandler = (e) => {
    const { value } = e.target
    setFilteredProducts(products.map(product => product.name.toLowerCase().includes(value.toLowerCase())? product : null).filter(product => product != null))
  }
  return (
    <div className="container">
      <div className='p-5 d-flex flex-column w-25 m-auto'>
        <section>
        <label className='p-3'> Sleclect Category </label>
        <select onChange={(e) => setCategory(e.target.value)} className='w-100 p-1'>
          <option value="all">All</option>
          {
            categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </select>
        </section>
        <input type="text" placeholder="Search" onChange={changeHandler} className='w-100 mt-2'/>
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
        }{
          filteredProducts?.length === 0 &&
          <div className="col-md-4 col-12 m-auto">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <p className="card-text">No products found</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductsList