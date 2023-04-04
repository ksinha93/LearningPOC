import * as React from 'react';
import './style.css';
import ExpenseItem from './expenseItem';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CustomerDetails from './customerDetails';
import Menu from './Menu';

class App extends React.Component {
  state = {
    childMsg: '',
    itemsCount: 0,
    cartItems: null,
  };

  handleCallback = (childdata) => {
    this.setState({ childMsg: childdata });
  };

  handleItemsCount = (cartCount) => {
    this.setState({ itemsCount: cartCount });
  };

  handleItemArray = (newItems) => {
    //this.setState({ cartItems: newItems });
    //console.log(this.state.cartItems);
  };

  items = {
    item: 'Mango',
    amount: 30.0,
    spendDate: new Date(),
    category: 'Fruit',
    quantity: 3,
  };
  render() {
    const childMsg = this.state.childMsg;
    const itemsCount = this.state.itemsCount;
    return (
      <Router>
        <h1>{childMsg}</h1>
        <h1>{itemsCount}</h1>
        <div>
          <Link to="/Menu">Menu</Link>&nbsp;
          <Link to="/ExpenseItem">Expense Item</Link>&nbsp;
          <Link to="/CustomerDetails">Customer Details 1</Link>
        </div>

        <Routes>
          <Route
            exact
            path="/ExpenseItem"
            element={<ExpenseItem items={this.items} />}
          ></Route>
          <Route
            exact
            path="/CustomerDetails"
            element={<CustomerDetails />}
          ></Route>
          <Route
            exact
            path="/Menu"
            element={<Menu cartItemsCount={this.handleItemsCount} />}
          ></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;

/*export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}*/
