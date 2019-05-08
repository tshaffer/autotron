/** @module Selector:template */

import { createSelector } from 'reselect';
import {
  BsUiError,
  BsUiErrorType,
} from '../utility/BsUiError';
import { BsUiModelTemplateState, BsUiModelState } from '../type';
import { isValidTemplateStateShallow } from '../model';
import { bsUiModelGetBaseState } from './base';

/** @internal */
/** @private */
export const bsUiModelGetTemplateState = (state: BsUiModelState): BsUiModelTemplateState => {
  return getTemplateState(state);
};

const getTemplateState = createSelector<BsUiModelState, BsUiModelState, BsUiModelTemplateState>(
  bsUiModelGetBaseState,
  (state: BsUiModelState): BsUiModelTemplateState => {
    if (isValidTemplateStateShallow(state.template)) {
      return state.template;
    } else {
      const exceptionMessage = `state must be of type BsUiModelState or
        have a field bsuimodel of type BsUiModelState. invalid state.template
        ${JSON.stringify(state.template)}`;
      throw new BsUiError(BsUiErrorType.invalidParameters, exceptionMessage);
    }
  },
);
