/** @module Model:base */

import { Action } from 'redux';

import {
  Dispatch,
  ActionCreator,
} from 'redux';

/** @internal */
/** @private */
export interface ActionWithPayload extends Action {
  payload : any;
}

import { BsAutotronModelState } from '../type';

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const BSAUTOTRONMODEL_BATCH = 'BSAUTOTRONMODEL_BATCH';

/** @internal */
/** @private */
export const BSAUTOTRONMODEL_REHYDRATE = 'BSAUTOTRONMODEL_REHYDRATE';

/** @internal */
/** @private */
export const BSAUTOTRONMODEL_RESET = 'BSAUTOTRONMODEL_RESET';

/** @internal */
/** @private */
export type BsAutotronModelDispatch = Dispatch<BsAutotronModelState>;

/** @internal */
/** @private */
export interface BsAutotronModelBaseAction extends Action {
  type: string;   // override Any - must be a string
  payload: {};
  error?: boolean;
  meta?: {};
}

/** @internal */
/** @private */
export interface BsAutotronModelAction<T> extends BsAutotronModelBaseAction {
  payload: T;     // override payload with specific parameter type
}

/** @internal */
/** @private */
export type BsAutotronModelActionCreator<T> = ActionCreator<BsAutotronModelAction<T>>;

/** @internal */
/** @private */
export type BsAutotronModelThunkAction<T> = (
  dispatch: BsAutotronModelDispatch,
  getState: () => BsAutotronModelState,
  extraArgument: undefined,
) => T;

/** @internal */
/** @private */
export const bsAutotronModelBatchAction = (action: BsAutotronModelBaseAction[]): BsAutotronModelBatchAction => {
  return {type: BSAUTOTRONMODEL_BATCH, payload: action};
};

/** @internal */
/** @private */
export interface BsAutotronModelBatchAction extends Action {
  type: string;
  payload: BsAutotronModelBaseAction[];
}

/** @internal */
/** @private */
export interface RehydrateBsAutotronModelParams {
  newBsAutotronModelState: BsAutotronModelState;
}

/** @internal */
/** @private */
export type RehydrateBsAutotronModelAction = BsAutotronModelAction<RehydrateBsAutotronModelParams>;
export const bsAutotronModelRehydrateModel = (bsAutotronModelState: BsAutotronModelState): RehydrateBsAutotronModelAction => {
  return {
    type: BSAUTOTRONMODEL_REHYDRATE,
    payload: {
      newBsAutotronModelState: bsAutotronModelState,
    },
  };
};

/** @internal */
/** @private */
export type ResetBsAutotronModelAction = BsAutotronModelAction<null>;
export const bsAutotronModelResetModel = (): ResetBsAutotronModelAction => {
  return {
    type: BSAUTOTRONMODEL_RESET,
    payload: null,
  };
};
