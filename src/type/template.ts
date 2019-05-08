/** @module Types:template */

import { BsUiModelTemplatePropertyState } from './templateProperty';

/** @internal */
/** @private */
export interface BsUiModelTemplateState {
  readonly property: BsUiModelTemplatePropertyState;
}

/** @internal */
/** @private */
export const createTemplate = (property: BsUiModelTemplatePropertyState): BsUiModelTemplateState => {
  return {
    property
  };
};
