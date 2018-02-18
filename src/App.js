import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Person = require('./Person.js')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1> Testing React </h1>
        <button> Switch Name </button>
        <Person name="Yc"/>
        <Person name="Vinz"/>
      </div>
    );
  }
}

export default App;
