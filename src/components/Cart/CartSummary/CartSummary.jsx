import React, { Component } from "react"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { 
  InfoColumn, 
  Title, 
  InfoRow, 
  AttributeColor, 
  AttributeName, 
  SummaryColumn,
  CarouselColumn,
  Container,
  BoxQuantity,
  CarouselImage,
  ProductBrand,
  ProductName,
  ProductPrice,
} from "./CartSummaryStyles";
import { gql } from '@apollo/client';
import {Query} from "@apollo/client/react/components";
import { addProductToCart } from "../../../store/cart/cartActions";
import { decreaseProductQuantity } from "../../../store/cart/cartActions";
import { Radio, AttributeValue, RadioColor } from "../../ProductDescription/ProductDescriptionStyles";

const GET_PRODUCT_DESCRIPTION = gql`
  query product($id: String!){
    product(id: $id) {
      id
      brand
      name
      prices{	
        currency{
          label
          symbol
        }
        amount
      }
      inStock
    	description
      gallery
    	attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
			}
    }
  }
`;

class CartSummary extends Component {
  constructor(props){
    super()
    this.state = {
      size: ''
    }
    this.handleAttributes = this.handleAttributes.bind(this);
  }

  handleAttributes(name, value){
    console.log(name, value)
  }

  render(){
    // let chosenAttributesID = 0
    //   this.props.cartItems.map((item, index) => {
    //   item.chosenAttributes.value.map((i) => i === 'Yes' ? console.log(i) : '')
    //   chosenAttributesID = item.chosenAttributes.value.length
    //   })
// console.log(chosenAttributesID)


    return <>
    {this.props.cartItems.map((product, index) => 

    <>
        <hr/>
        <InfoRow>
          <InfoColumn>
            <ProductBrand>{product.brand}</ProductBrand><br/>
            <ProductName>{product.name}</ProductName><br/>
            {/* {product.prices.map((item, index) => 
              item.currency.label === this.props.currencyLabel ? 
              <ProductPrice key={index}>{item.currency.symbol}{item.amount} </ProductPrice> : '' 
            )} */}
            <br/>
            {/* {product.allAttributes.map((attribute, index) => 
                  <div key={index}>
                    <AttributeName key={index}>
                      {attribute.name}
                    </AttributeName>

                    {attribute.name !== 'Color' ? 
                      attribute.items.map((item, index) => 
                    // console.log(item, attribute, product)
                      <Radio key={index}>
                        <label htmlFor="radio">
                          <AttributeValue
                            id="radio" 
                            key={index} 
                            value={item.value}
                            name={product.id}
                            type="radio"
                            disabled
                            style={{backgroundColor: 
                              product.chosenAttributes.value.map((value, index) => 
                              product.chosenAttributes.id.map((id, index) =>
                              value === item.value ? '#000': '#fff'

                              // {product.chosenAttributes.id.map((id, index) => 
                              //    id === item.id ? '#000': '#fff' )}
                            ))}}
                          /> 
                          <span>{item.id}</span>
                        </label>
                      </Radio>
                      ) :             
                      attribute.items.map((item, index) => 
                      <RadioColor color={item.value}>
                        <label htmlFor="radioColor">
                          <AttributeColor 
                            id="radioColor" 
                            key={index} 
                            value={item.value}
                            name={attribute.name}
                            type="radio"
                            defaultChecked={product.chosenAttributes.value.map((value, index) => value === item.value)}
                          /> 
                        </label>
                      </RadioColor>
                      ) 
                    }
                  </div> 
                )}  */}
        
          </InfoColumn>
          <SummaryColumn>
            <BoxQuantity onClick={() => 
            console.log(product.chosenAttributes)}
              // this.props.addProductToCart(
              //   product.id, 
              //   product.prices, 
              //   product.allAttributes, 
              //   product.chosenAttributes, 
              //   product.name, 
              //   product.brand)}
            >+</BoxQuantity>
            {product.quantity}
            <BoxQuantity  onClick={() => this.props.decreaseProductQuantity(product.id)}>-</BoxQuantity>
          </SummaryColumn>
          <CarouselColumn>
                <CarouselImage></CarouselImage>
          </CarouselColumn>
        </InfoRow>
        </>
    )}

       </>      
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    categoryName: state.categoryReducer.categoryName,
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
    decreaseProductQuantity: (id) => dispatch(decreaseProductQuantity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartSummary))