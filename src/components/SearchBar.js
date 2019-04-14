import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="row mb-3">
                <div className="col-md-4">
                    <h3>Search:</h3>
                </div>
                <div className="col">
                    <form onSubmit={e => e.preventDefault()}>
                        <input className="form-control" value={this.props.currentQuery} onChange={e => this.props.handleOnChange(e)}></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;