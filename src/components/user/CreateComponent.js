import React, { Component } from 'react';
import axios from 'axios';
export default class CreateComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            role: ''
        }
    }
    onChangeUsername(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeRole(e) {
        this.setState({
            role: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.name,
            password: this.state.password,
            role: this.state.role
        }
        axios.post('http://localhost:4200/user/add', user)
            .then(res => console.log(res.data));
        this.setState({
            username: '',
            password: '',
            role: ''
        });
    }

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:  </label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeName} required />
                    </div>
                    <div className="form-group">
                        <label>Password:  </label>
                        <input type="text" value={this.state.password} className="form-control" onChange={this.onChangePassword} required />
                    </div>
                    <div className="form-group">
                        <label>Role: </label>
                        <input type="text" value={this.state.role} className="form-control" onChange={this.onChangeRole} required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add New User" className="btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}