import * as base from './base';

describe('base - selector', () => {

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
    bsuimodel: {
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
    }
  };

  it('should retrieve base state', () => {
    expect(base.bsUiModelFilterBaseState(testStateOne)).toMatchObject(testStateOne);
    expect(base.bsUiModelFilterBaseState(testStateTwo)).toMatchObject(testStateTwo.bsuimodel);
    expect(base.bsUiModelFilterBaseState.bind(null, {})).toThrowError();
    expect(base.bsUiModelFilterBaseState.bind(null, null)).toThrowError();
    expect(base.bsUiModelFilterBaseState.bind(null, undefined)).toThrowError();
    expect(base.bsUiModelFilterBaseState.bind(null, 0)).toThrowError();
    expect(base.bsUiModelFilterBaseState.bind(null, true)).toThrowError();
    expect(base.bsUiModelFilterBaseState.bind(null, 'string')).toThrowError();
  });

  it('should retrieve base state', () => {
    expect(base.bsUiModelGetBaseState(testStateOne)).toMatchObject(testStateOne);
  });

});