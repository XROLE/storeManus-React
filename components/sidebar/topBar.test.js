import React from 'react';
import { mount } from 'enzyme';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('Should render just the TopBar component', () => {
    const component = mount(
      <TopBar />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
