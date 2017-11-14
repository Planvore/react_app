
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var Index = (
    <ul>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
);

ReactDOM.render(
    Index,
    document.getElementById('root')
);

