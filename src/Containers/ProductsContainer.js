import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from './../Components/Products'
import Product from './../Components/Product'
import PropTypes from 'prop-types'
import {actAddToCart, actChangeMessage} from './../Actions/index'


class ProductsContainer extends Component {
    render() {
        var { products } = this.props
        return (
            <Products>
                {this.showProudcts(products)}
            </Products>
        )
    }
    showProudcts(products) {
        var result = null;
        var {onAddToCart,onChangeMessage} = this.props
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                key={index} 
                product={product}
                onAddToCart = {onAddToCart}
                onChangeMessage = {onChangeMessage}
                ></Product>
            })
        }
        return result;
    }
}
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired 
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispath,props) => {
    return {
        onAddToCart: (product) => {
            dispath(actAddToCart(product,1))
        },
        onChangeMessage : (message) => {
            dispath(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)