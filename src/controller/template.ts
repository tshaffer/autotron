import {
  BsUiModelState,
  createBsColor,
} from '../type';
import {
  BsUiModelThunkAction,
  BsUiModelBatchAction,
  BsUiModelDispatch,
  bsUiModelBatchAction,
  bsUiModelUpdateTemplateColor,
} from '../model';

// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const doAsync = (): Promise<undefined> => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const updateTemplateColorAsync = (): BsUiModelThunkAction<Promise<any>> => {
  return (dispatch: BsUiModelDispatch, getState: () => BsUiModelState) => {
    return doAsync()
      .then(() => {
        const r = getRandomInt(0, 255);
        const g = getRandomInt(0, 255);
        const b = getRandomInt(0, 255);
        const a = getRandomInt(0, 255);
        const color = createBsColor(r, g, b, a);
        return dispatch(bsUiModelUpdateTemplateColor(color));
      });
  };
};

/** @internal */
/** @private */
export const updateTemplateColorBatch = (): BsUiModelThunkAction<BsUiModelBatchAction> => {
  return (dispatch: BsUiModelDispatch, getState: () => BsUiModelState) => {
    const batchActions = [];
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    const a = getRandomInt(0, 255);
    const color = createBsColor(r, g, b, a);
    batchActions.push(bsUiModelUpdateTemplateColor(color));
    return dispatch(bsUiModelBatchAction(batchActions));
  };
};
