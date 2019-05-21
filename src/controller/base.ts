import {
  BsAutotronModelState, ActiveMediaStatesShape, ARMediaStateLUT,
  // createModel,
  // createTemplate,
  // createTemplateProperty,
  // createBsColor,
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
  return new Promise((resolve) => {
    // const color = createBsColor(255, 0, 0, 0);
    // const templateProperty = createTemplateProperty(color);
    // const template = createTemplate(templateProperty);
    // const model = createModel(template);

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
