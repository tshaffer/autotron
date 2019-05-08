import * as template from './template';

describe('template - validator', () => {

  const testState = {
    property: {
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      }
    }
  };

  it('should validate state with deep comparison', () => {
    expect(template.isValidTemplateState(testState)).toBeTruthy();
    expect(template.isValidTemplateState(Object.assign({}, {invalidField: 1}, testState))).toBeTruthy();
    expect(template.isValidTemplateState({})).toBeFalsy();
    expect(template.isValidTemplateState(null)).toBeFalsy();
    expect(template.isValidTemplateState(undefined)).toBeFalsy();
    expect(template.isValidTemplateState(0)).toBeFalsy();
    expect(template.isValidTemplateState(1)).toBeFalsy();
    expect(template.isValidTemplateState('string')).toBeFalsy();
    expect(template.isValidTemplateState(true)).toBeFalsy();
  });

  it('should validate state with shallow comparison', () => {
    expect(template.isValidTemplateStateShallow(testState)).toBeTruthy();
    expect(template.isValidTemplateStateShallow(Object.assign({}, {invalidField: 1}, testState))).toBeTruthy();
    expect(template.isValidTemplateStateShallow({})).toBeFalsy();
    expect(template.isValidTemplateStateShallow(null)).toBeFalsy();
    expect(template.isValidTemplateStateShallow(undefined)).toBeFalsy();
    expect(template.isValidTemplateStateShallow(0)).toBeFalsy();
    expect(template.isValidTemplateStateShallow(1)).toBeFalsy();
    expect(template.isValidTemplateStateShallow('string')).toBeFalsy();
    expect(template.isValidTemplateStateShallow(true)).toBeFalsy();
  });

});