import React from 'react';

class TotalPanel extends React.Component {
    state = {
        itemTotal: 0,
        Tax: 0,
        Total: 0
    }

    calculateTotals = () => {
        // Calculate totals from current items in the cart
        this.props.items
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Checkout Totals</h5>
                    <h6 className="card-subtitle mb-2 text-muted">13% Tax Applied</h6>
                    <hr />
                    <p className="card-text">
                        Items Total: $0<br />
                        Taxes: $0<br />
                        Final Total: $0
                    </p>
                    <a href="#" className="card-link btn btn-primary">Checkout</a>
                </div>
            </div>
        );
    }
}

export default TotalPanel;