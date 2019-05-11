import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { bsDmReducer } from '@brightsign/bsdatamodel';

import './bootstrap.css';
import 'normalize.css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import { BaNUiNotificationDialog, BaNUiNotificationBanner, baNUiReducer } from '@brightsign/ba-notification-ui';
import { Template } from './component';

const getStore = () => {
  // TEDTODO - any
  const reducers = combineReducers<any>({
    bsdm: bsDmReducer,
  });

  // TEDTODO - any
  return createStore<any>(reducers, applyMiddleware(thunk));
};

ReactDOM.render(
  <Provider store={getStore()}>
    <div>
      <Template />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
