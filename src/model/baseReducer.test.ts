import * as baseAction from './baseAction';
import * as baseReducer from './baseReducer';

describe('base - reducer', () => {

  const testStateOne = {
    template: {
      property: {
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        }
      }
    }
  };

  const testStateTwo = {
    template: {
      property: {
        color: {
          r: 255,
          g: 255,
          b: 255,
          a: 255
        }
      }
    }
  };

  it('should handle initial state', () => {
    const result = baseReducer.bsUiModelReducer(testStateOne, baseAction.bsUiModelRehydrateModel(testStateOne));
    expect(result).toMatchObject(testStateOne);
  });

  it('should handle rehydrate action state', () => {
    const result = baseReducer.bsUiModelReducer(testStateTwo, baseAction.bsUiModelRehydrateModel(testStateOne));
    expect(result).toMatchObject(testStateOne);
  });

  it('should handle reset action state', () => {
    const result = baseReducer.bsUiModelReducer(testStateTwo, baseAction.bsUiModelResetModel());
    expect(result).toMatchObject(testStateOne);
  });

});

describe('base - validator', () => {

  const testState = {
    template: {
      property: {
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        }
      }
    }
  };

  it('should validate state with deep comparison', () => {
    expect(baseReducer.isValidBsUiModelState(testState)).toBeTruthy();
    expect(baseReducer.isValidBsUiModelState(Object.assign({}, {invalidField: 1}, testState))).toBeTruthy();
    expect(baseReducer.isValidBsUiModelState({})).toBeFalsy();
    expect(baseReducer.isValidBsUiModelState(null)).toBeFalsy();
    expect(baseReducer.isValidBsUiModelState(undefined)).toBeFalsy();
    expect(baseReducer.isValidBsUiModelState(0)).toBeFalsy();
    expect(baseReducer.isValidBsUiModelState(1)).toBeFalsy();
    expect(baseReducer.isValidBsUiModelState('string')).toBeFalsy();
    expect(baseReducer.isValidBsUiModelState(true)).toBeFalsy();
  });

  it('should validate state with shallow comparison', () => {
    expect(baseReducer.isValidBsUiModelStateShallow(testState)).toBeTruthy();
    expect(baseReducer.isValidBsUiModelStateShallow(Object.assign({}, {invalidField: 1}, testState))).toBeTruthy();
    expect(baseReducer.isValidBsUiModelStateShallow({})).toBeFalsy();
    expect(baseReducer.isValidBsUiModelStateShallow(null)).toBeFalsy();
    expect(baseReducer.isValidBsUiModelStateShallow(undefined)).toBeFalsy();
    expect(baseReducer.isValidBsUiModelStateShallow(0)).toBeFalsy();
    expect(baseReducer.isValidBsUiModelStateShallow(1)).toBeFalsy();
    expect(baseReducer.isValidBsUiModelStateShallow('string')).toBeFalsy();
    expect(baseReducer.isValidBsUiModelStateShallow(true)).toBeFalsy();
  });

});