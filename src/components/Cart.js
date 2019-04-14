import React from 'react';

const Cart = props => {
    return (
        <div>
            <h3>Cart</h3>
            <hr/>
            <ul className="list-group">
                {props.items.map(item => {
                    return (
                        <li key={item.sku} className="list-group-item d-flex justify-content-between align-items-center">
                            {item.name.toUpperCase()} | ${item.price}
                            <span onClick={() => props.handleRemoveFromCart(item.sku)} className="badge badge-warning badge-pill">X</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Cart;