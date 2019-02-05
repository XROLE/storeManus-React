import React from 'react';
import Navbar from './navbar';

const SignUp = () => (
  <>
    <Navbar />
    <div className="signupDiv" style={{ marginTop: '180px' }}>
      <form action="" className="signup-form">
        <div>
          <input type="email" name="email" id="signInEmail" placeholder="Email" />
        </div>
        <div>
          <input type="password" name="password" id="signInPassword" placeholder="Password" />
        </div>
        <div className="signup-button-div">
          <button className="link signin-button" type="submit">SIGN IN</button>
        </div>
      </form>
    </div>
  </>
);

export default SignUp;
