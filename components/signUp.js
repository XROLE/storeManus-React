import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_UP } from '../store/actions/types';

class SignUp extends Component{
  render(){
    return (
    <div>
      <h1> {this.props.title}</h1>
    </div>
    );
  }
};

SignUp.propTypes = {
  title: PropTypes.string.isRequired,
  alertSignUp: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  title: state.signUp.title
});

const mapDispatchToProps = (dispatch) => ({
  alertSignUp: () => dispatch({ type: SIGN_UP })
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
