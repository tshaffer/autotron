/** @module Types:templateProperties */

/** @internal */
/** @private */
export interface BsUiModelTemplatePropertyColorState { a: number; r: number; g: number; b: number; }

/** @internal */
/** @private */
export interface BsUiModelTemplatePropertyState {
  color: BsUiModelTemplatePropertyColorState;
}

/** @internal */
/** @private */
export const createTemplateProperty = (
  color: BsUiModelTemplatePropertyColorState,
): BsUiModelTemplatePropertyState => {
  return {
    color
  };
};

/** @internal */
/** @private */
export const createBsColor = (
  r: number,
  g: number,
  b: number,
  a: number,
): BsUiModelTemplatePropertyColorState => {
  return {
    r,
    g,
    b,
    a
  };
};
