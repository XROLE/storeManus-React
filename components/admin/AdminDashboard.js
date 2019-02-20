import React, { Component, Fragment } from 'react';
import Navbar from '../navbar/Navbar';

export default class AdminDashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="dasboardDiv">
          <div className="dasboard-content">
            <div className="dashboard-toggler-div">
              <p className="toggler">
                <i className="fa fa-bars dasboard-content-toggle-show" />
                <i className="fa fa-times close-toggle" style={{ color: 'red' }} />
              </p>
            </div>
            <div className="dasboard-content-main">
              <ul className="dasboard-content-items">
                <p className="dasboard-header"><a href="adminDashboard.html">Dashboard</a></p>
                <li className="link" id="all-products">
                  <a href="admin-all-products.html">
                    <i className="fas fa-cookie-bite" />
&nbsp; All Products
                  </a>
                </li>
                <li className="link">
                  <a href="admin-available-products.html">
                    <i className="fab fa-accessible-icon" />
&nbsp; Available Products
                  </a>
                </li>
                <li className="link">
                  <a href="admin-finished-products.html">
                    <i className="fas fa-thermometer-empty" />
&nbsp; Finished Products
                  </a>
                </li>
                <li className="link">
                  <a href="admin-add-products.html">
                    <i className="far fa-plus-square" />
&nbsp; Add Product
                  </a>
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
                  <a href="admin-add-attendant.html">
                    <i className="far fa-plus-square" />
&nbsp; Add Attendant
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="test">
            <div className="avatar-div-container">
              <div className="avater-div">
                <img src="../../src/img/avatar.jpg" alt="Avatar" className="Avatar" />
                <p className="avatar-label">welcome: Xrole</p>
              </div>
              <div className="filter-div">
                <a href="admin-sales-viewer.html">Filter Sales By: </a>
&nbsp;
                <select name="" id="">
                  <option value="">-Select All-</option>
                  <option value="">Attendats</option>
                  <option value="">Categories</option>
                  <option value="">Date</option>
                </select>
&nbsp;
                <select name="" id="">
                  <option value="">---- Select All ----</option>
                  <option value="Cythia Paul">Cythia Paul</option>
                  <option value="Blessing Uche">Blessing Uche</option>
                  <option value="Silas Nwokeocha">Silas Nwokeocha</option>
                  <option value="Idowu Samson">Idowu Samson</option>
                  <option value="Mathew Jade">Mathew Jade</option>
                  <option value="Will Smith">Will Smith</option>
                  <option value="Cindy Eze">Cindy Eze</option>
                  <option value="Simon Peter">Simon Peter</option>
                </select>
                        &nbsp;
                <button className="search-sales-by-attendant-buttton link" type="submit">
                  <i className="fas fa-search" />
                  <span className="search-text"> &nbsp; Search</span>
                </button>
              </div>
            </div>
            <div className="dasboard-display-div" style={{ width: '90%' }} id="testing">
              <img src="../../src/img/shopping-cart.jpg" id="shopping-cart" alt="" style={{ width: '50%', marginTop: '5%' }} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
