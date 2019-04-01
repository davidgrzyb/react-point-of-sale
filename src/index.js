import React from 'react';
import ReactDOM from 'react-dom';
import POS from './components/POS';

const data = [
    {
        sku: 'SH0001',
        name: 'Shirt',
        price: 20.00,
        supplier: 'American Eagle'
    },
    {
        sku: 'PA0001',
        name: 'Pants',
        price: 40.00,
        supplier: 'Adidas'
    },
    {
        sku: 'PA0002',
        name: 'Jeans',
        price: 60.00,
        supplier: 'Levi\'s'
    },
    {
        sku: 'H0001',
        name: 'Hat',
        price: 15.00,
        supplier: 'Adidas'
    },
    {
        sku: 'SHOE0001',
        name: 'Shoes',
        price: 120.00,
        supplier: 'Nike'
    }
]

ReactDOM.render(<POS items={data} />, document.querySelector('#root'));