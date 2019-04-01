import React from 'react';

const ItemList = props => {
    if(props.items && props.items.length > 0) {
        return (
            <div>
                <ul>
                {props.items.map(item => {
                    return <li key={item.sku}>{item.name} | ${item.price}</li>
                })}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                No items matched!
            </div>
        );
    }
}

export default ItemList;