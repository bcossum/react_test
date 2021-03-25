import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

var element = React.createElement('div', null, React.createElement('h1', null, 'Hello Dojo!'),
  React.createElement('h2', null, 'Things I need to do:'),
  React.createElement('ul', null, React.createElement('li', null, "Learn React"), 
    React.createElement('li', null, "Climb Mt. Everest"), 
    React.createElement('li', null, "Run a marathon"), 
    React.createElement('li', null, "Feed the dogs")));

ReactDOM.render(element, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
