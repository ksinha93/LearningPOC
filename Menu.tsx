import * as React from 'react';

class Menu extends React.Component<any, any> {
  items: any[] = [];
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'comments',
      data: [],
    };
    this.fetchMenuItems();
  }

  onTrigger = () => {
    this.props.fromChildComp(this.state.data?.length);
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
          //console.log(data1.results);
          this.setState({ data: data1 });
          //console.log(this.state.data?.results.length);
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
            </tr>
          </thead>
          <tbody>
            {this.state.data?.map((c: any) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.body}</td>
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
