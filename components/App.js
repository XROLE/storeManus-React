import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './home/home';
import Footer from './footer/footer';
import store from '../store';
import SignIn from './signin/signIn';

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
            <Route path="/login" component={SignIn} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

export default App;
