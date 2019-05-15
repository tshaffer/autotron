import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { bsUiModelReducer } from '../src/model';
import { BsUiModelState } from '../src/type';
import { Template } from '../src/index';
import '../dev/bootstrap.css';
import 'normalize.css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { bsDmReducer } from '@brightsign/bsdatamodel';

console.log('bootstrap.tsx from dev');

// TODO
const reducers = combineReducers<BsUiModelState>({
  bsdm: bsDmReducer,
  bsUiModel: bsUiModelReducer,
});

const store = createStore<BsUiModelState>(reducers, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Template />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
