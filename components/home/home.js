/* eslint-disable */
import React, { Component } from 'react';
import '../../css/home.css';

class Home extends Component {
  render(){
    return (
      <div className="homee">
         <div className="logDiv">
            <p> <i className="fas free fa-stream"></i> &nbsp; <span>Store Manus</span></p>
        </div>
        <div className="descriptiveDiv">
            <h1 className="description">Reliable Store Manager</h1>
            <a href="./views/signin.html" className="get-started-button"> <i className="far fa-hand-pointer"></i> &nbsp; Get Started</a>
            <p className="description2">simple to use</p>
        </div>
      </div>
    )}
}


export default Home;
