import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { bsUiModelReducer } from '../model';
import { BsUiModelState } from '../type';
import * as template from './template';

describe('template - controller', () => {

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

  it('should update template color async', () => {
    return store.dispatch(template.updateTemplateColorAsync())
      .then(() => {
        expect(store.getState()).not.toMatchObject(testState);
      });

  });

  it('should update template color batch', () => {
    store.dispatch(template.updateTemplateColorBatch());
    expect(store.getState()).not.toMatchObject(testState);
  });

});
