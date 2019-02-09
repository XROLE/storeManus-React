import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn.js';

describe('Header', () => {
  it('Should render just the homepage and footer', () => {
    const component = shallow(
      <SignIn />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
