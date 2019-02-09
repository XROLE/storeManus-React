/* eslint-disable */
import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet'
import {Link}from 'react-router-dom';
import '../../css/home.css';

class Home extends Component {
  render(){
    return (
      <Fragment>
        <Helmet>
          <style>{'body { background-color: #000a3f; }'}</style>
        </Helmet>
        <div className="homee">
          <div className="logDiv">
              <p> <i className="fas free fa-stream"></i> &nbsp; <span>Store Manus</span></p>
          </div>
          <div className="descriptiveDiv">
              <h1 className="description">Reliable Store Manager</h1>
              <Link to="/login" className="get-started-button"> <i className="far fa-hand-pointer"></i> &nbsp; Get Started</Link>
              <p className="description2">simple to use</p>
          </div>
        </div>
     </Fragment>
    )}
}

export default Home;
