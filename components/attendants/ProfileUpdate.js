import React, { Component, Fragment } from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-spinkit';
import { decode } from 'punycode';
import { updateProfile } from '../../store/actions/actions';
import AttendantNavigator from './AttendantNavigator';
import Navbar from '../navbar/Navbar';

class ProfileUpdate extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneno: '',
      password: '',
      confirmpassword: '',
      profilepics: '',
      gender: '',
      id: '',
      shouldShowError: true,
      shouldRedirect: true,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('accessToken');
    const decoded = jwtDecode(token);
    const firstName = decoded.firstname;
    const lastName = decoded.lastname;
    const { email, id } = decoded;

    this.setState({
      firstName,
      lastName,
      email,
      id,
    });
  }


  onChange(e) {
    return this.setState({
      [e.target.id]: e.target.value,
    });
  }

  showFileUrl() {
    const fileSize = document.querySelector('input[type=file]').files[0].size;
    const reader = new FileReader();

    if (fileSize > 70000) {
      return alert('file size is too large. files sized must not exceed 7KB ', fileSize);
    }
    reader.readAsDataURL(document.getElementById('profilepics').files[0]);
    reader.onload = () => {
      this.setState({ profilepics: reader.result });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { update } = this.props;
    const { id } = this.state;
    update(updateProfile(this.state, id));
  }

  notify(error) {
    toast.error(error);
  }

  render() {
    const {
      firstName, lastName, email, phoneNumber, password, confirmpassword, shouldShowError, shouldRedirect,
    } = this.state;

    const { pending, updateError, success } = this.props;

    if (success === true && shouldRedirect === true) {
      localStorage.removeItem('accessToken');
      this.setState({ shouldRedirect: false });
      return <Redirect to="/login" />;
    }

    if (updateError && shouldShowError) {
      this.notify(updateError);
      this.setState({
        shouldShowError: false,
      });
    }

    return (
      <Fragment>
        <Navbar />
        <AttendantNavigator />
        <div className="attendant-display-functionality-div">
          <div>
            <form action="" id="att-pro-update-form">
              <div>
                <p>UPDATE PROFILE</p>
              </div>
              <div>
                <input type="text" id="firstName" placeholder="First Name" value={firstName} readOnly />
              </div>
              <div>
                <input type="text" id="lastName" placeholder="Last Name" value={lastName} readOnly />
              </div>
              <div>
                <input type="email" id="email" placeholder="Email" value={email} readOnly />
              </div>
              <div>
                <input type="number" id="phoneno" placeholder="Phone Number" onChange={e => this.onChange(e)} value={phoneNumber} />
              </div>
              <div>
                <input type="password" name="password" id="password" placeholder="Password" onChange={e => this.onChange(e)} value={password} />
              </div>
              <div>
                <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" onChange={e => this.onChange(e)} value={confirmpassword} />
              </div>
              <div className="att-pro-pix-div">
                <div>
                  <label htmlFor="" style={{ color: 'black' }}>Gender: </label>
                  <select name="gender" id="gender" style={{ padding: 'none', color: 'black' }} onChange={e => this.onChange(e)}>
                    <option name="gender">--Select Gender--</option>
                    <option name="gender"> Male </option>
                    <option name="gender"> Female </option>
                  </select>
                </div>

                <input
                  type="file"
                  id="profilepics"
                  onChange={() => {
                    this.showFileUrl();
                  }}
                />

              </div>
              <div>
                <button className="link" id="updateProfileButton" type="submit" onClick={e => this.handleSubmit(e)}>UPDATE</button>
              </div>
              { pending === true && (
              <Spinner name="circle" className="spinner" id="reactLoader" />
              )}
            </form>
            <ToastContainer />
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    update: profile => dispatch(profile),
  });
}
const mapStateToProps = state => ({
  token: state.profile.token,
  pending: state.profile.pending,
  updateError: state.profile.error,
  success: state.profile.success,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);
