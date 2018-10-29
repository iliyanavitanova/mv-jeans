import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get('http://localhost:4200/product/delete/' + this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.brand}
        </td>
        <td>
          {this.props.obj.model}
        </td>
        <td>
          {this.props.obj.size}
        </td>
        <td>
          {this.props.obj.count}
        </td>
        <td>
          {this.props.obj.price}
        </td>
        <td>
          {this.props.obj.wholesalePrice}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <Link to={"/sell/" + this.props.obj._id} className="btn btn-success">Sell</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;