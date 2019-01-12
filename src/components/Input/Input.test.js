import React from 'react';
import {shallow} from 'enzyme';

import faker from 'faker';

import Input from './index';

describe('<Input />', () => {
  
  let wrapper;
  let testProps;
  
  beforeEach(() => {
    testProps = {
      meta: {
        touched: true,
        error: null,
        active: true,
        warning: null
      },
      input: {
        name: faker.random.alphaNumeric(10),
      },
      label: faker.random.alphaNumeric(10),
      type: faker.random.alphaNumeric(10),
      element: faker.random.alphaNumeric(10)
    };
  });

  it('Renders without crashing', () => {
    shallow(<Input {...testProps}/>);
  });
  
  it('Renders the correct error message, if necessary', () => {
    const testError = faker.random.alphaNumeric(10);
    testProps.meta.error = testError;
    wrapper = shallow(<Input {...testProps}/>);
    expect(wrapper.find('.form-error').length).toEqual(1);
    expect(wrapper.find('.form-error').text()).toEqual(testError)
  });
  
  it('Renders the correct warning message, if necessary', () => {
    const testWarning = faker.random.alphaNumeric(10);
    testProps.meta.warning = testWarning;
    wrapper = shallow(<Input {...testProps}/>);
    expect(wrapper.find('.form-warning').length).toEqual(1);
    expect(wrapper.find('.form-warning').text()).toEqual(testWarning);
  });
  
  it('Renders the <label/> tag correctly', () => {
    testProps.meta.touched = false;
    wrapper = shallow(<Input {...testProps}/>);
    const labelElement = wrapper.find('label');
    expect(labelElement.prop('htmlFor')).toEqual(testProps.input.name);
    expect(labelElement.text()).toEqual(testProps.label)
  });
  
  it('Renders the correct input element type', () => {
    wrapper = shallow(<Input {...testProps}/>);
    const inputElement = wrapper.find(String(testProps.element));
    expect(inputElement.length).toEqual(1);
    const testAttrs = [
      ['name', String(testProps.input.name)],
      ['id', String(testProps.input.name)],
      ['type', String(testProps.type)]
    ];
    testAttrs.forEach(testAttr => {
      expect(inputElement.prop(testAttr[0])).toEqual(testAttr[1]);
    });
  });
});