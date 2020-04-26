import React from 'react';

const Cart = props => {
    if(props.items && Object.keys(props.items).length > 0) {
        return (
            <div>
                <ul>
                    {Object.entries(props.items).map(item => {
                        return (
                            <li key={item[1].sku} className="p-2 border-t border-b bg-white flex items-center justify-between">
                                <div className="w-48">{item[1].name.toUpperCase()} - ${item[1].price}</div>
                                <div className="flex items-center">
                                    <button onClick={() => props.handleDecreaseQuantity(item[1].sku)} className="bg-blue-500 text-white rounded-full h-6 w-6 mr-3 flex items-center justify-center">-</button>
                                    {item[1].quantity}
                                    <button onClick={() => props.handleIncreaseQuantity(item[1].sku)} className="bg-blue-500 text-white rounded-full h-6 w-6 ml-3 flex items-center justify-center">+</button>
                                </div>
                                <button onClick={() => props.handleRemoveFromCart(item[1].sku)} className="bg-red-500 text-white rounded-full h-6 w-6 ml-3 flex items-center justify-center">x</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="p-2 bg-white">
                Cart is empty!
            </div>
        );
    }
}

export default Cart;