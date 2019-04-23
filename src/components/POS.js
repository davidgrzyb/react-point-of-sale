import React from 'react';
import SearchBar from './SearchBar';
import ItemList from './ItemList';
import Cart from './Cart';
import TotalPanel from './TotalPanel';

class POS extends React.Component {
    state = {
        query: '',
        matchedItems: null,
        cartItems: {},
        itemTotal: 0,
        tax: 0,
        total: 0
    }

    filterItems = () => {
        let matches = [];
        this.props.items.forEach(item => {
            if((item.name.toUpperCase().includes(this.state.query) ||
                item.sku.toUpperCase().includes(this.state.query)) && 
                matches.length <= 10) {
                matches.push(item);
            }
        });
        this.setState({ matchedItems: matches });
    }

    handleSearchChange = e => {
        this.setState({ query: e.target.value.toUpperCase() });
        this.filterItems();
    }

    addToCart = sku => {
        let items = this.state.cartItems;

        // Finding item
        let filtered = this.state.matchedItems.filter((item) => {
            if(item.sku === sku) {
                return item;
            }
            return null;
        });

        // If found in matchedItems - update cart
        if(filtered.length > 0) {
            if(sku in this.state.cartItems) {
                items[sku].quantity += 1;
                this.setState({ cartItems: items });
            } else {
                filtered[0]['quantity'] = 1;
                items[sku] = filtered[0];
                this.setState({ cartItems: items });
            }
            this.calculateTotals();
        } else {
            console.log("No item found to match selected item.");
        }
    }

    removeFromCart = sku => {
        let items = this.state.cartItems;
        delete items[sku];
        this.setState({ cartItems: items });
        this.calculateTotals();
    }

    increaseQuantity = sku => {
        let items = this.state.cartItems;
        items[sku].quantity += 1;
        this.setState({ cartItems: items });
        this.calculateTotals();
    }

    decreaseQuantity = sku => {
        let items = this.state.cartItems;
        if(items[sku].quantity > 1) {
            items[sku].quantity -= 1;
            this.setState({ cartItems: items });
            this.calculateTotals();
        }
    }

    calculateTotals = () => {
        let total = 0;
        // Calculate totals from current items in the cart
        Object.entries(this.state.cartItems).map(item => {
            total += item[1].price * item[1].quantity;
        });

        this.setState({
            itemTotal: total,
            tax: total * 0.13,
            total: total * 1.13
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <SearchBar currentQuery={this.state.query} handleOnChange={this.handleSearchChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ItemList items={this.state.matchedItems} handleAddToCart={this.addToCart} />
                    </div>
                    <div className="col-md-4">
                        <Cart 
                            items={this.state.cartItems} 
                            handleRemoveFromCart={this.removeFromCart} 
                            handleIncreaseQuantity={this.increaseQuantity} 
                            handleDecreaseQuantity={this.decreaseQuantity} 
                        />
                    </div>
                    <div className="col-md-4">
                        <TotalPanel
                            itemTotal={this.state.itemTotal}
                            tax={this.state.tax}
                            total={this.state.total}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default POS;