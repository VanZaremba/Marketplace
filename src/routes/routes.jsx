import React from "react"
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import CategoryPage from "../pages/Category/CategoryPage"
import ProductPage from "../pages/ProductPage/ProductPage"
import CartPage from "../pages/Cart/CartPage"

const ApplicationRoutes = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/product/:id" component={ProductPage} />
      <Route exact path="/" component={CategoryPage} />
    </Switch>
  </BrowserRouter>
)

export default ApplicationRoutes