import React, { Component } from 'react';
import { Provider } from "react-redux";

import createStore from "./Redux";
 
import './App.css';

import Home from './Containers/Home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export const store = createStore();
 

class App extends Component { 
  render() { 
    
    return ( 
      <Provider store={store}>
        <Router style={{height: '100%'}}>
          <div style={{height: '100%'}}>
              <Home />
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
