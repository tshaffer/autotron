/** @module Model:templateProperty */

import {
  isNumber,
  isObject,
} from 'lodash';
import {
  BsUiModelTemplatePropertyState,
  BsUiModelTemplatePropertyColorState,
} from '../type';
import { BsUiError, BsUiErrorType } from '../utility/BsUiError';
import {
  BSUIMODEL_REHYDRATE,
  BSUIMODEL_RESET,
  BsUiModelAction,
  ResetBsUiModelAction,
  RehydrateBsUiModelParams
} from './baseAction';

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const BSUIMODEL_UPDATE_TEMPLATE_PROPERTY: string = 'BSUIMODEL_UPDATE_TEMPLATE_PROPERTY';

/** @internal */
/** @private */
export const BSUIMODEL_RESET_TEMPLATE_PROPERTY: string = 'BSUIMODEL_RESET_TEMPLATE_PROPERTY';

/** @internal */
/** @private */
export type UpdateTemplatePropertyAction = BsUiModelAction<Partial<BsUiModelTemplatePropertyState>>;

/** @internal */
/** @private */
export type ResetTemplatePropertyAction = BsUiModelAction<null>;

/** @internal */
/** @private */
export const bsUiModelResetTemplateProperty = (): ResetTemplatePropertyAction => {
  return {
    type: BSUIMODEL_RESET_TEMPLATE_PROPERTY,
    payload: null,
  };
};

/** @internal */
/** @private */
export const bsUiModelUpdateTemplateColor = (
  color: BsUiModelTemplatePropertyColorState,
): UpdateTemplatePropertyAction => {
  if (!isValidColor(color)) {
    const errorMessage = `invalid color ${JSON.stringify(color)}`;
    throw new BsUiError(BsUiErrorType.invalidParameters, errorMessage);
  }
  return {
    type: BSUIMODEL_UPDATE_TEMPLATE_PROPERTY,
    payload: {
      color,
    },
  };
};

// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const templatePropertyDefault: BsUiModelTemplatePropertyState = {
  color: {a: 255, r: 0, g: 0, b: 0}
};
Object.freeze(templatePropertyDefault);

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const templatePropertyReducer = (
  state: BsUiModelTemplatePropertyState = templatePropertyDefault,
  {type, payload}: (
    UpdateTemplatePropertyAction
    | ResetTemplatePropertyAction
    | ResetBsUiModelAction
    | BsUiModelAction<RehydrateBsUiModelParams>
  ),
): BsUiModelTemplatePropertyState => {
  switch (type) {
    case BSUIMODEL_REHYDRATE:
    case BSUIMODEL_RESET:
    case BSUIMODEL_RESET_TEMPLATE_PROPERTY: {
      return templatePropertyDefault;
    }
    case BSUIMODEL_UPDATE_TEMPLATE_PROPERTY: {
      return Object.assign({}, state, payload as Partial<BsUiModelTemplatePropertyState>);
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const isValidColor = (state: any): boolean => {
  return isObject(state)
    && isNumber(state.r) && state.r >= 0 && state.r <= 255
    && isNumber(state.g) && state.g >= 0 && state.g <= 255
    && isNumber(state.b) && state.b >= 0 && state.b <= 255
    && isNumber(state.a) && state.a >= 0 && state.a <= 255;
};

/** @internal */
/** @private */
export const isValidTemplatePropertyState = (state: any): boolean => {
  return isObject(state)
    && state.hasOwnProperty('color') && isValidColor(state.color);
};

/** @internal */
/** @private */
export const isValidTemplatePropertyStateShallow = (state: any): boolean => {
  return isObject(state)
    && state.hasOwnProperty('color');
};
