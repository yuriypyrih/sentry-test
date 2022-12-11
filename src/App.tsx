import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
    // @ts-ignore
    console.log("BOSS THIS IS CLICKED", plop)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>SENTRY TEST ok</div>
        <button onClick={onClick}>SENTRY BUG</button>
      </header>
    </div>
  );
}

export default App;
