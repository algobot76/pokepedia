import React, { Component } from 'react';
import { connect } from 'react-redux';
import FixedBar from '../components/FixedBar';
import Display from '../components/Display';
import { fetchCount } from '../actions';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCount());
  }

  render() {
    return (
      <div>
        <FixedBar title="Welcome to Pokepdeia" />
        <Display />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { count } = state;
  return count;
};

export default connect(mapStateToProps)(App);
