import React, { Component } from 'react'

export default class Cart_list extends Component {
    
  renderTbody = () => {
    return this.props.cartList.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td><img style={{width: 80}} src={item.image} alt="" /></td>
          <td>
            <button onClick={() => this.props.handleChangeQuantity(item.id, -1)} className='btn btn-dark'>-</button>
            <strong className='px-2'>{item.soLuong}</strong>
            <button onClick={() => this.props.handleChangeQuantity(item.id, 1)} className='btn btn-warning'>+</button>
          </td>
          <td><strong>{item.price * item.soLuong}</strong></td>
          <td>
            <button onClick={() => this.props.handDelete(item.id)} className='btn btn-danger'>Delete</button>
          </td>
        </tr>
      )
    })
  }


  render() {
    return (
      <div>
        <h4>Giỏ hàng</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Img</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTbody()}
          </tbody>
        </table>
      </div>
    )
  }
}
