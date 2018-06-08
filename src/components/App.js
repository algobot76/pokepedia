import React, { Component } from 'react';
import FixedBar from './FixedBar';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div>
        <FixedBar title="Welcome to Pokepdeia" />
        <Display />
      </div>
    );
  }
}

export default App;
