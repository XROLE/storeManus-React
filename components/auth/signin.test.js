import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn';

describe('Footer', () => {
  it('Should render just the SignIn component', () => {
    const component = shallow(
      <SignIn />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
