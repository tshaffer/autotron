/** @module Types:base */

import { BsUiModelTemplateState } from './template';
import { DmState } from '@brightsign/bsdatamodel';

/** @internal */
/** @private */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface AutotronState {
  bsdm : DmState;
  template: BsUiModelTemplateState;
}

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
