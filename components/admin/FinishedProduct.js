
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import TopBar from '../sidebar/TopBar';
import { getFinishedProducts } from '../../store/actions/actions';


class FinishedProducts extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const { get, finishedProducts } = this.props;
    if (!finishedProducts) {
      get(getFinishedProducts());
    }
  }


  render() {
    const { finishedProducts, pending } = this.props;

    return (
      <Fragment>
        <Navbar />
        <div className="dasboardDiv">
          <Sidebar />
          <div className="dashboardDisplayDiv">
            <TopBar />
            <div className="dasboard-display-div fontBlack" style={{ width: '90%' }} id="allProductContainer">
              <table className="all-products-table" id="all-products-table">
                <thead>
                  <tr>
                    <th colSpan="5" className="table-head">
                      <i className="fas fa-cookie-bite" />
                      &nbsp;AVAILABLE PRODUCTS
                    </th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  <tr>
                    <th>ID</th>
                    <th>  Name</th>
                    <th>Categories</th>
                    <th>Quantity</th>
                    <th>Date Added</th>
                  </tr>
                  {finishedProducts && (
                    finishedProducts.map(product => (
                      <tr>
                        <td align="left">{product.id}</td>
                        <td align="left">{product.name}</td>
                        <td align="left">{product.category}</td>
                        <td align="left">{product.quantity}</td>
                        <td align="left">{product.date}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              { pending === true && (
                <Spinner name="circle" className="spinner" id="reactLoader" />
              )}
            </div>
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
  finishedProducts: state.finishedProducts.finishedProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishedProducts);
