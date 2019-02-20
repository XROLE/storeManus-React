import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Footer', () => {
  it('Should render just the Home component', () => {
    const component = shallow(
      <Home />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
