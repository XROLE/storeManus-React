import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Provider, connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import Footer from '../footer/footer';
import { loginUser } from '../../store/reducers/loginReducer';
import Navbar from '../navbar/Navbar';
import store from '../../store/index';
import 'react-toastify/dist/ReactToastify.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      shouldShowError: true,
    };
  }

  onChange(e) {
    return this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const loginDetails = this.state;
    const { login } = this.props;
    this.setState({
      shouldShowError: true,
    });
    login(loginUser(loginDetails));
  }

  notify(error) {
    toast.error(error);
  }

  render() {
    const { email, password, shouldShowError } = this.state;
    const { pending, loginError, token } = this.props;

    if (loginError && shouldShowError) {
      this.notify(loginError);
      this.setState({
        shouldShowError: false,
      });
    }

    if (token && email === 'xrolediamond@gmail.com') {
      localStorage.removeItem('storeManus_token');
      localStorage.setItem('storeManus_token', token);
      return <Redirect to="/adminDashboard" />;
    } if (token) {
      return <Redirect to="/attendantsDashboard" />;
    }
    return (
      <Provider store={store}>
        <Navbar />
        <div className="signupDiv" style={{ marginTop: '180px' }}>
          <form action="" className="signup-form">
            <div>
              <input
                type="email"
                name="email"
                id="signInEmail"
                placeholder="Email"
                onChange={e => this.onChange(e)}
                value={email}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="signInPassword"
                placeholder="Password"
                onChange={e => this.onChange(e)}
                value={password}
              />
            </div>
            <div className="signup-button-div">
              <button
                className="link signin-button"
                type="submit"
                onClick={e => this.handleSubmit(e)}
              >
                SIGN IN
              </button>
            </div>
            { pending === true && (
            <Spinner name="circle" className="spinner" id="reactLoader" />
            )}
          </form>
        </div>
        <Footer />
        <ToastContainer />
      </Provider>
    );
  }
}
SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  loginError: PropTypes.string,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  token: state.login.token,
  pending: state.login.pending,
  loginError: state.login.error,
});

function mapDispatchToProps(dispatch) {
  return ({
    login: action => dispatch(action),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
