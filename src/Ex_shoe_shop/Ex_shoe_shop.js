import React, { Component } from 'react'
import Detail_Shoe from '../Detail_Shoe/Detail_Shoe'
import Cart_list from './Cart_list/Cart_list'
import { data_shoe } from './data_shoe'
import Shoe_list from './Shoe_list/Shoe_list'

export default class Ex_shoe_shop extends Component {

    state = {
        list: data_shoe,
        Cart: [],
        detail: data_shoe[0],
    }

    handleAddToCart = (shoe) => {
      let cloneCart = [...this.state.Cart]
      let index = cloneCart.findIndex((item) => item.id == shoe.id);
      if(index == -1) {
        let newShoe = {...shoe, soLuong: 1};
        cloneCart.push(newShoe);
      }
      else {
        cloneCart[index].soLuong++;
      }
      this.setState({
        Cart: cloneCart,
      })
    }

    handDelete = (id) => {
      let newCart = this.state.Cart.filter((item) => item.id != id) 
      this.setState({
        Cart: newCart,
      })
    }

    handleChangeQuantity = (id, select) => {
      let cloneCart = [...this.state.Cart];
      let index = cloneCart.findIndex((item) => item.id == id)
      cloneCart[index].soLuong += select;
      if(cloneCart[index].soLuong == 0) {
        cloneCart.splice(index, 1)
      }
      this.setState({
        Cart: cloneCart,
      })
    }

    detailItemShoe = (id) => {
      let index = this.state.list.findIndex((item) => item.id == id)
      this.setState({
        detail: data_shoe[index],
      })
      
    }

  render() {
    return (
      <div>
        <h2>Ex_shoe_shop</h2>
        <div className="row ml-3 mr-3">
          <div className="col-5">
            <Shoe_list 
            list = {this.state.list}
            handleAddToCart = {this.handleAddToCart}
            detailItemShoe = {this.detailItemShoe}/>
          </div>
          <div className="col-7">
            <Detail_Shoe shoe = {this.state.detail}
            handleAddToCart = {this.handleAddToCart}/>

            <Cart_list cartList = {this.state.Cart}
            handDelete = {this.handDelete}
            handleChangeQuantity = {this.handleChangeQuantity}/>
          </div>
        </div>
      </div>
    )
  }
}
