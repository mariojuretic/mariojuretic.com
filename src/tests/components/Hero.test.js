import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../../components/Hero';

test('should render Hero correctly', () => {
  const wrapper = shallow(<Hero />);
  expect(wrapper).toMatchSnapshot();
});