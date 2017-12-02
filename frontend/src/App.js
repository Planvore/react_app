import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let company = {
    name: 'Planvooore',
    location: 'Brasil',
    business: 'dashboards'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

let count = 0;
const addOne = () => {
    console.log('addOne');
    count++;
};

const minusOne = () => {
    console.log('minusOne');
    count--;
};

const reset = () => {
    console.log('reset');
    count=0;
};


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">{company.name}</h1>
          {getLocation(company.location)}
              <p className="">
              {company.business ? company.business : 'test'}
              </p>
        </header>
        <p className="app-intro">
          This is a pilot React application.
        </p>
                <h1>Count: {count}</h1>
                <button onClick={addOne}>+1</button>
                <button onClick={minusOne}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>
        
    );
  }
}

export default App;
