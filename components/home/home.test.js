import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('Header', () => {
  it('Should render just the homepage and footer', () => {
    const component = shallow(
      <Home />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
