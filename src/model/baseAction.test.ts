import * as base from './baseAction';

describe('base - action creator', () => {

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

  it('should create a base batch action', () => {
    expect(base.bsUiModelBatchAction([])).toMatchObject({ type: base.BSUIMODEL_BATCH, payload: [] });
  });

  it('should create a base rehydrate action', () => {
    expect(base.bsUiModelRehydrateModel(testState))
      .toMatchObject({ type: base.BSUIMODEL_REHYDRATE, payload: { newBsUiModelState: testState }});
  });

  it('should create a base reset action', () => {
    expect(base.bsUiModelResetModel()).toMatchObject({ type: base.BSUIMODEL_RESET, payload: null });
  });

});