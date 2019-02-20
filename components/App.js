import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './home/Home';
import store from '../store';
import SignIn from './auth/SignIn';
import AdminDashboard from './admin/AdminDashboard';
import AttendantDashboard from './attendants/AttendantDashboard';

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
            <Route path="/adminDashboard" component={AdminDashboard} exact />
            <Route path="/attendantsDashboard" component={AttendantDashboard} exact />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
