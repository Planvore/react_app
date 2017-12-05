import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './App.css';
import { Button } from 'semantic-ui-react'

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
    count++;
    console.log('addOne', count);
    uprender();
};

const minusOne = () => {
    count = count - 1;
    console.log('minusOne');
    uprender();
};

const reset = () => {
    console.log('reset');
    count = 0;
    uprender();
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submited!')
    const option = e.target.elements.option.value;
    if (option) {
        company.option.push(option);
        e.target.elements.option.value = '';
    }
};


const uprender = () => {
    const template = (
      <div className="app">
      <div>
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
          <Button.Group>
            <Button onClick={addOne} content= "+1"/>
            <Button onClick={minusOne} content= "-1"/>
            <Button onClick={reset} color='red' content= "Reset"/>
          </Button.Group>

          <form onSubmit={onFormSubmit}>
              <input type="text" name="option"/>
              <Button content="Add Option"/>
          </form>


          </div>
          <div className="socialmedia">
            <Button circular color='facebook' icon='facebook' />
            <Button circular color='twitter' icon='twitter' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='google plus' icon='google plus'/>
          </div>
      </div>
    );
    ReactDOM.render(template, document.getElementById('root'));
};

uprender();
