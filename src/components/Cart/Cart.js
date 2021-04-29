import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total,prd) => total + prd.price, 0);
    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i].price;
        totalPrice = totalPrice + product;
    }

    let shipping = 0;
    if (totalPrice > 50) {
        shipping = 10;
    }
    else if(totalPrice > 300){
        shipping = 60;
    }
    else if (totalPrice > 0){
        shipping = 4;
    }
    else{
        shipping = 0;
    }

    let tax = totalPrice/10;
    const grandTotal = totalPrice + shipping + tax;
    const numberFormate = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order summery</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {numberFormate(totalPrice)}</p>
            <p><small>Shipping cost: {numberFormate(shipping)}</small></p>
            <p><small>tax + VAT: {numberFormate(tax)}</small></p>
            <p>Total price: {numberFormate(grandTotal)}</p>
        </div>
    );
};

export default Cart;