import * as React from 'react';
import CustomerDetails from './customerDetails';

class ExpenseItem extends React.Component<{ items: any }, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <b>Item:</b> <em>{this.props.items.item}</em>
        </div>
        <div>
          <b>Quantity:</b> <em>{this.props.items.quantity}</em>
        </div>
        <div>
          <b>Item Price:</b>
          <em>{this.props.items.amount}</em>
        </div>
        <div>
          <b>Amount:</b>
          <em>{this.props.items.amount * this.props.items.quantity}</em>
        </div>
        <div>
          <b>Spend Date:</b> <em>{this.props.items.spendDate.toString()}</em>
        </div>
        <div>
          <b>Category:</b> <em>{this.props.items.category}</em>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
