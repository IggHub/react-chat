import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chatroom from './components/Chatroom/Chatroom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello!!!</h2>
          <Chatroom />
        </div>
      </div>
    );
  }
}

export default App;
