import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search for an item" value={this.props.currentQuery} onChange={e => this.props.handleOnChange(e)}></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;