import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super();
  }

  render() {
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
          <Link to="/login" style={{ color: 'white' }}><li>SignIn</li></Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
