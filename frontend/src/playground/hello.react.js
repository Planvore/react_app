import ReactDOM from 'react-dom';
import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './App.css';
import { Button, Input, List } from 'semantic-ui-react';

let app = {
    title: 'Planvooore',
    subtitle: 'Brasil',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submited!')

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        uprender();
    }
};

const removeAll = () => {
    app.options = [];
    uprender();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};


let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  uprender();
};

const uprender = () => {
    const template = (
      <div className="app">
      <div>
        <header className="app-header">
             <img src={logo} className="app-logo" alt="logo" />
             <h1 className="app-title">{app.title}</h1>
              <p className="app-intro">
              This is a pilot React application.
              </p>
         </header>

      </div>
        <div>
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <p>{app.options.length}</p>

          <List bulleted>
              {app.options.map((option) => { return <List.Item key={option}>{option}</List.Item>; }) }
          </List>

            <form onSubmit={onFormSubmit}>
              <Input type="text" name="option" placeholder="Add text..."/>
              <p></p>
              <Button content="Add Option"/>
              <Button color='red' onClick={removeAll} content="Remove all"/>
              <Button disabled={app.options.length === 0} color='green' onClick={makeDecision} content="Decide for me!"/>
            </form>
        </div>

          <div className="socialmedia">
            <Button circular color='facebook' icon='facebook'/>
            <Button circular color='twitter' icon='twitter'/>
            <Button circular color='linkedin' icon='linkedin'/>
            <Button circular color='google plus' icon='google plus'/>
          </div>

        <div>
          <p></p>
          <h1>Toggle Visibility</h1>
          <Button onClick={toggleVisibility} color="blue" toggle content={ visibility ? "Hide Details" : "See details" } />
          { visibility && (
            <div>
            <p>This is the details that were hidden!</p>
            </div>
          )}
        </div>

      </div>
    );

    ReactDOM.render(template, document.getElementById('root'));

};

uprender();



