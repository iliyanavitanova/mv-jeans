// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Index from './components/user/IndexComponent';
import Register from './components/user/RegisterComponent';
import Login from './components/user/LoginComponent';
import AddProduct from './components/product/CreateComponent';
import EditProduct from './components/product/EditComponent';
import SellProduct from './components/product/EditComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Index} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/add/:id" component={AddProduct} />
              <Route exact path="/edit/:id" component={EditProduct} />
              <Route exact path="/sell/:id" component={SellProduct} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;