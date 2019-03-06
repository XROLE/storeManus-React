import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import TopBar from '../sidebar/TopBar';

export default class AdminDashboard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="dasboardDiv">
          <Sidebar />
          <div className="dashboardDisplayDiv">
            <TopBar />
            <div className="dasboard-display-div" style={{ width: '90%' }} id="testing">
              <img src="../../src/img/shopping-cart.jpg" id="shopping-cart" alt="" style={{ width: '50%', marginTop: '5%' }} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
