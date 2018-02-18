import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Person = require('./Person.js')

class App extends Component {
  state = {
    person: [
      { name: "YC", age: 24 },
      { name: "Vinz", age: 35  }
    ]
  }

  // ES6 function declaration
  switchNameHandler = () => {
    console.log("switching name");
    this.setState({
      person: [
        { name: "YC", age: 27 },
        { name: "Vinz", age: 40  }
      ]
    })
  }

  render() {
    // cannot read property of undefined
    // console.log(this.state.name.hello)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1> Testing React </h1>
        <button onClick={this.switchNameHandler} > Switch Name </button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
      </div>
    );
  }
}

export default App;
