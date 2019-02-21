import React from 'react';
import { shallow } from 'enzyme';
import AdminDashboard from './AdminDashboard';

describe('Admin Dashboard', () => {
  it('Should render just the Admin Dashboard component', () => {
    const component = shallow(
      <AdminDashboard />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
