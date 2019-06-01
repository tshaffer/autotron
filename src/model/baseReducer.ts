/** @module Model:base */

import {
  Reducer,
  combineReducers
} from 'redux';
import { BsAutotronModelState } from '../type';
import { activeMediaStateReducer } from './activeMediaState';
import { activeHStateReducer } from './activeHState';
import { BsAutotronModelBaseAction, BsAutotronModelBatchAction, BSAUTOTRONMODEL_BATCH } from './baseAction';
import { hsmReducer } from './hsm';

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
  activeMediaStates: activeMediaStateReducer,
  activeHStates: activeHStateReducer,
  hsms: hsmReducer,
}));


// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

// TEDTODO
export const isValidBsAutotronModelState = (state: any): boolean => {
  return true;
};

export const isValidBsAutotronModelStateShallow = (state: any): boolean => {
  return true;
};