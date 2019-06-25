/* eslint react/jsx-filename-extension: "off" */
/* global window */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
// Routes
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';

// Redux store
import configureStore from './shared/redux/configureStore';

// configure redux store

const store = configureStore(window.initialState);


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
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
