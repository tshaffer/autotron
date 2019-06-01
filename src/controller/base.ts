import {
  BsAutotronModelState, ActiveMediaStatesShape, ARMediaStateLUT,
} from '../type';
import {
  BsAutotronModelAction,
  BsAutotronModelThunkAction,
  BsAutotronModelDispatch,
  bsAutotronModelRehydrateModel,
  bsAutotronModelResetModel,
} from '../model';

// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------

const fetchModelAsync = (): Promise<BsAutotronModelState> => {
  debugger;
  return new Promise((resolve) => {
    const activeMediaStateIdByZone: ARMediaStateLUT = {};
    const activeMediaStates: ActiveMediaStatesShape = {
      activeMediaStateIdByZone,
    };
    const model: BsAutotronModelState = {
      activeMediaStates,
    };
    resolve(model);
  });
};

// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------

export const initModel = (): BsAutotronModelThunkAction<Promise<any>> => {
  return (dispatch: BsAutotronModelDispatch, getState: () => BsAutotronModelState) => {
    return fetchModelAsync()
      .then((model: BsAutotronModelState) => dispatch(bsAutotronModelRehydrateModel(model)));
  };
};

export const resetModel = (): BsAutotronModelThunkAction<BsAutotronModelAction<null>> => {
  return (dispatch: BsAutotronModelDispatch, getState: () => BsAutotronModelState) => {
    return dispatch(bsAutotronModelResetModel());
  };
};
