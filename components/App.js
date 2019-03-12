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
import AdminAddAttendant from './admin/AddAttendant';
import ProfileUpdate from './attendants/ProfileUpdate';
import AddProduct from './admin/AddProduct';
import Products from './admin/Products';
import AvailableProducts from './admin/AvailableProducts';
import FinishedProduct from './admin/FinishedProduct';
import Attendants from './admin/Attendants';
import '../css/style.css';

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
            <Route path="/admin/add/attendant" component={AdminAddAttendant} exact />
            <Route path="/attendantsDashboard" component={AttendantDashboard} exact />
            <Route path="/attendant/profile/update" component={ProfileUpdate} exact />
            <Route path="/admin/product/add" component={AddProduct} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/products/available" component={AvailableProducts} exact />
            <Route path="/products/finished" component={FinishedProduct} exact />
            <Route path="/attendants" component={Attendants} exact />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
