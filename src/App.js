import React, { Component } from 'react';
import noteA from './sounds/A.mp3';
import './App.css';

class App extends Component {
  render() {
    return (
      <audio src={noteA} />
    );
  }
}

export default App;
