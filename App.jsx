// @flow

import React from 'react';
import { StyleRoot } from 'radium';
import debug from 'debug';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';

import HomePage from './HomePage.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

debug.enable('Skeleton:*');

function App() {
  return (
    <StyleRoot style={styles.wrapper}>
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </StyleRoot>
  );
}

export default hot(module)(App);
