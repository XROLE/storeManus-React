import React, { Fragment, Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import { Link } from 'react-router-dom';
import { addAttendant } from '../../store/reducers/loginReducer';
import Navbar from '../navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';

class AdminAddAttendant extends Component {
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
      console.log(message);
      this.setState({
        showSuccessMessage: false,
      });
    }

    return (
      <Fragment>
        <Navbar />
        <div className="dasboardDiv">
          <div className="dasboard-content">
            <div className="dashboard-toggler-div">
              <p className="toggler">
                <i className="fa fa-bars hanburgerButton" />
                <i className="fa fa-times close" />
              </p>
            </div>
            <div className="dasboard-content-main">
              <ul className="dasboard-content-items">
                <p className="dasboard-header"><Link to="/adminDashboard">Dashboard</Link></p>
                <li className="link">
                  <a href="admin-all-products.html">
                    <i className="fas fa-cookie-bite" />
                    &nbsp; All Products
                  </a>
                </li>
                <li className="link">
                  <a href="admin-available-products.html">
                    <i className="fab fa-accessible-icon" />
                    &nbsp; Available Products
                  </a>
                </li>
                <li className="link">
                  <a href="admin-finished-products.html">
                    <i className="fas fa-thermometer-empty" />
                    &nbsp; Finished Products
                  </a>
                </li>
                <li className="link">
                  <a href="admin-add-products.html">
                    <i className="far fa-plus-square" />
                    &nbsp; Add Product
                  </a>
                </li>
              </ul>
              <ul className="dasboard-content-items">
                <p className="dasboard-header">Attendants</p>
                <li className="link">
                  <a href="admin-all-attendants.html">
                    <i className="fas fa-users" />
                    &nbsp; All Attendants
                  </a>
                </li>
                <li className="link">
                  <Link to="/admin/add/attendant">
                    <i className="far fa-plus-square" />
                    &nbsp; Add Attendant
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="test">
            <div className="avatar-div-container">
              <div className="avater-div">
                <img src="../../src/img/avatar.jpg" alt="Avatar" className="Avatar" />
                <p className="avatar-label fontBlack">welcome: Xrole</p>
              </div>
              <div className="filter-div">
                <label htmlFor="Filter sales by Attendants">
                  <a href="admin-sales-viewer.html">Filter Sales By: </a>
                </label>
                &nbsp;
                <select name="" id="">
                  <option value="">-Select All-</option>
                  <option value="">Attendats</option>
                  <option value="">Categories</option>
                  <option value="">Date</option>
                </select>
                &nbsp;
                <select name="" id="">
                  <option value="">---- Select All ----</option>
                  <option value="Cythia Paul">Cythia Paul</option>
                  <option value="Blessing Uche">Blessing Uche</option>
                  <option value="Silas Nwokeocha">Silas Nwokeocha</option>
                  <option value="Idowu Samson">Idowu Samson</option>
                  <option value="Mathew Jade">Mathew Jade</option>
                  <option value="Will Smith">Will Smith</option>
                  <option value="Cindy Eze">Cindy Eze</option>
                  <option value="Simon Peter">Simon Peter</option>
                </select>
                        &nbsp;
                <button className="search-sales-by-attendant-buttton link" type="submit">
                  <i className="fas fa-search" />
                  <span className="search-text"> &nbsp; Search</span>
                </button>
              </div>
            </div>
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
                {/* { pending ? <Spinner name="circle" className="spinner" id="reactLoader" /> : null} */}
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
