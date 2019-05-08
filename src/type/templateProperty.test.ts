import * as templateProperty from './templateProperty';

describe('templateProperty - type', () => {

  const testStateOne = {
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    }
  };

  it('should create template property state', () => {
    expect(templateProperty.createTemplateProperty(testStateOne.color)).toMatchObject(testStateOne);
  });

  it('should create template property color state', () => {
    const { r, g, b, a } = testStateOne.color;
    expect(templateProperty.createBsColor(r, g, b, a)).toMatchObject(testStateOne.color);
  });

});