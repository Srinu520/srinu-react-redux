import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'

function ProductDetails(props) {
  const { selectedProduct, loadProduct, loading } = props
  const { id } = useParams()
  
  useEffect(() => {
    loadProduct(id)
  }, [])
  if(loading) {
    return (
      <div className="loader w-100" type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        Loading...
      </div>
    )
  }
  return (
    <div>
      {
        selectedProduct && (
          <div className="container">
            <div className="row p-5">
              <div className="col-md-4 col-12">
                <img className='img-fluid w-sm-100' src={`https://picsum.photos/400/600?random=${selectedProduct.id}`} alt="..." />
              </div>
              <div className="col-md-8 col-12 p-5">
                <div className="card-body">
                  <h5 className="card-title">{selectedProduct.name}</h5>
                  <p className="card-text text-success">{selectedProduct.price}</p>
                  <p className="card-text text-secoundary">{selectedProduct.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    selectedProduct: state.products.selectedProduct,
    loading: state.loading.effects.products.loadProduct,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadProduct: (id) => dispatch.products.loadProduct(dispatch, id),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)