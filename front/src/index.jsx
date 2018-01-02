import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'containers/App/index';
import store from 'store';

import './main.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
