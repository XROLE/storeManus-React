/* eslint-disable */
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div className="homee">
       <Helmet>
                <style>{'body { background-color: #000a3f; color: white; }'}</style>
            </Helmet>
         <div className="logDiv">
            <p> <i className="fas free fa-stream"></i> &nbsp; <span>Store Manus</span></p>
        </div>
        <div className="descriptiveDiv">
            <h1 className="description">Reliable Store Manager</h1>
            <Link to="/login" className="get-started-button"> <i className="far fa-hand-pointer"></i> &nbsp; Get Started</Link>
            <p className="description2">simple to use</p>
        </div>
      </div>
    )}
}


export default Home;
