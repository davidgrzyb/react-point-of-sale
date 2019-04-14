import React from 'react';

const Cart = props => {
    return (
        <div>
            Cart<br/>
            <ul>
                {props.items.map(item => {
                    return <li key={item.sku}>{item.name.toUpperCase()} | ${item.price}</li>
                })}
            </ul>
        </div>
    );
}

export default Cart;