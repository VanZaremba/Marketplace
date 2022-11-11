import React, { Component } from "react"
import {gql } from '@apollo/client';
import {Query} from "@apollo/client/react/components"
import { connect } from "react-redux";
import { 
  Container,
  ImgOutOfStockContainer, 
  Product, 
  CartOnHover,
  ProductInfo, 
  ImgContainer 
} from "./ProducstStyles";
import { BsCart2 } from'react-icons/bs';
import { BiLoader } from'react-icons/bi';
import { withRouter } from "react-router-dom";
import { addProductToCart } from "../../store/cart/cartActions";

const GET_PRODUCTS = gql`
  query category($input: CategoryInput!) 
  {
    category(input: $input) {
      products {
        id
        name
        brand
        gallery
        inStock
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;

class Products extends Component {
  constructor(props){
    super()
    this.state = {
      isHovered: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this)
  }

  handleHover(){
    this.setState({isHovered: !this.state.isHovered})
  }

  handleProductClick(id){
    this.props.history.push(`/product/${id}`);
  }

  handleCartClick(){
    this.props.history.push(`/cart`);
  }

  render() {
    return <Container>
        <Query query={GET_PRODUCTS} variables={{ input: { title: this.props.categoryName} }} >
          {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading) return <div className="loading"><BiLoader/></div>;
              const { category } = data
              return category.products.map((item, index) => 
            <Product 
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
              key={index}
            >  
              {item.inStock ? 
                <ImgContainer onClick={() => this.handleProductClick(item.id)}>
                  <img key={index} src={item.gallery[0]}  alt=""/>
                </ImgContainer> : 
                <ImgOutOfStockContainer>
                  <img key={index} src={item.gallery[0]}  alt=""/>
                  <span>OUT OF STOCK</span>
                </ImgOutOfStockContainer>
              }
              {item.inStock &&
                <CartOnHover 
                  className="cart" 
                  onClick={() => this.props.addProductToCart(item.id, item.prices, item.allAttributes, item.chosenAttributes, item.name, item.brand)}
                  isHovered={this.state.isHovered}
                >
                  <BsCart2 />
                </CartOnHover>   
              }
                <ProductInfo inStock={item.inStock}>
                  {item.brand}{' '}{item.name}<br/>
                  {item.prices.map((item, index) => 
                    item.currency.label === this.props.currencyLabel && 
                    <b key={index}>{item.currency.symbol}{item.amount} </b> 
                  )}
                </ProductInfo>
            </Product>
          )}}
      </Query>
    </Container>
  }
}

const mapStateToProps = state => {
  return {
    categoryName: state.categoryReducer.categoryName,
    currencyLabel: state.currencyReducer.currencyLabel
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products))