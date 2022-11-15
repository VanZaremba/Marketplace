import React, { Component } from "react"
import Products from "../../components/Products/Products";
import { WrapperContainer, CategoryTitle } from "../../components/Products/Products.styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class CategoryPage extends Component {
  render() {
    return <WrapperContainer>
        <CategoryTitle>{this.props.categoryName}</CategoryTitle>
        <Products />
    </WrapperContainer>

  }
}

const mapStateToProps = state => {
  return {
    categoryName: state.categoryReducer.categoryName
  };
}

export default  connect(mapStateToProps)(withRouter(CategoryPage))