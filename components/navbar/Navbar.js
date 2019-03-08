/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super();
  }

  logOut() {
    console.log('Login out');
    localStorage.removeItem('accessToken');
    window.location.replace('/');
  }

  render() {
    const token = localStorage.getItem('accessToken');
    return (
      <nav className="navbar">
        <div className="navLogo">
          <p>
            <Link to="/" style={{ color: 'white' }}>
              <i className="fas free fa-stream" />
              &nbsp;
              <span>Store Manus</span>
            </Link>
          </p>
          <p>
            <i className="fa fa-bars hanburgerButton" />
            <i className="fa fa-times close" />
          </p>
        </div>
        <ul className="nav-items">
          {token && <li onClick={e => this.logOut()} style={{ color: 'white' }} className="logOut">Logout</li>}
          { !token && <Link to="/login" style={{ color: 'white' }}><li>SignIn</li></Link> }
        </ul>
      </nav>
    );
  }
}

export default Navbar;
