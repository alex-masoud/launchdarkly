import React from 'react';
import logo from './logo.svg';
import ldlogo from './ldlogo.png'
import './App.css';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { imageSwitch } = useFlags()
  return (
    <div className="App">
      <header className="App-header">
        { imageSwitch ? (<img src={ldlogo} className="App-logo" alt="logo" />) : (
        <img src={logo} className="App-logo" alt="logo" />)
        }
        <p>
          Welcome to Alex's Logo Switch Test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withLDProvider({

  clientSideID: '6571434fccbc380f54f4ff85',
  options: {
  bootstrap: 'localStorage'
  },
})(App);
