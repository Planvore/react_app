import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var company = {
    name: 'Planvooore',
    location: 'Florianópolis',
    business: 'dashboards'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

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
      </div>
    );
  }
}

export default App;
