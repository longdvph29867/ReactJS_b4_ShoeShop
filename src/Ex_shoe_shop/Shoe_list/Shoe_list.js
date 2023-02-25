import React, { Component } from 'react'
import Item_shoe from '../Item_shoe/Item_shoe'

export default class Shoe_list extends Component {

  renderShoeList = () => {
    return this.props.list.map((item, index) => {
      return (
        <Item_shoe item = {item} key={index}
        handleAddToCart = {this.props.handleAddToCart}
        detailItemShoe = {this.props.detailItemShoe}/>
      )
    })
  }

  render() {
    return (
      <div className='row'>
        {this.renderShoeList()}
      </div>
    )
  }
}
