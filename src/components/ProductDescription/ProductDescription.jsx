import React, { Component } from "react"
import { withRouter } from "react-router";
import {gql } from '@apollo/client';
import {Query} from "@apollo/client/react/components"
import { connect } from "react-redux";
import { addProductToCart } from "../../store/cart/cartActions";
import { setProductAttributes } from "../../store/cart/cartActions";
import { 
  Container, 
  ProductImgContainer, 
  ProductInfoContainer, 
  ImgCarousel, 
  ProductImage,
  ProductBrand,
  ProductName,
  AttributeName,
  AttributeValue,
  AttributeColor,
  ProductPrice,
  DescriptionProduct,
  Radio,
  Button,
  Img,
  RadioColor
 } from "./ProductDescriptionStyles";

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


class ProductDescription extends Component {
  constructor(props){
    super()

    this.state = {
      imgClicked: false,
      image: '',
      attributes: [],
      equal: false
    }
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleAttributes = this.handleAttributes.bind(this);
  }

  handleImageClick(item){
    this.setState({imgClicked: true})
    this.setState({image: item})
  }

  handleAttributes(productID, id, value){
    let attribute = {
      productID: productID,
      id: id,
      value: value,
    };
      if(this.state.attributes.length > 0){
        const element = this.state.attributes.find(attribute => attribute.id === id)
          if(element){
            element.value = value
          }else{
            this.state.attributes.push(attribute);
          }
      }else{
        this.state.attributes.push(attribute);
      }
    }
  
    render() {
      return <Container>
        <Query query={GET_PRODUCT_DESCRIPTION}  variables={ this.props.match.params }>
          {({ loading, error, data }) => {
            if (error) return <h1>Error...</h1>;
            if (loading) return <h1>Loading...</h1>;
            const { product } = data
            return <>
              <ProductImgContainer>
                <ImgCarousel>
                  {product.gallery.map((item, index) => 
                    <Img img={item} key={index} onClick={() => this.handleImageClick(item) } />
                  )}
                </ImgCarousel>
                <ProductImage img={this.state.imgClicked ? this.state.image : product.gallery[0]}/>
              </ProductImgContainer>
              <ProductInfoContainer>
                <ProductBrand>
                <span>{this.props.catItems}</span>
                  {product.brand}
                </ProductBrand><br/>
                <ProductName>
                  {product.name}
                </ProductName><br/>
                {product.attributes.map((attribute, index) => 
                  <div key={index}>
                    <AttributeName key={index}>
                      {attribute.name}
                    </AttributeName>

                    {attribute.name !== 'Color' ? 
                      attribute.items.map((item, index) => 
                      <Radio key={index}>
                        <label htmlFor="radio">
                          <AttributeValue
                            id="radio" 
                            key={index} 
                            value={item.value}
                            name={attribute.name}
                            readOnly
                            type="radio"
                            onChange={()=> this.handleAttributes(product.id, attribute.id, item.value)}
                          /> 
                          <span>{item.value}</span>
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
                            readOnly
                            type="radio"
                            onChange={()=> this.handleAttributes(product.id, attribute.id, item.value)}
                          /> 
                        </label>
                      </RadioColor>
                      ) 
                    }
                  </div> 
                )} 
                <br/>
                <AttributeName>PRICE</AttributeName>
                  {product.prices.map((item, index) => 
                    item.currency.label === this.props.currencyLabel ? 
                    <ProductPrice key={index}>{item.currency.symbol}{item.amount} </ProductPrice> : '' 
                  )}
                <br/>
                <Button onClick={() => this.props.addProductToCart(
                  product.id, 
                  product.prices, 
                  product.attributes, 
                  this.state.attributes, 
                  product.name, 
                  product.brand)}>ADD TO CART</Button><br/>
                <DescriptionProduct dangerouslySetInnerHTML={{
                    __html: `<h4>${product.description}</h4>`
                  }}
                /> 
                <br/>
              </ProductInfoContainer>
            </>
          }}
      </Query>
    </Container>
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    categoryName: state.categoryReducer.categoryName,
    currencyLabel: state.currencyReducer.currencyLabel,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (id, 
      prices, 
      allAttributes, 
      chosenAttributes,
      name, 
      brand
    ) => dispatch(addProductToCart(id,
      prices, 
      allAttributes,
      chosenAttributes, 
      name, 
      brand,
      )),
    setProductAttributes: (productID, id, value)  => dispatch(setProductAttributes(productID, id, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(ProductDescription))