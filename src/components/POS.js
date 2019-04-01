import React from 'react';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

class POS extends React.Component {
    state = {
        query: '',
        matchedItems: null
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

    handleSearchChange = (e) => {
        this.setState({ query: e.target.value.toUpperCase() });
        this.filterItems();
    }

    render() {
        return (
            <div>
                <SearchBar currentQuery={this.state.query} handleOnChange={this.handleSearchChange} />
                <ItemList items={this.state.matchedItems} />
                {this.state.query}
            </div>
        );
    }
}

export default POS;