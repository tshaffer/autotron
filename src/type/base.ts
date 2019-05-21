/** @module Types:base */

// import { BsUiModelTemplateState } from './template';
import { DmState } from '@brightsign/bsdatamodel';
import { ActiveMediaStatesShape } from './activeMediaState';

/** @internal */
/** @private */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface BsAutotronModelState {
  activeMediaStates: ActiveMediaStatesShape;
}

export interface BsAutotronState {
  bsdm: DmState;
  bsAutotron: BsAutotronModelState;
}


// /** @internal */
// /** @private */
// export interface BsUiModelState {
//   template: BsUiModelTemplateState;
// }

// /** @internal */
// /** @private */
// export const createModel = (template: BsUiModelTemplateState): BsUiModelState => {
//   return {
//     template
//   };
// };
