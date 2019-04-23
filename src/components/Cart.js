import React from 'react';

const Cart = props => {
    return (
        <div>
            <ul className="list-group">
                {Object.entries(props.items).map(item => {
                    return (
                        <li key={item[1].sku} className="list-group-item d-flex justify-content-between align-items-center">
                            {item[1].name.toUpperCase()} | ${item[1].price}
                            <span onClick={() => props.handleDecreaseQuantity(item[1].sku)} className="badge badge-warning badge-pill">-</span>
                            {item[1].quantity}
                            <span onClick={() => props.handleIncreaseQuantity(item[1].sku)} className="badge badge-warning badge-pill">+</span>
                            <span onClick={() => props.handleRemoveFromCart(item[1].sku)} className="badge badge-warning badge-pill">X</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Cart;