import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import props from 'props-type';

const Menu = (props) => {
  //window.localStorage.removeItem('menuItem')
  const [menuitem, setMenu] = useState('');

  useEffect(() => {
    fetchMenuItems();
    console.log(menuitem);
    //setMenu(window.localStorage.getItem('menuItem'));
  }, []);

  useEffect(() => {
    //fetchMenuItems();
    //console.log(menuitem);
    //window.localStorage.setItem('menuItem', menuitem);
  }, [menuitem]);

  const fetchMenuItems = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then(
        (data1) => {
          let tmpdata = data1.map((ii) => ({
            id: ii.id,
            postname: ii.name,
            itemprice: 255,
            qty: 0,
          }));

          setMenu(tmpdata);
          /*this.setState({
            data: data1.map((ii) => ({
              id: ii.id,
              postname: ii.name,
              itemprice: this.state.rand?.toPrecision(5).toString(),
              qty: 0,
            })),
          });*/

          /*this.props.newItems(this.state.data);
          console.log(this.state.data);*/
        },
        (error) => {
          console.log('error occured ' + error);
        }
      );
  };

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
          {/*
            
          JSON.parse(menuitem).map((c: any) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.postname}</td>
              <td>Rs. {c.itemprice}</td>
              <td>{c.qty}</td>
              <td>{c.qty * c.itemprice}</td>
              <td>
                
              </td>
            </tr>
          ))*/}
        </tbody>
      </table>
    </div>
  );
};

const MenuItem = (props) => {
  const [menuitem, setItem] = useState('');
  useEffect(() => {
    setItem(props.menuitem);
  }, [menuitem]);
  return (
    <div>
      <h3>{menuitem}</h3>
    </div>
  );
};
/*function propsMenu() {
  return (
    <div>
      <Menu data1="get me a cup of tea" />
    </div>
  );
}*/

export default Menu;
