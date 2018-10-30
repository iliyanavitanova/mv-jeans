import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {products: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4200/product')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.products.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>Brand</td>
                  <td>Model</td>
                  <td>Size</td>
                  <td>Count</td>
                  <td>Price</td>
                  <td>Wholesale Price</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }
