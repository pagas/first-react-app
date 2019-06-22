/* eslint react/jsx-filename-extension: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
// Routes
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';


const unmountButton = document.getElementById('unmount');

// Is not very common to remove a Component from the DOM,
// but this will be just to understand how
// componentWillUnmount works.
function unmount() {
  ReactDOM.unmountComponentAtNode(
    document.getElementById('root')
  );

  document.getElementById('unmountMessage')
    .style.display = 'block';

  unmountButton.remove();
}

unmountButton.addEventListener('click', unmount);

document.getElementById('unmountMessage')
  .style.display = 'none';

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
