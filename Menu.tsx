import * as React from 'react';

class Menu extends React.Component<any, any> {
  items: any[] = [];
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'comments',
      data: [],
      rand: 100 + Math.random() * (270 - 100),
      cartItems: [],
      countCartItems: 0,
    };
    this.fetchMenuItems();
  }

  onTrigger = () => {
    //this.props.fromChildComp(this.state.data?.length);
  };

  updateCart = (cartItem) => {};

  addToCart = (citm) => {
    let item = this.state.cartItems?.find((i: any) => {
      return i.id === citm.id;
    });

    if (item) {
      let tmpCartItems = this.state.cartItems.map((el) =>
        el.id === citm.id
          ? {
              ...el,
              qty: el.qty + 1,
              itemprice: el.itemprice,
            }
          : el
      );

      let tmpData = this.state.data.map((el1) =>
        el1.id === citm.id
          ? {
              ...el1,
              qty: el1.qty + 1,
              itemprice: el1.itemprice,
            }
          : el1
      );

      this.setState({
        cartItems: tmpCartItems,
        data: tmpData,
      });

      let sum = this.state.cartItems.reduce((p, c) => {
        return p + c.qty;
      }, 1);
      this.props.cartItemsCount(sum);
    } else {
      let cItems = {
        id: citm.id,
        postname: citm.postname,
        itemprice: citm.itemprice,
        qty: 1,
      };

      this.state.cartItems.push(cItems);
      let tmpData = this.state.data.map((el) =>
        el.id === citm.id
          ? {
              ...el,
              qty: 1,
              itemprice: el.itemprice,
            }
          : el
      );
      this.setState({
        data: tmpData,
      });
      let sum = this.state.cartItems.reduce((p, c) => {
        return p + c.qty;
      }, 0);
      this.props.cartItemsCount(sum);
    }
  };

  fetchMenuItems() {
    var responseclone;
    console.log('4');
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then(
        (data1) => {
          this.setState({
            data: data1.map((ii) => ({
              id: ii.id,
              postname: ii.name,
              itemprice: this.state.rand?.toPrecision(5).toString(),
              qty: 0,
            })),
          });
        },
        (error) => {
          console.log('error occured ' + error);
        }
      );
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Post Id</th>
              <th>Name</th>
              <th>Item Price</th>
              <th>Count</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((c: any) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.postname}</td>
                <td>Rs. {c.itemprice}</td>
                <td>{c.qty}</td>
                <td>{c.qty * c.itemprice}</td>
                <td>
                  <button onClick={() => this.addToCart(c)}>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {/* <button onClick={this.onTrigger}>Pass Data to Parent</button> */}
        </div>
      </div>
    );
  }
}

export default Menu;
