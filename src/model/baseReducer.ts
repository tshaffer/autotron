/** @module Model:base */

import {
  Reducer,
  combineReducers
} from 'redux';
import { isObject } from 'lodash';
import { BsUiModelState } from '../type';
import {
  BSUIMODEL_BATCH,
  BsUiModelBaseAction,
  BsUiModelBatchAction,
} from './baseAction';
import {
  templateReducer,
  isValidTemplateState,
} from './template';

// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------

// none

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------

export type BsUiReducer = Reducer<BsUiModelState>;
const enableBatching = (
    reduce: (state: BsUiModelState, action: BsUiModelBaseAction | BsUiModelBatchAction) => BsUiModelState,
): BsUiReducer => {
  return function batchingReducer(
    state: BsUiModelState,
    action: BsUiModelBaseAction | BsUiModelBatchAction,
  ): BsUiModelState {
    switch (action.type) {
      case BSUIMODEL_BATCH:
        return (action as BsUiModelBatchAction).payload.reduce(batchingReducer, state);
      default:
        return reduce(state, action);
    }
  };
};

export const bsUiModelReducer: BsUiReducer = enableBatching(combineReducers<BsUiModelState>({
  template: templateReducer,
}));

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

export const isValidBsUiModelState = (state: any): boolean => {
  return isObject(state)
    && state.hasOwnProperty('template') && isValidTemplateState(state.template);
};

export const isValidBsUiModelStateShallow = (state: any): boolean => {
  return isObject(state)
    && state.hasOwnProperty('template');
};