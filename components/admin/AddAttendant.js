import React, { Fragment, Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import { Link } from 'react-router-dom';
import { addAttendant } from '../../store/reducers/loginReducer';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import TopBar from '../sidebar/TopBar';
import 'react-toastify/dist/ReactToastify.css';

export class AdminAddAttendant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shouldShowError: false,
      showSuccessMessage: false,
    };
  }

  onChange(e) {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const attendantDetails = this.state;
    const { registerAttendant } = this.props;

    this.setState({ shouldShowError: true });
    registerAttendant(addAttendant(attendantDetails));
  }

  notify(error) {
    toast.error(error);
  }

  render() {
    const {
      email,
      firstName,
      lastName,
      shouldShowError,
      showSuccessMessage,
    } = this.state;
    const { registrationError, pending, message } = this.props;

    if (registrationError && shouldShowError) {
      this.notify(registrationError);
      this.setState({
        shouldShowError: false,
      });
    }
    if (showSuccessMessage && message) {
      this.setState({
        showSuccessMessage: false,
      });
    }

    return (
      <Fragment>
        <Navbar />
        <div className="dasboardDiv">
          <Sidebar />
          <div className="dashboardDisplayDiv">
            <TopBar />
            <div className="dasboard-display-div">
              <form action="" id="add-attendants" onSubmit={e => this.handleSubmit(e)}>
                <div className="form-label fontBlack">
                  <label htmlFor="add-attendants">
                    <i className="far fa-plus-square" />
                  &nbsp;ADD ATTENDANT
                  </label>
                </div>
                <div>
                  <input type="text" name="firstName" id="firstName" placeholder="FIRST NAME" onChange={e => this.onChange(e)} value={firstName} />
                </div>
                <div>
                  <input type="text" name="lastName" id="lastName" placeholder="LAST NAME" onChange={e => this.onChange(e)} value={lastName} />
                </div>
                <div>
                  <input type="email" name="email" id="email" placeholder="EMAIL" onChange={e => this.onChange(e)} value={email} />
                </div>
                <div>
                  <button className="link" id="add-attendant-button" type="submit">CREATE ATTENDANT</button>
                </div>
                { pending === true && (
                <Spinner name="circle" className="spinner" id="reactLoader" />
                )}
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Fragment>
    );
  }
}

AdminAddAttendant.propType = {
  registerAttendant: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  registrationMessage: PropTypes.string.isRequired,
  registrationError: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  registrationMessage: state.registerAttendant.message,
  pending: state.registerAttendant.pending,
  registrationError: state.registerAttendant.error,
});

const mapDispatchToProps = dispatch => ({
  registerAttendant: attendantDetails => dispatch(attendantDetails),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddAttendant);
