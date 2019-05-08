/** @module Types:base */

import { BsUiModelTemplateState } from './template';

/** @internal */
/** @private */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/** @internal */
/** @private */
export interface BsUiModelState {
  template: BsUiModelTemplateState;
}

/** @internal */
/** @private */
export const createModel = (template: BsUiModelTemplateState): BsUiModelState => {
  return {
    template
  };
};
