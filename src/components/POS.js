import React from 'react';
import SearchBar from './SearchBar';

class POS extends React.Component {
    state = {
        query: ''
    }

    handleSearchChange = (e) => {
        this.setState({ query: e.target.value });
    }

    render() {
        return (
            <div>
                <SearchBar currentQuery={this.state.query} handleOnChange={this.handleSearchChange} />
                Submitted query: {this.state.query}
            </div>
        );
    }
}

export default POS;