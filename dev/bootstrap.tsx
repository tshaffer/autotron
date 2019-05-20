import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { bsUiModelReducer } from '../src/model';
// import { BsUiModelState } from '../src/type';
import { initRuntime, AutotronState, App } from '../src/index';
import '../dev/bootstrap.css';
import 'normalize.css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { bsDmReducer } from '@brightsign/bsdatamodel';

console.log('bootstrap.tsx from dev');

// TODO
const reducers = combineReducers<AutotronState>({
  bsdm: bsDmReducer,
  bsUiModel: bsUiModelReducer,
});

const store = createStore<AutotronState>(reducers, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());

store.dispatch(initRuntime(store));

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
