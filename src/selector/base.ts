/** @module Selector:base */

import { BsUiModelState } from '../type';
import { isValidBsUiModelStateShallow } from '../model';
import {
  BsUiError,
  BsUiErrorType,
} from '../utility/BsUiError';

/** @internal */
/** @private */
export const bsUiModelFilterBaseState = (state: any): BsUiModelState => {
  if (state.hasOwnProperty('bsuimodel') && isValidBsUiModelStateShallow(state.bsuimodel)) {
    return state.bsuimodel as BsUiModelState;
  } else if (isValidBsUiModelStateShallow(state)) {
    return state as BsUiModelState;
  } else {
    const exceptionMessage = `state must be of type BsUiModelState or have a field bsuimodel
      of type BsUiModelState. invalid state ${JSON.stringify(state)}`;
    throw new BsUiError(BsUiErrorType.invalidParameters, exceptionMessage);
  }
};

/** @internal */
/** @private */
export const bsUiModelGetBaseState = (state: BsUiModelState): BsUiModelState  => {
  return bsUiModelFilterBaseState(state);
};