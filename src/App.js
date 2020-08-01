import React, { Component } from 'react';
import chopper from './chopper.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={chopper} className="App-logo" alt="logo" />
          <h1 className="App-title">Sample App2</h1>
        </header>
        <p className="App-intro">
          This is the second app
        </p>
      </div>
    );
  }
}

export default App;
