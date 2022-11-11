import React, { Component } from "react"
import { Modal, Overlay, Button, GreenButton } from "./MiniCart.styles"
import * as ReactDOM from "react-dom"
import { withRouter } from "react-router-dom";

class MiniCart extends Component {
  constructor(props){
    super()
    this.state = {
     
    }
    this.handleCartClick = this.handleCartClick.bind(this)
  }

  handleCartClick(){
    this.props.history.push(`/cart`);
    this.props.handleOpenModal()
  }

  render(){
    return ReactDOM.createPortal(
    this.props.isOpen && 
      <>
        <Overlay/>
        <Modal> 
          <h1>teste</h1>
          <Button onClick={() => this.handleCartClick()}>
            VIEW BAG
          </Button>
          <GreenButton>CHECK OUT</GreenButton>
        </Modal>
      : ''   </>,
      document.getElementById('portal')
    )
  }
}

export default (withRouter(MiniCart))