import * as React from 'react';

class CustomerDetails extends React.Component {
  custDet = {
    CustName: 'John',
    Address: 'Pune',
  };
  render() {
    return (
      <div>
        <div>
          <span>Custmer Name: </span>
          <span>{this.custDet.CustName}</span>
        </div>
        <div>
          <span>Custmer Address: </span>
          <span>{this.custDet.Address}</span>
        </div>
      </div>
    );
  }
}

export default CustomerDetails;
