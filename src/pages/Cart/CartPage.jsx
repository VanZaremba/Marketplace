import React, { Component } from "react"
import CartSummary from "../../components/Cart/CartSummary/CartSummary";
import CartAmount from "../../components/Cart/CartAmount/CartAmount";
import { Container, Title } from "../../components/Cart/CartSummary/CartSummaryStyles";

class CartPage extends Component {
  render() {
    return <Container>
      <Title>Cart</Title>
      <CartSummary/>
      <CartAmount/>
    </Container>
  }
}

export default CartPage