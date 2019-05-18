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

import { BsUiModelState } from '../type';

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const BSUIMODEL_BATCH = 'BSUIMODEL_BATCH';

/** @internal */
/** @private */
export const BSUIMODEL_REHYDRATE = 'BSUIMODEL_REHYDRATE';

/** @internal */
/** @private */
export const BSUIMODEL_RESET = 'BSUIMODEL_RESET';

/** @internal */
/** @private */
export type BsUiModelDispatch = Dispatch<BsUiModelState>;

/** @internal */
/** @private */
export interface BsUiModelBaseAction extends Action {
  type: string;   // override Any - must be a string
  payload: {};
  error?: boolean;
  meta?: {};
}

/** @internal */
/** @private */
export interface BsUiModelAction<T> extends BsUiModelBaseAction {
  payload: T;     // override payload with specific parameter type
}

/** @internal */
/** @private */
export type BsUiModelActionCreator<T> = ActionCreator<BsUiModelAction<T>>;

/** @internal */
/** @private */
export type BsUiModelThunkAction<T> = (
  dispatch: BsUiModelDispatch,
  getState: () => BsUiModelState,
  extraArgument: undefined,
) => T;

/** @internal */
/** @private */
export const bsUiModelBatchAction = (action: BsUiModelBaseAction[]): BsUiModelBatchAction => {
  return {type: BSUIMODEL_BATCH, payload: action};
};

/** @internal */
/** @private */
export interface BsUiModelBatchAction extends Action {
  type: string;
  payload: BsUiModelBaseAction[];
}

/** @internal */
/** @private */
export interface RehydrateBsUiModelParams {
  newBsUiModelState: BsUiModelState;
}

/** @internal */
/** @private */
export type RehydrateBsUiModelAction = BsUiModelAction<RehydrateBsUiModelParams>;
export const bsUiModelRehydrateModel = (bsUiModelState: BsUiModelState): RehydrateBsUiModelAction => {
  return {
    type: BSUIMODEL_REHYDRATE,
    payload: {
      newBsUiModelState: bsUiModelState,
    },
  };
};

/** @internal */
/** @private */
export type ResetBsUiModelAction = BsUiModelAction<null>;
export const bsUiModelResetModel = (): ResetBsUiModelAction => {
  return {
    type: BSUIMODEL_RESET,
    payload: null,
  };
};
