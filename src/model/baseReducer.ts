/** @module Model:base */

import {
  Reducer,
  combineReducers
} from 'redux';
// import { isObject } from 'lodash';
import { BsAutotronModelState } from '../type';
// import {
//   isValidTemplateState,
// } from './template';
import { activeMediaStateReducer } from './activeMediaState';
import { BsAutotronModelBaseAction, BsAutotronModelBatchAction, BSAUTOTRONMODEL_BATCH } from './baseAction';

// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------

// none

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export type BsAutotronReducer = Reducer<BsAutotronModelState>;
const enableBatching = (
  reduce: (state: BsAutotronModelState, action: BsAutotronModelBaseAction | BsAutotronModelBatchAction) => BsAutotronModelState,
): BsAutotronReducer => {
  return function batchingReducer(
    state: BsAutotronModelState,
    action: BsAutotronModelBaseAction | BsAutotronModelBatchAction,
  ): BsAutotronModelState {
    switch (action.type) {
      case BSAUTOTRONMODEL_BATCH:
        return (action as BsAutotronModelBatchAction).payload.reduce(batchingReducer, state);
      default:
        return reduce(state, action);
    }
  };
};

export const bsAutotronModelReducer: BsAutotronReducer = enableBatching(combineReducers<BsAutotronModelState>({
  activeMediaStates: activeMediaStateReducer
}));


// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

// TEDTODO
export const isValidBsAutotronModelState = (state: any): boolean => {
  return true;
  // return isObject(state)
  //   && state.hasOwnProperty('template') && isValidTemplateState(state.template);
};

export const isValidBsAutotronModelStateShallow = (state: any): boolean => {
  return true;
  // return isObject(state)
  //   && state.hasOwnProperty('template');
};