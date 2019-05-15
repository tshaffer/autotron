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
import { Template } from './component';

debugger;

console.log('bootstrap.tsx from src');

const reducers = combineReducers<any>({
  bsdm: bsDmReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Template />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
