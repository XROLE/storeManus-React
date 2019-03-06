import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <div className="dasboard-content">
          <div className="dashboard-toggler-div">
            <p className="toggler">
              <i className="fa fa-bars dasboard-content-toggle-show" />
              <i className="fa fa-times close-toggle" style={{ color: 'red' }} />
            </p>
          </div>
          <div className="dasboard-content-main">
            <ul className="dasboard-content-items">
              <p className="dasboard-header"><Link to="/adminDashboard">Dashboard</Link></p>
              <li className="link" id="all-products">
                <Link to="/products">
                  <i className="fas fa-cookie-bite" />
&nbsp; All Products
                </Link>
              </li>
              <li className="link">
                <Link to="products/available">
                  <i className="fab fa-accessible-icon" />
&nbsp; Available Products
                </Link>
              </li>
              <li className="link">
                <a href="admin-finished-products.html">
                  <i className="fas fa-thermometer-empty" />
&nbsp; Finished Products
                </a>
              </li>
              <li className="link">
                <Link to="admin/product/add">
                  <i className="far fa-plus-square" />
&nbsp; Add Product
                </Link>
              </li>
            </ul>
            <ul className="dasboard-content-items">
              <p className="dasboard-header">Attendants</p>
              <li className="link">
                <a href="admin-all-attendants.html">
                  <i className="fas fa-users" />
&nbsp; All Attendants
                </a>
              </li>
              <li className="link">
                <Link to="admin/add/attendant">
                  <i className="far fa-plus-square" />
&nbsp; Add Attendant
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
