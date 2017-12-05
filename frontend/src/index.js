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
    options: ['One', 'Two']
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
}


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
                <List.Item>Item one</List.Item>
                <List.Item>Item two</List.Item>
            </List>

            <form onSubmit={onFormSubmit}>
              <Input type="text" name="option" placeholder="Add text..."/>
              <Button content="Add Option"/>
              <Button color='red' onClick={removeAll} content="Remove all"/>

            </form>
        </div>

          <div className="socialmedia">
            <Button circular color='facebook' icon='facebook'/>
            <Button circular color='twitter' icon='twitter'/>
            <Button circular color='linkedin' icon='linkedin'/>
            <Button circular color='google plus' icon='google plus'/>
          </div>
      </div>
    );

    ReactDOM.render(template, document.getElementById('root'));

};

uprender();



