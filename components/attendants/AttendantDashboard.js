import React, { Component, Fragment } from 'react';
import AttendantNavigator from './AttendantNavigator';
import Navbar from '../navbar/Navbar';

class AttendantDashboard extends Component {
  constructor(props) {
    super();
  }

  render() {
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
                  <select name="" id="availableProCate" className="create-sales-select-tag">
                    <option value="false">--Selecte Category---</option>
                  </select>
                </div>
                <div className="create-sales-div-group space-content">
                  <label htmlFor="" className="shift-top">Product</label>
                  <select name="" id="productField" className="shift-top create-sales-select-tag">
                    <option value="">-Select Product-</option>
                  </select>
                </div>
                <div className="create-sales-div-group">
                  <label htmlFor="" className="shift-top">Price</label>
                  <input type="number" name="" id="price" placeholder="#00000" className="shift-top" readOnly />
                </div>
                <div className="create-sales-div-group ">
                  <label htmlFor="" className="shift-top">Qtty</label>
                  <input type="number" name="" id="quantity" placeholder="000" className="shift-top" />
                </div>
                <div className="create-sales-div-group">
                  <label htmlFor="" className="shift-top">Total</label>
                  <input type="number" name="" id="unitTotal" placeholder="#00000" className="shift-top" readOnly />
                </div>
                <div className="create-sales-button-div">
                  <button className=" link" id="addToCart" type="submit"> + ADD</button>
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
                </tbody>
                <tbody>
                  <tr>
                    <th>TOTAL</th>
                    <th />
                    <th />
                    <th />
                    <th />
                    <th id="total"># 0.00</th>
                  </tr>
                </tbody>
              </table>
              <div style={{ textAlign: 'left', marginTop: '15px' }}>
                <button className="shop-now-button link" id="checkout">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AttendantDashboard;
