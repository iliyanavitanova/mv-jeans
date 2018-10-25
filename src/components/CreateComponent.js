import React, { Component } from 'react';
import axios from 'axios';

export default class CreateComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeCount = this.onChangeCount.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeWholesalePrice = this.onChangeWholesalePrice.bind(this);
        this.onChangeLength = this.onChangeLength.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            brand: '',
            model: '',
            size: '',
            count: '',
            price: '',
            wholesalePrice: '',
            length: ''
        }
    }
    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        });
    }
    onChangeModel(e) {
        this.setState({
            model: e.target.value
        });
    }
    onChangeSize(e) {
        this.setState({
            size: e.target.value
        });
    }
    onChangeCount(e) {
        this.setState({
            count: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onChangeWholesalePrice(e) {
        this.setState({
            wholesalePrice: e.target.value
        });
    }
    onChangeLength(e) {
        this.setState({
            length: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const product = {
            brand: this.state.brand,
            model: this.state.model,
            size: this.state.size,
            count: this.state.count,
            price: this.state.price,
            wholesalePrice: this.state.wholesalePrice,
            length: this.state.length
        }
        axios.post('http://localhost:4200/product/add', product)
            .then(res => console.log(res.data));
        this.setState({
            brand: '',
            model: '',
            size: '',
            count: '',
            price: '',
            wholesalePrice: '',
            length: ''
        });
    }

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Brand:  </label>
                        <input type="text" value={this.state.brand} className="form-control" onChange={this.onChangeBrand} required />
                    </div>
                    <div className="form-group">
                        <label>Model:  </label>
                        <input type="text" value={this.state.model} className="form-control" onChange={this.onChangeModel} required />
                    </div>
                    <div className="form-group">
                        <label>Size: </label>
                        <input type="text" value={this.state.size} className="form-control" onChange={this.onChangeSize} required />
                    </div>
                    <div className="form-group">
                        <label>Count:  </label>
                        <input type="text" value={this.state.count} className="form-control" onChange={this.onChangeCount} required />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text" value={this.state.price} className="form-control" onChange={this.onChangePrice} required />
                    </div>
                    <div className="form-group">
                        <label>Wholesale Price: </label>
                        <input type="text" value={this.state.wholesalePrice} className="form-control" onChange={this.onChangeWholesalePrice} required />
                    </div>
                    <div className="form-group">
                        <label>Length: </label>
                        <input type="text" value={this.state.length} className="form-control" onChange={this.onChangeLength} required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add New Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}