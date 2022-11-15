import React, { Component } from "react"
import { 
  Modal, 
  Overlay, 
  Button, 
  GreenButton,  
  WrappedContainer, 
  WrappedTotal, 
  WrappedButtons, 
  Title 
} from "./MiniCart.styles"
import * as ReactDOM from "react-dom"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { 
  InfoColumn, 
  InfoRow, 
  AttributeName, 
  SummaryColumn,
  CarouselColumn,
  BoxQuantity,
  ProductBrand,
  ProductName,
  ProductPrice,
  Img,
 } from "../CartSummary/CartSummary.styles";
 import { addProductToCart } from "../../../store/cart/cartActions";
import { decreaseProductQuantity, increaseProductQuantity, checkOutCart } from "../../../store/cart/cartActions";
import { Radio, RadioColor, AttributeColor, AttributeValue } from "../../ProductDescription/ProductDescription.styles";

class MiniCart extends Component {
  constructor(props){
    super()
    this.box = React.createRef()
    this.state = {
    }
    this.handleCartClick = this.handleCartClick.bind(this)
    this.handleCheckOutCart = this.handleCheckOutCart.bind(this)
    this.handleCartOutsideClick = this.handleCartOutsideClick.bind(this)
  }

  handleCartClick(){
    this.props.history.push(`/cart`);
    this.props.handleOpenModal()
  }

  handleCheckOutCart(){
    this.props.checkOutCart();
    this.props.handleOpenModal()
  }

  handleCartOutsideClick(){
    this.props.handleOpenModal()
  }

  render(){
    return ReactDOM.createPortal(
    this.props.isOpen && 
      <React.Fragment>
        <Overlay onClick={() => this.handleCartOutsideClick()}/>
          <Modal> 
            <Title>
              <b>My bag</b>{this.props.totalItems !== 0 && `, ${this.props.totalItems} items`}
            </Title>
            <WrappedContainer>
              {this.props.totalItems === 0 && <h5>No products yet...</h5> }
              {this.props.cartItems.map((product, index) => 
              <InfoRow miniCart={true} key={index} >
                <InfoColumn miniCart={true}>
                  <ProductBrand miniCart={true}>{product.brand}</ProductBrand><br/>
                  <ProductName miniCart={true}>{product.name}</ProductName><br/>
                    {product.prices.map((item, index) => 
                      item.currency.label === this.props.currencyLabel && 
                      <ProductPrice miniCart={true} key={index}>
                        {item.currency.symbol}{item.amount} 
                      </ProductPrice> 
                    )}
                    <br/>
                    {product.allAttributes.length > 0 && 
                      product.allAttributes.map((attribute, index) => 
                      <div key={index}>
                        <AttributeName miniCart={true} key={index}>
                          {attribute.name}
                        </AttributeName>
                        {attribute.name !== 'Color' ? 
                          attribute.items.map((item, index) => 
                          <Radio key={index} miniCart={true}>
                            <label htmlFor="radio" key={index}>
                              <AttributeValue
                                id="radio" 
                                key={index} 
                                value={item.value}
                                name={attribute.id && !product.productId}
                                type="radio"
                                disabled
                                checked={product.chosenAttributes.find((chosen, index) => chosen.value === item.value)}
                              /> 
                              <span>{item.value}</span>
                            </label>
                          </Radio>
                          ):             
                          attribute.items.map((item, index) => 
                          <RadioColor key={index} color={item.value} miniCart={true}>
                            <label htmlFor="radioColor" key={index} >
                              <AttributeColor 
                                id="radioColor" 
                                key={index} 
                                value={item.value}
                                name={attribute.id && !product.productId}
                                type="radio"
                                disabled
                                checked={product.chosenAttributes.find((chosen, index) => chosen.value === item.value)}
                              /> 
                            </label>
                          </RadioColor>
                          )}
                      </div> 
                    )} 
                </InfoColumn>
                <SummaryColumn>
                  <BoxQuantity miniCart={true} 
                  onClick={() => this.props.increaseProductQuantity(product.id)}
                  >
                    +
                  </BoxQuantity>
                  {product.quantity}
                  <BoxQuantity miniCart={true} 
                  onClick={() => this.props.decreaseProductQuantity(product.id)}>
                    -
                  </BoxQuantity>
                </SummaryColumn>
                <CarouselColumn miniCart={true}>
                  <Img src={product.gallery[0]}/>
                </CarouselColumn>
                <WrappedTotal>
                  <h4>Total:</h4> 
                  <b>{this.props.currencySymbol}
                  {product.prices.map((item, index) => item.currency.label === this.props.currencyLabel && (item.amount * product.quantity).toFixed(2))}</b> 
                </WrappedTotal>
              </InfoRow>
              )} 
            </WrappedContainer>
            <WrappedButtons>
              <Button onClick={() => this.handleCartClick()}>
                VIEW BAG
              </Button>
              <GreenButton onClick={() => this.handleCheckOutCart()}>
                CHECK OUT
              </GreenButton>
            </WrappedButtons>
          </Modal>
        </React.Fragment>,
      document.getElementById('portal')
    )
  }
}

const mapStateToProps = state => {
  return {
    currencySymbol: state.currencyReducer.currencySymbol,
    currencyLabel: state.currencyReducer.currencyLabel,
    cartItems: state.cartReducer.cartItems,
    totalItems: state.cartReducer.totalItems
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (id, 
      prices, 
      allAttributes, 
      chosenAttributes,
      name, 
      brand,
      gallery) => dispatch(addProductToCart(id, 
        prices, 
        allAttributes, 
        chosenAttributes,
        name, 
        brand,
        gallery)),
    decreaseProductQuantity: (id) => dispatch(decreaseProductQuantity(id)),
    increaseProductQuantity: (id) => dispatch(increaseProductQuantity(id)),
    checkOutCart: () => dispatch(checkOutCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MiniCart))