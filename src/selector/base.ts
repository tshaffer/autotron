/** @module Selector:base */


import { BsAutotronModelState } from '../type';
import { isValidBsAutotronModelStateShallow } from '../model';
import {
  BsAutotronError,
  BsAutotronErrorType,
} from '../utility/BsAutotronError';

/** @internal */
/** @private */
export const bsAutotronModelFilterBaseState = (state: any): BsAutotronModelState => {
  if (state.hasOwnProperty('bsautotronmodel') && isValidBsAutotronModelStateShallow(state.bsautotronmodel)) {
    return state.bsautotronmodel as BsAutotronModelState;
  } else if (isValidBsAutotronModelStateShallow(state)) {
    return state as BsAutotronModelState;
  } else {
    const exceptionMessage = `state must be of type BsAutotronModelState or have a field bsautotronmodel
      of type BsAutotronModelState. invalid state ${JSON.stringify(state)}`;
    throw new BsAutotronError(BsAutotronErrorType.invalidParameters, exceptionMessage);
  }
};

/** @internal */
/** @private */
export const bsAutotronModelGetBaseState = (state: BsAutotronModelState): BsAutotronModelState  => {
  return bsAutotronModelFilterBaseState(state);
};