import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class AttendantNavigator extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <div className="att-dashboard-div fontBlack">
          <div className="att-dashboard-img-div">
            <a href="">
              <img src="https://res.cloudinary.com/xrole/image/upload/v1542793508/mks0mafcukuejmd9ktwf.jpg" alt="" className="Avatar" id="profileAvatar" />
            </a>
              &nbsp;
            <span id="fullName" style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>Xrole</span>
          </div>
          <div className="att-dashboard-middle-item-div">
            <p className="att-dashboard-item">
              <Link to="/attendant/profile/update">
                <i className="fas fa-pen-nib"> &nbsp;</i>
                  Update Profile
              </Link>
            </p>
            <p className="att-dashboard-item">
              <a href="att-sales-record.html">
                <i className="fas fa-arrows-alt" />
                  &nbsp; Sales Record
              </a>
            </p>
          </div>
          <div>
            <Link to="/attendantsDashboard">
              <p className="att-dashboard-item">
                <i className="fas fa-cart-plus" />
                &nbsp; Create Sales
              </p>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AttendantNavigator;
