import React, { Component } from 'react';
import { sellProduct, getProduct } from '../../actions/product';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SellComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeCount = this.onChangeCount.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeWholesalePrice = this.onChangeWholesalePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            brand: '',
            model: '',
            size: '',
            count: '',
            price: '',
            wholesalePrice: ''
        };
    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
        .then(response => {
                this.setState({
                    brand: response.data.brand, 
                    model: response.data.model,
                    size: response.data.size, 
                    count: response.data.count,
                    price: response.data.price, 
                    wholesalePrice: response.data.wholesalePrice
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        });
    }
    options(e) {
        
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
    onSubmit(e) {
        e.preventDefault();
        const product = {
            brand: this.state.brand,
            model: this.state.model,
            size: this.state.size,
            count: this.state.count,
            price: this.state.price,
            wholesalePrice: this.state.wholesalePrice
        }
        this.props.sellProduct(product, this.props.match.params.id);
        this.setState({
            brand: '',
            model: '',
            size: '',
            count: '',
            price: '',
            wholesalePrice: ''
        });
        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <h3>Sell New Server</h3>
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
                        <input type="submit" value="Sell product" className="btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}


SellComponent.propTypes = {
    editProduct: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { sellProduct, getProduct })(SellComponent)