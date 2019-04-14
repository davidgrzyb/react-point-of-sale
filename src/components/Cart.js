import React from 'react';

const Cart = props => {
    return (
        <div>
            Cart<br/>
            <ul>
                {props.items.map(item => {
                    return (
                        <div key={item.sku}>
                            <li key={item.sku}>{item.name.toUpperCase()} | ${item.price}</li>
                            <button onClick={() => props.handleRemoveFromCart(item.sku)}>Remove</button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default Cart;