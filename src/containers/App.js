import React, { Component } from 'react';
import FixedBar from '../components/FixedBar';
import Display from '../components/Display';

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
