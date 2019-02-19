import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Footer', () => {
  it('Should render just the Navbar component', () => {
    const component = shallow(
      <Navbar />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
