import React, { Component } from 'react'
import Header from './Components/Header'
import MessageContainer from './Containers/MessageContainer'
import Footer from './Components/Footer'
import ProductsContainer from './Containers/ProductsContainer'
import CartContainer from './Containers/CartContainer'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer></ProductsContainer>
            <MessageContainer></MessageContainer>
            <CartContainer></CartContainer>
          </div>
        </main>
        <Footer></Footer>
      </div>

    )

  }
}
