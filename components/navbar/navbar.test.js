import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

const logOut = jest.fn();


describe('Navbar Component', () => {
  it('Should render just the Navbar component', () => {
    const component = shallow(
      <Navbar />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Navbar component functionalities', () => {
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = value.toString();
    }

    removeItem(key) {
      delete this.store[key];
    }
  }

  global.localStorage = new LocalStorageMock();

  localStorage.setItem('accessToken', 'testingToken');
  const wrapper = mount(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  it('should show logout button', () => {
    const logoutButton = wrapper.find('.logOut');

    logoutButton.simulate('click');

    expect(logoutButton.length).toEqual(1);
  });
});
