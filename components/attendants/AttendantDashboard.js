/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import AttendantNavigator from './AttendantNavigator';
import Navbar from '../navbar/Navbar';
import { getAvailableProducts, updateProduct, createSales } from '../../store/actions/actions';
import AuthHelper from '../../utills/AuthHelper';

let productArray;
class AttendantDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      category: '',
      price: '',
      quantity: '',
      availableQuantity: '',
      unitTotal: '',
      productId: '',
      type: '',
      attendant: '',
    };
    this.products = [];
  }

  componentDidMount() {
    const { get, availableProducts } = this.props;
    if (!availableProducts) {
      get(getAvailableProducts());
    }
  }

  onChange(e) {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /* istanbul ignore next */
  onChangeProduct(e) {
    console.log('======> ', typeof e.target, e.target[0], e.target.getAttribute);
    const token = localStorage.getItem('accessToken');
    const attendant = AuthHelper.decodeToken(token).firstname;

    const productId = e.target[e.target.selectedIndex].getAttribute('id');
    const type = e.target[e.target.selectedIndex].getAttribute('type');
    const availableQuantity = e.target[e.target.selectedIndex].getAttribute('quantity');

    return this.setState({
      [e.target.name]: e.target.value, productId, type, availableQuantity, attendant,
    });
  }

  onChangeQuantity(e) {
    const price = document.getElementById('price').value;

    return this.setState({
      [e.target.name]: e.target.value, price,
    });
  }

  addTotal(cartItem) {
    let total;
    if (cartItem.length > 0) {
      const subtalArray = cartItem.map(item => parseInt(item.unitTotal));
      total = subtalArray.reduce((sum, subtotal) => sum + subtotal);
    }
    return total;
  }

  handleSubmit(e) {
    const { get } = this.props;
    e.preventDefault();
    get(updateProduct(this.products));
  }

  removeFromCart(e, products) {
    e.preventDefault();
    const productIndex = e.target.value - 1;
    const item = products[productIndex].product.toUpperCase();
    if (confirm(`Delete ${item}`)) {
      products.splice(productIndex, 1);
      this.setState({
        category: '',
        product: '',
        price: '',
        quantity: '',
        unitTotal: '',
      });
    }
  }

  populateProducts(selectedCategory) {
    const { availableProducts } = this.props;
    const productCategory = availableProducts
      .filter(product => product.category === selectedCategory);
    productArray = productCategory.map(products => ({
      name: products.name,
      id: products.id,
      type: products.type,
      availableQuantity: products.quantity,
    }));
  }

  populatePrice(selectedProduct) {
    const { availableProducts } = this.props;
    const productArray = availableProducts.filter(product => product.name === selectedProduct);
    if (productArray.length) {
      const { price } = productArray[0];
      document.getElementById('price').value = price;
    }
  }

  populateUnitTotal() {
    const { quantity, price } = this.state;
    const unitTotal = quantity * price;

    document.getElementById('unitTotal').value = `${unitTotal}`;
  }

  addToCart(e) {
    e.preventDefault();
    const unitTotal = document.getElementById('unitTotal').value;
    this.setState({ unitTotal }, () => {
      if (
        this.state.category === '' || this.setState.product === '' || this.state.price === '' || this.state.quantity === '' || this.state.unitTotal === '') {
        return;
      }
      this.products.push(this.state);
      this.setState({
        category: '',
        product: '',
        price: '',
        quantity: '',
        unitTotal: '',
      });
      document.getElementById('unitTotal').value = '';
      document.getElementById('price').value = '';
      document.getElementById('quantity').value = '';
    });
  }

  render() {
    let allCategoryArray;
    const {
      get, success, salesSuccess, creatingSales, updatingProduct,
    } = this.props;

    if (success) {
      get(createSales(this.products));
      this.products = [];
    }
    if (salesSuccess) {
      alert('Added');
      window.location.reload();
    }

    const { availableProducts } = this.props;
    const {
      category,
      product,
      quantity,
    } = this.state;
    if (availableProducts) {
      const cate = availableProducts.map(item => item.category);
      const uniqueCategory = new Set(cate.sort());
      allCategoryArray = [...uniqueCategory];

      this.populateProducts(category);
      if (product.length) {
        this.populatePrice(product);
      }
      if (quantity) {
        this.populateUnitTotal();
      }
    }

    return (
      <Fragment>
        <Navbar />
        <AttendantNavigator />
        <div className="attendant-display-functionality-div fontBlack">
          <div className="create-sales-frame">
            <div className="create-sales-div">
              <form action="">
                <div className="create-sales-label-div">
                  <label htmlFor="" style={{ fontWeight: 'bold' }}> CREATE NEW SALES</label>
                </div>
                <div className="shift-top space-content">
                  <label htmlFor="">Category</label>
                  <select name="category" id="availableProCate" className="create-sales-select-tag" onChange={e => this.onChange(e)} value={category}>
                    <option value="false">--Selecte Category---</option>
                    {allCategoryArray && (
                      allCategoryArray.map(item => (
                        <option value={item} key={item}>
                          {' '}
                          {item}
                          {' '}
                        </option>
                      )))
                    }
                  </select>
                </div>
                <div className="create-sales-div-group space-content">
                  <label htmlFor="" className="shift-top">Product</label>
                  <select name="product" id="productField" className="shift-top create-sales-select-tag" onChange={e => this.onChangeProduct(e)} value={product}>
                    <option value="">-Select Product-</option>
                    <option value="select product">--Select Product</option>
                    {productArray && (productArray.map(prod => <option value={prod.name} type={prod.type} key={prod.id} id={prod.id} quantity={prod.availableQuantity} name={prod.name}>{prod.name}</option>)
                    )
                  }
                  </select>
                </div>
                <div className="create-sales-div-group">
                  <label htmlFor="" className="shift-top">Price</label>
                  <input type="number" name="price" id="price" placeholder="#00000" className="shift-top" />
                </div>
                <div className="create-sales-div-group ">
                  <label htmlFor="" className="shift-top">Qtty</label>
                  <input type="number" name="quantity" id="quantity" placeholder="000" className="shift-top" onChange={e => this.onChangeQuantity(e)} />
                </div>
                <div className="create-sales-div-group">
                  <label htmlFor="" className="shift-top">Total</label>
                  <input type="number" name="" id="unitTotal" placeholder="#00000" className="shift-top" readOnly />
                </div>
                <div className="create-sales-button-div">
                  <button className=" link" id="addToCart" type="submit" onClick={e => this.addToCart(e)}> + ADD</button>
                </div>
              </form>
            </div>
            <div className="shopping-cart-div">
              <table id="shopping-cart-table">
                <thead>
                  <tr>
                    <th colSpan="8" className="table-head"> SHOPPING CART</th>
                  </tr>
                </thead>
                <tbody id="cart">
                  <tr>
                    <th className="shopping-cart-increase-th-padding">SN</th>
                    <th className="shopping-cart-increase-th-padding"> Name</th>
                    <th className="shopping-cart-increase-th-padding">Cate</th>
                    <th className="shopping-cart-increase-th-padding">Qty</th>
                    <th className="shopping-cart-increase-th-padding">Price</th>
                    <th className="shopping-cart-increase-th-padding">S-total</th>
                    <th className="shopping-cart-increase-th-padding" />
                    <th className="shopping-cart-increase-th-padding" />
                  </tr>
                  { this.products && (
                    this.products.map((itemArray, index) => (
                      <tr className="addedItem" align="left" key={itemArray.product}>
                        <td>
                          {index + 1}
                        </td>
                        <td>
                          {itemArray.product}
                        </td>
                        <td>{itemArray.category}</td>
                        <td>{itemArray.quantity}</td>
                        <td>{itemArray.price}</td>
                        <td id="subTotal" value={itemArray.subTotal}>{itemArray.unitTotal}</td>
                        <td><button className="edit-cart-item  hide link" id="edit" value={index + 1} type="submit">Edit</button></td>
                        <td><button className="delete-cart-item link" id="delete" value={index + 1} type="submit" onClick={e => this.removeFromCart(e, this.products)}>Del</button></td>
                      </tr>
                    )))
                  }
                </tbody>
                <tbody>
                  <tr>
                    <th>TOTAL</th>
                    <th />
                    <th />
                    <th />
                    <th />
                    <th id="total">{this.products && this.addTotal(this.products)}</th>
                  </tr>
                </tbody>
              </table>
              <div style={{ textAlign: 'left', marginTop: '15px' }}>
                <button className="shop-now-button link" id="checkout" type="submit" onClick={e => this.handleSubmit(e)}>CHECKOUT</button>
                { creatingSales || updatingProduct && (
                <Spinner name="circle" className="spinner" id="reactLoader" />
                )}
              </div>
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
  availableProducts: state.avaibleProducts.availableProducts,
  success: state.updatedProduct.success,
  salesSuccess: state.sales.success,
  creatingSales: state.sales.pending,
  updatingProduct: state.updatedProduct.pending,
});

export default connect(mapStateToProps, mapDispatchToProps)(AttendantDashboard);
