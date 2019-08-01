import React, { Component  } from 'react';
import { Link } from 'react-router-dom';

export class CartSummary extends components {
    getSummary = () => {
        if (this.props.cartItems > 0) {
            return <span>
                { this.props.cartItems} item(s),
                {this.props.cartPrice.toFixed(2)}
            </span>
        } else {
            return <spam>Your cart: (empty)</spam>
        }
    }
    getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white
        ${this.props.cartItems === 0 ? 'disabled' : ""}`
    }
    render () {
        return <div className="float-right">
            <small>
                { this.getSummary() }
                <Link className={ this.getLinkClasses() }
                to="shop/cart">
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </small>
        </div>
    }
}