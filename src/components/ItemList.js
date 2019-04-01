import React from 'react';

class ItemList extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input value={this.props.currentQuery} onChange={e => this.props.handleOnChange(e)}></input>
                </form>
            </div>
        );
    }
}

export default ItemList;