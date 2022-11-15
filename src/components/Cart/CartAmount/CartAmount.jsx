import React, { Component } from "react"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addProductToCart } from "../../../store/cart/cartActions";
import { decreaseProductQuantity } from "../../../store/cart/cartActions";
import { Text, Button } from "./CartAmount.styles";

class CartAmount extends Component {
  constructor(props){
    super()
  }
  render(){
    const array = []
    let amount = ''
    if(this.props.cartItems.length !== 0){
      this.props.cartItems.map((product, index) => {
        return product.prices.map((item, index) => {
          if(item.currency.label === this.props.currencyLabel){
            array.push(item.amount * product.quantity)
             amount = array.reduce(function(total, i){
              return total + i
              })
          } return null } 
        )
      }) 
    }
    return<React.Fragment>
      {array.length !== 0 ? <React.Fragment>
        <hr/>
        <Text>Tax 21%: <b>{(amount * (21/100)).toFixed(2)} </b>
        <br/>
        Quantity: <b>{this.props.totalItems}</b> 
        <br/>
        Total: <b>{this.props.currencySymbol} {(amount + (amount * (21/100))).toFixed(2)}
        </b>
        </Text> 
      <Button>
        Order
      </Button>
      </React.Fragment>
        : 'No products yet'}
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    categoryName: state.categoryReducer.categoryName,
    currencyLabel: state.currencyReducer.currencyLabel,
    currencySymbol: state.currencyReducer.currencySymbol,
    cartItems: state.cartReducer.cartItems,
    totalItems: state.cartReducer.totalItems
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (id) => dispatch(addProductToCart(id)),
    decreaseProductQuantity: (id) => dispatch(decreaseProductQuantity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartAmount))