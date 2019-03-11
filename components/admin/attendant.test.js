import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import AddProduct from './Attendants';
import getAttendants from '../../store/reducers/getAttendants';

jest.mock('axios');

describe('Attendant component', () => {
  it('Should render just the Attendants component', () => {
    const component = shallow(
      <AddProduct />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Attendant Component', () => {
  const get = jest.fn();
  const initialState = {
    getAttendants: {
      message: '',
      pending: false,
      error: '',
      attendants: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const pending = false;
  const attendants = '';

  const props = {
    getAttendants: {
      get,
      pending,
      attendants,
    },
  };
  axios.get.mockImplementation(() => Promise.resolve({
    data: { attendants: [{ name: 'gunshot' }] },
  }));
  mount(
    <Provider store={store}>
      <BrowserRouter>
        <AddProduct {...props} />
      </BrowserRouter>
    </Provider>,
  );
  expect(dispatchMock).toHaveBeenCalled();
});

describe('Attendant Component', () => {
  const get = jest.fn();
  const initialState = {
    getAttendants: {
      message: '',
      pending: false,
      error: '',
      attendants: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const pending = false;
  const attendants = '';

  const props = {
    getAttendants: {
      get,
      pending,
      attendants,
    },
  };
  const error = {
    response: {
      data: {
        Message: 'An error occured. Please try again later',
      },
    },
  };
  axios.get.mockImplementation(() => Promise.reject(error));
  mount(
    <Provider store={store}>
      <BrowserRouter>
        <AddProduct {...props} />
      </BrowserRouter>
    </Provider>,
  );
  expect(dispatchMock).toHaveBeenCalled();
});

it('should setup default state values', () => {
  const state = getAttendants(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    message: '',
    pending: false,
    error: '',
    attendants: '',
  });
});

it('should update state when action type is  ATTENDANT_IN_PROGRESS', () => {
  const state = getAttendants(undefined, {
    type: 'ATTENDANT_IN_PROGRESS',
    pending: true,
  });
  expect(state).toEqual({
    ...state,
    pending: true,
  });
});

it('should update state when action type is  ATTENDANT_SUCCESS', () => {
  const state = getAttendants(undefined, {
    type: 'ATTENDANT_SUCCESS',
    payload: {
      attendants: '',
      message: '',
    },
  });
  expect(state).toEqual({
    ...state,
    message: '',
  });
});

it('should update state when action type is  ATTENDANT_ERROR', () => {
  const state = getAttendants(undefined, {
    type: 'ATTENDANT_ERROR',
    error: 'failed',
  });
  expect(state).toEqual({
    ...state,
    error: 'failed',
    pending: false,
  });
});
