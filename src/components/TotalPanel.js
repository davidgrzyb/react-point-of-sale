import React from 'react';

class TotalPanel extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Checkout Totals</h5>
                    <h6 className="card-subtitle mb-2 text-muted">13% Tax Applied</h6>
                    <hr />
                    <p className="card-text">
                        Items Total: ${this.props.itemTotal.toFixed(2)}<br />
                        Taxes: ${this.props.tax.toFixed(2)}<br />
                        Final Total: ${this.props.total.toFixed(2)}
                    </p>
                    <a href="#" className="card-link btn btn-primary">Checkout</a>
                </div>
            </div>
        );
    }
}

export default TotalPanel;