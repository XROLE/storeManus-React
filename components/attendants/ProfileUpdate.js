import React, { Component, Fragment } from 'react';
import jwtDecode from 'jwt-decode';
import ReactFileReader from 'react-file-reader';
import { connect } from 'react-redux';
import AttendantNavigator from './AttendantNavigator';
import Navbar from '../navbar/Navbar';

class ProfileUpdate extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      file: '',
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
    });
  }

  onChange(e) {
    return this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleFiles(files) {
    console.log('File url, ', files.base64);
    this.setState({
      file: files.base64,
    });
  }

  getProfilePicsURL(e) {
    const profilePics = e.target.files[0];
    const reader = new FileReader();
    // reader.readAsDataUR(profilePics);
    // console.log('This is the reader result ======>: ', reader.result);

    reader.onload = (e) => {
      console.log('Reader result =====>', e.target.result);
    };
  }

  render() {
    // const reader = new FileReader();
    // reader.readAsDataURL(document.getElementById('profilepics').files[0]);
    // reader.onload = () => {
    //   const profilepics = reader.result;
    //   console.log('Reader =====>', profilepics);
    // };

    const {
      firstName, lastName, email, phoneNumber, password, confirmPassword,
    } = this.state;
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
                <input type="number" id="phoneNumber" placeholder="Phone Number" onChange={e => this.onChange(e)} value={phoneNumber} />
              </div>
              <div>
                <input type="password" name="password" id="password" placeholder="Password" onChange={e => this.onChange(e)} value={password} />
              </div>
              <div>
                <input type="password" id="confirmPassword" placeholder="Confirm Password" onChange={e => this.onChange(e)} value={confirmPassword} />
              </div>
              <div className="att-pro-pix-div">
                <div>
                  <label htmlFor="">Gender: </label>
                  <select name="gender" id="gender" style={{ padding: 'none' }}>
                    <option name="gender">--Select Gender--</option>
                    <option name="gender"> Male </option>
                    <option name="gender"> Female </option>
                  </select>
                </div>
                <ReactFileReader base64 multipleFiles handleFiles={this.handleFiles}>
                  <input type="file" id="profilepics" />
                </ReactFileReader>
              </div>
              <div>
                <button className="link" id="updateProfileButton" type="submit">UPDATE</button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProfileUpdate);
