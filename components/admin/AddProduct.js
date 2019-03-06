import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import TopBar from '../sidebar/TopBar';
import 'react-toastify/dist/ReactToastify.css';
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
    }
    return (
      <Fragment>
        <Navbar />
        <div className="dasboardDiv">
          <Sidebar />
          <div className="dashboardDisplayDiv">
            <TopBar />
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
