import React from 'react';

class TotalPanel extends React.Component {
    render() {
        return (
            <div className="bg-white p-4">
                <h5 className="text-lg font-bold">Checkout Totals</h5>
                <h6 className="card-subtitle mb-2 text-muted">13% Tax Applied</h6>
                <div className="py-2 border-t">
                    <p>Items Total: ${this.props.itemTotal.toFixed(2)}</p>
                    <p>Taxes: ${this.props.tax.toFixed(2)}</p>
                    <p>Final Total: ${this.props.total.toFixed(2)}</p>
                </div>
                <button className="bg-green-500 hover:bg-green-600 focus:bg-green-600 focus:outline-none shadow text-white tect-lg font-semibold px-4 py-2 rounded-lg mt-3">Checkout</button>
            </div>
        );
    }
}

export default TotalPanel;