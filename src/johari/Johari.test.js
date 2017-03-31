import React from 'react';
import { shallow, mount } from 'enzyme';
import Johari from './Johari';

describe('Johari', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<Johari />))

   it('renders directions', () => {

    expect(wrapper.find('.directions').length).toEqual(1)
  })

   it('renders title', () => {

    expect(wrapper.find('.johari-title').length).toEqual(1)
  })

   it('renders a submit button', () => {

    expect(wrapper.find('.johari-submit').length).toEqual(1)
  })

   it('renders a cancel button', () => {

    expect(wrapper.find('.johari-cancel').length).toEqual(1)
  })
})
