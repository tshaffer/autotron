import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { bsUiModelReducer } from '../model';
import { BsUiModelState } from '../type';
import * as base from './base';

describe('base - controller', () => {

  const testState = {
    template: {
      property: {
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        }
      }
    }
  };

  let store: any = null;

  beforeEach(() => {
    store = createStore<BsUiModelState>(bsUiModelReducer, applyMiddleware(thunk));
  });

  it('should initialize store', () => {
    expect(store.getState()).toMatchObject(testState);
  });

  it('should manually initialize store', () => {
    store.dispatch(base.initModel());
    expect(store.getState()).toMatchObject(testState);
  });

  it('should manually reset store', () => {
    store.dispatch(base.resetModel());
    expect(store.getState()).toMatchObject(testState);
  });

});
