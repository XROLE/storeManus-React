import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import AddAttendant from './AddAttendant';
import addAttendantReducer from '../../store/reducers/addAttendantReducer';

jest.mock('axios');
describe('Admin Add Attendants', () => {
  it('Should render just the Admin Add Attendant component', () => {
    const component = shallow(
      <AddAttendant />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Add Component', () => {
  const registerAttendant = jest.fn();
  const initialState = {
    registerAttendant: {
      message: '',
      pending: false,
      error: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const pending = false;
  const registrationError = '';
  const message = '';

  const props = {
    registerAttendant: {
      registerAttendant,
      pending,
      registrationError,
      message,
    },
  };

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <AddAttendant {...props} />
      </BrowserRouter>
    </Provider>,
  );

  it('should call the regiesterAttendant function', () => {
    wrapper.find('#firstName').simulate(
      'change', {
        target: {
          name: 'firstName', value: 'Harry',
        },
      },
    );

    wrapper.find('#lastName').simulate(
      'change', {
        target: {
          name: 'lastName', value: 'White',
        },
      },
    );

    wrapper.find('#email').simulate(
      'change', {
        target: {
          name: 'email', value: 'harry@white.com',
        },
      },

    );
    axios.post.mockImplementation(() => Promise.resolve({
      data: {
        password: 'jskdfhsjkfgljk;slsa',
      },
    }));
    wrapper.find('form').simulate(
      'submit',
      {
        preventDefault: () => {},
      },
    );
    expect(dispatchMock).toHaveBeenCalled();
  });

  it('should throw error when there is an empty field', () => {
    wrapper.find('#firstName').simulate(
      'change', {
        target: {
          name: 'firstName', value: 'Harry',
        },
      },
    );

    wrapper.find('#lastName').simulate(
      'change', {
        target: {
          name: 'lastName', value: 'White',
        },
      },
    );

    wrapper.find('#email').simulate(
      'change', {
        target: {
          name: 'email', value: '',
        },
      },

    );

    const error = {
      response: {
        data: {
          Message: 'No empty field is allowed',
        },
      },
    };
    axios.post.mockImplementation(() => Promise.reject(error));
    wrapper.find('form').simulate(
      'submit',
      {
        preventDefault: () => {},
      },
    );
    expect(dispatchMock).toHaveBeenCalled();
  });
});

it('should setup default state values', () => {
  const state = addAttendantReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    message: '',
    pending: false,
    error: '',
  });
});

it('should update state when action type is  ADDING_ATTENDANT', () => {
  const state = addAttendantReducer(undefined, {
    type: 'ADDING_ATTENDANT',
  });
  expect(state).toEqual({
    ...state,
    error: null,
    pending: true,
  });
});

it('should update state when action type is  ADDED_ATTENDANT', () => {
  const state = addAttendantReducer(undefined, {
    type: 'ADDED_ATTENDANT',
    payload: {
      message: 'success',
    },
  });
  expect(state).toEqual({
    ...state,
    message: 'success',
    pending: false,
  });
});

it('should update state when action type is  ADD_ATTENDANT_ERROR', () => {
  const state = addAttendantReducer(undefined, {
    type: 'ADD_ATTENDANT_ERROR',
  });
  expect(state).toEqual({
    ...state,
    pending: false,
  });
});
