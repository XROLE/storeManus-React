import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import SignUP from './signUp';

class App extends Component{
  render(){
    return (
      <Provider store = {store}>
    <div>
      <h1> StoreManus React Version</h1>
      < SignUP />
    </div>
    </Provider>
    );
  }
}

export default App;
