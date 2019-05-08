import {
  BsUiModelState,
  createModel,
  createTemplate,
  createTemplateProperty,
  createBsColor,
} from '../type';
import {
  BsUiModelAction,
  BsUiModelThunkAction,
  BsUiModelDispatch,
  bsUiModelRehydrateModel,
  bsUiModelResetModel,
} from '../model';

// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------

const fetchModelAsync = (): Promise<BsUiModelState> => {
  return new Promise((resolve) => {
    const color = createBsColor(255, 0, 0, 0);
    const templateProperty = createTemplateProperty(color);
    const template = createTemplate(templateProperty);
    const model = createModel(template);
    resolve(model);
  });
};

// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------

export const initModel = (): BsUiModelThunkAction<Promise<any>> => {
  return (dispatch: BsUiModelDispatch, getState: () => BsUiModelState) => {
    return fetchModelAsync()
      .then((model: BsUiModelState) => dispatch(bsUiModelRehydrateModel(model)));
  };
};

export const resetModel = (): BsUiModelThunkAction<BsUiModelAction<null>> => {
  return (dispatch: BsUiModelDispatch, getState: () => BsUiModelState) => {
    return dispatch(bsUiModelResetModel());
  };
};
