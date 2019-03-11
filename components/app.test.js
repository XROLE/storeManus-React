import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('Should render just the Navbar component', () => {
    const component = shallow(
      <App />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
