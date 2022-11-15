import React, { Component } from "react"
import { 
  NavbarContainer, 
  NavbarCategory,
  NavbarCategoriesMenu,
  NavbarLogo,
  NavbarCartMenu,
  CurrencySelect,
  Currency,
  ArrowIcon,
  CurrencyContainer,
  TotalItems,
  Icon,
  OpenLinksButton,
  NavBarLinkExtended,
  NavBarExtendedContainer,
} from './Navbar.styles'
import {gql } from '@apollo/client';
import {Query} from "@apollo/client/react/components"
import { connect } from "react-redux";
import { setCategory } from "../../store/category/categoryActions";
import  logo  from '../../assets/logo.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { BsCart2 } from'react-icons/bs';
import { setCurrency } from "../../store/currency/currencyActions";
import { withRouter } from "react-router-dom";
import MiniCart from "../Cart/MiniCart/MiniCart";

const GET_CATEGORIES = gql`
  {
      categories{
        name
    }
  }
`;

const GET_CURRENCIES = gql`
  {
      currencies{
        label
        symbol
    }
  }
`;

class Navbar extends Component {
  constructor(props){
    super()
    this.box = React.createRef()
    this.state = { 
      category: 'all',
      symbol: '$',
      arrowDown: true,
      isOpen: false,
      extendedNavBar: false
    }
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleArrowChange = this.handleArrowChange.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleCategoryChange(name) {
    this.props.setCategory(name)
    this.setState({category: name})
  }

  handleCurrencyChange(label, symbol){
    this.props.setCurrency(label, symbol)
  }

  handleArrowChange(){
    this.setState({arrowDown: !this.state.arrowDown})
  }

  handleOpenModal(){
    this.setState({isOpen: !this.state.isOpen})
  }

  componentDidMount() {
    let element = document.getElementById("root")
    element.addEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = (event) => {
    if (this.box && !this.box.current.contains(event.target) && !this.state.arrowDown) {
      this.handleArrowChange()
    }
  }

  render() {

    return <NavbarContainer extendNavBar={this.state.extendNavBar}>
    <OpenLinksButton onClick={() => this.setState({extendedNavBar: !this.state.extendedNavBar})}>
      {this.state.extendedNavBar ? <>&#10005;</> : <>&#8801;</>}
    </OpenLinksButton>
    <NavbarCategoriesMenu>
      <Query query={GET_CATEGORIES}>
        {({ loading, error, data }) => {
            if (error) return null;
            if (loading) return null;
            const { categories } = data
            return categories.map((item, index) => 
            <NavbarCategory 
              to="/"
              style={this.props.categoryName === item.name ? { borderBottom: '2px solid #5ece7b' } : {}}
              key={index} 
              onClick={() => this.handleCategoryChange(item.name)}
            >
              {item.name}
            </NavbarCategory>
          )
        }}
      </Query>
    </NavbarCategoriesMenu>
    <NavbarLogo>
      <img alt="logo" src={logo}/>
    </NavbarLogo>
    <NavbarCartMenu>
      <Query query={GET_CURRENCIES}>
        {({ loading, error, data }) => {
          if (error) return null;
          if (loading) return null;
          const { currencies } = data
          return <>
          <b>
            {currencies.map((item, index) => 
              item.label === this.props.currencyLabel ? <span key={index}>{item.symbol}</span> : ''
            )}
          </b>
          <ArrowIcon ref={this.box} onClick={() => this.handleArrowChange()}>
            <img alt="logo" src={this.state.arrowDown ? arrowDown : arrowUp}/>
          </ArrowIcon>
          <CurrencyContainer show={this.state.arrowDown}>
            <CurrencySelect>
              {currencies.map((item, index) => 
                <Currency key={index} onClick={() => { this.handleCurrencyChange(item.label, item.symbol); this.handleArrowChange()}}>
                  {item.symbol}{' '}{item.label}
                </Currency>
              )}
            </CurrencySelect>
          </CurrencyContainer>
        </>
        }}
      </Query>
        <Icon>
          <BsCart2 onClick={this.handleOpenModal}/>
          <MiniCart isOpen={this.state.isOpen} handleOpenModal={this.handleOpenModal}/>
          {this.props.totalItems !== 0 &&
            <TotalItems>
              {this.props.totalItems}
            </TotalItems>
          }
        </Icon>
      </NavbarCartMenu> 
      {this.state.extendedNavBar && (
        <NavBarExtendedContainer>
          <Query query={GET_CATEGORIES}>
            {({ loading, error, data }) => {
                if (error) return null;
                if (loading) return null;
                const { categories } = data
                return categories.map((item, index) => 
                <NavBarLinkExtended
                  to="/"
                  style={this.state.category === item.name ? { borderBottom: '2px solid #5ece7b' } : {}}
                  key={index} 
                  onClick={() => {this.handleCategoryChange(item.name); this.setState({extendedNavBar: !this.state.extendedNavBar})} }
                >
                  {item.name}
                </NavBarLinkExtended>
              )
            }}
          </Query>
        </NavBarExtendedContainer>
      )} 
    </NavbarContainer>
  }
}

const mapStateToProps = state => {
  return {
    categoryName: state.categoryReducer.categoryName,
    currencyLabel: state.currencyReducer.currencyLabel,
    totalItems: state.cartReducer.totalItems
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setCategory: (name) => dispatch(setCategory(name)),
    setCurrency: (label, symbol) => dispatch(setCurrency(label, symbol))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));