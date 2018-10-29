import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateComponent from './components/product/CreateComponent';
import EditComponent from './components/product/EditComponent';
import SellComponent from './components/product/SellComponent';
import IndexComponent from './components/product/IndexComponent';

class App extends Component {
  render() {
    return (
    <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand"><img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt=""/>MV Jeans</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={CreateComponent} />
              <Route path='/edit/:id' component={EditComponent} />
              <Route path='/sell/:id' component={SellComponent} />
              <Route path='/index' component={IndexComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;