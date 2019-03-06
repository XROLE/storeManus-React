import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Navbar from '../navbar/Navbar';
import { addProduct } from '../../store/actions/actions';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      quantity: '',
      type: '',
      category: '',
      shouldShowError: false,
      showSuccessMessage: false,
      resetState: false,
    };
  }

  onChange(e) {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const product = this.state;
    const { add } = this.props;

    this.setState({
      shouldShowError: true,
      showSuccessMessage: true,
    });
    add(addProduct(product));
  }

  notify(error) {
    toast.error(error);
  }

  render() {
    const {
      name, type, price, category, quantity, shouldShowError, showSuccessMessage,
    } = this.state;
    const {
      pending, addProductError, success, addProductMessage,
    } = this.props;

    if (addProductError && shouldShowError) {
      this.notify(addProductError);
      this.setState({
        shouldShowError: false,
      });
    }

    if (success && showSuccessMessage) {
      this.notify(addProductMessage);
      this.setState({
        name: '',
        price: '',
        quantity: '',
        type: '',
        category: '',
        shouldShowError: false,
        showSuccessMessage: false,
      });
      // this.props.success = false;
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
                  <Link to="/admin/product/add">
                    <i className="far fa-plus-square" />
                    &nbsp; Add Product
                  </Link>
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
              <form action="" id="add-product" onSubmit={e => this.handleSubmit(e)}>
                <div className="form-label">
                  <label htmlFor="add-product" className="fontBlack">
                    <i className="far fa-plus-square" />
                    {' '}
&nbsp;ADD PRODUCT
                  </label>
                </div>
                <div>
                  <input type="text" name="name" id="product-Name" placeholder="NAME" onChange={e => this.onChange(e)} value={name} />
                </div>
                <div>
                  <input type="number" name="quantity" id="product-Quantity" placeholder="QUANTITY" onChange={e => this.onChange(e)} value={quantity} />
                </div>
                <div>
                  <input type="number" name="price" id="product-Price" placeholder="PRICE" onChange={e => this.onChange(e)} value={price} />
                </div>
                <div>
                  <input type="text" name="type" id="product-Type" placeholder="TYPE" onChange={e => this.onChange(e)} value={type} />
                </div>
                <div>
                  <input type="text" name="category" id="product-Category" placeholder="CATEGORY" onChange={e => this.onChange(e)} value={category} />
                </div>
                <div>
                  <button className="link" id="add-product-button" type="submit">Add Product</button>
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

const mapDispatchToProps = dispatch => ({
  add: product => dispatch(product),
});

const mapStateToProps = state => ({
  addProductMessage: state.addProduct.message,
  pending: state.addProduct.pending,
  addProductError: state.addProduct.error,
  success: state.addProduct.success,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
