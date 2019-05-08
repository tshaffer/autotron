import * as base from './base';

describe('base - type', () => {

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

  it('should create base state', () => {
    expect(base.createModel(testStateOne.template)).toMatchObject(testStateOne);
  });

});