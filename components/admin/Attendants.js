
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import TopBar from '../sidebar/TopBar';
import { getAttendants } from '../../store/actions/actions';


export class Products extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const { get, attendants } = this.props;
    if (!attendants.length) {
      get(getAttendants());
    }
  }


  render() {
    const { attendants, pending } = this.props;

    return (
      <Fragment>
        <Navbar />
        <div className="dasboardDiv">
          <Sidebar />
          <div className="dashboardDisplayDiv">
            <TopBar />
            <div className="dasboard-display-div fontBlack" style={{ width: '90%' }} id="allProductContainer">
              <p>
                <i className="fas fa-users" />
                    &nbsp;ALL ATTENDANTS
              </p>
              <div id="all-attendant-div">
                { attendants && (
                  attendants.map((attendant, i) => (
                    <div className="attendant-profile-div">
                      <img src={attendant.profilepics} alt="attendant avatar" className="attendant-profile-image" />
                      <div className=" attendant-profile-info-div ">
                        <p>
                          {attendant.firstname}
                          &nbsp;
                          {attendant.lastname}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            { pending === true && (
            <Spinner name="circle" className="spinner" id="reactLoader" />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  get: value => dispatch(value),
});

const mapStateToProps = state => ({
  attendants: state.getAttendants.attendants,
  pending: state.getAttendants.pending,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
