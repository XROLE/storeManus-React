
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import TopBar from '../sidebar/TopBar';
import { getProducts } from '../../store/actions/actions';


class Products extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const { get, products } = this.props;
    if (!products.length) {
      get(getProducts());
    }
  }


  render() {
    const { products, pending } = this.props;

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
                      &nbsp;ALL PRODUCTS
                    </th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  <tr>
                    <th>ID</th>
                    <th>  Name</th>
                    <th>Type</th>
                    <th>Categories</th>
                    <th>Date Added</th>
                  </tr>
                  {products && (
                    products.map((product, i) => (
                      <tr>
                        <td align="left">{product.id}</td>
                        <td align="left">{product.name}</td>
                        <td align="left">{product.type}</td>
                        <td align="left">{product.category}</td>
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
  products: state.getProduct.products,
  pending: state.getProduct.pending,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
