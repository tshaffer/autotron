import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { BsUiModelState } from '../src/type';
import { initRuntime, App, BsAutotronState } from '../src/index';
import '../dev/bootstrap.css';
import 'normalize.css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { bsDmReducer } from '@brightsign/bsdatamodel';
import { bsAutotronModelReducer } from '../src/model/baseReducer';

console.log('bootstrap.tsx from dev');

const reducers = combineReducers<BsAutotronState>({
  bsdm: bsDmReducer,
  bsAutotron: bsAutotronModelReducer,
});

const store = createStore<BsAutotronState>(reducers, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());

store.dispatch(initRuntime(store));

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
