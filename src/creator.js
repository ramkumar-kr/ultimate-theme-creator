/* eslint-env webextensions */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import CreatorApp from './components/CreatorApp';

ReactDOM.render(
  <Provider store={store}>
    <CreatorApp />
  </Provider>,
  document.getElementById('root')
);

