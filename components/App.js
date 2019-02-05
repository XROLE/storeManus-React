import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './home';
import Footer from './footer';
import store from '../store';
import SignUP from './signUp';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={SignUP} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

export default App;
