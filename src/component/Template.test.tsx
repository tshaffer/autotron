import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { TemplateProps, Template, TemplateComponent } from './Template';
import { bsUiModelReducer } from '../model';
import {
  BsUiModelState,
  createBsColor,
} from '../type';

describe('Template - shallow component render without store', () => {

  let component: any = null;

  beforeEach(() => {
    const color = createBsColor(0, 0, 0, 255);
    const props: TemplateProps = {
      color,
      onInitModel: () => null,
      onResetModel: () => null,
      onUpdateTemplateColorAsync: () => null,
      onUpdateTemplateColorBatch: () => null,
    };
    component = shallow(<TemplateComponent {...props} />);
  });

  it('should receive dispatch props properly', () => {
    expect(typeof component).toBe('object');
  });

  it('should render two buttons', () => {
    expect(component.find('input[type="button"]').length).toBe(2);
  });

});

describe('Template - integrated component render with store', () => {
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

  let store: any = null;
  let component: any = null;

  beforeEach(() => {
    store = createStore<BsUiModelState>(bsUiModelReducer, applyMiddleware(thunk));
    component = mount(<Provider store={store}><Template /></Provider>);
  });

  it('should receive dispatch props properly', () => {
    expect(typeof component).toBe('object');
  });

  it('should render two buttons', () => {
    expect(component.find('input[type="button"]').length).toBe(2);
  });

  it('should receive color props', () => {
    expect(component.find(TemplateComponent).props().color).toMatchObject(testState.template.property.color);
  });

  it('should receive dispatch props properly', () => {
    expect(typeof component.find(TemplateComponent).props().onInitModel).toBe('function');
    expect(typeof component.find(TemplateComponent).props().onResetModel).toBe('function');
    expect(typeof component.find(TemplateComponent).props().onUpdateTemplateColorAsync).toBe('function');
    expect(typeof component.find(TemplateComponent).props().onUpdateTemplateColorBatch).toBe('function');
  });

  it('clicking update batch button should update color props', () => {
    expect(component.find(TemplateComponent).props().color).toMatchObject(testState.template.property.color);
    component.find('input[value="Update Color Batch"]').simulate('click');
    expect(component.find(TemplateComponent).props().color).not.toMatchObject(testState.template.property.color);
  });
});
