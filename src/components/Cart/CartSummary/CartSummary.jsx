import React, { Component } from "react"
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
  Right,
  Left,
  CarouselArrows
} from "./CartSummary.styles";
import { addProductToCart } from "../../../store/cart/cartActions";
import { decreaseProductQuantity, increaseProductQuantity } from "../../../store/cart/cartActions";
import { Radio, AttributeValue, AttributeColor,  RadioColor } from "../../ProductDescription/ProductDescription.styles";
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

class CartSummary extends Component {
  constructor(props){
    super()
    this.state = {
      size: '',
      imageIndex: 0
    }
    this.handleImageLeftClick = this.handleImageLeftClick.bind(this);
    this.handleImageRightClick = this.handleImageRightClick.bind(this);
  }

  handleImageLeftClick(product){
    if(product.gallery.length > 1){
      if(this.state.imageIndex >= 1){
        this.setState({ imageIndex: this.state.imageIndex - 1 })
      }
      if(this.state.imageIndex === 0 ){
        this.setState({ imageIndex: 0 })
      }
    }
  }

  handleImageRightClick(product){
    for (let i = 0; i < (product.gallery.length - this.state.imageIndex - 1) ; i++) {
      this.setState({ imageIndex: this.state.imageIndex + 1 })
    }
  }

  render(){
    return <React.Fragment>
    {this.props.cartItems.map((product, index) => 
    <React.Fragment key={index}>
      <hr/>
        <InfoRow key={index}>
          <InfoColumn key={index}>
            <ProductBrand miniCart={false}>{product.brand}</ProductBrand><br/>
            <ProductName>{product.name}</ProductName><br/>
            {product.prices.map((item, index) => 
              item.currency.label === this.props.currencyLabel ? 
              <ProductPrice key={index}>{item.currency.symbol}{item.amount} </ProductPrice> : '' 
            )}
            <br/>
            {product.allAttributes.map((attribute, index) => 
                <div key={index}>
                  <AttributeName key={index}>
                    {attribute.name}
                  </AttributeName>

                  {attribute.name !== 'Color' ? 
                    attribute.items.map((item, index) => 
                    <Radio key={index}>
                      <label htmlFor="radio">
                        <AttributeValue
                          miniCart={false}
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
                    <RadioColor key={index} color={item.value}>
                      <label htmlFor="radioColor">
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
                    ) 
                  }
                </div> 
              )} 
          </InfoColumn>
          <SummaryColumn>
            <BoxQuantity onClick={() => this.props.increaseProductQuantity(product.id)}>+</BoxQuantity>
              {product.quantity}
            <BoxQuantity  onClick={() => this.props.decreaseProductQuantity(product.id)}>-</BoxQuantity>
          </SummaryColumn>
 
          <CarouselColumn>
            <React.Fragment>
              <Img src={product.gallery.length > 1 ? 
                product.gallery[this.state.imageIndex] : 
                product.gallery[0]}
              />
              {product.gallery.length > 1 &&
                <CarouselArrows>
                  <Left onClick={() => this.handleImageLeftClick(product)}>
                    <BsChevronLeft/>
                  </Left>
                  <Right onClick={() => this.handleImageRightClick(product)}>
                    <BsChevronRight/>
                  </Right>
                </CarouselArrows>
              }
            </React.Fragment>
          </CarouselColumn>
        </InfoRow>
      </React.Fragment>
    )}
  </React.Fragment>      
}}

const mapStateToProps = state => {
  return {
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
      brand) => dispatch(addProductToCart(id, 
        prices, 
        allAttributes, 
        chosenAttributes,
        name, 
        brand)),
    decreaseProductQuantity: (id) => dispatch(decreaseProductQuantity(id)),
    increaseProductQuantity: (id) => dispatch(increaseProductQuantity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartSummary))