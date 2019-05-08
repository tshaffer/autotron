/** @module Selector:templateProperty */

import { createSelector } from 'reselect';
import { BsUiError, BsUiErrorType } from '../utility/BsUiError';
import {
  BsUiModelState,
  BsUiModelTemplateState,
  BsUiModelTemplatePropertyState,
  BsUiModelTemplatePropertyColorState,
 } from '../type';
import { isValidTemplatePropertyStateShallow } from '../model';
import { bsUiModelGetTemplateState } from './template';

/** @internal */
/** @private */
export const bsUiModelGetTemplatePropertyState = (state: BsUiModelState): BsUiModelTemplatePropertyState => {
  return getTemplatePropertyState(state);
};

const getTemplatePropertyState = createSelector<
  BsUiModelState,
  BsUiModelTemplateState,
  BsUiModelTemplatePropertyState
>(
  bsUiModelGetTemplateState,
  (state: BsUiModelTemplateState): BsUiModelTemplatePropertyState => {
    if (isValidTemplatePropertyStateShallow(state.property)) {
      return state.property;
    } else {
      const exceptionMessage = `state must be of type BsUiModelState or
        have a field bsuimodel of type BsUiModelState. invalid state.template.property
        ${JSON.stringify(state.property)}`;
      throw new BsUiError(BsUiErrorType.invalidParameters, exceptionMessage);
    }
  },
);

/** @internal */
/** @private */
export const bsUiModelGetTemplatePropertyColorState = (
  state: BsUiModelState
): BsUiModelTemplatePropertyColorState => {
  return getTemplatePropertyColor(state);
};

const getTemplatePropertyColor = createSelector<
  BsUiModelState,
  BsUiModelTemplatePropertyState,
  BsUiModelTemplatePropertyColorState
>(
  bsUiModelGetTemplatePropertyState,
  (state: BsUiModelTemplatePropertyState): BsUiModelTemplatePropertyColorState => {
    return state.color;
  },
);
