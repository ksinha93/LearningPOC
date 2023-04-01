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
    };
    this.fetchMenuItems();
  }

  onTrigger = () => {
    this.props.fromChildComp(this.state.data?.length);
  };

  addToCart = (citm) => {
    let item = this.state.cartItems?.find((i) => {
      return i.id === citm.id;
    });

    console.log(item);

    if (item != null) {
      item.qty = item.qty + 1;
    } else {
      let cItems = {
        name: citm.name,
        qty: 1,
      };

      this.state.cartItems.push(cItems);
    }
    console.log(this.state.cartItems);
  };

  fetchMenuItems() {
    var responseclone;
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(
        (res) => res.json()
        //responseclone = res.clone();
        //return JSON.parse(res.toString());
      )
      .then(
        (data1) => {
          this.setState({ data: data1 });
        },
        (error) => {
          console.log('error occured ' + error);
          // responseclone.text().then(function (bodytext) {
          //   console.log(bodytext);
          // });
        }
      );
  }

  render() {
    this.onTrigger();

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Post Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
              <th>Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data?.map((c: any) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.body}</td>
                <td>Rs. {this.state.rand?.toPrecision(5).toString()}</td>
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
