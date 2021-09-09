import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/utilityStyle.css'
import Root from './client/Root';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
console.log(store.getState());


ReactDOM.render(
  <Provider>
    <Root />
  </Provider>
  ,document.getElementById('root'));

