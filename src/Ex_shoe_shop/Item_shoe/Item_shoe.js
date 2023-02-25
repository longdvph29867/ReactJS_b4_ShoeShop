import React, { Component } from 'react'

export default class Item_shoe extends Component {
  

  render() {
    let {id ,name, price, image} = this.props.item;
    return (
      <div className='col-4 mb-5'>
          <div className="card border-primary h-100">
          <img className="card-img-top" src={image} alt='' />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
            <button onClick={() => this.props.handleAddToCart(this.props.item)} className='btn btn-success'>Add to Cart</button>
            <button onClick={() => this.props.detailItemShoe(id)} className='btn btn-info mt-2'>View detail</button>
          </div>
        </div>
      </div>
    )
  }
}
