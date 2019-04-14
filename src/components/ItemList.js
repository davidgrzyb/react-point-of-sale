import React from 'react';

const ItemList = props => {
    if(props.items && props.items.length > 0) {
        return (
            <div>
                <ul className="list-group">
                {props.items.map(item => {
                    return (
                        <li className="list-group-item" onClick={() => props.handleAddToCart(item.sku)} key={item.sku}>
                            {item.name.toUpperCase()} | ${item.price}
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                No items found!
            </div>
        );
    }
}

export default ItemList;