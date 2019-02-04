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
            <a href="../index.html" style={{ color: 'white' }}>
              <i className="fas free fa-stream" />
              &nbsp;
              <span>Store Manus</span>
            </a>
          </p>
          <p>
            <i className="fa fa-bars hanburgerButton" />
            <i className="fa fa-times close" />
          </p>
        </div>
        <ul className="nav-items">
          <a href="./signin.html" style={{ color: 'white' }}><li>SignIn</li></a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
