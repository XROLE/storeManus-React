import React from 'react';
import { shallow } from 'enzyme';
import AddAttendant from './AddAttendant';

describe('Admin Add Attendants', () => {
  it('Should render just the Admin Add Attendant component', () => {
    const component = shallow(
      <AddAttendant />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
