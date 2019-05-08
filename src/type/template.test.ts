import * as template from './template';

describe('template - type', () => {

  const testStateOne = {
    property: {
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      }
    }
  };

  it('should create template state', () => {
    expect(template.createTemplate(testStateOne.property)).toMatchObject(testStateOne);
  });

});