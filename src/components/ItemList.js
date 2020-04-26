import React from 'react';

const ItemList = props => {
    if(props.items && props.items.length > 0) {
        return (
            <div>
                <ul>
                {props.items.map(item => {
                    return (
                        <li className="p-2 border-t border-b bg-white" onClick={() => props.handleAddToCart(item.sku)} key={item.sku}>
                            {item.name.toUpperCase()} | ${item.price}
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="p-2 bg-white">
                No items found!
            </div>
        );
    }
}

export default ItemList;