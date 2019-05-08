import * as templateProperty from './templateProperty';

describe('templateProperty - selector', () => {

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

  it('should retrieve template property color state', () => {
    expect(templateProperty.bsUiModelGetTemplatePropertyColorState(testStateOne))
      .toMatchObject(testStateOne.template.property.color);
    expect(templateProperty.bsUiModelGetTemplatePropertyColorState.bind(null, {})).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyColorState.bind(null, null)).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyColorState.bind(null, undefined)).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyColorState.bind(null, 0)).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyColorState.bind(null, true)).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyColorState.bind(null, 'string')).toThrowError();
  });

  it('should retrieve template property state', () => {
    expect(templateProperty.bsUiModelGetTemplatePropertyState(testStateOne))
      .toMatchObject(testStateOne.template.property);
    expect(templateProperty.bsUiModelGetTemplatePropertyState.bind(null, {})).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyState.bind(null, null)).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyState.bind(null, undefined)).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyState.bind(null, 0)).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyState.bind(null, true)).toThrowError();
    expect(templateProperty.bsUiModelGetTemplatePropertyState.bind(null, 'string')).toThrowError();
  });

});